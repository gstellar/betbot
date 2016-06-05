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
        fields: [
            {
                title: "1. Stella :crown:",
                short: true
            },
            {
                value: "5 :watermelon:",
                short: true
            },
            {
                title:"2. Alex",
                short: true
            },
            {
                value: "4 :watermelon:",
                short: true
            },
            {
                title: "3. Darrel",
                short: true
            },
            {
                value: "2 :watermelon:",
                short: true
            },
            {
                title:"4. Eric",
                short: true
            },
            {
                value: "1 :watermelon:",
                short: true
            }
        ],
        
        mrkdwn_in: ["fields"],
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