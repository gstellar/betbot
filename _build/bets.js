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
function bet(slashCommand, message) {
    console.log("bet command");
    
    myBets(slashCommand, message);
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
}


// controller.on('slash_command', function(bot, message) {
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
   
    
    // bot.replyPrivate(message, 'Sorry, the following command is not yet set up: ' + message.command + 'Yell at Stella');
    
    // bot.replyPrivateDelayed(message, ':dash:');

// });

// controller.hears(['view bet'],['direct_message','direct_mention','mention'],function(bot,message) {
//     bot.reply(message,"You can view your bets using the '/bet' slash command.");
// });

controller.hears(['my bets'],['direct_message','direct_mention'],function(bot,message) {

    myBets(bot, message);
});

function myBets(bot, message) {
    var attachments = [];
    var attachment = {
        fallback: "Sharks vs. Penguins",
        title: "Sharks vs. Penguins",
        title_link: 'http://nhl.com',
        color: '#ff007f',
        fields: [],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "June 26th 2016 at 7:00 EST",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "You bet: 10 :taco:",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: "May the odds be ever in your favour",
        short: false,
    });

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });

}


