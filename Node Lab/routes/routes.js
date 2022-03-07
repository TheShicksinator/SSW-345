const pool = require("../data/config");

const router = (app) => {
    app.get("/", (req, res) => {
        res.send({ message: "Node.js and Express REST API" });
    });

    app.get("/users", (req, res) => {
        res.send(users);
    });

    app.get("/handles", (req, res) => {
        pool.query("SELECT * FROM Handle", (err, results) => {
            if (err) {
                throw err;
            }

            res.send(results);
        });
    });

    app.get("/handles/:handle", (req, res) => {
        const handle = req.params.handle;
        pool.query(
            "SELECT * FROM Handle WHERE handle = ?",
            handle,
            (err, results) => {
                if (err) {
                    throw err;
                }

                res.send(results);
            }
        );
    });

    app.post("/handles", (request, response) => {
        pool.query(
            "INSERT INTO Handle SET ?",
            request.body,
            (error, result) => {
                if (error) throw error;

                response.status(201).send(`Developer added`);
            }
        );
    });
};

const users = [
    {
        id: 1,
        name: "Instructor",
        email: "instructor_345@stevens.edu",
    },
    {
        id: 2,
        name: "TA",
        email: "TA_345@stevens.edu",
    },
];

module.exports = router;
