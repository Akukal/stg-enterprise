import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00236f] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10">
          <div>
            <h3 className="font-serif text-[22px] font-bold text-white tracking-tight mb-3">
              STG Enterprise
            </h3>
            <p className="font-sans text-[14px] font-normal text-white/70 max-w-sm">
              Preserving Batak Musical Heritage through Modern Production.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-[14px] font-medium text-white/80">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        <div className="border-t border-white/15 pt-6">
          <p className="font-sans text-[13px] font-normal text-white/60">
            © {new Date().getFullYear()} STG Enterprise. Preserving Batak
            Musical Heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}
