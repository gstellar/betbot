/*

View or place bets

# QUESTIONS
Should you be able to revoke bets after placing?
How can you change your bet? 

# USAGE
    /bet                        -   shows your bets
    /bet [all]                  -   shows all bets
    /bet [gameID] [team name]   -   place your bet

*/

function bet(slashCommand, message) {
    // console.log("bet command");
    
    // myBets(slashCommand, message);
    
    slashCommand.replyPublic(message, responseObj , function() {
        // callback
    });
}


// THIS IS BROKEN
controller.hears(['place a bet'],['direct_message','direct_mention'],function(bot,message) {
    var gameID, team, bet;
    
    // controller.storage.users.save(user, function(err, id) {
        bot.startConversation(message, function(err, convo) {
            if (!err) {
        convo.ask("What is the game ID?", function(response1, convo){
            gameID = response1;
            convo.ask("Which team are you betting on?", function(response2, convo){
                team = response2;
                convo.ask("What are you betting?", function(response3, convo){
                    bet = response3;
                    convo.next();
                });
            });
        });
            }
        });
        placeBet(bot, message, gameID, team, bet);
});
    
    

controller.hears(['place bet (.*) (.*) (.*)'],['direct_message','direct_mention'],function(bot,message) {
    var gameID = message.match[1];
    var team = message.match[2];
    var bet = message.match[3]
    bot.reply(message, "Success!");
    placeBet(bot, message, gameID, team, bet);
});

controller.hears(['my bets'],['direct_message','direct_mention'],function(bot,message) {
    myBets(bot, message);
});

controller.hears(['all bets'],['direct_message','direct_mention'],function(bot,message) {
    allBets(bot, message);
});

function placeBet(bot, message, gameID, team, bet) {
    var attachments = [];
    var attachment = {
        fallback: "Place Bet",
        label: 'Field',
        title: "You bet: " + bet + ":taco: on the " + team,
        short: false,
    };

    // attachment.fields.push({
    //     label: 'Field',
    //     value: "May the odds be ever in your favour",
    //     short: false,
    // });

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });

}

function myBets(bot, message) {
    var responseObj = getMyBets(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });

}

function getMyBets() {
    var attachments = [];
    var attachment = {
        fallback: "Sharks vs. Penguins",
        title: "Sharks vs. Penguins",
        title_link: 'http://nhl.com',
        color: '#ff007f',
        fields: [],
        short: false,
    };
    
    attachment.fields.push({
        label: 'Field',
        value: "Game ID: 927",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: "June 26th 2016 at 7:00 EST",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "You bet: 10 :taco: on the Sharks",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: "May the odds be ever in your favour",
        short: false,
    });

    attachments.push(attachment);
    
    return {attachments: attachments};
}

function allBets() {
    var responseObj = getAllBets(bot, message);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
}

function getAllBets() {    
    var attachments = [];
    var attachment = {
        fallback: "Sharks vs. Penguins",
        title: "Sharks vs. Penguins",
        title_link: 'http://nhl.com',
        color: '#ff007f',
        fields: [],
        short: false,
    };
    
    attachment.fields.push({
        label: 'Field',
        value: "Game ID: 927",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: "June 26th 2016 at 7:00 EST",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "You bet: 10 :taco: on the Sharks",
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "Alex bet: 10 :taco: on the Sharks",
        short: false,
    });
    
    attachment.fields.push({
        label: 'Field',
        title: "Darryl bet: 10 :taco: on the Penguins",
        short: false,
    });

    attachments.push(attachment);

    return {attachments: attachments};

}

