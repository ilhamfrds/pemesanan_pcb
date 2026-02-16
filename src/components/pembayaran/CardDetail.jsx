import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function CardDetail({ data }) {
  const jenisPCB = {
    "pertinak": "Pertinax Single Layer",
    "fyber single layer": "Fyber Single Layer",
    "fyber double layer": "Fyber Double Layer",
  }
  
  const layerMasking = {
    'no masking': 'Tanpa Masking',
    'sisi atas': 'Sisi Atas',
    'sisi bawah': 'Sisi Bawah',
    'dua sisi': 'Dua Sisi'
  }
  
  const warnaMasking = {
    'no': 'Tidak Ada',
    'biru': 'Biru',
    'merah': 'Merah',
    'putih': 'Putih',
    'hijau': 'Hijau',
    'hitam': 'Hitam'
  }

  const prioritasPenegrjaan = {
    'normal': 'Reguler',
    'urgent': 'Express'
  }

  const pengambilanBarang= {
    'ambil': 'Diambil Langsung',
    'kirim': 'Dikirim ke Alamat'
  }

  const pcb = data?.data?.jenis_pcb;
  const layer = data?.data?.layer_masking;
  const warna = data?.data?.warna_masking;
  const prioritas = data?.data?.urgency;
  const pengambilan = data?.data?.pengambilan_barang;

  const jenis_pcb = jenisPCB[pcb] || "";
  const layer_masking = layerMasking[layer] || "";
  const warna_masking = warnaMasking[warna] || "";
  const urgency = prioritasPenegrjaan[prioritas] || "";
  const pengambilan_barang = pengambilanBarang[pengambilan] || "";

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 flex items-center gap-3">
        <i className="fa fa-shopping-cart text-blue-600" aria-hidden="true"></i>
        Detail Pesanan
      </h2>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Atas Nama
          </label>
          <input
            value={data?.data?.nama || ""}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nomor WhatsApp
          </label>
          <input
            value={data?.data?.no_hp || ""}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jenis PCB
          </label>
          <input
            value={jenis_pcb}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Layer Masking
          </label>
          <input
            value={layer_masking}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Warna Masking
          </label>
          <input
            value={warna_masking}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>

        <div className="col-span-12 md:col-span-8">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ukuran PCB (mm)</label>
          <div className="flex rounded-md shadow-sm">
              <input value={data?.data?.panjang || ""} className="flex-1 block w-full min-w-0 rounded-none rounded-l-md px-3 py-2 border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none" disabled />
              <input value={data?.data?.lebar || ""} className="flex-1 block w-full min-w-0 rounded-none px-3 py-2 border border-l-0 border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none -ml-px" disabled />
              <input value={data?.data?.luas || ""} className="flex-1 block w-full min-w-0 rounded-none px-3 py-2 border border-l-0 border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none -ml-px" disabled />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm -ml-px">
                  mm<sup>2</sup>
              </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jumlah
          </label>
          <input
            value={data?.data?.jumlah || ""}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prioritas
          </label>
          <input
            value={urgency}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pengambilan
          </label>
          <input
            value={pengambilan_barang}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed focus:outline-none"
            disabled
          />
        </div>
      </div>
    </>
  )
}

export default CardDetail;
