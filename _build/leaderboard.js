/*

View leaderboard - username, rank, number of points

# USAGE
    /leaderboard                        -   Shows the whole leaderboard
    /leaderboard [username]             -   Shows the rank for the specified user
    /leaderboard me                     -   Shows your rank

    leaderboard                         -   Shows the top players.
    my position                         -   Shows your relative position.

*/

var myCommand = null;
var myMessage = null;

function leaderboard(slashCommand, message) {
    var gameType = message.text;
    myCommand = slashCommand;
    myMessage = message;

    if (gameType == "mine") {
        showPosition(slashCommand, message);
    }
    else {
        showLeaderboard(slashCommand, message);
    }
}

// Listening methods
controller.hears(['leaderboard'], ['direct_message', 'direct_mention'], function (bot, message) {
    leaderboard = [
        { rank: 1, name: "stellarxo", points: 10 },
        { rank: 2, name: "alisterdev", points: 6 },
        { rank: 3, name: "dramos", points: 3 },
        { rank: 4, name: "blynks", points: 1 },
    ];
    var responseObj = showLeaderboard(leaderboard);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

controller.hears(['my position'], ['direct_message', 'direct_mention'], function (bot, message) {
    leaderboard = [
        { rank: 1, name: "stellarxo", points: 10 },
        { rank: 2, name: "alisterdev", points: 6 },
        { rank: 3, name: "dramos", points: 3 },
        { rank: 4, name: "blynks", points: 1 },
    ];

    var responseObj = showPosition(leaderboard, bot);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

controller.hears(['winner'], ['direct_message', 'direct_mention'], function (bot, message) {
    var responseObj = winnerMessage(bot, message);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

controller.hears(['loser'], ['direct_message', 'direct_mention'], function (bot, message) {
    var responseObj = loserMessage(bot, message);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

// Getters
function showPosition(leaderboard, bot) {
    var formattedLeaderboard = [];

    leaderboard.forEach(function (entry) {

        if (entry.name == bot["identity"]["name"]) {
            if (entry["rank"] == 1) {
                formattedLeaderboard.push(
                    {
                        value: entry.rank + ". " + entry.name + " :crown:",
                        short: true
                    }
                );
            }
            else {
                formattedLeaderboard.push(
                    {
                        value: entry.rank + ". " + entry.name,
                        short: true
                    }
                );
            }
            formattedLeaderboard.push(
                {
                    title: entry.points + " :watermelon:",
                    short: true
                }
            );
        }
    });

    var attachments = [];
    var attachment = {
        fallback: "Leaderboard position",
        fields: formattedLeaderboard,
    };
    attachments.push(attachment);

    return { attachments: attachments };
}

function showLeaderboard(leaderboard) {

    var formattedLeaderboard = [];

    leaderboard.forEach(function (entry) {

        if (entry.rank == 1) {
            formattedLeaderboard.push(
                {
                    value: entry.rank + ". " + entry.name + " :crown:",
                    short: true
                }
            );
        }
        else {
            formattedLeaderboard.push(
                {
                    value: entry.rank + ". " + entry.name,
                    short: true
                }
            );
        }
        formattedLeaderboard.push(
            {
                title: entry.points + " :watermelon:",
                short: true
            }
        );
    });

    var attachments = [];
    var attachment = {
        fallback: "Leaderboard",
        title: 'Leaderboard',
        fields: formattedLeaderboard,
        mrkdwn_in: ["fields"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}

// NEED TO BE CALLED AT THE END OF EACH GAME
// and increment player's points
function winnerMessage() {
    var attachments = [];
    var attachment = {
        fallback: "Winner",
        text: ':trophy: :star2: *YOU WON!!!* :star2: :trophy:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}

// NEED TO BE CALLED AT THE END OF EACH GAME
function loserMessage() {
    var attachments = [];
    var attachment = {
        fallback: "Loser",
        text: ':thunder_cloud_and_rain: *SORRY, YOU LOST* :( :thunder_cloud_and_rain:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}