Setelah kita memahami apa itu Route dan telah berhasil membuat route kini saatnya kita mempelajari apa itu Request? Sebelum mulai marilah kita membaca bismillahirrahmanirrahim

### HTTP Method

Tapi sebelum kita mempelajari Request mari kita berkenalan dulu dengan HTTP Method, Apa sih HTTP Method itu? HTTP method adalah method-method yang disediakan server sebagai sarana untuk melakukan request terhadap server. Jadi kira-kira seperti itu ya teman-teman tentang HTTP Method hehe, atau kalau teman-teman mau tahu lebih detail atau lengkap silahkan kunjungi [disini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Request
Mari perhatikan gambar berikut ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/04_Mengenal_Request/image/req.png) <br>
Berdasarkan gambar dapat kita lihat bahwasanya kita atau user melakukan request terhadap server dengan method http melalui url atau alamat server tersebut. HTTP method yang telah dijelaskan sebelumnya dipakai sebagai pengenal untuk mengirimkan permintaan terhadap server. Yuk langsung saja ketik atau tambahkan code berikut ke file index.js
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

app.listen(5000, function() {
    console.log(`Server running on http://localhost:5000`);
});

module.exports = app;
```
