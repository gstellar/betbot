Game = function Game(data, index) {
    var self = this;
    if(index !== undefined)
        self.gameNumber = index + 1;
    if(data.label !== undefined)
        self.label = data.label;
    if(data.away_team_score !== undefined)    
        self.awayScore = data.away_team_score;
    if(data.home_team_score !== undefined) 
        self.homeScore = data.home_team_score;
    if(data.on !== undefined){
        var result = data.on;
        self.date = result.substring(result.indexOf(' ') + 1);
    }
    if(data.name !== undefined){
        var result = data.name;
        self.time = result.substring(result.indexOf('at') + 2).trim();
    }
    if(data.status !== undefined) 
        self.status = data.status;
}