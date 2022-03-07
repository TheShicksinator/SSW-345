const mysql = require("mysql");

const config = {
    //this gave me access denied, problem with the instructions I guess
    host: "162.243.235.211",
    user: "user345",
    password: "password1@",
    database: "db345",
};

const pool = mysql.createPool(config);

module.exports = pool;
