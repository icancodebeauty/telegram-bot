/* Importing All Dependencies */
require('dotenv').config();
const TB = require('node-telegram-bot-api');

/* Creating A Bot With Token */
const bot = new TB(process.env.TOKEN, { polling: true });

/* All Commands Are Imported Here After This Comment!!. */
const hello = require('./commands/hello'); // Hello Command
const quote = require('./commands/quote'); // Quote Command
const weather = require('./commands/weather'); // Weather Command
const ban = require('./commands/ban'); // Ban Command
const calculator = require('./commands/calculator'); // Calculator Command
/* All Commands Are Imported Here Before This Comment!!. */

bot.on('message', async (message) => {
    if (!message.text) { return } else {
        if (message.text.startsWith("/hello")) {
            hello(bot, message);
        } else if (message.text.startsWith("/quote")) {
            quote(bot, message);
        } else if (message.text.startsWith("/weather")) {
            weather(bot, message);
        } else if (message.text.startsWith("/calculator")) {
            calculator(bot, message);
        } else if (message.text.startsWith("/ban")) {
            ban(bot, message);
        } // More Else If Will Be Here!!.
    };
});
