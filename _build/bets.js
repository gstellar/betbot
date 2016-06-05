/*

View or place bets

# QUESTIONS
Should you be able to revoke bets after placing?
How can you change your bet? 

# USAGE
    bet                         -   Shows help slash command
    place bet                   -   Allows player to choose a league, team and betting amount
    my bet                      -   Shows your bet
    all bets                    -   Shows all bets
*/

function bet(slashCommand, message) {
    var gameType = message.text;
    myCommand = slashCommand;
    myMessage = message;

    if (gameType == "mine") {
        var responseObj = getMyBets(bets, slashCommand);
        slashCommand.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
        });
    }
    else if (gameType == "all") {
        var responseObj = getAllBets(bets);
        slashCommand.reply(message,responseObj, function(err,resp) {
        console.log(err,resp);
        });
    }
    else {
        slashCommand.replyPublic(message, "Use /bets all or /bets mine to see all bets or your bets. Or, use @stellabot place bet to place a bet.", function () { });
    }
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
  

controller.hears(['my bet'],['direct_message','direct_mention'],function(bot,message) {
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
        if (bet.name == bot["identity"]["name"]) {
        
    attachment.fields.push({
        title: bet.team + " vs. " + bet.otherTeam,
        title_link: 'http://nhl.com',
        label: 'Field',
        value: "Game ID: " + bet.gameID,
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: bet.date,
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "You bet: " + bet.bet + " :taco: on the " + bet.team,
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
        title: bet.team + " vs. " + bet.otherTeam,
        title_link: 'http://nhl.com',
        label: 'Field',
        value: "Game ID: " + bet.gameID,
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        value: bet["date"],
        short: false,
    });

    attachment.fields.push({
        label: 'Field',
        title: "You bet: " + bet.bet + " :taco: on the " + bet.team,
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

