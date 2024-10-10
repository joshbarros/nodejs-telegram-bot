import { Bot } from "grammy";

let screaming = false;

export const isScreaming = () => screaming;
export const setScreaming = (value: boolean) => {
  screaming = value;
};

export const registerScreamCommand = (bot: Bot) => {
  bot.command('scream', () => {
    setScreaming(true);
    console.log('Scream command executed');
  });
};
