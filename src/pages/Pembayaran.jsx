import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DetailPesanan from '../components/DetailPesanan';
import LoadingScreen from '../components/pembayaran/LoadingScreen';
import {useParams, useNavigate } from "react-router-dom"

function Pembayaran() {
  const navigate = useNavigate();
  const { uuid_pcb } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataPembayaran();
  }, []);
  
  const getDataPembayaran = async () => {
    try {
      const response = await axios.get(`https://project.elmechtechnology.com/orderpcb/pesanan/${uuid_pcb}`);

      if (response.data.status === "error") {
        navigate("/");
        return;
      }
      
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      navigate("/");
      // console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-nunito bg-gray-100 min-h-screen p-4">
      {loading ? (
        <LoadingScreen/>
      ) : (
        <DetailPesanan data={data} />
      )}
    </div>
  );

}

export default Pembayaran
