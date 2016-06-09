/*

 View the status of all current games / upcoming games.

 # USAGE
 upcoming                       -   Shows upcoming games.
 all                            -   Shows all games.
 current                        -   Shows current games.

*/


// Listening methods
controller.hears(['upcoming'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {

    var nbaGamesList = gbotSportsAPI.getNbaGames();
    nbaGamesList.then(function (games) {
        var responseObj = gbotUtil.createUpcomingGamesAttachment(games);
        bot.reply(message, responseObj, function () {
            console.log("response sent")
        });
    });
});

controller.hears(['upcoming nba'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {
    var nbaGamesList = gbotSportsAPI.getNbaGames();
    nbaGamesList.then(function (games) {
        var responseObj = gbotUtil.createUpcomingGamesAttachment(games);
        bot.reply(message, responseObj, function () {
            console.log("response sent")
        });
    });
});

controller.hears(['upcoming nhl'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {
    var nhlGameList = gbotSportsAPI.getNhlGames();
    nhlGameList.then(function (games) {
        var responseObj = gbotUtil.createUpcomingGamesAttachment(games);
        bot.reply(message, responseObj, function () {
            console.log("response sent")
        });
    });
});

controller.hears(['all'], ['direct_message', 'direct_mention'], function (bot, message) {
    var nbaGamesList = gbotSportsAPI.getNbaGames();
    nbaGamesList.then(function (games) {
        var responseObj = gbotUtil.createUpcomingGamesAttachment(games);
        bot.reply(message, responseObj, function () {
            console.log("response sent")
        });
    });
});

controller.hears(['current nba'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {
    gbotSportsAPI.getNbaGames();
    myMessage = message;
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createCurrentGamesAttachment(games);
        bot.reply(message, responseObj, function () {
            eventEmitter.removeAllListeners();
        });
    });
});

controller.hears(['current nhl'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {
    gbotSportsAPI.getNhlGames();
    myMessage = message;
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createCurrentGamesAttachment(games);
        bot.reply(message, responseObj, function () {
            eventEmitter.removeAllListeners();
        });
    });
});

function custom_hear_middleware(patterns, message) {

    for (var p = 0; p < patterns.length; p++) {
        if (patterns[p] == message.text) {
            return true;
        }
    }
    return false;
}
