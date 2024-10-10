import { Bot } from 'grammy';
import { setScreaming } from './scream.js';

export const registerWhisperCommand = (bot: Bot) => {
  bot.command('whisper', () => {
    setScreaming(false);
    console.log('Whisper command executed');
  });
};
