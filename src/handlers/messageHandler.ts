import { Context } from 'grammy';
import { isScreaming } from '../commands/scream.js';
import { getGeminiAIResponse } from '../services/geminiService.js';

export const handleMessage = async (ctx: Context) => {
  if (ctx.message?.text) {
    console.log(`${ctx.from?.first_name} wrote: ${ctx.message.text}`);

    if (isScreaming()) {
      await ctx.reply(ctx.message.text.toUpperCase());
    } else {
      // Get the AI-generated response
      const reply = await getGeminiAIResponse(ctx.message.text);
      if (reply) {
        await ctx.reply(reply);
      } else {
        await ctx.reply("Sorry, I couldn't understand that.");
      }
    }
  }
};
