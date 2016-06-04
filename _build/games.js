/*

Show games that can be bet on - outputs gameID, date, time, team names.

# USAGE
    /games                          -   shows all games
    /games [nhl, nfl, nba]          -   shows the current games for the specified league
    /games [current, upcoming]      -   shows current or upcoming games

*/
console.log("games file");

controller.on('slash_command', function (slashCommand, message) {

    console.log("Received command: " + message.command);
    switch (message.command) {
        case "/echo":
            test();
            break;
        case "/games":
            games();
            break;
        case "/bet":
            bet();
            break;
        case "/stats":
            stats();
            break;
        case "/leaderboard":
            leaderboard();
            break;

        default:
            slashCommand.replyPublic(message, "I'm afraid I don't know how to " + message.command + " yet.");
    }

});

function games() {
    console.log("games command");
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
    
}

function bet() {
    console.log("bet command");
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
}

function stats() {
    console.log("stats command");
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
}

function leaderboard() {
    console.log("leaderboard command");
    
    slashCommand.replyPublic(message, "1", function() {
        slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    });
}

function test() {
    console.log("test command");

    //handle the `/echo` slash command. We might have others assigned to this app too!
            // The rules are simple: If there is no text following the command, treat it as though they had requested "help"
            // Otherwise just echo back to them what they sent us.

            // but first, let's make sure the token matches!
            if (message.token !== process.env.VERIFICATION_TOKEN) return; //just ignore it.
            console.log("passed token");
            // if no text was supplied, treat it as a help command
            if (message.text === "" || message.text === "help") {
                slashCommand.replyPrivate(message,
                    "I echo back what you tell me. " +
                    "Try typing `/echo hello` to see.");
                return;
            }

            // If we made it here, just echo what the user typed back at them
            //TODO You do it!
            slashCommand.replyPublic(message, "1", function() {
                slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
            });          
}


