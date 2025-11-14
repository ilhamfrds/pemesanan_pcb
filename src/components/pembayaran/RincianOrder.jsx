import React from 'react'

function RincianOrder({data}) {
    const harga_pcb = Number(data?.data?.harga) || 0;
    const harga_kalkir = Number(data?.data?.harga_karkir) || 0;
    const harga_prioritas = Number(data?.data?.harga_prioritas) || 0;
    const harga_lain = Number(data?.data?.harga_lain) || 0;
    const biayaLain = data?.data?.biaya_lain ? JSON.parse(data.data.biaya_lain) : [];
    
    const totalBiayaLain = biayaLain.reduce(
        (total, item) => total + Number(item.biaya || 0),
        0
    );

    const totalBiaya = harga_pcb + harga_kalkir + harga_prioritas + totalBiayaLain + harga_lain;

    function formatRupiah(angka) {
        if (!angka) return "Rp0";
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(angka);
    }

    return (
        <>
            <div className="mb-3 text-sm">
                <span className="text-gray-500">Tanggal Order:</span>
                <div className="text-gray-800 font-medium">{data?.data?.tanggal_order}</div>
            </div>

            <hr className="border-t border-gray-200 my-4" />

            <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                    <span>Biaya PCB</span>
                    <span className="font-medium">{formatRupiah(data?.data?.harga)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                    <span>Biaya Kalkir</span>
                    <span className="font-medium">{formatRupiah(data?.data?.harga_karkir)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                    <span>Biaya Prioritas</span>
                    <span className="font-medium">{formatRupiah(data?.data?.harga_prioritas)}</span>
                </div>

                {data?.data?.harga_lain != 0 ? (
                    <>
                        <div className="flex justify-between text-gray-700">
                            <span>Biaya Lain</span>
                            <span className="font-medium">{formatRupiah(data?.data?.harga_lain)}</span>
                        </div>
                    </>
                ) : biayaLain.length > 0 && biayaLain.map((harga_lain, index) => (
                    <div key={index} className="flex justify-between text-gray-700">
                        <div>{harga_lain.deskripsi}</div>
                        <div>{formatRupiah(harga_lain.biaya)}</div>
                    </div>
                )) }
            </div>

            <hr className="border-t border-gray-200 my-4" />

            <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>{formatRupiah(totalBiaya)}</span>
            </div>
        </>
    )
}

export default RincianOrder
