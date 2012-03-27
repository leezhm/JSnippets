//
//  globalObject.js
//
//  Written by leezhm(c)126.com, 27th March, 2012.
//
//  Last modified by leezhm(c)126.com on 27th March, 2012.
//

var util = require("util");

// process
console.log("Version      : " + process.version);
console.log("Prefix       : " + process.installPrefix);
console.log("Pid          : " + process.pid);
console.log("Platform     : " + process.platform);
console.log("Memory       : " + util.inspect(process.memoryUsage()));
console.log("Cur Work Dir : " + process.cwd());
console.log("File Name    : " + __filename);
console.log("Execute Path : " + process.execPath);
console.log("Architecture : " + process.arch);
console.log("Up Time      : " + process.uptime());

// Show the user environment
//console.log("Environment  : " + util.inspect(process.env));

console.log("Versions     : " + process.versions);

process.on("exit", function(){
  process.nextTick(function(){
    console.log("This will not run ... ");
  });

  console.log("\nAbout to exit ... ");
});

// Deal with all uncaught exceptions
process.on("uncaughtException", function(error){
  console.log("Uncaught Exception -> " + error);
});