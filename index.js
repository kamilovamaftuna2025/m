import TelegramBot from "node-telegram-bot-api";

const token = '8463114097:AAF-xiHtOyG_rErPDxz22jDA4X5dgkH1ZSM';
const bot = new TelegramBot(token, { polling: true });




bot.on('message', (msg) => {
    const text = msg.text;
    const id = msg.chat.id
    console.log(msg);
    
    bot.sendMessage(id, `--> ${text}` );
    bot.sendDice(id)
    console.log(' Bot ishga tushdi..');
}); 


