export default function LegacySection() {
  return (
    <section className="py-[120px] bg-[#f3f4f5]">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
          {/* Image with overlay card */}
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/3] bg-[#191c1d] border border-[#757682]/20 rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Close-up of a traditional carved Batak gondang instrument"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPZDmDL69pssl1RR3ZA99TpOyAwNZrTOnbY_WMMJf9FXwZW5mv2LejmjzFWz-nrKre7FNjEV35owJoll2L6PzkUVFnL55ciJpQBfZrZgfIVRc4KF_A5-ggSauHfFg9AuRDwgZaodvyNyA9hj-n0Z1Pg4dFDTI7QcLJ5XiRs6d-tEYxn0vcQv9CRAad-yW_f7gwrfT6P_coz0stW2xhLQ0XV8oRjwxlawolMGoAVsz27QKQiktCz3-50EJoMZgTHjAUft6fYJES_M"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-64 bg-[#00236f] p-6 rounded shadow-lg">
              <h3 className="font-serif text-[22px] font-semibold text-white mb-2">
                Est. 1994
              </h3>
              <p className="font-sans text-[13px] font-normal text-white/80 leading-relaxed">
                Three decades of sonic archiving and cultural preservation.
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="md:col-span-5 md:col-start-8 mt-16 md:mt-0">
            <h2 className="font-serif text-[32px] font-semibold text-[#191c1d] mb-6">
              A Legacy of Sound
            </h2>
            <p className="font-sans text-[16px] font-normal text-[#444651] mb-6 leading-relaxed">
              Founded on the lush shores of Lake Toba, STG Enterprise began as
              a modest archival project aimed at capturing the fading echoes
              of traditional Batak Gondang ensembles. What started as a
              passion project by our founder to record village elders has
              evolved into Southeast Asia&apos;s premier center for Batak
              ethnomusicology.
            </p>
            <p className="font-sans text-[16px] font-normal text-[#444651] mb-8 leading-relaxed">
              Over thirty years, we have catalogued thousands of hours of
              traditional repertoire, from the sacred Uning-uningan to the
              celebratory Opera Batak. Our mission is to ensure that these
              complex rhythms and haunting melodies are not just remembered,
              but vibrantly produced for the global stage.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-[#00236f] tracking-wide hover:opacity-80 transition-opacity"
            >
              Explore our Archives
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
