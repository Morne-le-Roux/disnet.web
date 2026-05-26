import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="DisNetDev Software logo"
                width={36}
                height={36}
                className="rounded"
                unoptimized
              />
              <span className="text-sm font-bold tracking-tight leading-none">
                <span className="text-white">DisNetDev</span>
                <span className="block text-xs font-normal text-slate-400">
                  Software
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional web design, email hosting, and custom software
              solutions for businesses of all sizes.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
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
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
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
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 text-sm text-center">
          © {new Date().getFullYear()} DisNetDev Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
