const net = require("net");
const connect = require("./client.js");
const setupInput = require("./input.js")


console.log("Connecting ...");
conn = connect();
stdin = setupInput();

conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("connected");
  conn.write("Name: CAT");
  conn.write("Move: up");
  
});

const handleUserInput = function (inputKey) {
  // your code here
  /*
  //movement commands
  conn.write("Move: up");
  conn.write("Move: down");
  conn.write("Move: left");
  conn.write("Move: right");


  https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event

  */
 if (inputKey === '\u0003'){
  process.exit();
 }
};

//Event listeners
stdin.on("data", handleUserInput);