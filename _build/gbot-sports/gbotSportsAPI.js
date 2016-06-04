var request = require('request-promise');
var $ = require('jquery');
var accessToken = 'bfb4bec7f982be94e1051ad7b3bef7c9';
var options = {
  url: 'https://www.stattleship.com/basketball/nba/games',
  headers: {
    'Authorization': 'Token token=bfb4bec7f982be94e1051ad7b3bef7c9',
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.stattleship.com; version=1'
  },
  json: true
};

var gbotSportsAPI = (function(t){
  return {
    getNbaGames : function(t){
      request.get(options)
      .then(function(e){
        e.games;
      })
      .catch(function(e){
        
      });
    }
  };
})();


console.log(gbotSportsAPI.getNbaGames());