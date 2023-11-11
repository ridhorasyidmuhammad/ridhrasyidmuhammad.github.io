//Toggle class active
const navbarNav = document.querySelector('.navbar-nav'); // Menghapus spasi sebelum '.navbar-nav'

//Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}; 

//Klik di luar sidebar untuk menghilangkan nav
const hamburger =  document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) { 
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    
});

const form = document.getElementById("pelatihanForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah formulir dikirim secara tradisional

     // Ambil nilai dari kolom formulir
     const pelatihan = document.getElementById("pelatihan").value;
     const nik = document.getElementById("nik").value;
     const nama = document.getElementById("nama").value;
     const sumberInformasi = document.getElementById("sumberInformasi").value;
     const tanggalLahir = document.getElementById("tanggalLahir").value;
     const lakiLaki = document.getElementById("lakiLaki").value;
     const perempuan = document.getElementById("perempuan").value;
     const alamat = document.getElementById("alamat").value;
     const kecamatan = document.getElementById("kecamatan").value;
     const email = document.getElementById("email").value;
     const telepon = document.getElementById("telepon").value;
     const pendidikan = document.getElementById("pendidikan").value;
     

     // Validasi formulir
     if (!pelatihan || !nik || !nama || !tanggalLahir || !lakiLaki || !perempuan || !alamat 
        || !kecamatan || !email || !telepon || !pendidikan || !sumberInformasi ) {
         // Menampilkan SweetAlert jika ada kolom yang kosong
         Swal.fire({
             title: 'Error',
             text: 'Harap isi semua kolom formulir!',
             icon: 'error',
             confirmButtonText: 'OK'
         });
     } else {
         
         // Menampilkan SweetAlert "Selesai" jika formulir valid
         Swal.fire({
             title: 'Selesai',
             text: 'Formulir telah berhasil dikirim!',
             icon: 'success',
             confirmButtonText: 'OK'
         });
     }
 });

 


