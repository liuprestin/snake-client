const net = require("net");
const connect = require("./client.js");

conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("connected");
  });

console.log("Connecting ...");
connect();