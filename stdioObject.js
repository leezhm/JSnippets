//
//  stdioObject.js
//
//  Description : 
//
//  Written by leezhm(C)126.com, PM10:51, 12-3-31
//
//  Copyright (C) leezhm(C)126.com 2012. All Right Reserved.
//
//  Last modified by leezhm(C)126.com on PM10:51, 12-3-31
//

console.log("Hello, This is a log message");
console.log("Log message with argument(both integer and float <%%s> )  : %d --> %d", 2012, 2020.20);
console.log("Log message with argument(string<%%s>) : %s", "Hello, Welcome to china!");

console.info("Same as log(), You can get more detail information from documents ... ");

console.warn("Same as log(), You can get more detail information from documents ... ");

console.error("Same as log(), You can get more detail information from documents ... ");

var name = "Node.js";
console.dir(name);

var count = 0;
console.time("0 --> 100000");
for(var i = 0; i < 100000; ++ i){
  count += i;
}
console.timeEnd("0 --> 100000");
console.log("We can use time and timeEnd to test efficiency ... ");

console.assert(1 == 1);

