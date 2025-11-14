import React, { useState } from "react";
import Swal from 'sweetalert2';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function UploadBukti({uuid_pcb}) {
    const [file, setFile] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!file) {
            Swal.fire('Perhatian!', 'Bukti Pembayaran Tidak Boleh Kosong.', 'warning');
            return;
        }

        const formData = new FormData();
        formData.append("gambar", file);
        formData.append("uuid_pcb", uuid_pcb);

        NProgress.start();
            Swal.fire({
            title: 'Proses Upload',
            text: 'Tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const response = await fetch("https://project.elmechtechnology.com/orderpcb/uploadBuktiPembayaran", {
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
            Swal.fire('Gagal!', 'Terjadi kesalahan', 'error');
        } finally {
            NProgress.done();
        }
    }

    return (
        <>
            <form onSubmit={handleUpload} encType="multipart/form-data">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Bukti Pembayaran</label>
                <div className="flex shadow-sm">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                        className="
                            block w-full text-sm text-gray-900 border border-gray-300 rounded-l-lg cursor-pointer bg-gray-50 pr-12 
                            file:py-2 file:px-4 file:mr-3 file:rounded-l-lg file:border-0 file:text-sm file:font-semibold 
                            file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100
                        "
                    />
                    <button type="submit" className="flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-white text-blue-600 hover:bg-blue-50">
                        <i className="fa fa-upload"></i>
                    </button>
                </div>
            </form>
        </>
    )
}

export default UploadBukti
