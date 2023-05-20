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

// Keyboard input handling
// stdin uses ansi escape sequences
// like in here https://tldp.org/HOWTO/Bash-Prompt-HOWTO/x361.html
const handleUserInput = function (inputKey) {



//escape
 if (inputKey === '\u0003'){
  process.exit();
 }
 if (inputKey === '\x1b[A')
 {
  conn.write("Move: up");
 }
 else if (inputKey === '\x1b[B')
 {
  conn.write("Move: down");
 }
 else if (inputKey === '\x1b[D')
 {
  conn.write("Move: left");
 }
 else if (inputKey === '\x1b[C')
 {
  conn.write("Move: right");
 }


};

//Event listeners
stdin.on("data", handleUserInput);