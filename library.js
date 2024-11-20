'use strict';

const winston = require.main.require('winston');
const meta = require.main.require('./src/meta');
const bot = require('./bot');

const plugin = {};

plugin.init = async function(params) {
    // 初始化 telegram bot
    try {
        await bot.init();
    } catch (err) {
        winston.error('[telegram-bot] 初始化失敗:', err);
    }
};

plugin.addAdminNavigation = function(header, callback) {
    header.plugins.push({
        route: '/plugins/telegram-bot',
        icon: 'fa-telegram',
        name: 'Telegram Bot'
    });
    callback(null, header);
};

module.exports = plugin;
