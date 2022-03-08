/* Importing All Dependencies */
require('dotenv').config();
const fetch = require('cross-fetch');

module.exports = async (bot, message) => {
    if (message.text.includes(" ")) {
        var amessage = ((String(message.text)).split(" "))[1];
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${amessage}&appid=${process.env.WEATHER}`);
        const weather = await response.json();
        if (weather.cod == "200") {
            bot.sendMessage(message.chat.id, `<b>${String(Math.round((weather.main.temp_min) - 273.15))}°C In ${String(weather.name)} Now!!</b>`, { parse_mode: "HTML" });
        } else {
            bot.sendMessage(message.chat.id, "Entered City Not Found!!");
        }
    }
    else {
        bot.sendMessage(message.chat.id, "Enter City Name After /weather");
    }
}