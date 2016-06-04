var Botkit = require('../node_modules/botkit/lib/Botkit.js');

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

//needs to be global
controller = Botkit.slackbot({
 debug: false
});

controller.spawn({
  token: process.env.token
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});

// Example 1
controller.hears(['hello','hi'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"Sup, y'all.");
});

require('./bets.js');
require('./leaderboard.js');
require('./stats.js');
require('./teams.js');


