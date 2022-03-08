module.exports = (bot, message) => {
    bot.sendMessage(message.chat.id, `Hello ${message.from.first_name}`)
}