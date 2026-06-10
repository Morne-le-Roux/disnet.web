import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-3xl font-black tracking-widest uppercase text-white mb-1">
              DND
            </p>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-4">
              DisNetDev Software
            </p>
            <p className="text-sm leading-relaxed">
              Professional web design, email hosting, and custom software
              solutions for businesses of all sizes.
            </p>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Email Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@disnetdev.co.za"
                  className="hover:text-white transition-colors"
                >
                  info@disnetdev.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-xs text-center tracking-widest uppercase text-white/30">
          &copy; {new Date().getFullYear()} DisNetDev Software. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
