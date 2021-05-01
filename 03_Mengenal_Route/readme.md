Alhamdulillah setelah kita berhasil membuat web server dan menjalankannya, hari ini kita akan belajar mengenal Route, sebelum mulai marilah kita membaca bismillahirrahmanirrahim <br>

### Apa itu Route?

Mendengar kata atau istilah Route pasti teman-teman akan terbayang bahwa itu adalah jalan, yap itulah yang dinamakan dengan route atau rute dalam bahasa Indonesianya. Jadi apa sih rute itu? Rute adalah jalan atau jalur yang mengarahkan user atau pengguna melakukan request ke web server sehingga mendapat response dari web server tersebut. Alhamdulillah sampai sini teman-teman sudah mengenal dan memahami apa itu Rute, kemudian ada beberapa hal lagi yang harus teman-teman pahami dalam belajar rute apa saja itu? Untuk membuat Rute teman-teman harus sedikit memahami konsep HTTP Method secara sederhana yaitu:

1. GET
2. POST
3. PUT / PATCH
4. DELETE

Pada express teman-teman tidak perlu khawatir masalah penggunaan Route atau rute karena HTTP Methode ini pada express telah menyediakan function yang biasa dipakai yaitu: get() , post() , put() , delete() , patch().

```
app.get("/", (req, res) => {
/* */
});
app.post("/", (req, res) => {
/* */
});
app.put("/", (req, res) => {
/* */
});
app.delete("/", (req, res) => {
/* */
});
app.patch("/", (req, res) => {
/* */
});
```

Yuk langsung saja kita coba membuat Route sederhana 
```
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Assalamualaikum, halo selamat datang di web pertama saya");
});
app.listen(5000, (req, res) => {
    console.log("Server is running with <http://localhost:5000>");
});
```
Jika Anda jalankan maka akan muncul seperti ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/03_Mengenal_Route/image/rute.png) <br>

kemudian  tambahkan rute /about 
```
app.get('/', (req, res) => {
    res.send('ini rute utama atau root')
})
app.get('/about', (req, res) => {
    res.send('ini rute /about')
})
```
Jika Anda jalankan maka akan muncul seperti ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/03_Mengenal_Route/image/about.png) <br>

Sehingga kode menjadi seperti ini 
```
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Assalamualaikum, halo selamat datang di web pertama saya");
});
app.listen(5000, (req, res) => {
    console.log("Server is running with <http://localhost:5000>");
});
app.get('/', (req, res) => {
    res.send('ini rute utama atau root')
})
app.get('/about', (req, res) => {
    res.send('ini rute /about')
})
```
