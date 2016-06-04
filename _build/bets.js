/*

View or place bets

# QUESTIONS
Should you be able to revoke bets after placing?
How can you change your bet? 

# USAGE
    /bet                        -   shows your bets
    /bet [all]                  -   shows all bets
    /bet [gameID] [team name]   -   place your bet

*/

console.log("bets file");

controller.setupWebserver(3000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver);
});

controller.on('slash_command', function(bot, message) {
    // check message.command
    // and maybe message.text...
    // use EITHER replyPrivate or replyPublic...
    
    // if (numberBets > 0 && args == 0) {
        // bot.replyPrivate(message, 'Here are your bets: ' + bets);
    // }
    // else if (numberBets == 0 && args == 0) {
        // bot.replyPrivate(message, 'Do you want to make a bet? Use /bet [gameID] [team name]');
    // }
    
    bot.replyPrivate(message, 'Sorry, the following command is not yet set up: ' + message.command);
    
    // bot.replyPrivateDelayed(message, ':dash:');

});