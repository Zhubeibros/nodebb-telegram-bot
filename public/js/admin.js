'use strict';

define('admin/plugins/telegram-bot', ['settings'], function(Settings) {
    var ACP = {};

    ACP.init = function() {
        Settings.load('telegram-bot', $('.telegram-bot-settings'));
        $('#save').on('click', function() {
            Settings.save('telegram-bot', $('.telegram-bot-settings'), function() {
                app.alert({
                    type: 'success',
                    alert_id: 'telegram-bot-saved',
                    title: '設置已保存',
                    message: 'Telegram Bot 設置已更新',
                    timeout: 5000
                });
            });
        });
    };

    return ACP;
});
