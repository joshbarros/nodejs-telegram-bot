/**
 * Utility function to format raw AI response for Telegram.
 * @param rawResponse - The raw AI response object.
 * @returns formatted string for Telegram
 */
export const formatAIResponseForTelegram = (rawResponse: any): string => {
  // Extract the response text from the AI data
  const text = rawResponse?.candidates?.[0]?.content?.parts?.[0]?.text || '';

  // Clean up the text: remove excessive new lines, and make sure formatting is suited for Telegram
  let formattedText = text.trim();

  // Replace markdown bullets with Telegram supported formatting
  formattedText = formattedText
    .replace(/\*\*/g, '') // Remove unwanted bolding
    .replace(/^\*\s+/gm, '• ') // Replace * with bullet points
    .replace(/#/g, ''); // Remove # from response

  return formattedText;
};
