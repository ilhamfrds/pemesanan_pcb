import React from 'react'
import StatusPembayaran from './StatusPembayaran'
import RincianOrder from './RincianOrder'
import Bayar from './Bayar'
import UploadBukti from './UploadBukti'
import BuktiPembayaran from './BuktiPembayaran'
import KonfirmasiAdmin from './KonfirmasiAdmin'

function CardPembayaran({ data }) {
  return (
    <>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <i className="fas fa-money-bill-wave text-blue-600"></i>
                Rincian Biaya
            </h2>
            <StatusPembayaran data={{ bayar: data?.bayar, worker: data?.worker }} />
        </div>

        <RincianOrder data={data}/>

        <div className="mt-5">
          <hr className="border-t border-gray-200 my-4" />

          {!data?.bayar && data?.worker ? (
            <Bayar uuid_pcb={data?.data?.uuid_pcb} />
          ) : !data?.pembayaran?.bukti_tf && data?.bayar ? (
            <UploadBukti uuid_pcb={data?.data?.uuid_pcb} />
          ) : data?.pembayaran?.bukti_tf && data?.bayar ? (
            <>
              <BuktiPembayaran
                pembayaran={data?.pembayaran}
                uuid_pcb={data?.data?.uuid_pcb}
              />
              <hr className="border-t border-gray-200 my-4" />
              <KonfirmasiAdmin />
            </>
          ) : null}
        </div>
    </>
  )
}

export default CardPembayaran
