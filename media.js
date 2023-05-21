const {Telegraf} = require('telegraf')
const {Extra} = require('telegraf/extra')
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)

//fayldan o'qish
bot.command('otloq', (ctx) => ctx.replyWithPhoto({
    source: 'media/tabiat.jpg'
}))
bot.command('baliq', (ctx) => ctx.replyWithPhoto({
    source: 'media/baliq.jpg'
}))
bot.command('otloq1', (ctx) => ctx.replyWithPhoto({
    source: 'media/tabiat1.jpg'
}))
bot.command('qish', (ctx) => ctx.replyWithPhoto({
    source: 'media/qish.jpg'
}))

//faylni stream y-da o'qish
bot.command('qish1', (ctx) => ctx.replyWithPhoto({
    source: fs.createReadStream('media/Polenezköy_Tabiat_Parkı,_İstanbul,_EOS_60D.jpg')
}))

//internetdan yuklash
bot.command('boshqa', (ctx) => ctx.replyWithPhoto('https://picsum.photos/1080/1090/?random'))

bot.command('orol', (ctx) => ctx.replyWithPhoto({source: 'media/tree.jpg'},
Extra.caption('Dengiz, orol va baliqlar').markdown()
))


bot.command('tabassum', (ctx) => ctx.replyWithAnimation({source: 'media/smile.gif'}))

bot.launch()