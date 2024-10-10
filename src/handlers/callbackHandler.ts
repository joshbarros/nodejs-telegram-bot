import { Context } from 'grammy';

// Assume this is your callback query handler
export async function handleCallbackQuery(ctx: Context) {
  const currentMessage = ctx.callbackQuery?.message?.text;
  const newText = '<b>Menu 1</b>\n\nA beautiful menu with a shiny inline button.';

  // Check if the message text is different before attempting to edit
  if (currentMessage !== newText) {
    try {
      await ctx.api.editMessageText(
        ctx.chat?.id!,
        ctx.callbackQuery?.message?.message_id!,
        newText,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Next', callback_data: 'Next' }],
              [{ text: 'Back', callback_data: 'Back' }],
            ],
          },
        }
      );
    } catch (error) {
      console.error('Failed to edit message:', error);
    }
  } else {
    console.log('Message content has not changed, skipping edit.');
  }
}
