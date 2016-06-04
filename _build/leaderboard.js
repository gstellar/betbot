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

controller.hears(['leaderboard'],['direct_message','direct_mention'],function(bot,message) {
    showLeaderboard(bot, message);
});

controller.hears(['my position'],['direct_message','direct_mention'],function(bot,message) {
    showPosition(bot, message);
});

controller.hears(['winner'],['direct_message','direct_mention'],function(bot,message) {
    winnerMessage(bot, message);
});

controller.hears(['loser'],['direct_message','direct_mention'],function(bot,message) {
    loserMessage(bot, message);
});

function showPosition(bot, message) {
    var attachments = [];
    var attachment = {
        fallback: "Leaderboard position",
        text: '1. :crown: *STELLA*\t |  5 :watermelon:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
}

function showLeaderboard(bot, message) {
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

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
}

function winnerMessage(bot, message) {
    var attachments = [];
    var attachment = {
        fallback: "Winner",
        text: ':trophy: :star2: *YOU WON!!!* :star2: :trophy:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
}

function loserMessage(bot, message) {
    var attachments = [];
    var attachment = {
        fallback: "Loser",
        text: ':thunder_cloud_and_rain: *SORRY, YOU LOST* :( :thunder_cloud_and_rain:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
}