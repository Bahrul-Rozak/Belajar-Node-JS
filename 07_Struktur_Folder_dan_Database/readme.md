Setelah semua tools sudah dipersiapkan kini saatnya membuat struktur untuk project dan database tentunya.

### Project

1. Buat folder baru untuk project Anda <br>
   ![projectBaru](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/07_Struktur_Folder_dan_Database/image/newProject.png)
2. Kemudian masuk ke directori project Anda dan seperti biasa npm init untuk mendapatkan file package.json hehehe Kemudian isikan beberapa pertanyaan seperti versi, author dan sebagainya <br>
   ![npminit](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/07_Struktur_Folder_dan_Database/image/npm_init.png)
3. Kemudian Install package express, mysql, dan hbs dengan cara :

```
npm install express
npm install mysql
npm install hbs
```

dan akan muncul depedencies pada package.json Anda <br>
![depedencies](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/07_Struktur_Folder_dan_Database/image/depedencies.png)
Buat file Buatlah file server server.js untuk menjalankan server nodejs. Tambahkan kode berikut

```
const express = require("express");
const app = express();
//server listening
app.listen(5000, () => {
console.log("Server berjalan pada port 5000");
});
```

Kemudian buatlah database pada mysql, boleh menggunakan phpmysql biar lebih cepat dengan nama express_db (hanya contoh saja). Tapi sebelum itu nyalakan LAMPP Anda, kemudian masuk localhost
![LAMPP]()
![LocalHost]()
Edit kembali server.js dan tambahkan kode untuk koneksi express dengan mysql seperti berikut ini.

```
const mysql = require("mysql");
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
```
