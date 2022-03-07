const http = require("http");
const port = 3001;
const server = http.createServer();
server.on("request", (req, res) => {
    console.log(`URL: ${req.url}`);
    res.end("Hello, server!");
});

server.listen(port, (err) => {
    if (err) return console.log(`error: ${err}`);

    console.log(`server is listening on port ${port}`);
});
