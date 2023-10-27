const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const path = req.url;

    if (path === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync("./contact.html", "utf-8"));
    } else if (path === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync("./about.html", "utf-8"));
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync("./index.html", "utf-8"));
    }
    res.end();
  })
  .listen(3000, () => console.log("Server is running on port 3000 ..."));
