import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <>
      {/* Interactive Navigation Header */}
      <Header />

      <main className="flex-1 pb-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaPZDmDL69pssl1RR3ZA99TpOyAwNZrTOnbY_WMMJf9FXwZW5mv2LejmjzFWz-nrKre7FNjEV35owJoll2L6PzkUVFnL55ciJpQBfZrZgfIVRc4KF_A5-ggSauHfFg9AuRDwgZaodvyNyA9hj-n0Z1Pg4dFDTI7QcLJ5XiRs6d-tEYxn0vcQv9CRAad-yW_f7gwrfT6P_coz0stW2xhLQ0XV8oRjwxlawolMGoAVsz27QKQiktCz3-50EJoMZgTHjAUft6fYJES_M')",
              }}
              aria-label="Traditional Batak Gondang ensemble in a modern recording studio"
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/95 via-[#f8f9fa]/75 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-[20px] md:px-[64px] w-full">
            <div className="max-w-2xl">
              <span className="font-sans text-[14px] font-semibold text-[#00236f] tracking-widest uppercase mb-4 block">
                CONTEMPORARY HERITAGE
              </span>
              <h1 className="font-serif text-[36px] md:text-[48px] font-bold text-[#191c1d] mb-6 leading-tight">
                Melestarikan Warisan Musik Batak melalui Produksi Modern
              </h1>
              <p className="font-sans text-[18px] font-normal text-[#444651] mb-10 max-w-xl">
                Menghubungkan tradisi luhur dengan standar produksi musik kelas
                dunia. Kami mengkurasi dan memproduksi karya seni yang otentik
                dan kompetitif di pasar global.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-[#00236f] text-white font-sans text-[14px] font-semibold rounded hover:bg-[#00236f]/90 transition-colors">
                  MULAI KOLABORASI
                </button>
                <button className="px-8 py-3 bg-transparent border border-[#00236f] text-[#00236f] font-sans text-[14px] font-semibold rounded hover:bg-[#00236f]/5 transition-colors">
                  LIHAT REPERTOAR
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tentang Kami Section */}
        <section className="py-[120px] max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
            <div className="md:col-span-5 md:col-start-2">
              <h2 className="font-serif text-[32px] font-semibold text-[#191c1d] mb-6">
                Tentang Kami
              </h2>
              <p className="font-sans text-[16px] font-normal text-[#444651] mb-6">
                STG Enterprise berdiri sebagai kurator warisan budaya,
                menjembatani kedalaman filosofis musik etnik Batak dengan
                keahlian teknis kontemporer. Fasilitas state-of-the-art kami
                dirancang tidak hanya untuk merekam, tetapi untuk mengabadikan
                esensi murni dari tradisi sonik.
              </p>
              <div className="flex gap-8 mt-10">
                <div>
                  <span className="block font-serif text-[24px] font-semibold text-[#00236f] mb-1">
                    15+
                  </span>
                  <span className="font-sans text-[12px] font-semibold text-[#444651] uppercase tracking-wider">
                    TAHUN PENGALAMAN
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-[24px] font-semibold text-[#00236f] mb-1">
                    200+
                  </span>
                  <span className="font-sans text-[12px] font-semibold text-[#444651] uppercase tracking-wider">
                    PRODUKSI MUSIK
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 relative">
              <div className="aspect-[4/5] bg-[#e1e3e4] border border-[#757682]/20 rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Master Batak musician holding traditional instrument next to a modern studio microphone"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6eeUQZJHN5-ez05Li4YGLPktcCbNstD5pT5BRYMHPqvlb15LuJp2qjsBKrjfbKw8sh_Wh7zoT41VuUsqrBTtF9OUWxoNxkb1Fgbkg2WbrI_Yy369JbwkRshasZycxfAzSK7QlEQfjb7SDPlbqyhc3opK5O2WiVPU2Z_y5RnORHu1LHS9nmJSRkUNUHZVYPO50oJLjziQLww-MHhK5eKupOIN-jfikCmgEBREFLYPCwewTSOVECjyEeIyl5dKbKdO315bGUAwve6E"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Produksi Section (Bento Grid) */}
        <section className="py-[120px] bg-[#f3f4f5]">
          <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
            <div className="text-center mb-16">
              <h2 className="font-serif text-[32px] font-semibold text-[#191c1d] mb-4">
                Layanan Produksi
              </h2>
              <p className="font-sans text-[16px] font-normal text-[#444651] max-w-2xl mx-auto">
                Standar emas global dalam produksi musik budaya.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-[#f8f9fa] p-8 border border-[#757682]/20 rounded flex flex-col justify-between group hover:bg-[#f8f9fa]/90 transition-colors duration-300">
                <div>
                  <span
                    className="material-symbols-outlined text-[#00236f] mb-6"
                    style={{ fontSize: "32px" }}
                  >
                    graphic_eq
                  </span>
                  <h3 className="font-serif text-[24px] font-semibold text-[#191c1d] mb-4">
                    Produksi Musik
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-[#444651]">
                    Dari konsep awal hingga komposisi final, kami memastikan setiap
                    karya mempertahankan integritas budaya sambil memenuhi standar
                    industri modern.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-[#f8f9fa] p-8 border border-[#757682]/20 rounded flex flex-col justify-between group hover:bg-[#f8f9fa]/90 transition-colors duration-300">
                <div>
                  <span
                    className="material-symbols-outlined text-[#00236f] mb-6"
                    style={{ fontSize: "32px" }}
                  >
                    mic
                  </span>
                  <h3 className="font-serif text-[24px] font-semibold text-[#191c1d] mb-4">
                    Rekaman Audio
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-[#444651]">
                    Fasilitas rekaman dengan akustik khusus dan teknologi mutakhir
                    untuk menangkap setiap nuansa instrumen tradisional dengan
                    presisi tinggi.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-[#f8f9fa] p-8 border border-[#757682]/20 rounded flex flex-col justify-between group hover:bg-[#f8f9fa]/90 transition-colors duration-300">
                <div>
                  <span
                    className="material-symbols-outlined text-[#00236f] mb-6"
                    style={{ fontSize: "32px" }}
                  >
                    tune
                  </span>
                  <h3 className="font-serif text-[24px] font-semibold text-[#191c1d] mb-4">
                    Aransemen
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-[#444651]">
                    Interpretasi modern dari melodi klasik tanpa kehilangan esensi
                    kultural, menciptakan lanskap suara baru untuk audiens global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Music Player Nav Bar */}
      <MusicPlayer />
    </>
  );
}