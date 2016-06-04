/*

View leaderboard - username, rank, number of points

# USAGE
    /leaderboard                        -   shows the whole leaderboard
    /leaderboard [username]             -   shows the rank for the specified user
    /leaderboard me                     -   shows your rank

*/

function leaderboard(slashCommand, message) {
    // console.log("leaderboard command");
    
    // slashCommand.replyPublic(message, "1", function() {
    //     slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    // });
    showLeaderboard(slashCommand, message);
}

// Listening methods
controller.hears(['leaderboard'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = showLeaderboard(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

controller.hears(['my position'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = showPosition(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

controller.hears(['winner'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = winnerMessage(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

controller.hears(['loser'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = loserMessage(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

// Getters
function showPosition() {
    var attachments = [];
    var attachment = {
        fallback: "Leaderboard position",
        text: '1. :crown: *STELLA*\t |  5 :watermelon:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return {attachments: attachments};
}

function showLeaderboard() {
    var attachments = [];
    var attachment = {
        fallback: "Leaderboard",
        title: 'Leaderboard',
        text: '1. :crown: *STELLA*\t |  5 :watermelon:\n 2. *Alex*\t |  4 :watermelon:\n3. *Eric*\t |  3 :watermelon:\n 4. *Darryl*\t |  3 :watermelon:\n',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return {attachments: attachments};
}

function winnerMessage() {
    var attachments = [];
    var attachment = {
        fallback: "Winner",
        text: ':trophy: :star2: *YOU WON!!!* :star2: :trophy:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return {attachments: attachments};
}

function loserMessage() {
    var attachments = [];
    var attachment = {
        fallback: "Loser",
        text: ':thunder_cloud_and_rain: *SORRY, YOU LOST* :( :thunder_cloud_and_rain:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return {attachments: attachments};
}