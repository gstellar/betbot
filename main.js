var Botkit = require('Botkit');

controller = Botkit.slackbot({
    debug: false,
    json_file_store: 'betbotdb'
});

require('./api/gbotSportsAPI.js');
require('./api/utils.js');
require('./bot/_bot.js');
require('./commands/_commands.js');


