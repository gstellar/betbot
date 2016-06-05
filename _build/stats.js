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
controller.hears(['score'],['direct_message','direct_mention'],function(bot,message) {
    var game = {date:"June 26, 2016", favouredTeam:"Penguins :ppens:", otherTeam:"Panthers :cavs:", favouredBy:10, winningTeam:"Penguins :ppens:", score1:5, score2:3};
    var responseObj = getScore(game);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

controller.hears(['favoured by', 'stats'],['direct_message','direct_mention'],function(bot,message) {
    var game = {favouredTeam:"Penguins :ppens:", favouredBy:10};
    var responseObj = getFavourability(game);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });

});

// Getters

function getScore(game) {

    var attachments = [];
    var attachment = {
        fallback: "Score",
        title: game["date"],
        title_link: 'http://nhl.com',
        color: '#08ddf1',
        fields: [
            {
                title: game["favouredTeam"],
                value: game["score1"],
                short: true
            },
            {
                title:game["otherTeam"],
                value: game["score2"],
                short: true
            }
        ],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: game["winningTeam"] + " lead the series",
        short: false,
    });

    attachments.push(attachment);

    return {attachments: attachments};
}

function getFavourability(game) {
    var attachments = [];
    var attachment = {
        fallback: "Favourability",
        title: 'Team Stats',
        text: "*" + game["favouredTeam"] + "* favoured by " + game["favouredBy"],
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return {attachments: attachments};
}

