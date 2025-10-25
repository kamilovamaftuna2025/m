import TelegramBot from "node-telegram-bot-api";

const token = '8463114097:AAF-xiHtOyG_rErPDxz22jDA4X5dgkH1ZSM';
const bot = new TelegramBot(token, { polling: true });




bot.onText('/start', (msg) => {
    const first_name = msg.chat.first_name;
    console.log(msg);
    
    bot.sendMessage(msg.chat.id, ` Assalomu alaykum ${first_name}!`
    );
    console.log(' Bot ishga tushdi..');
});

