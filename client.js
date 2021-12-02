const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host:"165.227.47.243",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', data => console.log(data));
  conn.on('connect', () => {
    console.log('Succesfully connected to game server');
    conn.write('Name: As');
    conn.write("Move: down")
  });
  return conn;
}

console.log("connecting...");
connect(); 
