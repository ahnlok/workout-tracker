const path = require("path");

module.exports = function(app){
    // Getting exercise page
    app.get("/exercise", function (req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // Get Main Page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname,"../public/index/html"));
    });
    // Get Stats Page
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}