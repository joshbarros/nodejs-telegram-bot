import { geminiApiClient } from '../lib/axios.js';
import { formatAIResponseForTelegram } from '../utils/telegram.utils.js';

// Define a type for the response from Gemini AI
interface GeminiAIResponse {
  candidates: { content: { parts: { text: string }[] } }[];
}

// Function to get response from Gemini AI
export const getGeminiAIResponse = async (text: string): Promise<string | undefined> => {
  try {
    console.log('Sending request to Gemini AI...');

    // Make the request with the API key as a query parameter
    const response = await geminiApiClient.post(':generateContent', {
      contents: [
        {
          parts: [
            {
              text: text,
            },
          ],
        },
      ],
    }, {
      params: {
        key: process.env.GEMINI_API_KEY,  // Add the API key here
      }
    });

    const data = response.data as GeminiAIResponse;
    console.log('Gemini AI Response:', JSON.stringify(data, null, 2));

    // Format the response text for Telegram using the utility
    const formattedText = formatAIResponseForTelegram(data);

    return formattedText;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return undefined;
  }
};
