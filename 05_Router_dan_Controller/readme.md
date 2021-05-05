Hari ini kita akan belajar Router dan Controller dan dipelajaran sebelumnya kita juga sudah membahas tentang router dan membuat web server. Akan Tetapi pada router sebelumnya kita menuliskan pada file yang sama dengan server, sehinnga jika aplikasi web tersebut semakin besar maka pengelolaannya akan semakin sulit. Nah untuk mengatasi hal tersebut maka kita perlu organisir rute kita agar lebih rapi dan tentu saja mudah untuk dimaintenance.

### Langkah-langkah
1. Buatlah folder baru pada proyek kita dengan nama routes dan isinya file router.js. 
2. Pindahkan kode dari file index.js yang mengandung rute ke file router.js dan tambahkan kode untuk method .Router() 
3. Sehingga susunan folder project akan seperti berikut <br>

![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/folder.jpg) <br>
Kemudian kita tambahkan code berikut ke file router.js copy code [disini](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/routes/router.js)<br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/router.png) <br>
Kemudian kita rubah file index.js dengan menambahkan kode berikut <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/index.png) <br>
Kemudian kita uji coba kembali menggunakan insomnia dan jika tidak ada perubahan maka kita telah berhasil memisahkan antara file server dengan router <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/hasil.png) 

### Controller
Controller adalah proses melakukan kontrol atau logika dan komputasi pada sebuah aplikasi sebelum dikirimkan ke user sebagai response. Disini kontrol masih bergabung dengan router. Mari kita buat sebuah folder dengan nama controller <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/foldercontroller.png) <br>
dan buat sebuah file dengan nama website.controller.js copy code [disini](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/controller/website.controller.js)<br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/05_Router_dan_Controller/image/website.png) <br>
Modifikasi file router.js menjadi seperti berikut. <br>



