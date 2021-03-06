### REPL Mode

Hari ini kita akan mempelajari REPL Mode pada Node JS tapi sebelum itu pastikan Node Js kalian telah berhasil terinstall ke dalam komputer atau laptop kalian, untuk memastikan hal tersebut kalian ketikan perintah
node -v dan npm -v apabila sudah muncul versi node atau npm berarti sudah aman :v <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/check.png) <br>

### Apa itu REPL Mode ?
REPL Mode adalah sebuah mode interaktif yang dapat digunakan dalam Node JS dan mode ini terdiri dari yaitu: <br>
R = Read 
E = Eval
P = Print
L = Loop <br>
Jadi REPL ini adalah mode yang dapat melakukan membaca input kemudian mengevaluasi kode yang telah dibaca kemudian Menampilkan hasil dan mode (Read, Eval, Print) tersebut dapat diulangi atau di Loop secara terus menerus, sampai bosan :v 

### Menjalankan Mode REPL
Untuk menjalankan mode REPL ini, ketikan node pada terminal kalian kemudian ENTER <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/image.png) <br>
Di Mode REPL ini Anda dapat melakukan operasi matematika dasar seperti penjumlahan, pengurangan,pembagian, perkalian, mantap :v <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/operasimatematika.png) <br>
dan tentu tidak lupa bahwa Node JS ini adalah runtime enviroment Javascript, maka Anda dapat menulis code JavaScript dan mengeksekusinya <br>
```javascript
console.log("Hai!!")
```
```javascript
var x = 5 
var i
for (i=0; i <x; i++){
    console.log(i)
}
```
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/codejs.png) <br>
Seperti yang Anda lihat undefined akan di tampilkan di terminal hal ini menunjukkan bahwa perintah yang dieksekusi tidak akan mengembalikan nilai, keren :v 
<br>
Selain itu dengan Terminal REPL Anda dapat melakukan hal keren lainnya seperti <br>
1. Menulis Ekpresi sederhana <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/ekpresi.png) <br>
2. Menyimpan nilai terakhir <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/menyimpan.png) <br>
Dengan menggunakan tanda underscore Node Js dapat menyimpan nilai yang terakhir kali di eksekusi 
3. Menggunakan variable <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/anonymousvar.png) <br>
Seperti yang Anda lihat di atas variable a di definisikan tanpa menggunakan keyword var, dan oleh karena itu nilainya akan langsung di cetak dan ketika Anda menggunakan keyword var maka Anda dapat dengan mudah memanggil variable tersebut saat di butuhkan contohnya seperti ini :v <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/variable.png) <br>
Nah seperti yang Anda lihat Anda dapat menggunakan variable tersebut kapanpun Anda membutuhkannya, contoh lain <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/var.png) <br>
Mantap kan? Lanjut? Lanjuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuut! <br>

### Beberapa Baris Perintah 
Kalau sebelumnya kita hanya menggunakan perintah atau mode REPL ini hanya satu baris saja, ternyata kita pun dapat menggunakan perintah untuk banyak baris, mantap :v <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/multirow.png) <br>
Seperti yang Anda lihat akan muncul banyak baris :v dan Anda tidak perlu mengkhawatrikan tanda titik tiga tersebut karena hal tersebut menunjukkan perintah lanjutan dari perintah sebelumnya, mantap? Mantap min :v 

### Membuat Function
Ternyata di mode REPL ini Anda dapat membuat function atau fungsi! waw!! <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/function.png) <br>
Seperti yang Anda lihat kita telah membuat fungsi untuk melakukan perkalian dan saat Anda menambahkan argument (parameter aktual) yang akan di kirim kembali ke fungsi maka hasil akan di cetak :v 

### Membuat Object
Selain Anda dapat membuat function Anda pun dapat membuat object di dalam mode REPL <br>
![](https://github.com/Bahrul-Rozak/Belajar-Node-JS/blob/main/01_REPL_MODE/image/object.png) <br>
Nah pada contoh tersebut kita membuat sebuah object dengan nama obj yang akan menggambarkan persegi panjang dan objek tersebut memiliki properti berupa panjang dan dan lebar dan memiliki method luas 

### Perintah dalam Mode REPL
Ada beberapa perintah yang dapat Anda gunakan ketika menggunakan mode REPL ini, <br>
| Perintah  | Kegunaan |
| -----  | --- |
| Ctrl + C     | Keluar dari perintah yang sedang aktif                                                    |
| Ctrl + D     | Keluar dari mode REPL                                                                     |
| Tombol Tab     | Melengkapi perintah tanpa harus mengetik ulang                                          |
| Tombol Panah Atas dan Bawah     | Perintah sebelum dan sesudah yang telah di gunakan dalam mode REPL     |

Alhamdulillah pembahasan mode REPL Node Js telah selesai, apabila repository ini bermanfaat jangan lupa di share ke teman - teman yang lain agar semakin banyak yang belajar. <br>
_Thank You!_
<br>
[Kembali ke materi](https://github.com/Bahrul-Rozak/Belajar-Node-JS)

