var fs  = require("fs");
console.log("Started");
var config = JSON.parse(fs.readFileSync("config.json"));
console.log("initial Config: ", config);
fs.watchFile('config.json', function(current, previous){
    console.log("Config has changed");
    config = JSON.parse(fs.readFileSync('config.json'));
    console.log("new Config file");
    console.log("initial Config: ", config);
});