import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Design & Development",
    description:
      "We craft beautiful, responsive websites that tell your story and convert visitors into customers — from simple landing pages to complex business portals.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
        />
      </svg>
    ),
  },
  {
    title: "Email Hosting",
    description:
      "Professional email at your own domain name. Reliable uptime, strong spam filtering, and simple setup — so your team stays connected and looks credible.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    description:
      "Every business is unique. We build tailored software — dashboards, automation tools, APIs, and integrations — designed precisely around your workflow.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Client-Focused",
    description:
      "We listen first, then build exactly what you need — no cookie-cutter solutions.",
  },
  {
    title: "Reliable & Secure",
    description:
      "Uptime you can depend on, with security baked in from the very first line of code.",
  },
  {
    title: "Fast Turnaround",
    description: "We set clear timelines and deliver on them, every time.",
  },
  {
    title: "Ongoing Support",
    description:
      "We're here after launch — for updates, fixes, and as your business grows.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-linear-to-br from-slate-900 via-purple-950 to-slate-900 text-white min-h-screen flex items-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand */}
          <div className="flex flex-col items-center mb-10">
            <Image
              src="/logo.png"
              alt="DisNetDev Software"
              width={140}
              height={140}
              unoptimized
              priority
              className="mb-5"
            />
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-white">DisNet</span>
              <span className="text-fuchsia-400">Dev</span>
            </p>
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-[0.2em] mt-2">
              Software
            </p>
          </div>

          <div className="inline-block bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Web &nbsp;·&nbsp; Email &nbsp;·&nbsp; Software
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Bringing Your{" "}
            <span className="text-fuchsia-400">Digital Vision</span> to Life
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            DisNetDev Software designs stunning websites, hosts professional
            email, and builds custom software — everything your business needs
            to thrive online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-fuchsia-900/40"
            >
              Start Your Project
            </Link>
            <Link
              href="#services"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              From your first website to enterprise software, we cover
              everything you need to run and grow your digital presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-fuchsia-100 hover:shadow-xl hover:shadow-fuchsia-50 transition-all duration-300"
              >
                <div className="text-fuchsia-600 mb-5 p-3 bg-fuchsia-50 rounded-xl inline-block group-hover:bg-fuchsia-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DisNetDev */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose DisNetDev?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              {
                "We're not just a vendor — we're your long-term digital partner."
              }
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-8 h-8 bg-fuchsia-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section
        id="contact"
        className="py-24 px-4 bg-linear-to-br from-fuchsia-600 to-purple-700 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-fuchsia-100 text-lg mb-10 leading-relaxed">
            Tell us about your project and we&apos;ll put together a solution
            that fits your needs and budget.
          </p>
          <a
            href="mailto:info@disnetdev.co.za"
            className="inline-flex items-center gap-2 bg-white text-fuchsia-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-fuchsia-50 transition-colors text-sm shadow-lg"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            info@disnetdev.co.za
          </a>
        </div>
      </section>
    </main>
  );
}
