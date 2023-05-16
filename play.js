const net = require("net");
const connection_info = require("./connection_info");

// establishes a connection with the game server
// docs: https://nodejs.org/api/net.html#netcreateconnectionoptions-connectlistener
const connect = function () {
  const conn = net.createConnection(connection_info);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();