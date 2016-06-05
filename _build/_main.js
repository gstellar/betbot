var Botkit = require('../node_modules/botkit/lib/Botkit.js');


// Import events module
var events = require('events');
// Create an eventEmitter object
eventEmitter = new events.EventEmitter();

// Bind the connection event with the listner1 function
eventEmitter.addListener('upcoming-games', function () {
    console.log('listener added');
});

controller = Botkit.slackbot({
    debug: false
});

require('./gbot-sports/gbotSportsAPI.js');
require('./utils.js');
require('./bot.js');
require('./bets.js');
require('./leaderboard.js');
require('./stats.js');
require('./games.js');
require('./conversations.js');
require('./slashCommands.js');

