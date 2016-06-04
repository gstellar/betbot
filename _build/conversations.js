controller.hears(['hello','hi'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Sup, y'all.");
});

controller.hears(['play'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Do you want to play?");
    controller.hears(['no'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Okay, but you're making a mistake...");
    });
    controller.hears(['yes'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Use '/games' to view relevant games and '/bet' to make your bet!");
    });
});

controller.hears(['what teams'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"You can bet on any NHL, NFL, and NBA games :smile_cat:");
});

controller.hears(['bet'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"You can make a bet using the '/bet' slash command.");
});

controller.hears(['show leaderboard'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Do you want to see the leaderboard?");
    controller.hears(['yes'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"TOO BAD!");
    });
});

controller.hears(['shutdown'],['direct_message','direct_mention'],function(bot, message) {

    bot.startConversation(message,function(err, convo) {
        convo.ask('Are you sure you want me to shutdown?',[
            {
                pattern: bot.utterances.yes,
                callback: function(response, convo) {
                    convo.say('Bye for now!');
                    convo.next();
                    setTimeout(function() {
                        process.exit();
                    },3000);
                }
            },
        {
            pattern: bot.utterances.no,
            default: true,
            callback: function(response, convo) {
                convo.say('Good choice! :innocent:');
                convo.next();
            }
        }
        ]);
    });
});

controller.hears(['thanks', 'thank you'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'wink',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });
    bot.reply(message,"You are most welcome!");
});