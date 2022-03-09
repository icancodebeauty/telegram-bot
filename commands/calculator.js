module.exports = (bot, message) => {
    var amessage = ((String(message.text)).split(" "))[1];
    var array;
    if (amessage.includes("+")) {
        array = amessage.split("+");
        bot.sendMessage(message.chat.id, Number(array[0]) + Number(array[1]));
    } else if (amessage.includes("-")) {
        array = amessage.split("-");
        bot.sendMessage(message.chat.id, Number(array[0]) - Number(array[1]));
    } else if (amessage.includes("*")) {
        array = amessage.split("*");
        bot.sendMessage(message.chat.id, Number(array[0]) * Number(array[1]));
    } else if (amessage.includes("/")) {
        array = amessage.split("/");
        bot.sendMessage(message.chat.id, Number(array[0]) / Number(array[1]));
    } else {
        bot.sendMessage(message.chat.id, "Invalid Syntax");
    }
}