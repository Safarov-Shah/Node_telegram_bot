const TelegramBot = require('node-telegram-bot-api');
const Controllers=require("./controllers.js");
const {token}=require('./config.js')
// const postgresql=require('./modules/postgres.js')
// const psql=postgresql()

// console.log(token)
// const fetch=require('node-fetch');
// replace the value below with the Telegram token you receive from @BotFather
// import fetch from 'node-fetch';
// ;async ()=>{
//     let response=await fetch(`https://api.telegram.org/bot${token}/
//     sendMessage`,{
//         method:"POST",
//         Headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             chat_Id: chatId,
//             text:"Salom Shahzod"
//         })
//     })
//     response =await response.json(); 
//     console.log(response.result);    
// }
// // Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
    polling: true
});

// Matches "/echo [whatever]"

bot.on('text',(message)=> Controllers.MessageController(message,bot))

bot.getMe().then(info=>console.log(info))

bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text == "/start") {
        bot.sendMessage(chatId, " Assalomu aleykum xush kelibsiz !!!  You are welcome ")
    } else if (text == "/about") {
        bot.sendPhoto(chatId, "https://api.time.com/wp-content/uploads/2014/05/167816804.jpg?quality=85&w=800", {
            caption: "Spanish Chefs of El Celler de Can Roca Joan Roca, center, Jordi Roca, left, and Josep Roca, right, pose with their employees at the restaurant in Girona on April 30,2013"
        })
    } else if (text == "/audio1") {
        bot.sendAudio(chatId, "https://topmp3.net/uploads/files/2023-04/1681136404_nurzida-tuttur-dur.mp3")
    } else if(text=="/document"){
        bot.sendDocument(chatId,"https://erikasilva.files.wordpress.com/2012/03/elitetravelerworldstoprestaurants.pdf")
    } else if(text=="/location"){
        bot.sendLocation(chatId, 40,50)
    } else if(text=="/game"){
        bot.sendDice(chatId).then(x=>{
            bot.sendMessage(chatId,`botning natijasi: ${x.dice.value}`)
        })
        bot.sendDice(chatId).then(x=>{
            bot.sendMessage(chatId,`sizning natijangiz: ${x.dice.value}`)
        })
       
    }



    // send a message to the chat acknowledging receipt of their message
    //   bot.sendMessage(chatId, 'Received your message');
});