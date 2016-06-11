gbotUtil = (function () {
    return {
        createScoresAttachment: CreateScoresAttachment,
        createUpcomingGamesAttachment: CreateUpcomingGamesAttachment,
        createCurrentGamesAttachment: CreateCurrentGamesAttachment
    };
    // PRIVATE METHODS
    function formatDate(date) {
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

    function CreateCurrentGamesAttachment(games) {
        var attachments = [];
        var fields = [];
        games.forEach(function (e) {
            var newDate = new Date(Date.parse(formatDate(e.date)));
            newDate.setHours(0, 0, 0, 0);
            var newDate1 = new Date();
            newDate1.setHours(0, 0, 0, 0);

            var today = new Date();
            if (newDate.getTime() === newDate1.getTime()) {
                fields.push({
                    title: ":" + e.type + ": Game " + e.gameNumber + " will begin on " + e.date + " at " + e.time,
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
    function CreateUpcomingGamesAttachment(games) {
        var attachments = [];
        var fields = [];
        games.forEach(function (e) {
            var newDate = Date.parse(formatDate(e.date));
            var today = new Date();
            var isUpcoming = newDate >= today.getTime();
            if (isUpcoming) {
                fields.push({
                    title: ":" + e.type + ": Game " + e.gameNumber + " (" + e.label + ")" + " on " + e.date,
                    color: '#ff6600',
                    short: false,
                });
            }
        });

        var attachment = {
            fallback: "Upcoming Games",
            title: "Current",
            fields: fields,
            short: false,
        };

        attachments.push(attachment);
        return { attachments: attachments };
    }
})();
