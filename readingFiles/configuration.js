var fs = require("fs");
console.log("starting");
var content = fs.readFileSync("config.json");
console.log("content: "+content);
var config = JSON.parse(content);
console.log("Config : "+config);
console.log("Username : ",config.username);