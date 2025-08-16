import { Telegraf } from "telegraf";
import dotenv from 'dotenv';

//load env
dotenv.config();

//start bot
const bot = new Telegraf(process.env.BOT_API_KEY ?? '')
bot.start(ctx => ctx.reply('Welcome to Publish Bot!'));
bot.launch(() => console.log('Bot is running'));

//start listening on voice message
bot.on('voice', async (ctx) => {
    const fileLink = await ctx.telegram.getFileLink(ctx.message.voice.file_id);

    console.log(fileLink.href);

    const form = new FormData()
    form.append('file_url', fileLink.href)
    form.append('model', 'voxtral-mini-2507')
    form.append('language', 'it')

    const result = await (await fetch('https://api.mistral.ai/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'x-api-key': process.env.MISTRAL_API_KEY ?? '',
        },
        body: form,
    })).json()

    ctx.sendMessage(result.text)
})

