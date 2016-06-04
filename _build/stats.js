/*

View scores and stats in real time.

#Usage
    Call score on the bot to see the current status on your bets

 */

// Get the current score
controller.hears(['score'],['direct_message','direct_mention'],function(bot,message) {

    var attachments = [];
    var attachment = {
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

console.log("stats file");

