const express = require("express");
const http = require("http");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASWORD,
});

con.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection established");
});

con.end((err) => {});

const app = express();

const server = http.createServer(app);

app.get("/", function (req, res) {
  res.send("Hello World");
});

server.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});
