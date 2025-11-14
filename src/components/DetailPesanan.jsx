import React from 'react'
import CardDetail from './pembayaran/CardDetail'
import CardPembayaran from './pembayaran/CardPembayaran'
import Lokasi from './pembayaran/Lokasi'

function DetailPesanan({ data }) {
  return (
    <div>
        <div className="max-w-6xl mx-auto py-12 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <CardDetail data={data}/>
                        { data?.data?.pengambilan_barang === "kirim" && (
                            <Lokasi data={data}/>
                        )}
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="bg-white rounded-lg shadow-lg p-3">
                        <CardPembayaran data={data}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPesanan
