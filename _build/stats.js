/*

View scores and stats in real time.

#Usage
    Call score on the bot to see the current status on your bets

 */

// Get the current score
controller.hears(['score'],['direct_message','direct_mention'],function(bot,message) {

    var attachments = [];
    var attachment = {
        title: 'Penguins 4 - 2 Sharks',
        title_link: 'http://nhl.com',
        color: '#2f5997',
        fields: [],
        short: false,
    };

    attachment.fields.push({
        label: 'Field',
        value: "19:45 into the 2nd Period",
        short: false,
    });

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

console.log("stats file");

