import { Bot } from 'grammy';
import dotenv from 'dotenv';

// Import handlers
import { handleMessage } from './handlers/messageHandler.js';
import { handleCallbackQuery } from './handlers/callbackHandler.js';

// Import command registration functions
import { registerScreamCommand } from './commands/scream.js';
import { registerWhisperCommand } from './commands/whisper.js';
import { registerMenuCommand } from './commands/menu.js';
import { registerRatesCommand } from './commands/rates.js';

// Load environment variables from .env file
dotenv.config();

// Create a new bot instance with your token from environment variables
export const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN as string);

// Register commands
registerScreamCommand(bot);
registerWhisperCommand(bot);
registerMenuCommand(bot);
registerRatesCommand(bot);

// Register message handler
bot.on('message', handleMessage);

// Register callback query handler
bot.on('callback_query:data', handleCallbackQuery);

bot.catch((err) => {
  console.error('Error in bot:', err);
});

// Start the bot
bot.start();
