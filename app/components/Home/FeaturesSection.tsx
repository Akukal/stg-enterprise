export default function FeaturesSection() {
  return (
    <section id="FeaturesSection" className="py-[120px] bg-[#f3f4f5]">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[32px] font-semibold text-[#191c1d] mb-4">
            Keunggulan Kami
          </h2>
          <p className="font-sans text-[16px] font-normal text-[#444651] max-w-2xl mx-auto">
            Transformasi visi artistik Anda menjadi standar profesional
            melalui layanan produksi end-to-end kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Produksi Musik */}
          <div className="bg-[#f8f9fa] p-8 border border-[#757682]/20 rounded flex flex-col justify-between min-h-[320px] group hover:bg-[#f8f9fa]/90 transition-colors duration-300">
            <div>
              <span
                className="material-symbols-outlined text-[#00236f] mb-6 block"
                style={{ fontSize: "32px" }}
              >
                graphic_eq
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-[#191c1d] mb-4">
                Produksi Musik
              </h3>
              <p className="font-sans text-[16px] font-normal text-[#444651]">
                Pengembangan konsep audio dari ide dasar hingga menjadi
                komposisi yang utuh dan bernyawa.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-[#00236f] tracking-wide hover:opacity-80 transition-opacity mt-8"
            >
              PELAJARI LEBIH LANJUT
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_forward
              </span>
            </a>
          </div>

          {/* Card 2 - Aransemen (highlighted, navy) */}
          <div className="relative bg-[#00236f] p-8 rounded flex flex-col justify-between min-h-[320px] overflow-hidden">
            <div>
              <span
                className="material-symbols-outlined text-white mb-6 block"
                style={{ fontSize: "32px" }}
              >
                tune
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-white mb-4">
                Aransemen
              </h3>
              <p className="font-sans text-[16px] font-normal text-white/85">
                Interpretasi ulang lagu dengan sentuhan modern tanpa
                menghilangkan esensi budaya aslinya.
              </p>
            </div>
            <a
              href="#"
              className="relative z-10 inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-white tracking-wide hover:opacity-80 transition-opacity mt-8"
            >
              MULAI PROYEK
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_forward
              </span>
            </a>
            <span
              className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/10"
              style={{ fontSize: "120px" }}
              aria-hidden="true"
            >
              music_note
            </span>
          </div>

          {/* Card 3 - Rekaman Audio */}
          <div className="bg-[#f8f9fa] p-8 border border-[#757682]/20 rounded flex flex-col justify-between min-h-[320px] group hover:bg-[#f8f9fa]/90 transition-colors duration-300">
            <div>
              <span
                className="material-symbols-outlined text-[#00236f] mb-6 block"
                style={{ fontSize: "32px" }}
              >
                mic
              </span>
              <h3 className="font-serif text-[24px] font-semibold text-[#191c1d] mb-4">
                Rekaman Audio
              </h3>
              <p className="font-sans text-[16px] font-normal text-[#444651]">
                Teknologi rekaman terkini dengan akustik ruangan yang
                dirancang khusus untuk kejernihan suara maksimal.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-[#00236f] tracking-wide hover:opacity-80 transition-opacity mt-8"
            >
              LIHAT FASILITAS
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
