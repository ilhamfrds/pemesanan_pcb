import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function Bayar({uuid_pcb}) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", "Mid-client-JMGc0hVGdYlSA9ug");
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const bayar = async () => {
        NProgress.start();
            Swal.fire({
            title: 'Proses...',
            text: 'Tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const response = await fetch('https://project.elmechtechnology.com/orderpcb/pembayaran', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `uuid_pcb=${uuid_pcb}`
            })
            
            const result = await response.text();
            window.snap.pay(result);
            NProgress.done();
            Swal.close();
            
            // console.log(result);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <> 
            <div className="mt-3 flex flex-col gap-2">
                <button 
                    onClick={bayar} 
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                    Bayar
                </button>
            </div>

        </>
    )
}

export default Bayar
