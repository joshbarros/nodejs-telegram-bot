# Telegram Bot with Gemini AI and Exchange Rates

This project is a Telegram bot that integrates with **Gemini AI** for intelligent conversations and provides real-time **currency exchange rates** using the Exchange Rate API. Users can chat with the bot, fetch exchange rates between different currencies, or interact with a menu that displays various options.

## Features

- **Chat with Gemini AI**: Users can ask the bot anything and receive intelligent responses powered by Gemini AI.
- **Currency Exchange Rates**: Fetch current exchange rates for USD, EUR, GBP, BRL, and JPY.
- **Interactive Menu**: A dynamic menu where users can select profile, settings, or tutorial options.

## Commands

### `/rates`

Fetch the current exchange rate between different currencies. Here's how you can use it:

1. Type `/rates` to start.
2. Select the base currency (USD, EUR, or GBP).
3. Choose the target currency (EUR, GBP, BRL, JPY).
4. The bot will reply with the exchange rate.

### `/menu`

Displays an interactive menu with various options:

1. **Profile**: Shows your profile information (in progress).
2. **Settings**: Adjust your bot settings (in progress).
3. **Tutorial**: Opens the Telegram bot tutorial.

### Chatting with Gemini AI

You can send a message to the bot at any time, and the message will be processed by **Gemini AI**, providing intelligent, human-like responses. Try asking:

- "Tell me a joke."
- "What's the weather like today?"
- "Translate 'Hello' to Portuguese."

## Setup and Installation

### Requirements

- Node.js (v18 or later)
- A Telegram bot token (you can create one with [BotFather](https://core.telegram.org/bots#botfather))
- Exchange Rate API key ([Get it here](https://www.exchangerate-api.com/))

### Step-by-Step Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/joshbarros/nodejs-telegram-bot.git
   cd nodejs-telegram-bot
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```bash
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   GEMINI_API_KEY=your-gemini-api-key
   EXCHANGE_RATE_API_KEY=your-exchange-rate-api-key
   ```

4. Run the bot:
   ```bash
   npm run start
   ```

5. The bot should now be running. You can interact with it in Telegram by sending commands like `/rates`, `/menu`, or simply chatting with it.

## Example Usage

### `/rates` Command:

1. Start by typing `/rates`.
2. Select the base currency (e.g., USD).
3. Choose the target currency (e.g., EUR).
4. The bot will respond with:
   ```
   💱 USD to EUR
   - 1 USD = 0.86 EUR
   📊 Powered by Gemini AI
   ```

### `/menu` Command:

1. Start by typing `/menu`.
2. You will see options like "Profile," "Settings," and "Tutorial."

### Chat with Gemini AI:

Simply send a message like:
- "What's the weather like?"
- "Translate 'thank you' to French."

The bot will respond using **Gemini AI**.

## Contributing

Feel free to fork this project, submit pull requests, or suggest new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
