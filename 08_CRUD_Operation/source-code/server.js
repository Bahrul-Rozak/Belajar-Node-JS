const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//server listening
app.listen(5000, () => {
  console.log("Server berjalan pada port 5000");
});

//konfigurasi koneksi
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "",
  database: "express_db",
});
//connect ke database
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Terhubung");
});
// CREATE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/save", (req, res) => {
  let data = {
    product_name: req.body.product_name,
    product_price: req.body.product_price,
  };
  let sql = "INSERT INTO product SET ?";
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});
// READ
app.get("/", (req, res) => {
  let sql = "SELECT * FROM product";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render("list", {
      results: results,
    });
  });
});
// UPDATE
app.post("/update", (req, res) => {
  let sql =
    "UPDATE product SET product_name='" +
    req.body.product_name +
    "', product_price='" +
    req.body.product_price +
    "' WHERE id=" +
    req.body.id;
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});
// DELETE
app.post("/delete", (req, res) => {
  let sql = "DELETE FROM product WHERE id=" + req.body.product_id + "";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});
