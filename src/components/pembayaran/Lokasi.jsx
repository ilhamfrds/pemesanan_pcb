import React from 'react'
import { Toaster, toast } from "react-hot-toast";

function Lokasi({data}) {
  let kota_tujuan = {};
  try {
    kota_tujuan = data?.data?.kota_tujuan
        ? JSON.parse(data.data.kota_tujuan)
        : {};
  } catch (error) {
    // console.warn("Gagal parse kota_tujuan:", error);
    kota_tujuan = {};
  }

  const alamat = kota_tujuan.alamat || "";
  const kelurahan = kota_tujuan.kelurahan || "";
  const kecamatan = kota_tujuan.kecamatan || "";
  const kota = kota_tujuan.kota || "";
  const provinsi = kota_tujuan.provinsi || "";
  const kode_pos = kota_tujuan.kode_pos || "";

  const copyAlamat = () => {
  const text = `
Alamat : ${alamat}
Kelurahan : ${kelurahan}
Kecamatan : ${kecamatan}
Kota/Kab : ${kota}
Provinsi : ${provinsi}
Kode Pos : ${kode_pos}
`.trim();

    navigator.clipboard.writeText(text)
    .then(() => toast.success("Alamat berhasil disalin"))
    .catch(() => toast.error("Gagal menyalin alamat"));
  };

  return (
    <>
        <Toaster position="top-right" />
        <hr className="border-t border-gray-200 my-7" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-5 flex items-center justify-between">
            <span className="flex items-center gap-3">
                <i className="fa fa-map-pin text-blue-600" aria-hidden="true"></i>
                Detail Pengiriman
            </span>

            <i
                className="fa fa-copy text-gray-400 cursor-pointer text-lg"
                title="Salin alamat"
                onClick={copyAlamat}
                role="button"
                aria-label="Salin alamat"
            />
        </h2>

        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Alamat
                </label>
                <input
                value={alamat}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                disabled
                />
            </div>

            <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Kelurahan
                </label>
                <input
                value={kelurahan}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                disabled
                />
            </div>

            <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Kecamatan
                </label>
                <input
                value={kecamatan}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                disabled
                />
            </div>

            <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Kota / Kabupaten
                </label>
                <input
                value={kota}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                disabled
                />
            </div>

            <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Provinsi
                </label>
                <input
                value={provinsi}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                disabled
                />
            </div>

            <div className="col-span-12 md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Kode Pos
                </label>
                <input
                value={kode_pos}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
                disabled
                />
            </div>
        </div>
    </>
  )
}

export default Lokasi
