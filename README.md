# Speech-to-Text Telegram Bot

A Telegram bot that automatically transcribes voice messages sent in group chats using Mistral AI's speech-to-text API.

## Features

- 🎤 Automatic voice message transcription
- 🌍 Multi-language support (WIP)
- 🤖 Built with Telegraf framework
- ⚡ Fast transcription using Mistral AI's Voxtral models
- 🔧 Configurable transcription models and languages

## Prerequisites

- Node.js (v20 or higher)
- npm
- Telegram Bot Token (from [@BotFather](https://t.me/botfather))
- Mistral AI API Key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd speech-to-text-telegram-bot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` file with your credentials:
```env
BOT_API_KEY=your_telegram_bot_token_here
MISTRAL_API_KEY=your_mistral_api_key_here
```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

### Testing
```bash
npm test
```

## How it Works

1. The bot listens for voice messages in Telegram chats
2. When a voice message is received, it gets the file URL from Telegram
3. The audio file is sent to Mistral AI's transcription API
4. The transcribed text is sent back as a reply in the chat

## Configuration

The bot uses the `TrascriptionService` class which can be configured with:

- **Model**: Choose between different Voxtral models
  - `voxtral-mini-latest` (default)
  - `voxtral-small-latest`
  - Specific versions like `voxtral-mini-2507`

- **Language**: Set the primary language for transcription (default: Italian)

## Project Structure

```
src/
├── main.ts                           # Main bot entry point
└── trascription/
    ├── trascription-service.ts       # Transcription service class
    └── types.ts                      # TypeScript type definitions
```

## API Reference

### TrascriptionService

```typescript
const service = new TrascriptionService(
  apiKey: string,
  model?: ModelsList,
  language?: LanguageList
);

await service.trascribe(audioUrl: string): Promise<string>
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License

## Author

paolorabbito

---

**Note**: Make sure to keep your API keys secure and never commit them to version control.