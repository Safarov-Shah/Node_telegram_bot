const generator = require('generate-password');

module.exports = class Controllers{
    static async MessageController(message,bot){
        const chat_id=message.chat.id
        const user_id=message.from.id
        const text=message.text

        const password = await generator.generate({
            length: 10,
            numbers: true
        });

        bot.sendMessage(chat_id,password)
    
    }
}