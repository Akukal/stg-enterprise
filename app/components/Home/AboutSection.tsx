export default function AboutSection() {
  return (
    <section id="AboutSection" className="py-[120px] max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
        <div className="md:col-span-5 md:col-start-2">
          <h2 className="font-serif text-[32px] font-semibold text-[#191c1d] mb-6">
            Tentang Kami
          </h2>
          <p className="font-sans text-[16px] font-normal text-[#444651] mb-6">
            STG Enterprise berdiri di atas pondasi kecintaan terhadap budaya
            Batak dan standar industri media modern. Kami bukan sekadar rumah
            produksi; kami adalah kurator warisan yang memastikan setiap nada
            tradisi terdengar jernih di telinga dunia.
          </p>
          <p className="font-sans text-[16px] font-normal text-[#444651] mb-6">
            Dengan fasilitas rekaman mutakhir dan tim produser yang memahami
            kedalaman filosofis musik etnik, kami berkomitmen untuk
            menghasilkan karya yang memiliki jiwa sekaligus presisi teknis.
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
  );
}
