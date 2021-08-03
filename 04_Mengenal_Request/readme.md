Setelah kita memahami apa itu Route dan telah berhasil membuat route kini saatnya kita mempelajari apa itu Request? Sebelum mulai marilah kita membaca bismillahirrahmanirrahim

### HTTP Method

Tapi sebelum kita mempelajari Request mari kita berkenalan dulu dengan HTTP Method, Apa sih HTTP Method itu? HTTP method adalah method-method yang disediakan server sebagai sarana untuk melakukan request terhadap server. Jadi kira-kira seperti itu ya teman-teman tentang HTTP Method hehe, atau kalau teman-teman mau tahu lebih detail atau lengkap silahkan kunjungi [disini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Request

Mari perhatikan gambar berikut ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/04_Mengenal_Request/image/req.png) <br>
Berdasarkan gambar dapat kita lihat bahwasanya kita atau user melakukan request terhadap server dengan method http melalui url atau alamat server tersebut. HTTP method yang telah dijelaskan sebelumnya dipakai sebagai pengenal untuk mengirimkan permintaan terhadap server. Yuk langsung saja ketik atau tambahkan code berikut ke file index.js
```javascript
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
Kemudian kita uji dan ini adalah hasil dengan menggunakan insomnia <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/04_Mengenal_Request/image/result.jpg) <br>
Express telah menyediakan properti-properti yang bertindak sebagai request, berikut beberapa daftar request yang disediakan oleh express:
[Silahkan baca disini](https://www.javatpoint.com/expressjs-request) <br>
Nah dari sekian banyak properti kita akan mencoba menggunakan salah satunya saja yaitu .query <br>
?detail=harga&produk=baru <br>
Kemudian kita tambahkan code berikut dan uji lagi dengan insomnia :v <br>
```javascript
app.get("/halaman-website", (req, res) => {
    res.send("halaman-website dengan http " + req.query.detail + " dan " + req.query.produk);
});
```
Penulisan query pada request diawali dengan tanda ? setelah endpoint, dan jika ada beberapa query dipisahkan dengan tanda &. Query memiliki key dan value, key sebelah kiri dari tanda = dan value berada pada sebelah kanan tanda = <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/04_Mengenal_Request/image/query.jpg) <br>

### Response
Ada satu lagi yang lupa saya buat yaitu response, Kebalikan dari request, response adalah proses layanan yang diberikan server pada client yang melakukan request. Sama halnya dengan request, function atau method response sangat banyak yang disediakan oleh express. contoh penggunaan .redirect()
```javascript
app.get("/profile", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.send("silahkan Login terlebih dahulu");
});
```
Alhamdulillah pembahasan Request dan Response telah selesai, apabila repository ini bermanfaat jangan lupa di share ke teman - teman yang lain agar semakin banyak yang belajar.
_Thank You!




