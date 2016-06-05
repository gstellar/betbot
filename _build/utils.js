gbotUtil = (function () {
    return {
        createScoresAttachment: CreateScoresAttachment,
        createUpcomingGamesAttachment: createUpcomingGamesAttachment
    };

    function CreateScoresAttachment(games) {
        var attachments = [];
        var fields = [];
        games.forEach(function (e) {
            console.log(e);
            fields.push({
                title: ":" + e.awayTeam.toString() + ": " + e.awayTeam + " (" + e.awayScore + ") " + " @ " + ":" + e.homeTeam.toString() + ": " + e.homeTeam + " (" + e.homeScore + ")"
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

    function createUpcomingGamesAttachment(games) {
        var attachments = [];
        var fields = [];
        games.forEach(function (e) {
            fields.push({
                title: "Game " + e.gameNumber + " begins at " + e.date,
                color: '#ff6600',
                short: false,
            });
        });

        var attachment = {
            fallback: "Upcoming Games",
            title: "Upcoming Games",
            fields: fields,
            short: false,
        };

        attachments.push(attachment);
        return { attachments: attachments };
    }
})();
