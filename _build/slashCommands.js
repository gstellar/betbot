/*

Show games that can be bet on - outputs gameID, date, time, team names.

# USAGE
    /games                          -   shows all games
    /games [nhl, nfl, nba]          -   shows the current games for the specified league
    /games [current, upcoming]      -   shows current or upcoming games

*/

controller.setupWebserver(8657, function (err, webserver) {
    controller.createWebhookEndpoints(webserver);
});

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
