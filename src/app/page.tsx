import Link from "next/link";

const services = [
  {
    title: "Web Design & Development",
    description:
      "We craft beautiful, responsive websites that tell your story and convert visitors into customers — from simple landing pages to complex business portals.",
    icon: (
      <svg
        className="h-6 w-6"
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
        className="h-6 w-6"
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
        className="h-6 w-6"
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
    label: "Modern Designs",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    label: "Secure Hosting",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    label: "Blazing Fast",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    label: "Dedicated Support",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
];

const whyUs = [
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
      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Big DND */}
          <h1 className="text-[clamp(6rem,20vw,14rem)] font-black tracking-tighter leading-none text-white uppercase mb-2">
            DND
          </h1>

          {/* Brand name */}
          <p className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white mb-6">
            DisNetDev Software
          </p>

          {/* Tagline with decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="flex-1 max-w-20 h-px bg-white/40" />
            <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70">
              Design It.&nbsp; Host It.&nbsp; Grow It.
            </p>
            <span className="flex-1 max-w-20 h-px bg-white/40" />
          </div>

          {/* Hero headline */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white mb-6 uppercase">
            Beautiful Websites. <br className="hidden sm:block" />
            Powerful Hosting. <br className="hidden sm:block" />
            Built for Your Success.
          </p>

          {/* Body */}
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            At DisNetDev, we don&apos;t just build websites — we build digital
            experiences that help your business stand out, connect with your
            audience, and drive real results. Whether you need a custom website,
            e-commerce solution, or reliable hosting, we&apos;ve got you
            covered.{" "}
            <strong className="text-white">
              Let&apos;s bring your vision to life and create something amazing
              together.
            </strong>
          </p>

          {/* Contact box */}
          <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center border border-white/30 divide-y sm:divide-y-0 sm:divide-x divide-white/30 rounded-sm mb-14 overflow-hidden">
            <a
              href="mailto:info@disnetdev.co.za"
              className="flex items-center gap-3 px-8 py-4 hover:bg-white hover:text-black transition-colors group"
            >
              <svg
                className="h-4 w-4 text-white/60 group-hover:text-black transition-colors"
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
              <span className="text-sm font-semibold tracking-wide">
                info@disnetdev.co.za
              </span>
            </a>
            <a
              href="https://wa.me/27710908116"
              className="flex items-center gap-3 px-8 py-4 hover:bg-white hover:text-black transition-colors group"
            >
              <svg
                className="h-4 w-4 text-white/60 group-hover:text-black transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide">
                071 090 8116
              </span>
            </a>
          </div>

          {/* Feature icons row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-white/10 pt-10">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 text-white/50"
              >
                {f.icon}
                <span className="text-xs font-semibold tracking-widest uppercase">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-black/40 mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Our Services
            </h2>
            <div className="w-16 h-px bg-black mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-10 hover:bg-black hover:text-white transition-colors duration-300 group"
              >
                <div className="text-black group-hover:text-white mb-6 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-black/50 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DisNetDev */}
      <section id="about" className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-4">
              Why Us
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Why DisNetDev?
            </h2>
            <div className="w-16 h-px bg-white mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-black p-8 hover:bg-white hover:text-black transition-colors duration-300 group"
              >
                <div className="w-8 h-px bg-white group-hover:bg-black mb-6 transition-colors" />
                <h3 className="text-base font-black uppercase tracking-widest mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 group-hover:text-black/60 text-sm leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-white text-black text-center"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-black/40 mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-10" />
          <p className="text-black/60 text-lg leading-relaxed mb-12">
            Tell us about your project and we&apos;ll put together a solution
            that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@disnetdev.co.za"
              className="inline-flex items-center gap-3 border border-black text-black font-bold tracking-widest uppercase text-xs px-8 py-4 hover:bg-black hover:text-white transition-colors"
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
            <a
              href="https://wa.me/27710908116"
              className="inline-flex items-center gap-3 bg-black text-white font-bold tracking-widest uppercase text-xs px-8 py-4 hover:bg-white hover:text-black border border-black transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              071 090 8116
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
