import React, { useState, useEffect } from 'react';
import { calculatePrices, formatRupiah } from '../utils/calculations';
import Swal from 'sweetalert2';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function isNomorValid(nomor) {
  const input = String(nomor).trim();
  if (!input && input !== 0) return null;
  let s = String(input).trim().replace(/[^\d+]/g, '');
  
  if (s.startsWith('+')) s = s.slice(1);
  
  if (s.startsWith('62')) {
  } else if (s.startsWith('0')) {
      s = '62' + s.slice(1);
  } else if (s.startsWith('8')) {
      s = '62' + s;
  } else {
      return null;
  }
  
  if (!/^62[8]\d+$/.test(s)) return null;
  if (s.length < 10 || s.length > 14) return null;
  return s;
}

function OrderModal({ isOpen, onClose, product }) {

  const [nama, setNama] = useState('');
  const [nomor, setNomor] = useState('');
  const [panjang, setPanjang] = useState('');
  const [lebar, setLebar] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [prioritas, setPrioritas] = useState('');
  const [pengambilan_barang, setPengambilan] = useState('');
  
  const [jenis_pcb] = useState(product.type);
  const [tipeMasking] = useState(product.masking);
  
  const [layer_masking, setLayerMasking] = useState(() => {
    if (product.masking === 'no_masking') return 'no masking';
    if (product.masking === 'dua_sisi') return 'dua sisi';
    return '';
  });
  const [warna_masking, setWarnaMasking] = useState('no');

  const [showAlamat, setShowAlamat] = useState(false);
  const [alamat, setAlamat] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kota, setKota] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kode_pos, setKodePos] = useState('');

  const [prices, setPrices] = useState({
    luas: 0,
    hargaPCB: 0,
    jumlahKalkir: 0,
    hargaKalkir: 0,
    hargaPrioritas: 0,
    grandTotal: 0
  });

  useEffect(() => {
    const formData = {
      panjang, lebar, jumlah, jenis_pcb, layer_masking, prioritas
    };
    const newPrices = calculatePrices(formData);
    setPrices(newPrices);
  }, [panjang, lebar, jumlah, jenis_pcb, layer_masking, prioritas]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isNomorValid(nomor)) {
      Swal.fire('Perhatian!', 'Nomor WhatsApp Tidak Valid!', 'warning');
      return;
    }

    const formData = {
      productTitle: `${product.title} - ${product.subTitle}`,
      nama, panjang, lebar, jumlah, prioritas, pengambilan_barang,
      jenis_pcb, layer_masking, warna_masking,
      alamat, kelurahan, kecamatan, kota, provinsi, kode_pos,
      nomor: isNomorValid(nomor),
      jumlah_kalkir: prices.jumlahKalkir,
      harga_kalkir: prices.hargaKalkir,
      harga_pcb: prices.hargaPCB,
      harga_prioritas: prices.hargaPrioritas,
      luas: prices.luas
    };

    let warnaMasking = '';
    if (warna_masking == 'biru') warnaMasking = 'Biru';
    else if (warna_masking == 'merah') warnaMasking = 'Merah';
    else if (warna_masking == 'putih') warnaMasking = 'Putih';
    else if (warna_masking == 'hijau') warnaMasking = 'Hijau';
    else warnaMasking = 'Tidak Ada';

    const pesan = `Nama: ${nama}\nUkuran: (PxL) ${panjang} x ${lebar} mm\nJenis PCB: ${product.title}\nMasking: ${product.subTitle}\nWarna Masking: ${warnaMasking}\nJumlah: cetak ${jumlah} pcs`;
    const nomorTujuan = "6285546268982";
    const url = `https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${encodeURIComponent(pesan)}`;

    NProgress.start();
      Swal.fire({
        title: 'Proses Order PCB',
        text: 'Tunggu sebentar',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading()
    });
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const response = await fetch("https://project.elmechtechnology.com/orderpcb/order", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData)
      });

      if (!response.ok) throw new Error('Gagal mengirim');
      const result = await response.json();

      if (result.status === "success") {
        Swal.fire({
          title: 'Berhasil!',
          text: result.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        }).then(() => {
          window.location.href = url;
        });
      } else {
        Swal.fire('Gagal!', result.message, 'error');
      }
    } catch (error) {
      Swal.fire('Gagal!', 'Terjadi kesalahan saat order', 'error');
    } finally {
      NProgress.done();
      onClose();
    }
  };

  const handlePengambilanChange = (e) => {
    const value = e.target.value;
    setPengambilan(value);
    setShowAlamat(value === 'kirim');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300">
      <div id="modal-overlay" className="absolute inset-0" onClick={onClose}></div>

      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200">
          <h3 id="modalProductName" className="text-xl font-semibold text-gray-900">
            {product.title} - {product.subTitle}
          </h3>
          <button className="modal-close text-gray-400 hover:text-gray-800 text-3xl leading-none" onClick={onClose}>&times;</button>
        </div>

        <div className="p-4 sm:p-6">
          <form id="productForm" className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">Atas Nama</label>
                <input type="text" id="nama" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Nama Pemesan" required />
              </div>
              <div>
                <label htmlFor="nomor" className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                <input type="number" id="nomor" name="nomor" value={nomor} onChange={(e) => setNomor(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Nomor WhatsApp" required />
              </div>
            </div>
            
            {tipeMasking === 'satu_sisi' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="layer_masking" className="block text-sm font-medium text-gray-700 mb-1">Layer Masking</label>
                  <select id="layer_masking" name="layer_masking" value={layer_masking} onChange={(e) => setLayerMasking(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option hidden value="">-- Pilih Layer Masking --</option>
                    <option value="sisi atas">Sisi Atas</option>
                    <option value="sisi bawah">Sisi Bawah</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="warna_masking" className="block text-sm font-medium text-gray-700 mb-1">Warna Masking</label>
                  <select id="warna_masking" name="warna_masking" value={warna_masking} onChange={(e) => setWarnaMasking(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option hidden value="">-- Pilih Warna Masking --</option>
                    <option value="biru">Biru</option>
                    <option value="merah">Merah</option>
                    <option value="putih">Putih</option>
                    <option value="hijau">Hijau</option>
                  </select>
                </div>
              </div>
            )}
            
            {tipeMasking === 'dua_sisi' && (
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                <div>
                  <label htmlFor="warna_masking" className="block text-sm font-medium text-gray-700 mb-1">Warna Masking</label>
                  <select id="warna_masking" name="warna_masking" value={warna_masking} onChange={(e) => setWarnaMasking(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option hidden value="">-- Pilih Warna Masking --</option>
                    <option value="biru">Biru</option>
                    <option value="merah">Merah</option>
                    <option value="putih">Putih</option>
                    <option value="hijau">Hijau</option>
                  </select>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="panjang" className="block text-sm font-medium text-gray-700 mb-1">Panjang (mm)</label>
                <input type="number" id="panjang" name="panjang" value={panjang} onChange={(e) => setPanjang(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Max 300mm" min="0" max="300" required />
              </div>
              <div>
                <label htmlFor="lebar" className="block text-sm font-medium text-gray-700 mb-1">Lebar (mm)</label>
                <input type="number" id="lebar" name="lebar" value={lebar} onChange={(e) => setLebar(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Max 300mm" min="0" max="300" required />
              </div>
              <div>
                <label htmlFor="luas" className="block text-sm font-medium text-gray-700 mb-1">Luas</label>
                <div className="flex">
                  <input type="number" id="luas" name="luas" value={prices.luas} disabled className="w-full px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <span className="px-3 flex items-center bg-gray-100 border border-gray-300 rounded-r-md text-sm">mm²</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="jumlah" className="block text-sm font-medium text-gray-700 mb-1">Jumlah</label>
                <input type="number" id="jumlah" name="jumlah" value={jumlah} onChange={(e) => setJumlah(e.target.value)} min="1" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Harga PCB</label>
                <div className="flex">
                  <span className="px-3 flex items-center bg-gray-100 border border-gray-300 rounded-l-md text-sm">Rp</span>
                  <input type="number" id="harga" name="harga" value={prices.hargaPCB} disabled className="w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Harga Kalkir</label>
                <div className="flex">
                  <span className="px-3 flex items-center bg-gray-100 border border-gray-300 rounded-l-md text-sm">Rp</span>
                  <input type="number" id="hargakl" name="hargakl" value={prices.hargaKalkir} disabled className="w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prioritas" className="block text-sm font-medium text-gray-700 mb-1">Prioritas</label>
                <select id="prioritas" name="prioritas" value={prioritas} onChange={(e) => setPrioritas(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option hidden value="">-- Pilih Prioritas --</option>
                  <option value="normal">Reguler</option>
                  <option value="urgent">Express (50% dari harga total)</option>
                </select>
              </div>
              <div>
                <label htmlFor="pengambilan_barang" className="block text-sm font-medium text-gray-700 mb-1">Pengambilan Barang</label>
                <select id="pengambilan_barang" name="pengambilan_barang" value={pengambilan_barang} onChange={handlePengambilanChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option hidden value="">-- Pilih Metode Pengambilan --</option>
                  <option value="ambil">Diambil Langsung</option>
                  <option value="kirim">Dikirim ke alamat Anda</option>
                </select>
              </div>
            </div>
            
            {showAlamat && (
              <div id="formkirim" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
                    <input type="text" id="alamat" name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required={showAlamat} />
                  </div>
                  <div>
                    <label htmlFor="kelurahan" className="block text-sm font-medium text-gray-700 mb-1">Kelurahan</label>
                    <input type="text" id="kelurahan" name="kelurahan" value={kelurahan} onChange={(e) => setKelurahan(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required={showAlamat} />
                  </div>
                  <div>
                    <label htmlFor="kecamatan" className="block text-sm font-medium text-gray-700 mb-1">Kecamatan</label>
                    <input type="text" id="kecamatan" name="kecamatan" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required={showAlamat} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="kota" className="block text-sm font-medium text-gray-700 mb-1">Kota / Kabupaten</label>
                    <input type="text" id="kota" name="kota" value={kota} onChange={(e) => setKota(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required={showAlamat} />
                  </div>
                  <div>
                    <label htmlFor="provinsi" className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
                    <input type="text" id="provinsi" name="provinsi" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required={showAlamat} />
                  </div>
                  <div>
                    <label htmlFor="kode_pos" className="block text-sm font-medium text-gray-700 mb-1">Kode Pos</label>
                    <input type="text" id="kode_pos" name="kode_pos" value={kode_pos} onChange={(e) => setKodePos(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required={showAlamat} />
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-gray-800">
                Estimasi Harga: 
                <span className="font-bold text-blue-600 ml-2">
                  {formatRupiah(prices.grandTotal)}
                </span>
              </h4>
              <p className="text-xs text-gray-500 mt-1">Harga dan Desain akan dikonfirmasi ulang via WhatsApp.</p>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-6">
              Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;