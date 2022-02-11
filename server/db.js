const { Pool } = require("pg");

const pool = new Pool({
  user: "dedejruz",
  password: "kTf8C02zE7SnD9HbEXdtv4NvtDhTQigI",
  host: "surus.db.elephantsql.com",
  port: 5432,
  database: "dedejruz"
});
console.log("Successful connection to the database");

//module.exports = pool;

module.exports = {
  query: (text, params) => pool.query(text, params),
}