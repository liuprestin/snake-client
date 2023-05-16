const net = require("net");

// establishes a connection with the game server
// docs: https://nodejs.org/api/net.html#netcreateconnectionoptions-connectlistener
const connect = function () {
  const conn = net.createConnection({
    host: '10.44.20.115',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();