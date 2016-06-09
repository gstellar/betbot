var request = require('request-promise');
var game = require('./game.js');

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
    return new Promise(function (resolve, reject) {
      options.url = 'https://www.stattleship.com/basketball/nba/games';
      request.get(options).then(function (e) {
        resolve(populateGames(e.games, "basketball"));
      }).catch(function (e) {
        reject(Error("Unable to fetch data: " + e));
      });
    });
  }

  function GetNHLGames() {
    return new Promise(function (resolve, reject) {
      options.url = 'https://www.stattleship.com/hockey/nhl/games';
      request.get(options).then(function (e) {
        resolve(populateGames(e.games, "ice_hockey_stick_and_puck"));
      }).catch(function (e) {
        reject(Error("Unable to fetch data: " + e));
      });
    });
  }

  function populateGames(games, type) {
    var result = [];
    games.reverse();
    games.forEach((element, index) => {
      var game = new Game(element, index, type);
      result.push(game);
    });
    return result;
  }

})();