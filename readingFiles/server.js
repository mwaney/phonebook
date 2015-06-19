
var fs = require("fs");
console.log("starting");
fs.readFile("sample.txt", function(error, data){
    console.log('content of the file : '+data);
});
console.log("carry on executing");