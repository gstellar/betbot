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

var gbotSportsAPI = (function(t){
  return {
    getNbaGames : function(t){
      return new Promise(function(resolve, reject) {
        request.get(options).then(function (e) {
          resolve(e);
        }).catch(function(e) {
           reject(Error("Error bruh"));
        });
      });      
    }
  };
})();

games = {};
 
gbotSportsAPI.getNbaGames().then(function(response) {
  //console.log("Success!", response);  
  getGameList(response);
  
}, function(error) {
  console.error("Failed!", error);
});

function getGameList(games) {
  console.log(games);
}



// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…
//   var gamesPromise = gbotSportsAPI.getNbaGames();

//   if (/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });

// promise.then(function(result) {
//   console.log(result); // "Stuff worked!"
// }, function(err) {
//   console.log(err); // Error: "It broke"
// });


// var gamesPromise = gbotSportsAPI.getNbaGames();
// console.log(gamesPromise);
// gamesPromise.then(function(data) {
//   console.log(data);
// }); 

// var games;
// games = gbotSportsAPI.getNbaGames()
// .then(function(e){
//   games = e.games;        
// })
// .catch(function(e){
        
// });

// console.log(games);
