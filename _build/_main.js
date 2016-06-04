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

require('./bets.js');
require('./leaderboard.js');
require('./stats.js');
require('./teams.js');
require('./conversations.js');

