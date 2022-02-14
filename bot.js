require('dotenv').config()
const TB = require('node-telegram-bot-api');
const TOKEN = process.env.BOT;
const bot = new TB(TOKEN, { polling: true });
// var IK = require("imagekit");
// var imagekit = new IK({
//     publicKey: process.env.PUBLIC,
//     privateKey: process.env.PRIVATE,
//     urlEndpoint: process.env.URL
// });
bot.on('message', (message) => {
    console.log(message)
    bot.sendMessage(message.chat.id, 'Received your message');
    // if (message.document) {
    //     bot.getFileLink(message.document.file_id).then((resp) => {
    //         imagekit.upload({ file: resp, fileName: message.document.file_unique_id }, (error, result) => {
    //             if (error) {
    //                 console.log(error)
    //             }
    //             else {
    //                 bot.sendMessage(message.chat.id, result.url);
    //             };
    //         });
    //     })
    // }
});