const net = require("net");
const coninfo = require("./connection_info")

// establishes a connection with the game server
// docs: https://nodejs.org/api/net.html#netcreateconnectionoptions-connectlistener
const connect = function () {
  const conn = net.createConnection(coninfo);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("connected");
  conn.write("Name: CAT");
  /*
  //movement commands
  conn.write("Move: up");
  conn.write("Move: down");
  conn.write("Move: left");
  conn.write("Move: right");
  */
});

module.exports = connect;