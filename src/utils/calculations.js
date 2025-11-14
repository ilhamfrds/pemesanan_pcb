
const HARGA_PCB = {
  'fyber single layer': 375,
  'fyber double layer': 450,
  'pertinak': 325
};

const HARGA_MASKING = {
  'sisi atas': 60,
  'sisi bawah': 60,
  'dua sisi': 120,
  'no masking': 0
};

const KALKIR_PCB = {
  'fyber single layer': 2,
  'fyber double layer': 3,
  'pertinak': 2
};

const KALKIR_MASKING = {
  'sisi atas': 1,
  'sisi bawah': 1,
  'dua sisi': 2,
  'no masking': 0
};

const LUAS_A4 = 21.0 * 29.7;


export function bulatkanKeRibuan(angka) {
  return Math.ceil(angka / 1000) * 1000;
}

export function formatRupiah(angka) {
  if (isNaN(angka)) {
    angka = 0;
  }
  return 'Rp ' + angka.toLocaleString('id-ID');
}


export function calculatePrices(formData) {
  const { panjang, lebar, jumlah, jenis_pcb, layer_masking, prioritas } = formData;

  const p = parseFloat(panjang) || 0;
  const l = parseFloat(lebar) || 0;
  const j = parseInt(jumlah) || 0;

  const luasMM = p * l;
  
  if (j <= 0 || p <= 0 || l <= 0 || !jenis_pcb || !layer_masking) {
    return { luas: luasMM, hargaPCB: 0, hargaKalkir: 0, grandTotal: 0 };
  }

  const pMeter = p / 10;
  const lMeter = l / 10;

  let totalLuas = pMeter * lMeter * j;
  if (totalLuas < 100) totalLuas = 100;

  const jumlah_kalkir = ((pMeter * lMeter) / LUAS_A4) * j * (KALKIR_PCB[jenis_pcb] + KALKIR_MASKING[layer_masking]);
  const jumlahKalkirBulat = Math.ceil(jumlah_kalkir);

  const totalHarga = bulatkanKeRibuan((HARGA_PCB[jenis_pcb] + HARGA_MASKING[layer_masking]) * totalLuas);
  const hargaKalkir = bulatkanKeRibuan(jumlahKalkirBulat * 5000);

  let hargaPrioritas = 0;
  if (prioritas === "urgent") {
    hargaPrioritas = totalHarga * 0.5;
  }

  const grandTotal = totalHarga + hargaKalkir + hargaPrioritas;

  return {
    luas: luasMM,
    hargaPCB: totalHarga,
    jumlahKalkir: jumlahKalkirBulat,
    hargaKalkir: hargaKalkir,
    hargaPrioritas: hargaPrioritas,
    grandTotal: grandTotal
  };
}