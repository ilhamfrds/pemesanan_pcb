import React from 'react'

function KonfirmasiAdmin() {
    const konfirmasi = () => {
        const nomor = "6289526132900";
        const nama = "Admin PCB Elmech";
        const pesan = `Halo ${nama}!%0A` + `Saya telah melakukan pembayaran. Mohon di cek untuk lanjut proses cetak. Terima Kasih`;
        const url = `https://api.whatsapp.com/send?phone=${nomor}&text=${pesan}`;
        window.location.href = url;
    };
    
    return (
        <div className="mt-3 grid gap-2">
            <button
                onClick={konfirmasi}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-200"
            >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Konfirmasi Pembayaran
            </button>
        </div>
    );
}

export default KonfirmasiAdmin
