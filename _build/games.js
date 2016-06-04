games = function games(slashCommand, message) {
    console.log("games command");
    
    //var responseObj = getGames();  
    slashCommand.replyPublic(message, responseObj , function() {
        // callback
    });
    
}

controller.hears(['upcoming'],['direct_message','direct_mention'],function(bot,message) {

    var attachments = [];
    var attachment = {
        title: "Game 4 begins June 6, 2016",
        title_link: 'http://nhl.com',
        color: '#ff6600',
        fields: [],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "Sharks lead the series 2 - 0",
        short: false,
    });

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
});

// function games() {
//     console.log("games command");
    
//     slashCommand.replyPublic(message, "1", function() {
//         slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
//     });
    
// }

// function bet() {
//     console.log("bet command");
    
//     slashCommand.replyPublic(message, "1", function() {
//         slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
//     });
// }

// function stats() {
//     console.log("stats command");
    
//     slashCommand.replyPublic(message, "1", function() {
//         slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
//     });
// }

// function leaderboard() {
//     console.log("leaderboard command");
    
//     slashCommand.replyPublic(message, "1", function() {
//         slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
//     });
// }

// function test() {
//     console.log("test command");

//     //handle the `/echo` slash command. We might have others assigned to this app too!
//             // The rules are simple: If there is no text following the command, treat it as though they had requested "help"
//             // Otherwise just echo back to them what they sent us.

//             // but first, let's make sure the token matches!
//             if (message.token !== process.env.VERIFICATION_TOKEN) return; //just ignore it.
//             console.log("passed token");
//             // if no text was supplied, treat it as a help command
//             if (message.text === "" || message.text === "help") {
//                 slashCommand.replyPrivate(message,
//                     "I echo back what you tell me. " +
//                     "Try typing `/echo hello` to see.");
//                 return;
//             }

//             // If we made it here, just echo what the user typed back at them
//             //TODO You do it!
//             slashCommand.replyPublic(message, "1", function() {
//                 slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
//             });          
// }

