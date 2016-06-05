
/**
 * Called from slashCommands.js
 */
games = function games(slashCommand, message) {
    // Get games from API                 
    gbotSportsAPI.getNbaGames();

    // Listen to event emitted by getNbaGames()
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = getUpcomingGames(games);
        slashCommand.replyPublic(message, responseObj, function () { });
    });

    // Listen for upcoming events

    var myCommand = null;
    var myMessage = null;

    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = getUpcomingGames(games);
        myCommand.replyPublic(myMessage, responseObj, function () { });
    });
}

/** Called from slashCommands.js */
games = function games(slashCommand, message) {

    var gameType = message.text;
    myCommand = slashCommand;
    myMessage = message;

    if (gameType == "nba") {
        gbotSportsAPI.getNbaGames();
    }
    else if (gameType == "nhl") {
        gbotSportsAPI.getNhlGames();
    }
    else {
        slashCommand.replyPublic(message, "Use /games nba or /games nhl to get upcoming games of the league", function () { });
    }

}

// Listening methods
controller.hears(['upcoming'], ['direct_message', 'direct_mention'], function (bot, message) {

    var games = [
        {
            gameNumber: 4, date: "June 26, 2016", winningTeam: "Sharks :sshar:", score1: 2, score2: 1
        },
        {
            gameNumber: 5, date: "June 16, 2016", winningTeam: "Penguins :ppens:", score1: 3, score2: 2
        }
    ];

    // console.log(games);

    var responseObj = getUpcomingGames(games);
    if (responseObj) {
        bot.reply(message, responseObj, function (err, resp) {
            console.log(err, resp);
        });
    }
});

controller.hears(['all'], ['direct_message', 'direct_mention'], function (bot, message) {

    var games = [
        {
            gameNumber: 4, date: "June 26, 2016", winningTeam: "Panthers :cavs:", score1: 2, score2: 1
        },
        {
            gameNumber: 5, date: "June 16, 2016", winningTeam: "Penguins :ppens:", score1: 3, score2: 2
        }
    ];


    var responseObj = getAllGames(games);
    if (responseObj) {
        bot.reply(message, responseObj, function (err, resp) {
            console.log(err, resp);
        });
    }
});

controller.hears(['current'], ['direct_message', 'direct_mention'], function (bot, message) {

    var games = [
        {
            gameNumber: 4, date: "June 26, 2016", winningTeam: "Panthers :cavs:", score1: 2, score2: 1
        },
        {
            gameNumber: 5, date: "June 16, 2016", winningTeam: "Penguins :ppens:", score1: 3, score2: 2
        }
    ];

    var responseObj = getCurrentGames(games);
    if (responseObj) {
        bot.reply(message, responseObj, function (err, resp) {
            console.log(err, resp);
        });
    }
});

// Getters
function getUpcomingGames(games) {

    var attachments = [];
    var attachment = {
        fallback: "Upcoming Games",
        title: "Upcoming Games",
        fields: [],
        short: false,
    }

    games.forEach(function (game) {
        //if (game["date"] > today) { // NEED TO DECIDE WHEN "UPCOMING" IS

        attachment.fields.push({
            title: "Game " + game.gameNumber + " begins at " + game.date,
            title_link: 'http://nhl.com',
            color: '#ff6600',
            short: false,
        });

        attachment.fields.push({
            title: "Game " + game.gameNumber + " begins at " + game.date,
            title_link: 'http://nhl.com',
            color: '#ff6600',
            short: false,
        });

        attachment.fields.push({
            label: 'Field',
            value: game.winningTeam + " lead the series " + game.home + " - " + game.score2,
            short: false,
        });
        //}
    }, this);

    attachments.push(attachment);

    return { attachments: attachments };

}

function getCurrentGames(games) {
    var attachments = [];
    var attachment = {
        fallback: "Upcoming Games",
        title: "Upcoming Games",
        fields: [],
        short: false,
    }

    games.forEach(function (game) {
        if (game["date"] == today) { // NEED TO DECIDE WHEN "CURRENT" IS
            attachment.fields.push({
                title: "Game " + game.gameNumber + " begins " + game.date,
                title_link: 'http://nhl.com',
                color: '#ff6600',
                short: false,
            });

            attachment.fields.push({
                label: 'Field',
                value: game.winningTeam + " lead the series " + game.score1 + " - " + game.score2,
                short: false,
            });
        }
    }, this);

    attachments.push(attachment);

    return { attachments: attachments };
}

function getAllGames(games) {
    var attachments = [];
    var attachment = {
        fallback: "All Games",
        title: "All Games",
        fields: [],
        short: false,
    }
    games.forEach(function (game) {
        attachment.fields.push({
            title: "GameID" + game.gameID + ". " + game.awayTeam + " vs " + game.homeTeam + " @ " + game.date,
            title_link: 'http://nhl.com',
            color: '#ff6600',
            short: false,
        });
    }, this);

    attachments.push(attachment);

    return { attachments: attachments };
}
