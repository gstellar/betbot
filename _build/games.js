
/**
 * Called from slashCommands.js
 */
games = function games(slashCommand, message) {    
    // Get games from API                 
    gbotSportsAPI.getNbaGames();                 
                 
    // Listen to event emitted by getNbaGames()
    eventEmitter.on('upcoming-games', function (gameObject) {                
        // Define a response object based on data from API 
        var responseObj = getUpcomingGames(gameObject);        
        slashCommand.replyPublic(message, responseObj, function() {});        
    });
}

// Listening methods
controller.hears(['upcoming'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getUpcomingGames();
    if (responseObj) {
        bot.reply(message, responseObj, function(err,resp) {
            console.log(err,resp);
        });
    }
    

});

controller.hears(['all'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getAllGames();
    if (responseObj) {
        bot.reply(message,responseObj, function(err,resp) {
            console.log(err,resp);
        });
    }

});

controller.hears(['current'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getCurrentGames();
    if (responseObj) {
        bot.reply(message, responseObj, function(err,resp) {
            console.log(err,resp);
        });
    }

});

// Getters
function getUpcomingGames(gameObject) {
                
    console.log("Extract some data from here: ");
    console.log(gameObject);                
                
    var attachments = [];
    var attachment = {
        fallback: "Upcoming Games",
        title: "Game 4 begins June 6, 2016",
        title_link: 'http://nhl.com',
        color: '#ff6600',
        fields: [],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "Sharks lead the series 2 - 0",
        short: false,
    });

    attachments.push(attachment);

    return {attachments: attachments};        
}

function getAllGames() {
    var attachments = [];
    var attachment = {
        fallback: "All Games",
        title: "Game 4 begins June 6, 2016",
        title_link: 'http://nhl.com',
        color: '#ff6600',
        fields: [],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "Sharks lead the series 2 - 0",
        short: false,
    });

    attachments.push(attachment);

    return {attachments: attachments};
}

function getCurrentGames() {
    var attachments = [];
    var attachment = {
        fallback: "Current Games",
        title: "Game 4 begins June 6, 2016",
        title_link: 'http://nhl.com',
        color: '#ff6600',
        fields: [],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "Sharks lead the series 2 - 0",
        short: false,
    });

    attachments.push(attachment);

    return {attachments: attachments};
}
