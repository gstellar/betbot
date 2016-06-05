/*

View scores and stats in real time.

# USAGE
     odds [to-do]                      -   Shows your favourability
     scores                            -   Shows the score
     stats [to-do]                     -   Shows your odds
*/

// /**
//  * Info message
//  */
// controller.hears(['scores'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {
//     bot.reply(message, "Type 'scores nba' or 'scores nhl' to get scores by league", function () { });
// });

/**
 * Return NBA scores
 */
controller.hears(['scores nba'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {
    gbotSportsAPI.getNbaGames();
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createScoresAttachment(games);
        bot.reply(message, responseObj, function () {
            eventEmitter.removeAllListeners();
        });
    });
});

/**
 * Return NHL scores
 */
controller.hears(['scores nhl'], ['direct_message', 'direct_mention'], custom_hear_middleware, function (bot, message) {
    gbotSportsAPI.getNhlGames();
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createScoresAttachment(games);
        bot.reply(message, responseObj, function () {
            eventEmitter.removeAllListeners();
        });
    });
});

/**
 * Middleware to match exact commands
 */
function custom_hear_middleware(patterns, message) {

    for (var p = 0; p < patterns.length; p++) {
        if (patterns[p] == message.text) {
            return true;
        }
    }
    return false;
}
