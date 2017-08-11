//get route with the url api/friends. used to display a json of all possible friends
//post route api/friends. used to handle incoming survey results + logic

var friend = require("../data/friends");

console.log(friend);

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friend);
    });

    app.post("api/friends", function(req,res){
        res.json("yes");
    });

    

};



