var request = require('request-promise');
require('./game.js');
var accessToken = 'bfb4bec7f982be94e1051ad7b3bef7c9';
var options = {
  headers: {
    'Authorization': 'Token token=bfb4bec7f982be94e1051ad7b3bef7c9',
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.stattleship.com; version=1'
  },
  json: true
};

gbotSportsAPI = (function () {
  return {
    getNbaGames: GetNBAGames,
    getNhlGames: GetNHLGames,
    getAllGames: function () {
      //TODO: Get All 
    }
  };

  function GetNBAGames() {
    options.url = 'https://www.stattleship.com/basketball/nba/games';
    request.get(options).then(function (e) {
      eventEmitter.emit('upcoming-games', populateGames(e.games));
    }).catch(function (e) {
      console.log("Error: " + e);
    });
  }

  function GetNHLGames() {
    options.url = 'https://www.stattleship.com/hockey/nhl/games';
      request.get(options).then(function (e) {
        eventEmitter.emit('upcoming-games', populateGames(e.games));
      }).catch(function (e) {
        console.log("Error: " + e);
      });
  }

  function populateGames(games) {
    var result = [];
    games.reverse();
    games.forEach((element, index) => {
      var game = new Game(element, index);
      result.push(game);
    });
    //console.log(result);
    return result;
  }

})();

gbotSportsAPI.getNbaGames();