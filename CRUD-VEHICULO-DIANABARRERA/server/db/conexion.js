const mysql = require("mysql2");

module.exports.pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"web-app"
});