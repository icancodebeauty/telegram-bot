require('dotenv').config();
const fetch = require('cross-fetch');
const TB = require('node-telegram-bot-api');
const TOKEN = process.env.BOT;
const bot = new TB(TOKEN, { polling: true });
const bannedwords = process.env.BAD.split(" ");
bot.on('message', async (message) => {
    let text = message.text;
    if (text) {
        if (text.toLowerCase() === "/hello") { // Hello Command
            bot.sendMessage(message.chat.id, `Hello ${message.from.first_name}`)
        } else if (text.startsWith("/quote")) { // Quote Command
            const quoteResponse = await fetch(`https://api.quotable.io/random`);
            const quoteData = await quoteResponse.json();
            bot.sendMessage(message.chat.id, `${String(quoteData.content + " | " + quoteData.author)}`);
        } else if (text.startsWith("/weather")) { // Weather Command
            if (text.includes(" ")) {
                var newmessage = String(text);
                newmessage = newmessage.split(" ");
                newmessage = newmessage[1];
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newmessage}&appid=${process.env.WEATHER}`);
                const data = await response.json();
                if (data.cod == "200") {
                    bot.sendMessage(message.chat.id, `<b>${String(Math.round((data.main.temp_min) - 273.15))}°C In ${String(data.name)} Now!!</b>`, { parse_mode: "HTML" });
                } else {
                    bot.sendMessage(message.chat.id, "Entered City Not Found!!");
                }
            }
            else {
                bot.sendMessage(message.chat.id, "Enter City Name After /weather");
            }
        } else {
            let arrayoftext = text.split(" ")
            arrayoftext.forEach((item) => {
                if (bannedwords.includes(item)) {
                    bot.sendMessage(message.chat.id, `I Will Kick You @${message.from.first_name} Now Because You Said Bad Word!!`);
                    bot.kickChatMember(message.chat.id, message.from.id)
                }
            })
        }
    }
});
