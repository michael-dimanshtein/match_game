//get route to /survey which displays survey page
//default use route that leads to home.html

var path = require("path");

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survery.html"));
    });

    //default to home
    app.use(function(req,res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};