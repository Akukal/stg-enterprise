export default function VisionMissionSection() {
  const missionItems = [
    "Documenting and archiving traditional Batak music with high-fidelity recording standards.",
    "Providing a world-class platform for local artists to showcase their talent globally.",
    "Educating the next generation on the cultural significance of Batak heritage.",
  ];

  return (
    <section className="py-[120px] max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Visi Kami - light card */}
        <div className="bg-[#f8f9fa] border border-[#757682]/20 rounded p-10">
          <span
            className="material-symbols-outlined text-[#00236f] mb-6 block"
            style={{ fontSize: "32px" }}
          >
            visibility
          </span>
          <h3 className="font-serif text-[24px] font-semibold text-[#191c1d] mb-4">
            Visi Kami
          </h3>
          <p className="font-sans text-[16px] font-normal text-[#444651] leading-relaxed">
            To be the global gold standard in cultural music production,
            where the ancient traditions of the Batak people are celebrated
            with modern technical excellence, bridging the gap between
            ancestral heritage and the digital future.
          </p>
        </div>

        {/* Misi Kami - dark/navy card */}
        <div className="bg-[#00236f] rounded p-10">
          <span
            className="material-symbols-outlined text-white mb-6 block"
            style={{ fontSize: "32px" }}
          >
            track_changes
          </span>
          <h3 className="font-serif text-[24px] font-semibold text-white mb-4">
            Misi Kami
          </h3>
          <ul className="space-y-3">
            {missionItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-white/90 mt-0.5 flex-shrink-0"
                  style={{ fontSize: "18px" }}
                >
                  check_circle
                </span>
                <span className="font-sans text-[15px] font-normal text-white/85 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
