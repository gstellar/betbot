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

controller.hears(['place bet'], ['direct_message','direct_mention'], function(bot,message) {
    askLeague  = function(response, convo) {
        convo.ask('Which sports league?', function(response, convo) {
            convo.say('Great choice!');
            askTeam(response, convo);
            convo.next();
        });
    }
    askTeam = function(response, convo) {
        convo.ask('Which team?', function(response, convo) {
            convo.say("Awesome, that's my favourite.");
            askBet(response, convo);
            convo.next();
        });
    }
    askBet = function(response, convo) {
        convo.ask('How many tacos?', function(response, convo) {
            convo.say("Bold move. Let's see if it pays off.");
            convo.next();
        });
    }

    bot.startConversation(message, askLeague);
});
  

controller.hears(['my bets'],['direct_message','direct_mention'],function(bot,message) {
    bets = [
        {name:"stellabot", team:"Panthers", otherTeam:"Penguins", gameID:12, bet:10},
        {name:"alisterdev", team:"Flamingos", otherTeam:"Baluga Whales", gameID:2, bet:10},
    ];
    
    var responseObj = getMyBets(bets, bot);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

controller.hears(['all bets'],['direct_message','direct_mention'],function(bot,message) {
    bets = [
        {name:"stellabot", team:"Panthers", otherTeam:"Penguins", gameID:12, bet:10},
        {name:"alisterdev", team:"Flamingos", otherTeam:"Baluga Whales", gameID:2, bet:10},
    ];
    
    var responseObj = getAllBets(bets);
    bot.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
    });
});

function placeBet(bot, message, gameID, team, bet) {
    var attachments = [];
    var attachment = {
        fallback: "Place Bet",
        label: 'Field',
        title: "You bet: " + bet + ":taco: on the " + team,
        short: false,
    };

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });

}


function getMyBets(bets, bot) {
    var attachments = [];
    var attachment = {
        fallback: "My Bets",
        title: "My Bets",
        fields: [],
    };
    
    bets.forEach(function(bet) {
        if (bet["name"] == bot["identity"]["name"]) {
        
    attachment.fields.push({
        title: bet["team"] + " vs. " + bet["otherTeam"],
        title_link: 'http://nhl.com',
        label: 'Field',
        value: "Game ID: " + bet["gameID"],
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: bet["date"],
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "You bet: " + bet["bet"] + " :taco: on the " + bet["team"],
        short: false,
    });
        }
    }, this);

    attachment.fields.push({
        label: 'Field',
        value: "~ May the odds be ever in your favour ~",
        short: false,
    });

    attachments.push(attachment);
    
    return {attachments: attachments};
}

function getAllBets() {    
    var attachments = [];
    var attachment = {
        fallback: "All Bets",
        title: "All Bets",
        fields: [],
    };
    
    bets.forEach(function(bet) {
    attachment.fields.push({
        title: bet["team"] + " vs. " + bet["otherTeam"],
        title_link: 'http://nhl.com',
        label: 'Field',
        value: "Game ID: " + bet["gameID"],
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: bet["date"],
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "You bet: " + bet["bet"] + " :taco: on the " + bet["team"],
        short: false,
    });
    }, this);

    attachment.fields.push({
        label: 'Field',
        value: "~ May the odds be ever in your favour ~",
        short: false,
    });

    attachments.push(attachment);
    
    return {attachments: attachments};

}

