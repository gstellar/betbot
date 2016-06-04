console.log("stats file");

// Example 2
controller.hears(['world'], ['direct_message','direct_mention','mention'], function(bot,message) {

    // start a conversation to handle this response.
    bot.startConversation(message,function(err,convo) {

        convo.say('Hello!');
        convo.say('Have a nice day!');

    });
});

// Example 3
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
