var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        var input = req.body;
        var responses = input.scores;
        var differance = 1000;
        var yourFriend = "";
        
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < responses.length; j++) {
                totalDifference += Math.abs(parseInt(responses[j]) - parseInt(friends[i].scores[j]));
            }
            if (totalDifference < differance) {
                differance = totalDifference;
                yourFriend = friends[i].name;
            }
        }
        
        friends.push(input);
        res.json(yourFriend);
    })
}