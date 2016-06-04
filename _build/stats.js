/*

View scores and stats in real time.

#Usage
    Call score on the bot to see the current status on your bets

 */

// Get the current score
function stats(slashCommand, message) {
    console.log("stats command");

    myStats(slashCommand, message);
    
    
    // slashCommand.replyPublic(message, "1", function() {
    //     slashCommand.replyPublicDelayed(message, "2").then(slashCommand.replyPublicDelayed(message, "3"));
    // });
}

// Listening methods
controller.hears(['stats'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getStats(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });

});

controller.hears(['score'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getScore(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

controller.hears(['favoured by'],['direct_message','direct_mention'],function(bot,message) {
    var responseObj = getFavour(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });

});

// Getters
function getStats() {
    var attachments = [];
    var attachment = {
        fallback: "Stats",
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

    return {attachments: attachments};


    // slashCommand.replyPublic(message, {
    //     attachments: attachments,
    // },function(err,resp) {
    //     console.log(err,resp);
    // });
}

function getScore() {

    var attachments = [];
    var attachment = {
        fallback: "Score",
        title: "19:45 into the 2nd Period",
        title_link: 'http://nhl.com',
        color: '#08ddf1',
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

    return {attachments: attachments};
}

function getFavour() {
    var attachments = [];
    var attachment = {
        fallback: "Stats",
        title: 'Team Stats',
        text: "*Penguins* favoured by $NUM_POINTS",
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return {attachments: attachments};
}

console.log("stats file");

