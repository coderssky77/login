console.log("Starting");
console.log("Starting");

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body


console.log("You're reach the this place");


app.get("/", async (req, res) => {

  console.log("You're in the database");
    try {
      const allTodos = await pool.query("SELECT * FROM users");
      console.log("You're in the query");

      res.json(allTodos.rows);

      console.log("Id: ", allTodos.rows[0].id);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
  

