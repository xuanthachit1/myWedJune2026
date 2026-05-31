const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "studentsreg"
});


connection.connect((err) => {
    if (err) {
        console.log("Database error:", err.message);
        return;
    }

    console.log("Connected to MySQL");
});

const query = (sql) => {
    return new Promise((resolve, reject) => {

        connection.query(sql, (err, results) => {

            if (err) {
                reject(err);
                return;
            }

            resolve(results);

        });

    });
};

module.exports = {
    connection,
    query
};