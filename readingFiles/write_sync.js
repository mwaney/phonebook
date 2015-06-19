var fs = require("fs");
console.log("starting..");
//fs.writeFileSync("write_sync.txt","hello world synchronous! ");
fs.writeFile("write_sync.txt","hello world again! ", function(error){
    console.log('Written File')
});
console.log("Finished");