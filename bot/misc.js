
controller.hears(['hello', 'hi'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, "Sup, y'all.");
});


controller.hears(['play'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, "Do you want to play?");
    controller.hears(['no'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
        bot.reply(message, "Okay, but you're making a mistake...");
    });
    controller.hears(['yes'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
        bot.reply(message, "Use '/games' to view relevant games and '/bet' to make your bet!");
    });
});


controller.hears(['what teams'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    bot.reply(message, "You can bet on any NHL, NFL, and NBA games :smile_cat:");
});

controller.hears(['shutdown'], ['direct_message', 'direct_mention'], function (bot, message) {
    bot.startConversation(message, function (err, convo) {
        convo.ask('Are you sure you want me to shutdown?', [
            {
                pattern: bot.utterances.yes,
                callback: function (response, convo) {
                    convo.say('Bye for now!');
                    convo.next();
                    setTimeout(function () {
                        process.exit();
                    }, 3000);
                }
            },
            {
                pattern: bot.utterances.no,
                default: true,
                callback: function (response, convo) {
                    convo.say('Good choice! :innocent:');
                    convo.next();
                }
            }
        ]);
    });
});

controller.hears(['thanks', 'thank you'], 'direct_message,direct_mention,mention', function (bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'wink',
    }, function (err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });
    bot.reply(message, "You are most welcome!");
});

controller.hears(['website'], 'direct_message,direct_mention,mention', function (bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'wink',
    }, function (err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });
    bot.reply(message, "Go here: http://gstellar.github.io");
});

controller.hears(['steph curry with da shot boi'], ['direct_message', 'direct_mention'], function (bot, message) {
    var responseObj = clutchThree(bot, message);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

controller.hears(['I win'], ['direct_message', 'direct_mention'], function (bot, message) {
    var responseObj = naenae(bot, message);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

function clutchThree() {
    var attachments = [];
    var attachment = {
        fallback: "Loser",
        title: "YEE BOI",
        text: "",
        image_url: "https://m.popkey.co/b8ce80/0JkNz.gif",
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}

function naenae() {
    var attachments = [];
    var attachment = {
        fallback: "Loser",
        title: "You jelly?",
        text: "",
        image_url: "https://az616578.vo.msecnd.net/files/2016/04/05/6359547661728582381378324529_riley%20nae%20nae%20.gif",
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}
