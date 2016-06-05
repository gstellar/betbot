games = function games(slashCommand, message) {
    console.log("games command");
    
    //var responseObj = getGames();  
    slashCommand.replyPublic(message, responseObj , function() {
        // callback
    });
    
}

// Listening methods
controller.hears(['upcoming'],['direct_message','direct_mention'],function(bot,message) {
    var games = [
        {
            gameNumber:4, date:"June 26, 2016", winningTeam:"Panthers", score1:2, score2:1
        },
        {
            gameNumber:5, date:"June 16, 2016", winningTeam:"Penguins", score1:3, score2:2
        }
    ];
    
    // console.log(games);
    
    var responseObj = getUpcomingGames(games);
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
function getUpcomingGames(games) {
    
    // gbotSportsAPI.getNbaGames().then(function(response) {
    
    var attachments = [];
    var attachment = {
        fallback: "Upcoming Games",
        title: "Upcoming Games",
        fields: [],
        short: false,
    }
    
    games.forEach(function(game) {
        attachment.fields.push({
            title: "Game " + game["gameNumber"] + " begins " + game["date"],
            title_link: 'http://nhl.com',
            color: '#ff6600',
            short: false,
        });

        attachment.fields.push({
            label: 'Field',
            value: game["winningTeam"] + " lead the series " + game["score1"] + " - " + game["score2"],
            short: false,
        });
    }, this);
    
    attachments.push(attachment);

    return {attachments: attachments};
    
    // }, function(error) {
    //     console.error("Failed!", error);
    // });
        
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
