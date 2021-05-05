Hari ini kita akan belajar Router dan Controller dan dipelajaran sebelumnya kita juga sudah membahas tentang router dan membuat web server. Akan Tetapi pada router sebelumnya kita menuliskan pada file yang sama dengan server, sehinnga jika aplikasi web tersebut semakin besar maka pengelolaannya akan semakin sulit. Nah untuk mengatasi hal tersebut maka kita perlu organisir rute kita agar lebih rapi dan tentu saja mudah untuk dimaintenance.
Buatlah folder baru pada proyek kita dengan nama routes dan isinya file router.js. Pindahkan kode dari file index.js yang mengandung rute ke file router.js dan tambahkan kode untuk method .Router() Sehingga susunan folder project akan seperti berikut <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/folder.jpg) <br>
Kemudian kita tambahkan code berikut ke file router.js <br>
```
const express = require("express");
const app = express();
app.get("/", function(request, response) {
    response.send("Assalamualaikum!");
});

app.get("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

app.post("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

app.put("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

app.delete("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

module.exports = app;
```


