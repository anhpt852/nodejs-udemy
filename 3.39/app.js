const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>Assignment 1</head>");
    res.write(
      `<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit"></button></input></form></body>`
    );
    res.write("</html>");
    res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head>Assignment 1</head>");
    res.write(
      "<body><ul><li>item 1</li><li>item 2</li><li>item 3</li></ul></body>"
    );
    res.write("</html>");
    res.end();
  }

  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString;
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }

  //Send a HTML response with some "Page not found text"
});

server.listen(3000);
