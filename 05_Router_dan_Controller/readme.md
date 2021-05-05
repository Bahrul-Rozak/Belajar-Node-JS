Hari ini kita akan belajar Router dan Controller dan dipelajaran sebelumnya kita juga sudah membahas tentang router dan membuat web server. Akan Tetapi pada router sebelumnya kita menuliskan pada file yang sama dengan server, sehinnga jika aplikasi web tersebut semakin besar maka pengelolaannya akan semakin sulit. Nah untuk mengatasi hal tersebut maka kita perlu organisir rute kita agar lebih rapi dan tentu saja mudah untuk dimaintenance.
Buatlah folder baru pada proyek kita dengan nama routes dan isinya file router.js. Pindahkan kode dari file index.js yang mengandung rute ke file router.js dan tambahkan kode untuk method .Router() Sehingga susunan folder project akan seperti berikut <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/folder.jpg) <br>
Kemudian kita tambahkan code berikut ke file router.js <br>
```
const router = require("express").Router();

router.get("/", function(request, response) {
    response.send("Assalamualaikum");
});

router.get("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.post("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.put("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.delete("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.get("/halaman-website", (req, res) => {
    res.send("halaman-website dengan http " + req.query.detail + " dan " + req.query.produk);
});

router.get("/profile", (req, res) => {
    res.redirect("/login");
});

router.get("/login", (req, res) => {
    res.send("silahkan Login terlebih dahulu");
});

module.exports = router;
```
Kemudian kita rubah file index.js dengan menambahkan kode berikut 
```
const express = require("express");
const app = express();
const router = require("./routes/router.js");

app.use("/", router);

app.listen(5000, function () {
  console.log(`Server running on http://localhost:5000`);
});

module.exports = app;
```
Kemudian kita uji coba kembali menggunakan insomnia dan jika tidak ada perubahan maka kita telah berhasil memisahkan antara file server dengan router <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/hasil.png)


