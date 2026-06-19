export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background image + gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaPZDmDL69pssl1RR3ZA99TpOyAwNZrTOnbY_WMMJf9FXwZW5mv2LejmjzFWz-nrKre7FNjEV35owJoll2L6PzkUVFnL55ciJpQBfZrZgfIVRc4KF_A5-ggSauHfFg9AuRDwgZaodvyNyA9hj-n0Z1Pg4dFDTI7QcLJ5XiRs6d-tEYxn0vcQv9CRAad-yW_f7gwrfT6P_coz0stW2xhLQ0XV8oRjwxlawolMGoAVsz27QKQiktCz3-50EJoMZgTHjAUft6fYJES_M')",
                    }}
                    aria-label="Traditional Batak Gondang ensemble in a modern recording studio"
                />
                {/* Gradient from solid bg on the left to transparent on the right, matching the dark-to-light reference */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/85 to-[#f8f9fa]/10" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa]/10 via-transparent to-[#f8f9fa]/40" />
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-[20px] md:px-[64px] w-full">
                <div className="max-w-2xl">
                    {/* Eyebrow badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="font-sans text-[14px] font-semibold text-[#00236f] tracking-widest uppercase">
                            Contemporary Heritage
                        </span>
                        <span
                            className="material-symbols-outlined text-[#00236f]"
                            style={{ fontSize: "20px" }}
                        >
                            graphic_eq
                        </span>
                    </div>

                    <h1 className="font-serif text-[36px] md:text-[52px] font-bold text-[#191c1d] mb-6 leading-[1.1]">
                        Melestarikan Warisan Musik Batak melalui Produksi Modern
                    </h1>

                    <p className="font-sans text-[16px] md:text-[18px] font-normal text-[#444651] mb-10 max-w-xl leading-relaxed">
                        Menghubungkan tradisi luhur dengan standar produksi musik kelas
                        dunia. Kami mengkurasi dan memproduksi karya seni yang otentik dan
                        kompetitif di pasar global.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-[#00236f] text-white font-sans text-[14px] font-semibold tracking-wide rounded hover:bg-[#00236f]/90 transition-colors">
                            MULAI KOLABORASI
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-[#00236f] text-[#00236f] font-sans text-[14px] font-semibold tracking-wide rounded hover:bg-[#00236f]/5 transition-colors">
                            LIHAT REPERTOAR
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}