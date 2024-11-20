require('dotenv').config();

module.exports = {
    telegram: {
        token: process.env.BOT_TOKEN || '2033272917:AAERLMr-WD9DXkSyKctgt6GzajKE3ugIqc4',
        chatId: process.env.CHAT_ID || '-1001572303287'
    },
    server: {
        port: process.env.PORT || 3001
    }
};
