



//script tampilkan data testimoni
const container = document.getElementById('daftarTestimoni');
    const testimoniList = JSON.parse(localStorage.getItem('testimoniList')) || [];

    if (testimoniList.length === 0) {
      container.innerHTML = "<p>Belum ada testimoni.</p>";
    } else {
      testimoniList.forEach((t, i) => {
        const el = document.createElement('div');
        el.className = 'testimoni-box';
        el.innerHTML = `
          <p><strong>Nama:</strong> ${t.nama}</p>
          <p><strong>Email:</strong> ${t.email}</p>
          <p><strong>Pesan:</strong> ${t.pesan}</p>
          <p>------------------------------</p>
        `;
        container.appendChild(el);
      });
    }

//script hapus data testimoni dari localhost
document.getElementById("hapusSemua").addEventListener("click", function() {
      const konfirmasi = confirm("Apakah Anda yakin ingin menghapus semua testimoni?");
      if (konfirmasi) {
        localStorage.removeItem("testimoniList");
        location.reload();
         
      }
       });
