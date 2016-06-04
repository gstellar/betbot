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
        text: '1. :crown: *STELLA*\t |  5 :watermelon:\n 2. *Alex*\t |  4 :watermelon:\n3. *Eric*\t |  3 :watermelon:\n 4. *Darryl*\t |  3 :watermelon:\n',
        mrkdwn_in: ["text"],
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