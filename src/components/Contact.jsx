import React from 'react'
import AnimatedSection from './AnimatedSection';

function Contact() {
    return (
        <section id="kontak" className="py-20 bg-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                    <div>
                        <AnimatedSection>
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
                            Hubungi Kami
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Butuh Bantuan <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500">Desain PCB Anda?</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Silakan datang ke PCB Elmech untuk diskusi teknis atau hubungi kami secara online. Kami siap membantu realisasi project elektronika Anda.
                        </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <AnimatedSection delay={100} className="h-full">
                                <button 
                                    onClick={() => {
                                        const message = "Halo Admin PCB Elmech, saya tertarik dengan jasa cetak PCB Anda. Bisa bantu saya untuk konsultasi mengenai desain dan biayanya?";
                                        const phoneNumber = "6289526132900";
                                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                        
                                        window.open(url, '_blank', 'noopener,noreferrer');
                                    }}
                                    className="w-full text-left group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 h-full relative overflow-hidden"
                                >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <i className="fa-brands fa-whatsapp" style={{fontSize: '4rem', color: '#16a34a'}}></i>
                                </div>
                                
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-regular fa-comments text-xl"></i>
                                </div>
                                
                                <h4 className="font-bold text-slate-800 text-lg mb-1">WhatsApp</h4>
                                <p className="text-slate-500 text-sm mb-3">Konsultasi (Admin PCB)</p>
                                
                                <span className="text-green-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Chat Sekarang <i className="fa-solid fa-arrow-right"></i>
                                </span>
                                </button>
                            </AnimatedSection>

                            <AnimatedSection delay={200} className="h-full">
                                <button 
                                    onClick={() => window.location.href = 'mailto:elmechcore@gmail.com'}
                                    className="w-full text-left group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 h-full relative overflow-hidden"
                                >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <i className="fa-solid fa-envelope" style={{fontSize: '4rem', color: '#2563eb'}}></i>
                                </div>
                                
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-envelope-open-text text-xl"></i>
                                </div>
                                
                                <h4 className="font-bold text-slate-800 text-lg mb-1">Email</h4>
                                <p className="text-slate-500 text-sm mb-3">Kirim Pesan Via Email</p>
                                
                                <span className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Kirim Email <i className="fa-solid fa-arrow-right"></i>
                                </span>
                                </button>
                            </AnimatedSection>

                            <AnimatedSection delay={300} className="col-span-1 sm:col-span-2">
                                <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex-shrink-0 flex items-center justify-center text-orange-600 group-hover:rotate-12 transition-transform duration-300">
                                    <i className="fa-solid fa-location-dot text-xl"></i>
                                </div>
                                <div className="flex-1 text-left">
                                    <h4 className="font-bold text-slate-800 text-lg">Lokasi</h4>
                                    <p className="text-slate-500 text-sm mt-1">Jl. Putra Bangsa III No.2 blok A, Medokan Ayu, Kec. Rungkut, Surabaya</p>
                                </div>
                                
                                <button 
                                    onClick={() => window.open('https://maps.app.goo.gl/MZ7eq9KAivongB7RA', '_blank')}
                                    className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center gap-2"
                                >
                                    <i className="fa-solid fa-map"></i> Buka Maps
                                </button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>

                    <AnimatedSection delay={400} className="relative h-[500px] w-full">
                        <div className="absolute inset-0 bg-white p-3 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.257608856276!2d112.79924539999999!3d-7.324935599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbbf3fe66033%3A0x9981d37d9d6c11a3!2sCETAK%20PCB%20MURAH%20ELMECH!5e0!3m2!1sid!2sid!4v1767603712932!5m2!1sid!2sid"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            className="filter grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                            title="Google Maps"
                            ></iframe>
                        </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform -rotate-2 scale-[1.02] opacity-20 z-0"></div>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    )
}

export default Contact
