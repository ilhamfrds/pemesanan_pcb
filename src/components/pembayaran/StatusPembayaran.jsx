import React from 'react'

function StatusPembayaran({data}) {
    const { bayar, worker } = data;

    return (
        <>
            {bayar ? (
                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-green-100 text-green-800">Terbayar</span>
            ) : !bayar && !worker ? (
                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-red-100 text-red-800">Sedang Libur</span>
            ) : (
                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-red-100 text-red-800">Menunggu Pembayaran</span>
            )}
        </>
    )
}

export default StatusPembayaran
