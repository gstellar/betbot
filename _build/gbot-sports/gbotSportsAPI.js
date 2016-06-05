var request = require('request-promise');
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

gbotSportsAPI = (function(t){
  return {
    getNbaGames : function(t){
      return new Promise(function(resolve, reject) {
        request.get(options).then(function (e) {
          
          eventEmitter.emit('upcoming-games', e);
                    
          resolve(e);
        }).catch(function(e) {
           reject(Error("Error bruh"));
        });
      });      
    }
  };
})();

