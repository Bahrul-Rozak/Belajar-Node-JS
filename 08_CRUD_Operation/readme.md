Setelah database dan struktur folder project dibuat saatnya menambahkan operasi CRUD pada project ini, dan sampai tulisan ini saya buat saya lupa untuk menampilkan set view agar client dapat dengan mudah melakukan interaksi pada browser hehe dan juga install depedencies tambahan Body-parser (middleware untuk menghandle post body request) dengan perintah
```
npm install body-parser
```
dan lihat akan ada depedencies baru pada package.json Anda <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/depedencies.png) <br>
kemudian buat folder dengan nama views dan buat file dengan nama product_view.hbs seperti ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/folder.png)<br>
Kemudian tambahkan [code](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/source-code/views/product_view.hbs) berikut ke file product_view.hbs <br>
dan masuk ke local host untuk membuat table product dengan perintah 
```mysql
CREATE TABLE product(
product_id INT(11) PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(200),
product_price INT(11) 
)ENGINE=INNODB;
```
seperti ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/localhost.png)<br>
kemudian tekan go <br>
dan tambahkan [code](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/source-code/server.js) berikut ke dalam file server.js <br>
kemudian jalankan dengan perintah 
```
node server.js
```
seperti ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/run.png)
kemudian masuk ke localhost:8000 dan cobalah lakukan operasi CRUD <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/CRUD.png) <br>

### Preview
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/CRUD.gif)<br>

Alhamdulillah Materi Node Js sudah selesai dan kita sudah mempelajari mulai dari apa itu node JS, kemudian install node js, mengenal request dan respon dan masih banyak lagi dan terakhir kita juga telah membuat project yang sederhana. <br>
Apabila repositori ini bermanfaat jangan lupa share ke yang lain agar bermanfaat juga untuk teman - teman yang lain<br>
Mohon maaf bila ada kesalahan penulisan atau kata-kata admin yang tidak sopan
Thank you! <br>
Sampai jumpa di materi berikutnya ! <br>
Assalamualaikum!


