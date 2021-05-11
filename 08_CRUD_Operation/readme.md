Setelah database dan struktur folder project dibuat saatnya menambahkan operasi CRUD pada project ini, dan sampai tulisan ini saya buat saya lupa untuk menampilkan set view agar client dapat dengan mudah melakukan interaksi pada browser hehe dan juga install depedencies tambahan Body-parser (middleware untuk menghandle post body request) dengan perintah
```
npm install body-parser
```
dan lihat akan ada depedencies baru pada package.json Anda <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/depedencies.png) <br>
kemudian buat folder dengan nama views dan buat file dengan nama product_view.hbs seperti ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/08_CRUD_Operation/image/folder.png)<br>
Kemudian tambahkan code berikut ke file product_view.hbs <br>
dan masuk ke local host untuk membuat table product dengan perintah 
```
CREATE TABLE product(
product_id INT(11) PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(200),
product_price INT(11) 
)ENGINE=INNODB;
```
seperti ini <br>
kemudian tekan go

