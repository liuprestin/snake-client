const net = require("net");
const connect = require("./client.js");
const setupInput = require("./input.js");
const readline = require("readline");

console.log("Connecting ...");
conn = connect();
stdin = setupInput();

conn.on("connect", () => {
  console.log("connected!");
  conn.write("Name: CAT");
  conn.write(`Say: a CAT snake has joined the scene`);
});

const rTTY = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Keyboard input handling
// stdin uses ansi escape sequences
// like in here https://tldp.org/HOWTO/Bash-Prompt-HOWTO/x361.html
const handleUserInput = function (inputKey) {
  //ctrl-c to exit the client
  if (inputKey === "\u0003") {
    process.exit();
  }

  // <spacebar> to post a message
  if (inputKey === " ") {
    rTTY.question("Message:", (answer) => {
      conn.write(`Say: ${answer}`);

      rTTY.close();
    });
  }

  // control the snake
  if (inputKey === "\x1b[A") {
    conn.write("Move: up");
  } else if (inputKey === "\x1b[B") {
    conn.write("Move: down");
  } else if (inputKey === "\x1b[D") {
    conn.write("Move: left");
  } else if (inputKey === "\x1b[C") {
    conn.write("Move: right");
  }
};

//Event listeners
stdin.on("data", handleUserInput);
