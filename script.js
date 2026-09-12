// JUMLAH DAN TOTAL KERANJANG

let jumlahProduk = 0;
let totalHarga = 0;


// TOMBOL LIHAT PRODUK

function lihatProduk() {

    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });

}


// TAMBAH PRODUK KE KERANJANG

function tambahKeranjang(namaProduk, harga) {

    jumlahProduk++;

    totalHarga = totalHarga + harga;


    // Mengubah jumlah produk

    document.getElementById("jumlahKeranjang").textContent =
        "Keranjang: " + jumlahProduk + " produk";


    // Menambahkan nama produk

    let daftar = document.getElementById("isiKeranjang");

    let produkBaru = document.createElement("li");

    produkBaru.textContent =
        namaProduk + " - Rp" + harga.toLocaleString("id-ID");

    daftar.appendChild(produkBaru);


    // Mengubah total harga

    document.getElementById("totalHarga").textContent =
        "Total: Rp" + totalHarga.toLocaleString("id-ID");

}


// CHECKOUT

function checkout() {

    if (jumlahProduk === 0) {

        alert("Keranjang masih kosong!");

    } else {

        alert(
            "Terima kasih! Total belanja kamu Rp" +
            totalHarga.toLocaleString("id-ID")
        );

    }

}


// KIRIM PESAN

function kirimPesan() {

    let nama =
        document.getElementById("nama").value;

    let pesan =
        document.getElementById("pesanKontak").value;

    let hasil =
        document.getElementById("hasilPesan");


    if (nama === "" || pesan === "") {

        hasil.textContent =
            "Nama dan pesan harus diisi!";

    } else {

        hasil.textContent =
            "Terima kasih " +
            nama +
            ", pesan kamu sudah terkirim!";

    }

}