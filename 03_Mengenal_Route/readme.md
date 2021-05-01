Alhamdulillah setelah kita berhasil membuat web server dan menjalankannya, hari ini kita akan belajar mengenal Route, sebelum mulai marilah kita membaca bismillahirrahmanirrahim <br>

### Apa itu Route?

Mendengar kata atau istilah Route pasti teman-teman akan terbayang bahwa itu adalah jalan, yap itulah yang dinamakan dengan route atau rute dalam bahasa Indonesianya. Jadi apa sih rute itu? Rute adalah jalan atau jalur yang mengarahkan user atau pengguna melakukan request ke web server sehingga mendapat response dari web server tersebut. Alhamdulillah sampai sini teman-teman sudah mengenal dan memahami apa itu Rute, kemudian ada beberapa hal lagi yang harus teman-teman pahami dalam belajar rute apa saja itu? Untuk membuat Rute teman-teman harus sedikit memahami konsep HTTP Method secara sederhana yaitu:

1. GET
2. POST
3. PUT / PATCH
4. DELETE

Pada express teman-teman tidak perlu khawatir masalah penggunaan Route atau rute karena HTTP Methode ini pada express telah menyediakan bisa dipakai yaitu: get() , post() , put() , delete() , patch().

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
