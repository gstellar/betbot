/*

View scores and stats in real time.

 */

// Get the current score
controller.hears(['score'],['direct_message','direct_mention'],function(bot,message) {

    var attachments = [];
    var attachment = {
        title: 'Penguins: 1, Sharks 2',
        color: '#FFCC99',
        fields: [],
    };

    attachment.fields.push({
        label: 'Field',
        value: "You're winning!",
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

