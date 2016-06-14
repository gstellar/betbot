/*

Contains all logic responsible for answering to custom commands

# Potential USAGE

    Games - Show games that can be bet on - outputs gameID, date, time, team names.
    /games                          -   shows all games
    /games [nhl, nfl, nba]          -   shows the current games for the specified league
    /games [current, upcoming]      -   shows current or upcoming games


    Bet - Place/View your bets

*/

controller.setupWebserver(8657, function (err, webserver) {
    controller.createWebhookEndpoints(webserver);
});

controller.on('slash_command', function (slashCommand, message) {

    console.log("Received command: " + message.command);
    switch (message.command) {
        case "/games":
            showGames(slashCommand, message);
            break;
        case "/bet":
            placeBet(slashCommand, message);
            break;
        case "/stats":
            showStats(slashCommand, message);
            break;
        case "/leaderboard":
            showLeaderboard(slashCommand, message);
            break;
        default:
            slashCommand.replyPublic(message, "I'm afraid I don't know how to " + message.command + " yet.");
    }
});

/**
 * Show upcoming games
 * Optionally show only upcoming games of a specified league
 */
function showGames(slashCommand, message) {

    var gameType = message.text.toLowerCase();
    var gameList = null;

    switch (gameType) {
        case "nba":
            gameList = gbotSportsAPI.getNbaGames();
            break;
        case "nhl":
            gameList = gbotSportsAPI.getNhlGames();
            break;
        case "nfl":
        // to do
        default:
            slashCommand.replyPublic(
                message,
                "Please choose a league to display (e.g /games nba)",
                function () { /* Response sent*/ }
            );
    }

    // Resolve promise - output games
    if (gameList != null & gameList instanceof Promise) {
        gameList.then(function (games) {
            var responseObj = gbotUtil.createUpcomingGamesAttachment(games);
            slashCommand.replyPublic(message, responseObj, function () {
                // Response sent
            });
        }).catch(function (err) {
            console.error("Error in showGames(): ", err);
        });
    }
}

function placeBet(slashCommand, message) {
    // TODO


    // if (gameType == "mine") {
    //     var responseObj = getMyBets(bets, slashCommand);
    //     slashCommand.reply(message, responseObj, function (err, resp) {
    //         console.log(err, resp);
    //     });
    // }
    // else if (gameType == "all") {
    //     var responseObj = getAllBets(bets);
    //     slashCommand.reply(message, responseObj, function (err, resp) {
    //         console.log(err, resp);
    //     });
    // }
    // else {
    //     slashCommand.replyPublic(message, "Use /bets all or /bets mine to see all bets or your bets. Or, use @stellabot place bet to place a bet.", function () { });
    // }
    var arg = message ? message.text : "";

    switch (arg) {
        case "mine":
            var responseObj = getMyBets(message);
            break;
        case "all":
            var responseObj = getAllBets(message);
            break;
        case "place":
            placeBet(bot, message);
        default: // team name given
            slashCommand.replyPublic(
                message,
                "Please choose a league to display (e.g /games nba)",
                function () { /* Response sent*/ }
            );
    }


    
    slashCommand.replyPublic(message, responseObj, function () {
        // Response sent
    });
}

function showStats(slashCommand, message) {
    // TODO
}

function showLeaderboard(slashCommand, message) {

    var gameType = message ? message.text : "";
    var leaderboard = [
        { rank: 1, name: "stellarxo", points: 10 },
        { rank: 2, name: "alisterdev", points: 6 },
        { rank: 3, name: "dramos", points: 3 },
        { rank: 4, name: "blynks", points: 1 },
    ];

    var responseObj = getLeaderboard(leaderboard);


    slashCommand.replyPublic(message, responseObj, function () {
        // Response sent
    });

}
