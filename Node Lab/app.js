const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

const server = app.listen(port, (err) => {
    if (err) return console.log(`error: ${err}`);
    console.log(`server is listening on port ${server.address().port}`);
});
