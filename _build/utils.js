gbotUtil = (function () {
    return {
        createScoresAttachment: CreateScoresAttachment
    };

    function CreateScoresAttachment(games) {
        var attachments = [];
        var fields = [];
        games.forEach(function (e) {
            console.log(e);
            fields.push({
                title: 	":" + e.awayTeam.toString() + ": " + e.awayTeam + " (" + e.awayScore + ") " + " @ " + ":" + e.homeTeam.toString() + ": " + e.homeTeam + " (" + e.homeScore + ")"
            });
        });

        var attachment = {
            title: 'Scores',
            fallback: "Score",
            fields: fields,
            short: false,
        };

        attachments.push(attachment);
        return { attachments: attachments };
    }
})();
