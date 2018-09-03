var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        var newScores = newFriend.scores;
        var minTotalDifference = 1000;
        var result = "";

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < newScores.length; j++) {
                totalDifference += Math.abs(parseInt(newScores[j]) - parseInt(friends[i].scores[j]));
            }
            if (totalDifference < minTotalDifference) {
                minTotalDifference = totalDifference;
                result = friends[i].name;
            }
        }
        
        friends.push(newFriend);
        res.json(result);
    })
}