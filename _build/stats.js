/*

View scores and stats in real time.

# USAGE
     odds                       -   Shows your favourability
     score                      -   Shows the score
     stats                      -   Shows your odds

 */

controller.hears(['scores nba'],['direct_message','direct_mention'], custom_hear_middleware, function(bot, message) {
    gbotSportsAPI.getNbaGames();                 
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createScoresAttachment(games);        
        bot.reply(message, responseObj, function() {
            eventEmitter.removeAllListeners();
        });        
    });
});

controller.hears(['scores nhl'],['direct_message','direct_mention'], custom_hear_middleware, function(bot, message) {
    gbotSportsAPI.getNhlGames();                 
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createScoresAttachment(games);        
        bot.reply(message, responseObj, function() {
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
