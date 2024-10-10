import { Bot, InlineKeyboard } from 'grammy';
import dotenv from 'dotenv';

import { exchangeRateApiClient } from '../lib/axios.js';

dotenv.config();

// Helper function to fetch exchange rates
async function fetchExchangeRate(currency: string) {
  try {
    const response = await exchangeRateApiClient.get(`/latest/${currency}`);

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error('Invalid API key or unauthorized access. Please check your API key.');
    } else {
      console.error('Error fetching exchange rates:', error.message);
    }
    return null;
  }
}

// Function to generate dynamic messages for currency rates
const generateRatesMessage = (base: string, rate: number, target: string) => {
  return `💱 <b>${base} to ${target}</b>\n\n1 ${base} = ${rate} ${target}\n\n📊 Powered by Exchange Rate API`;
};

// Command to register exchange rates command
export const registerRatesCommand = (bot: Bot) => {
  // Initial command to start selecting base currency
  bot.command('rates', async (ctx) => {
    const currencyMenu = new InlineKeyboard()
      .text('🇺🇸 USD', 'base_USD')
      .text('🇪🇺 EUR', 'base_EUR')
      .text('🇬🇧 GBP', 'base_GBP');

    await ctx.reply('💲 <b>Select a base currency</b>:', {
      parse_mode: 'HTML',
      reply_markup: currencyMenu,
    });
  });

  // Callback handlers for base currency selection
  bot.callbackQuery(/base_(.+)/, async (ctx) => {
    const baseCurrency = ctx.match![1];
    const targetMenu = new InlineKeyboard()
      .text('🇪🇺 EUR', `target_${baseCurrency}_EUR`)
      .text('🇬🇧 GBP', `target_${baseCurrency}_GBP`)
      .text('🇧🇷 BRL', `target_${baseCurrency}_BRL`)
      .text('🇯🇵 JPY', `target_${baseCurrency}_JPY`);

    await ctx.editMessageText(`📊 <b>Selected Base Currency:</b> ${baseCurrency}\n\nNow choose a target currency:`, {
      parse_mode: 'HTML',
      reply_markup: targetMenu,
    });
  });

  // Callback handler for target currency conversion
  bot.callbackQuery(/target_(.+)_(.+)/, async (ctx) => {
    const baseCurrency = ctx.match![1];
    const targetCurrency = ctx.match![2];

    const rates = await fetchExchangeRate(baseCurrency);
    if (rates) {
      const conversionRate = rates.conversion_rates[targetCurrency];
      const message = generateRatesMessage(baseCurrency, conversionRate, targetCurrency);

      await ctx.editMessageText(message, { parse_mode: 'HTML' });
    } else {
      await ctx.editMessageText("❌ Couldn't fetch exchange rates at the moment.");
    }
  });
};
