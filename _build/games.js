/*

 View the status of all current games / upcoming games.

 # USAGE
 upcoming                       -   Shows upcoming games.
 all                            -   Shows all games.
 current                        -   Shows current games.

*/

// Listen for upcoming events

var myCommand = null;
var myMessage = null;

eventEmitter.on('upcoming-games', function (games) {
    var responseObj = getUpcomingGames(games);
    // var message = "TESTING";
    //myCommand.replyPublic(myMessage, responseObj, function () { });
    bot.reply(myMessage, responseObj, function (err, resp) {
            console.log(err, resp);
        });
});

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

    gbotSportsAPI.getNbaGames();                 
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createUpcomingGamesAttachment(games);        
        bot.reply(message, responseObj, function() {});        
    });
});

controller.hears(['all'], ['direct_message', 'direct_mention'], function (bot, message) {

    gbotSportsAPI.getNbaGames();                 
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createUpcomingGamesAttachment(games);        
        bot.reply(message, responseObj, function() {});        
    });
});

controller.hears(['current'], ['direct_message', 'direct_mention'], function (bot, message) {
    gbotSportsAPI.getNbaGames();                 
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createUpcomingGamesAttachment(games);        
        bot.reply(message, responseObj, function() {});        
    });
});

