Setelah database dan struktur folder project dibuat saatnya menambahkan operasi CRUD pada project ini, dan sampai tulisan ini saya buat saya lupa untuk menampilkan set view pada browser hehe, oke langsung saja tambahkan code berikut pada file server.js

```
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
```
