var Botkit = require('../node_modules/botkit/lib/Botkit.js');

controller = Botkit.slackbot({
    debug: false
});


require('./bot.js');
require('./bets.js');
require('./leaderboard.js');
require('./stats.js');
require('./games.js');
require('./conversations.js');
require('./slashCommands.js');

