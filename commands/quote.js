/* Importing All Dependencies */
const fetch = require('cross-fetch');

module.exports = async (bot, message) => {
    const response = await fetch(`https://api.quotable.io/random`);
    const quote = await response.json();
    bot.sendMessage(message.chat.id, `${String(quote.content)}`);
}