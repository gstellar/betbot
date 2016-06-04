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

controller.hears(['stats'],['direct_message','direct_mention'],function(bot,message) {
    myStats(bot, message);
});

controller.hears(['score'],['direct_message','direct_mention'],function(bot,message) {

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

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
});

// Get the current score
controller.hears(['favoured by'],['direct_message','direct_mention'],function(bot,message) {

    var attachments = [];
    var attachment = {
        fallback: "Stats",
        title: 'Team Stats',
        text: "*Penguins* favoured by $NUM_POINTS",
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
});

function myStats(bot, message) {
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

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });


    // slashCommand.replyPublic(message, {
    //     attachments: attachments,
    // },function(err,resp) {
    //     console.log(err,resp);
    // });
}


console.log("stats file");

