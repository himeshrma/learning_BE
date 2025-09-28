// const cat_me = require("cat-me");
// console.log(cat_me());

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.end("Hello world");
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  if (req.url === "/home") {
    res.end("This is the home page");
  }
  if (req.url === "/abc") {
    res.end("maar khyega?");
  }
  if (req.url === "/") {
    res.end("okeeeee");
  }
});

server.listen(3000);
