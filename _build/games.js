games = function games(slashCommand, message) {
    console.log("games command");
    
    //var responseObj = getGames();  
    slashCommand.replyPublic(message, responseObj , function() {
        // callback
    });
    
}

// Listening methods
controller.hears(['upcoming'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getUpcomingGames(bot, message);
    if (responseObj) {
        bot.reply(message, responseObj, function(err,resp) {
            console.log(err,resp);
        });
    }
    

});

controller.hears(['all'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getAllGames(bot, message);
    if (responseObj) {
        bot.reply(message,responseObj, function(err,resp) {
            console.log(err,resp);
        });
    }

});

controller.hears(['current'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getCurrentGames(bot, message);
    if (responseObj) {
        bot.reply(message, responseObj, function(err,resp) {
            console.log(err,resp);
        });
    }

});

// Getters
function getUpcomingGames() {
    
    gbotSportsAPI.getNbaGames().then(function(response) {
      
    
    var attachments = [];
    var attachment = {
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
    
    }, function(error) {
        console.error("Failed!", error);
    });
        
}

function getAllGames() {
    var attachments = [];
    var attachment = {
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
