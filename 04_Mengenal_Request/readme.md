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
Kemudian kita uji dan ini adalah hasil dengan menggunakan insomnia <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/04_Mengenal_Request/image/result.jpg) <br>
Express telah menyediakan properti-properti yang bertindak sebagai request, berikut beberapa daftar request yang disediakan oleh express:
| Properti  | Deskripsi |
| -----  | --- |
| .app     | Referensi object pada express    |
| .cookies | Berisi informasi cookie yang dikirim, ini dapat digunakan jika menggunakan middleware cookie-parser|
| .hostname | Informasi hosname web server |
| .ip | Informasi IP server |
| .method | HTTP Methode yang digunakan |
| .params | Menampilkan informasi sesuai dengan nama parameter |
| .path | Menampilkan informasi jalur URL |
| .protocol | Menampilkan protocol request |
| .query | Objek yang berisi informasi query dari request yang berlangsung |
| .secure | true jika request merupakan reques yang secure (digunakan pada HTTPS |
| .signedCookies | Berisi signed cookies oleh request, dapat digunakan jika menggunakan middleware cokie-parser |
| .xhr | Bernilai true jika request adalah XMLHttpRequest |
| .body | Berisi data yang dituliskan pada body request |
| .header | Berisi data yang dituliskan pada header request |
| .baseUrl | Informasi pengalamatan utama web server |
| .originalUrl | Informasi pengalamatan request dilakukan |
<br>
Nah dari sekian banyak properti kita akan mencoba menggunakan salah satunya saja yaitu .query <br>
?detail=harga&produk=baru <br>
Kemudian kita tambahkan code berikut dan uji lagi dengan insomina :v <br>
Penulisan query pada request diawali dengan tanda ? setelah endpoint, dan jika ada beberapa query dipisahkan dengan tanda &. Query memiliki key dan value, key sebelah kiri dari tanda = dan value berada pada sebelah kanan tanda = <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/04_Mengenal_Request/image/query.jpg) <br>




