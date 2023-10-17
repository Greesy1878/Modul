document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;

        if (!nama || !email || !alamat) {
            alert("Anda harus mengisi data dengan lengkap!");  // Menampilkan pesan alert jika data kosong
        } else {
            alert("Pendaftaran berhasil!");
            // Di sini, Anda dapat mengirim data pendaftaran ke server jika diperlukan.
        }
    });
});
