const net = require("net");
const coninfo = require("./constants")

// establishes a connection with the game server
// docs: https://nodejs.org/api/net.html#netcreateconnectionoptions-connectlistener
const connect = function () {
  const conn = net.createConnection(coninfo);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = connect;