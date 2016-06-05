gbotUtil = (function () {
    return {
        createScoresAttachment: CreateScoresAttachment,
        createUpcomingGamesAttachment: createUpcomingGamesAttachment
    };
    // PRIVATE METHODS
    function formatDate(date){
        date = date.replace(/\s\s+/g, ' ');
        var dateElements = date.split(' ');
        return dateElements[0].substring(0, 3) + " " + dateElements[1] + " " + dateElements[2];
    }
    
    // PUBLIC METHODS
    function CreateScoresAttachment(games) {
        var attachments = [];
        var fields = [];
        games.forEach(function (e) {
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
            var newDate = Date.parse(formatDate(e.date));
            var today = new Date();
            var isUpcoming = newDate >= today.getTime();
            if(isUpcoming){
                fields.push({
                    title: "Game " + e.gameNumber + " begins at " + e.date,
                    color: '#ff6600',
                    short: false,
                });
            }
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
