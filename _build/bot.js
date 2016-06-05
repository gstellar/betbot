// just a simple way to make sure we don't
// connect to the RTM twice for the same team
var _bots = {};
function trackBot(bot) {
  _bots[bot.config.token] = bot;
}
controller.on('create_bot', function (bot, config) {

  if (_bots[bot.config.token]) {
    // already online! do nothing.
  } else {
    bot.startRTM(function (err) {

      if (!err) {
        trackBot(bot);
      }

      bot.startPrivateConversation({ user: config.createdBy }, function (err, convo) {
        if (err) {
          console.log(err);
        } else {
          convo.say('I am a bot that has just joined your team');
          convo.say('You must now /invite me to a channel so that I can be of use!');
        }
      });

    });
  }

});

bot = controller.spawn({
  token: process.env.token
}).startRTM(function (err) {
  if (err) {
    throw new Error(err);
  }
});


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