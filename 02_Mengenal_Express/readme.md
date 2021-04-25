Setelah kita mempelajari bagaimana cara instalasi Node Js kemudian menggunakan mode REPL pada terminal Node JS, kini saatnya kita mempelajari apa itu express?

### Apa itu Express??

Meskipun proses pembuatan web dapat dilakukan secara manual tanpa menggunakan framework, akan tetapi jika Anda ingin mempercepat atau mempermudah proses tersebut menggunakan salah satu framework untuk node js adalah pilihan yang tepat. Ada beberapa framework yang sering digunakan oleh pengguna node js antara lain adalah Express, Sails, Meteor dan di sini kita akan belajar tentu saja framework Express, ada hal unik dari sejarah terbentuknya Framework Express ternyata terbentuknya Framework ini terinspirasi oleh Sinatra, yaitu web framework minimalis untuk bahasa pemrograman Ruby dan nyatanya Express pun merupakan framework minimalis, minimalis di sini bukan berarti Express tidak dapat digunakan untuk aplikasi berskala besar akan tetapi lebih mengarah ke isi dari Express itu sendiri yang hanya berisi modul-modul inti untuk memudahkan pengguna dan Express masih mengizinkan pengguna untuk menambah dan memasang modul-modul lain sesuai dengan kebutuhan si pengguna, mantap :v

### Menggunakan Express

Untuk dapat menggunakan express Anda terlebih dahulu harus menyiapkan satu buah folder project dan letakkan folder tersebut di tempat yang mudah Anda temukan, di sini saya akan meletakan folder tersebut pada Desktop :v <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/mkdir.png) <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/projectfolder.png) <br>
Kemudian lakukan inisialisasi pada project Anda dengan menggunakan perintah <br>

```
npm init
```

pada terminal Anda <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/initial.png)<br>
kemudian Anda akan di minta untuk melengkapi file project Anda untuk membuat sebuah file package.json yang berguna untuk mengontrol project Anda <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/inputdata.png) <br>
Jika Anda mendapatkan perintah yes langsung saja enter, maka akan muncul tampilan seperti ini <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/enter.png) <br>
Kemudian langsung saja Anda buka visual studio code Anda kemudian buka folder project tersebut <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/openvscode.png) <br>
Dan Anda akan melihat file package.json tersebut, keren min :v <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/filejson.png) <br>
Nah kemudian Anda Install Expressnya, bisa mengunakan terminal pada Visual Studio Code atau Langsung pada terminal device Anda :v <br>
menggunakan perintah <br>

```
npm install express --save
```

![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/installexpress.png) <br>
Kemudian Anda lihat kembali file package.json Anda maka Anda akan melihat express dan versinya <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/valid.png) <br>
Ajaib min :v dan untuk saat ini kalian telah berhasil melakukan setup workspace untuk project Anda

### Membuat Web Server

Web server adalah perangkat lunak yang berfungsi sebagai penerima permintaan yang dikirimkan melalui browser kemudian memberikan tanggapan permintaan dalam bentuk halaman situs web atau lebih umumnya dalam dokumen HTML, tapi bisa juga berupa suara, gambar, json, xml atau lainnya.
<br>
Pada project buatlah file baru dengan nama index.js yang isinya seperti berikut ini.

```
const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Webserver Bahrul Rozak");
});

app.listen(5000, function () {
  console.log(`Server running on http://localhost:5000`);
});

module.exports = app;
```

![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/webserver.png) <br>
dan untuk menjalankan Anda ketik perintah pada terminal <br>

```
node index.js
```

![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/runserver.png)<br>
Dan Anda akan melihat bahwa server berjalan di localhost 5000 kemudian Anda copy saja link tersebut dan tempelkan pada browser Anda <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/02_Mengenal_Express/image/result.png) <br>
dan Anda telah berhasil membuat web server pertama Anda, alhamdulillah
