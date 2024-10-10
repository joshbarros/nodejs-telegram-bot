import { Bot, InlineKeyboard } from 'grammy';

// Menu content
const firstMenu = '<b>Main Menu</b>\n\nWelcome! Choose an option:';
const secondMenu = '<b>Settings Menu</b>\n\nAdjust your preferences here.';

// Buttons
const nextButton = 'Next ➡️';
const backButton = '⬅️ Back';
const settingsButton = 'Settings ⚙️';
const profileButton = 'Profile 🧑';
const tutorialButton = 'Tutorial 📖';

// First Menu Keyboard
const firstMenuMarkup = new InlineKeyboard()
  .text(profileButton, 'profile')
  .text(settingsButton, 'settings');

// Second Menu Keyboard (Settings)
const secondMenuMarkup = new InlineKeyboard()
  .text(backButton, 'main_menu')
  .url(tutorialButton, 'https://core.telegram.org/bots/tutorial');

export const registerMenuCommand = (bot: Bot) => {
  // Command to start the main menu
  bot.command('menu', async (ctx) => {
    await ctx.reply(firstMenu, {
      parse_mode: 'HTML',
      reply_markup: firstMenuMarkup,
    });
  });

  // Handler for profile button
  bot.callbackQuery('profile', async (ctx) => {
    await ctx.answerCallbackQuery('You clicked Profile! 🧑');
    await ctx.editMessageText('🧑 <b>Your Profile</b>\n\nThis is where your profile information will go.', {
      parse_mode: 'HTML',
      reply_markup: new InlineKeyboard().text(backButton, 'main_menu'),
    });
  });

  // Handler for settings button
  bot.callbackQuery('settings', async (ctx) => {
    await ctx.editMessageText(secondMenu, {
      parse_mode: 'HTML',
      reply_markup: secondMenuMarkup,
    });
  });

  // Handler for back button (returns to main menu)
  bot.callbackQuery('main_menu', async (ctx) => {
    await ctx.editMessageText(firstMenu, {
      parse_mode: 'HTML',
      reply_markup: firstMenuMarkup,
    });
  });
};
