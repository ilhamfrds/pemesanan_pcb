import React from 'react'
import Swal from 'sweetalert2';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function BuktiPembayaran({pembayaran, uuid_pcb}) {
    if (!pembayaran) return null;

    const { nominal, bukti_tf } = pembayaran;

    const hapusBukti = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Yakin hapus bukti pembayaran?',
            text: 'Tindakan ini tidak dapat dibatalkan.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Ya, Hapus',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            const formData = new FormData();
            formData.append('uuid_pcb', uuid_pcb);

            NProgress.start();
                Swal.fire({
                title: 'Proses Hapus',
                text: 'Tunggu sebentar',
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });
            await new Promise(resolve => setTimeout(resolve, 1000));

            try {
                const response = await fetch("https://project.elmechtechnology.com/orderpcb/hapusBuktiPembayaran", {
                    method: "POST",
                    body: formData,
                });

                const result = await response.json();

                if (result.status === "success") {
                    Swal.fire({
                        title: 'Berhasil!',
                        text: result.message,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1000
                    }).then(() => {
                        window.location.reload();
                    });
                } else {
                    Swal.fire('Gagal!', result.message, 'error');
                }
            } catch (error) {
                // console.log(error)
                Swal.fire('Gagal!', 'Terjadi kesalahan', 'error');
            } finally {
                NProgress.done();
            }
        }
    }

    function formatRupiah(angka) {
        if (!angka) return "Rp0";
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(angka);
    }

    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Bukti Pembayaran</label>
            <div className="flex shadow-sm">
                <input className="flex-1 w-full px-3 py-2 border border-gray-300 rounded-l-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none" type="text" disabled value={formatRupiah(nominal)} />
                <a className="flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-white text-blue-600 hover:bg-blue-50" target="_blank" href={`https://project.elmechtechnology.com/assets/file_PCB/${bukti_tf}`}>
                    <i className="fa fa-eye"></i>
                </a>
                <button type="button" onClick={hapusBukti} className="flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white text-red-600 hover:bg-red-50 focus:z-10 focus:outline-none" id="hapusBtn">
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default BuktiPembayaran
