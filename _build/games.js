/*

Show games that can be bet on - outputs gameID, date, time, team names.

# USAGE
    /games                          -   shows all games
    /games [nhl, nfl, nba]          -   shows the current games for the specified league
    /games [current, upcoming]      -   shows current or upcoming games

    keyword: upcoming               -   shows a list of upcoming games
*/
console.log("games file");

controller.on('games', function(bot, message) {
    // check message.command
    // and maybe message.text...
    // use EITHER replyPrivate or replyPublic...
    bot.replyPrivate(message, 'This is a private reply to the ' + message.command + ' slash command!');

    // and then continue to use replyPublicDelayed or replyPrivateDelayed
    bot.replyPublicDelayed(message, 'This is a public reply to the ' + message.command + ' slash command!');

    bot.replyPrivateDelayed(message, ':dash:');

});

controller.hears(['upcoming'],['direct_message','direct_mention'],function(bot,message) {

    var attachments = [];
    var attachment = {
        title: "Game 4 begins June 6, 2016",
        title_link: 'http://nhl.com',
        color: '#ff6600',
        fields: [],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "Sharks lead the series 2 - 0",
        short: false,
    });

    attachments.push(attachment);

    bot.reply(message,{
        attachments: attachments,
    },function(err,resp) {
        console.log(err,resp);
    });
});
