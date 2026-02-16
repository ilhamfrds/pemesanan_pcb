import React from 'react'
import { useEffect, useState } from "react";

function tersedia() {
    const [setting, setSetting] = useState({
        express: "0",
        mask_biru: "0",
        mask_merah: "0",
        mask_hitam: "0",
        mask_hijau: "0"
    });

    const fetchSetting = async () => {
        try {
            const res = await fetch(
                "https://project.elmechtechnology.com/project/getSettingPCB"
            );
            const data = await res.json();
            setSetting(data);
        } catch (err) {
            console.error("Gagal mengambil setting PCB", err);
        }
    };

    useEffect(() => {
        fetchSetting();

        const interval = setInterval(fetchSetting, 10000);
        return () => clearInterval(interval);
    }, []);
    
    return setting;
}

export default tersedia
