var fs = require("fs");
console.log("starting");
var content = fs.readFileSync("sample.txt");
console.log("content: "+content);
console.log("carry on executing");