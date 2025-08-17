import { Telegraf } from "telegraf";
import dotenv from 'dotenv';
import { TrascriptionService } from "./trascription/trascription-service";

//load env
dotenv.config();

//load trascription service
const transcriptionService = new TrascriptionService(
    process.env.MISTRAL_API_KEY ?? ''
)

//start bot
const bot = new Telegraf(process.env.BOT_API_KEY ?? '')
bot.start(ctx => ctx.reply('Welcome to Publish Bot!'));

//start listening on voice message
bot.on('voice', async (ctx) => {
    console.log(`Bot triggered by file audio: ${ctx.message.voice.file_id}`)

    const fileLink = await ctx.telegram.getFileLink(ctx.message.voice.file_id);
    ctx.sendMessage(await transcriptionService.trascribe(fileLink.href))
})

bot.command('setlanguage', (ctx) => {
    console.log(ctx.message);
})

bot.command('getlanguage', (ctx) => {
    console.log(ctx.message);
})

bot.launch(() => console.log('Bot is running'));
