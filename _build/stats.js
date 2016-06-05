/*

View scores and stats in real time.

# USAGE
     odds                       -   Shows your favourability
     score                      -   Shows the score
     stats                      -   Shows your odds

 */

controller.hears(['scores'],['direct_message','direct_mention'], function(bot, message) {
    gbotSportsAPI.getNbaGames();                 
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createScoresAttachment(games);        
        bot.reply(message, responseObj, function() {});        
    });
});

