/*

View leaderboard - username, rank, number of points

# USAGE
    /leaderboard                        -   Shows the whole leaderboard
    /leaderboard [username]             -   Shows the rank for the specified user
    /leaderboard me                     -   Shows your rank

    leaderboard                         -   Shows the top players.
    my position                         -   Shows your relative position.

*/


function calculateRank() {
    
    pointsArray = getPointsArray();
    pointsInOrder = QuicksortDescending(Object.keys(pointsArray));

    leaderboard = [];
    var count = 1;
    pointsInOrder.forEach(function (key) {
        var temp = { rank: count, points: key, name: pointsArray[key] };
        leaderboard.push(temp);
        count += 1;
    });

    // console.log(leaderboard);
};

function getPointsArray() {

    var pointsArray = { 20: "Stella", 31: "Eric", 1: "Alex", 12: "Al" };

    return pointsArray;
}

var QuicksortDescending = (function(){
    "use strict";
    /**
    * Quicksort algorithm
    *
    * @public
    * @param {array} array Array which should be sorted.
    * @return {array} Sorted array.
    */

    /**
    * Partitions the array in two parts by the middle elements.
    * All elements which are less than the chosen one goes left from it
    * all which are greater goes right from it.
    *
    * @param {array} array Array which should be partitioned
    * @param {number} left Left part of the array
    * @param {number} right Right part of the array
    * @return {number}
    */
    function partition(array, left, right) {
        var pivot = array[(left + right) >>> 1];

        while (left <= right) {
            while (array[left] > pivot) { left++; }
            while (array[right] < pivot) { right--; }
            if (left <= right) {
                var temp = array[left];
                array[left++] = array[right];
                array[right--] = temp;
            }
        }
        return left;
    }

    /**
    * Recursively calls itself with different values for
    * left/right part of the array which should be processed
    *
    * @private
    * @param {array} array Array which should be processed
    * @param {number} left Left part of the array which should be processed
    * @param {number} right Right part of the array which should be processed
    */
    function quicksort(array, left, right) {
        var mid = partition(array, left, right);
        if (left < mid - 1) {
            quicksort(array, left, mid - 1);
        }
        if (right > mid) {
            quicksort(array, mid, right);
        }
    }

    /**
    * Quicksort's initial point
    * @public
    */
    return function (items) {
        quicksort(items, 0, items.length - 1);
        return items;
    };

}());

// Listening methods
controller.hears(['leaderboard'], ['direct_message', 'direct_mention'], function (bot, message) {
    leaderboard = [
        { rank: 1, name: "stellarxo", points: 10 },
        { rank: 2, name: "alisterdev", points: 6 },
        { rank: 3, name: "dramos", points: 3 },
        { rank: 4, name: "blynks", points: 1 },
    ];
    var responseObj = getLeaderboard(leaderboard);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

controller.hears(['my position'], ['direct_message', 'direct_mention'], function (bot, message) {
    leaderboard = [
        { rank: 1, name: "stellarxo", points: 10 },
        { rank: 2, name: "alisterdev", points: 6 },
        { rank: 3, name: "dramos", points: 3 },
        { rank: 4, name: "blynks", points: 1 },
    ];

    var responseObj = getPosition(leaderboard, bot);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

controller.hears(['winner'], ['direct_message', 'direct_mention'], function (bot, message) {
    var responseObj = winnerMessage(bot, message);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

controller.hears(['loser'], ['direct_message', 'direct_mention'], function (bot, message) {
    var responseObj = loserMessage(bot, message);
    bot.reply(message, responseObj, function (err, resp) {
        console.log(err, resp);
    });
});

// Getters
getPosition = function getPosition(leaderboard, bot) {
    var formattedLeaderboard = [];

    leaderboard.forEach(function (entry) {

        if (entry.name == bot["identity"]["name"]) {
            if (entry["rank"] == 1) {
                formattedLeaderboard.push(
                    {
                        value: entry.rank + ". " + entry.name + " :crown:",
                        short: true
                    }
                );
            }
            else {
                formattedLeaderboard.push(
                    {
                        value: entry.rank + ". " + entry.name,
                        short: true
                    }
                );
            }
            formattedLeaderboard.push(
                {
                    title: entry.points + " :watermelon:",
                    short: true
                }
            );
        }
    });

    var attachments = [];
    var attachment = {
        fallback: "Leaderboard position",
        fields: formattedLeaderboard,
    };
    attachments.push(attachment);

    return { attachments: attachments };
}

getLeaderboard = function getLeaderboard(leaderboard) {

    var formattedLeaderboard = [];

    leaderboard.forEach(function (entry) {

        if (entry.rank == 1) {
            formattedLeaderboard.push(
                {
                    value: entry.rank + ". " + entry.name + " :crown:",
                    short: true
                }
            );
        }
        else {
            formattedLeaderboard.push(
                {
                    value: entry.rank + ". " + entry.name,
                    short: true
                }
            );
        }
        formattedLeaderboard.push(
            {
                title: entry.points + " :watermelon:",
                short: true
            }
        );
    });

    var attachments = [];
    var attachment = {
        fallback: "Leaderboard",
        title: 'Leaderboard',
        fields: formattedLeaderboard,
        mrkdwn_in: ["fields"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}

// NEED TO BE CALLED AT THE END OF EACH GAME
// and increment player's points
function winnerMessage() {
    var attachments = [];
    var attachment = {
        fallback: "Winner",
        text: ':trophy: :star2: *YOU WON!!!* :star2: :trophy:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}

// NEED TO BE CALLED AT THE END OF EACH GAME
function loserMessage() {
    var attachments = [];
    var attachment = {
        fallback: "Loser",
        text: ':thunder_cloud_and_rain: *SORRY, YOU LOST* :( :thunder_cloud_and_rain:',
        mrkdwn_in: ["text"],
    };

    attachments.push(attachment);

    return { attachments: attachments };
}