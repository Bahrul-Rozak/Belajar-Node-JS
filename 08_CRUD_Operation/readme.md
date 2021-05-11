Setelah database dan struktur folder project dibuat saatnya menambahkan operasi CRUD pada project ini, dan sampai tulisan ini saya buat saya lupa untuk menampilkan set view pada browser hehe, oke langsung saja tambahkan code berikut pada file server.js

``` const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs"); 
```
Sehingga menjadi seperti berikut <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/add%20set%20view.png) <br>
Kemudian tambahkan code berikut ke dalam file server.js sebagai controller
### CREATE
```
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
```
### READ
```
app.get("/", (req, res) => {
  let sql = "SELECT * FROM product";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render("list", {
      results: results,
    });
  });
});
```
