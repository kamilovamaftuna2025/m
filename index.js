import TelegramBot from "node-telegram-bot-api";

const token = '8463114097:AAF-xiHtOyG_rErPDxz22jDA4X5dgkH1ZSM';
const bot = new TelegramBot(token, { polling: true });




bot.on('message', (msg) => {
    const text = msg.text;
    console.log(msg);
    
    bot.sendMessage(msg.chat.id, `--> ${text}` );
    console.log(' Bot ishga tushdi..');
}); 


