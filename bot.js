const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const config = require('./config');

const app = express();
const bot = new TelegramBot(config.telegram.token, { polling: false });

app.use(express.json());

app.get('/test', (req, res) => {
    res.json({ status: 'Bot is running' });
});

app.post('/notify/new-topic', async (req, res) => {
    try {
        const { title, content, user } = req.body;
        await bot.sendMessage(config.telegram.chatId, 
            `🆕 新主題\n標題：${title}\n作者：${user}\n\n${content}`
        );
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/notify/new-reply', async (req, res) => {
    try {
        const { topic, content, user } = req.body;
        await bot.sendMessage(config.telegram.chatId, 
            `💬 新回覆\n主題：${topic}\n作者：${user}\n\n${content}`
        );
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(config.server.port, () => {
    console.log(`Telegram bot server running on port ${config.server.port}`);
});
