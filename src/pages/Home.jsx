import { ArrowRight, ArrowUpRight, Cpu, Compass, Settings, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_LINEUP, INTEGRATED_SERVICES, TRUSTED_PARTNERS } from '../data/websiteData';

export default function Home() {
  return (
    <div className="space-y-24 bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:py-32 bg-white border-b border-slate-100">
        {/* Glowing Background FX */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.04),transparent_80%)]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Blueprint Grid Layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 text-left">
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-blue-600 backdrop-blur-sm animate-fadeIn">
              DIGITAL TRANSFORMATION PARTNER &middot; INDONESIA
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 display-title leading-tight tracking-tight">
              Empowering Smart Factory Operations
            </h2>

            <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
              We help industrial companies in Cikarang, Karawang, and Jakarta modernize their shopfloors using IoT sensors, custom software telemetry, system integrations, and operational AI.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-4 rounded-xl transition-all duration-300 shadow-md shadow-blue-600/10 uppercase tracking-wider flex items-center gap-1.5"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-xs px-6 py-4 rounded-xl border border-slate-200 transition-all uppercase tracking-wider shadow-sm"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Right: Rich visual dashboard mock representing actual industrial software */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-10"></div>
            <div className="relative bg-white border border-slate-100 rounded-3xl p-5 shadow-2xl space-y-4 text-xs font-semibold">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-slate-800 font-extrabold text-[11px] uppercase tracking-wider">Live Factory telemetry</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">ID: RGD-JAB-08</span>
              </div>

              {/* Stats card inside mock */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'OEE Status', val: '86.4%', color: 'text-emerald-600' },
                  { label: 'Downtime', val: '12m', color: 'text-rose-600' },
                  { label: 'Cycle Time', val: '28.4s', color: 'text-blue-600' }
                ].map((m, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                    <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">{m.label}</p>
                    <p className={`text-sm font-black ${m.color} mt-1`}>{m.val}</p>
                  </div>
                ))}
              </div>

              {/* Chart Mock */}
              <div className="h-28 bg-slate-50 border border-slate-100 rounded-2xl p-3 flex flex-col justify-between">
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-extrabold">Weekly Output Performance</p>
                <div className="flex items-end justify-between h-14 pt-2">
                  {[45, 60, 55, 75, 80, 68, 86].map((h, i) => (
                    <div key={i} className="w-6 bg-blue-600/10 hover:bg-blue-600 rounded-t-md transition-colors relative group cursor-pointer" style={{ height: `${h}%` }}>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-slate-900 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {h * 10} Units
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 font-mono border-t border-slate-200/60 pt-1">
                  <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden text-center">
          <p className="text-[10px] text-blue-600 uppercase font-extrabold tracking-widest mb-6">
            Trusted by industrial multinational groups & partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
            {TRUSTED_PARTNERS.map((partner, idx) => (
              <span key={idx} className="text-xs font-black text-slate-500 hover:text-slate-800 transition-colors tracking-wider font-mono">
                {partner.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Cards Dashboard */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: '5+', label: 'Years of industrial experience' },
            { value: '60+', label: 'Corporate clients served' },
            { value: '130+', label: 'Projects delivered and live' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
              <p className="text-4xl font-black text-blue-600 tracking-tight">{stat.value}</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product lineup section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] text-blue-600 uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            Product Line-up
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight heading-title">
            Our Industrial Digital Products
          </h3>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A comprehensive, customizable suite of industrial software suites built for modern manufacturing operations.
          </p>
        </div>

        {/* Product Cards Grid with mapped URLs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCT_LINEUP.map((prod) => (
            <div key={prod.id} className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                  {prod.name}
                </h4>
                <p className="text-[9px] text-blue-600 font-extrabold uppercase tracking-wider">
                  {prod.tagline}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {prod.description}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-slate-100 mt-2">
                  {prod.features.slice(0, 3).map((feat, fidx) => (
                    <li key={fidx} className="text-[10px] text-slate-600 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-blue-500/60 shrink-0" />
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
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white font-extrabold text-[10px] py-3 rounded-xl transition-all uppercase tracking-wider"
                >
                  View Solution Page
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] text-blue-600 uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            Capabilities
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight heading-title">
            Integrated Services for Digital Transformation
          </h3>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
            End-to-end consulting, planning, implementation, and infrastructure configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTEGRATED_SERVICES.map((serv, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold text-slate-900">{serv.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{serv.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {serv.items.map((item, iidx) => (
                    <span key={iidx} className="text-[10px] text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1.5 rounded-lg font-bold">
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
