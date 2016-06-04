/*

Show games that can be bet on - outputs gameID, date, time, team names.

# USAGE
    /games                          -   shows all games
    /games [nhl, nfl, nba]          -   shows the current games for the specified league
    /games [current, upcoming]      -   shows current or upcoming games

*/

controller.on('slash_command', function (slashCommand, message) {

    console.log("Received command: " + message.command);
    switch (message.command) {
        case "/echo":
            test(slashCommand, message);
            break;
        case "/games":
            games(slashCommand, message);
            break;
        case "/bet":
            bet(slashCommand, message);
            break;
        case "/stats":
            stats(slashCommand, message);
            break;
        case "/leaderboard":
            leaderboard(slashCommand, message);
            break;

        default:
            slashCommand.replyPublic(message, "I'm afraid I don't know how to " + message.command + " yet.");
    }

});

function games(slashCommand, message) {
    console.log("games command");
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
    
}

function bet(slashCommand, message) {
    console.log("bet command");
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
}

function stats(slashCommand, message) {
    console.log("stats command");
    
    var attachments = [];
    var attachment = {
        title: "19:45 into the 2nd Period",
        title_link: 'http://nhl.com',
        color: '#2f5997',
        fields: [
            {
                title: "Penguins",
                value: "1",
                short: true
            },
            {
                title:"Sharks",
                value: "2",
                short: true
            }
        ],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "Penguins lead the series 2 - 0",
        short: false,
    });

    attachments.push(attachment);


    slashCommand.replyPublic(message, {
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
    
    
    // slashCommand.replyPublic(message, "1", function() {
    //     slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    // });
}

function leaderboard(slashCommand, message) {
    console.log("leaderboard command");
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
}

function test(slashCommand, message) {
    console.log("test command");

    //handle the `/echo` slash command. We might have others assigned to this app too!
            // The rules are simple: If there is no text following the command, treat it as though they had requested "help"
            // Otherwise just echo back to them what they sent us.

            // // but first, let's make sure the token matches!
            // if (message.token !== process.env.VERIFICATION_TOKEN) return; //just ignore it.
            // console.log("passed token");
            // // if no text was supplied, treat it as a help command
            // if (message.text === "" || message.text === "help") {
            //     slashCommand.replyPrivate(message,
            //         "I echo back what you tell me. " +
            //         "Try typing `/echo hello` to see.");
            //     return;
            // }

            // If we made it here, just echo what the user typed back at them
            //TODO You do it!
            slashCommand.replyPublic(message, "1", function() {
                slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
            });          
}


