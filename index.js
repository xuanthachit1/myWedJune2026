const express = require("express");
console.log("Index.js started");

const { query } = require("./localdb");

const {
    sql,
    insert,
    update,
    remove
} = require("./query");

const app = express();

app.use(express.json());

const PORT = 3399;

/*
    READ
*/
app.get("/api/localdb", async (req, res) => {

    try {

        const result = await query(sql);

        res.json({
            query: result
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

/*
    CREATE
*/
app.post("/api/student", async (req, res) => {

    try {

        await query(insert);

        res.json({
            message: "Insert success"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

/*
    UPDATE
*/
app.put("/api/student", async (req, res) => {

    try {

        await query(update);

        res.json({
            message: "Update success"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

/*
    DELETE
*/
app.delete("/api/student", async (req, res) => {

    try {

        await query(remove);

        res.json({
            message: "Delete success"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

/*
    START SERVER
*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});