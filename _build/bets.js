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

// console.log("bets file");

// controller.setupWebserver(3000, function(err, webserver) {
//     controller.createWebhookEndpoints(webserver);
// });

controller.on('slash_command', function(bot, message) {
    // check message.command
    // and maybe message.text...
    // use EITHER replyPrivate or replyPublic...
    
    // If no args are given and the user has at least one bet placed,
    // list all user's bets
    // if ((numberBets > 0 && args == 0) || args[1] == 'mine') {
        // bot.replyPrivate(message, 'Here are your bets: ' + bets);
    // }
    // If no args are given and user has no bets,
    // prompt user to make a bet
    // else if (numberBets == 0 && (args == 0 || args[1] == 'mine')) {
        // bot.replyPrivate(message, 'You do not have any active bets. Do you want to make a bet? Use /bet [gameID] [team name]');
    // }
    // else if (args[1] == 'all') {
        // bot.replyPrivate(message, 'Here are all the active bets: ' + bets);
    // }
    // else {
            // if (check ID and team name) {
            // place bet
            // }
            // else {
            //     bot.replyPrivate(message, 'Sorry, that game ID and team name combination is not correct' + bets);
            // }
    // }
   
    
    bot.replyPrivate(message, 'Sorry, the following command is not yet set up: ' + message.command + 'Yell at Stella');
    
    // bot.replyPrivateDelayed(message, ':dash:');

});

controller.hears(['view bet'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"You can view your bets using the '/bet' slash command.");
});