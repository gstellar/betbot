/*

View scores and stats in real time.

#Usage
    Call score on the bot to see the current status on your bets

 */

controller.hears(['scores'],['direct_message','direct_mention'], function(bot, message) {
    gbotSportsAPI.getNbaGames();                 
    eventEmitter.on('upcoming-games', function (games) {
        var responseObj = gbotUtil.createScoresAttachment(games);        
        bot.reply(message, responseObj, function() {});        
    });
});

