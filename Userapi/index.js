const http = require("http");
const fs = require("fs");
const chalk = require("../npmMod/node_modules/chalk");
const server = http.createServer((req, response) => {
  // console.log(req.url);
  if (req.url == "/") {
    response.end("Home");
  } else if (req.url == "/about") {
    response.end("About");
  } else if (req.url == "/contact") {
    response.end("Contact");
  } else if (req.url == "/user") {


    fs.readFile(`${__dirname}/userapi.json`, "UTF-8", (err, data) => {
      if (data == null) {
        console.log(chalk.red.greenBright(err));
      } else {      
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>404 || ERROR PAGE");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log(chalk.green.inverse("Listening to the post 8000............"));
});
