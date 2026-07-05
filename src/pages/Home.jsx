import { ArrowRight, ArrowUpRight, Cpu, Compass, Settings, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_LINEUP, INTEGRATED_SERVICES, TRUSTED_PARTNERS } from '../data/websiteData';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:py-32">
        {/* Glowing Background FX */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(245,158,11,0.06),transparent_80%)]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Blueprint Grid Layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <span className="inline-flex rounded-full border border-amber-500/25 bg-amber-500/5 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-500 backdrop-blur">
            DIGITAL TRANSFORMATION PARTNER &middot; INDONESIA
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white display-title leading-tight max-w-4xl mx-auto">
            Digital Transformation Partner for Manufacturing & Industry
          </h2>

          <p className="text-sm md:text-base text-ragda-text-muted max-w-2xl mx-auto leading-relaxed">
            Ragdalion helps industrial companies build smarter operations through Software Development, IoT, AI, System Integration, RFID, and Factory DX solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 uppercase tracking-wider flex items-center gap-1.5"
            >
              Explore Our Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-slate-950/60 hover:bg-ragda-surface-hover text-white font-extrabold text-xs px-6 py-4 rounded-xl border border-ragda-border-standard hover:border-ragda-border-standard transition-all uppercase tracking-wider"
            >
              Book Consultation
            </Link>
          </div>

          {/* Core Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-16 max-w-3xl mx-auto">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '60+', label: 'Customers' },
              { value: '130+', label: 'Projects Delivered' }
            ].map((stat, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-ragda-border-subtle bg-slate-950/40">
                <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-[10px] text-ragda-text-muted uppercase font-bold tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 border border-ragda-border-standard relative overflow-hidden">
          <p className="text-[10px] text-amber-500 uppercase font-extrabold tracking-widest text-center mb-6">
            Trusted by Industrial Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {TRUSTED_PARTNERS.map((partner, idx) => (
              <span key={idx} className="text-xs font-black text-white tracking-wider font-mono">
                {partner.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product lineup section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] text-amber-500 uppercase font-extrabold tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            Product Line-up
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight heading-title">
            Our AI-Powered Industrial Solutions
          </h3>
          <p className="text-xs text-ragda-text-muted max-w-2xl mx-auto leading-relaxed">
            A scalable suite of digital products built for production, maintenance, quality, energy, inventory, fleet, hardware, and AI enablement.
          </p>
        </div>

        {/* Product Cards Grid with mapped URLs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCT_LINEUP.map((prod) => (
            <div key={prod.id} className="glass-card rounded-2xl p-6 border border-ragda-border-subtle flex flex-col justify-between hover:border-amber-500/20 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-extrabold text-white group-hover:text-amber-500 transition-colors leading-tight">
                    {prod.name}
                  </h4>
                </div>
                <p className="text-[9px] text-amber-500/90 font-extrabold uppercase tracking-wider">
                  {prod.tagline}
                </p>
                <p className="text-xs text-ragda-text-muted leading-relaxed">
                  {prod.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {prod.features.slice(0, 3).map((feat, fidx) => (
                    <li key={fidx} className="text-[10px] text-ragda-text-secondary flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-amber-500/60" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={prod.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 border border-ragda-border-standard hover:border-amber-500/40 text-white font-extrabold text-[10px] py-3 rounded-xl transition-all uppercase tracking-wider"
                >
                  View Solution
                  <ArrowUpRight className="w-3.5 h-3.5 text-ragda-text-muted group-hover:text-amber-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] text-amber-500 uppercase font-extrabold tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            Services
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight heading-title">
            Integrated Services for Digital Transformation
          </h3>
          <p className="text-xs text-ragda-text-muted max-w-2xl mx-auto leading-relaxed">
            End-to-end capabilities from software development to IoT, AI, and system integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTEGRATED_SERVICES.map((serv, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-ragda-border-subtle flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold text-white">{serv.name}</h4>
                <p className="text-xs text-ragda-text-muted leading-relaxed">{serv.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {serv.items.map((item, iidx) => (
                    <span key={iidx} className="text-[10px] text-ragda-text-secondary bg-slate-950/60 border border-ragda-border-subtle px-2.5 py-1.5 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
