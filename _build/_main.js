var Botkit = require('../node_modules/botkit/lib/Botkit.js');

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.PORT || !process.env.token) {
    console.log('Error: Specify CLIENT_ID, CLIENT_SECRET, VERIFICATION_TOKEN and PORT in environment');
    process.exit(1);
}

var config = {}
if (process.env.MONGOLAB_URI) {
    var BotkitStorage = require('botkit-storage-mongo');
    config = {
        storage: BotkitStorage({mongoUri: process.env.MONGOLAB_URI}),
    };
} else {
    config = {
        json_file_store: './db_slackbutton_slash_command/',
    };
}

controller = Botkit.slackbot(config).configureSlackApp({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  scopes: ['commands'],
});

controller.setupWebserver(process.env.PORT, function (err, webserver) {
    controller.createWebhookEndpoints(controller.webserver);
    controller.createOauthEndpoints(controller.webserver, function (err, req, res) {
        if (err) {
            res.status(500).send('ERROR: ' + err);
        } else {
            res.send('Success!');
        }
    });
});

require('./bot.js');
require('./slashCommands.js');
require('./bets.js');
require('./leaderboard.js');
require('./stats.js');
require('./teams.js');


