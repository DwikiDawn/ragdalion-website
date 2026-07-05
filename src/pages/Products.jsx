import { useState } from 'react';
import { PRODUCT_LINEUP, INTEGRATED_SERVICES } from '../data/websiteData';
import { ArrowUpRight, Cpu, Compass, Settings, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [activeTab, setActiveTab] = useState('products'); // products, services

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ragda-border-subtle pb-6">
        <div className="space-y-3">
          <span className="text-[10px] text-amber-500 uppercase font-extrabold tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            Solutions
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight heading-title">
            Industrial Products & Services
          </h2>
          <p className="text-xs text-ragda-text-muted">
            End-to-end software, IoT, hardware infrastructure, and AI configurations built for manufacturing scale.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'products'
                ? 'bg-amber-500 text-slate-950'
                : 'text-ragda-text-muted hover:bg-ragda-surface-hover hover:text-white'
            }`}
          >
            Products Line-up
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'services'
                ? 'bg-amber-500 text-slate-950'
                : 'text-ragda-text-muted hover:bg-ragda-surface-hover hover:text-white'
            }`}
          >
            Integrated Services
          </button>
        </div>
      </div>

      {/* Tab Content: Products */}
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          {PRODUCT_LINEUP.map((prod) => (
            <div key={prod.id} className="glass-card rounded-2xl p-6 border border-ragda-border-subtle flex flex-col justify-between hover:border-amber-500/20 transition-all duration-300 group">
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold text-white group-hover:text-amber-500 transition-colors leading-tight">
                  {prod.name}
                </h4>
                <p className="text-[9px] text-amber-500/90 font-extrabold uppercase tracking-wider">
                  {prod.tagline}
                </p>
                <p className="text-xs text-ragda-text-muted leading-relaxed">
                  {prod.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {prod.features.map((feat, fidx) => (
                    <li key={fidx} className="text-[10px] text-ragda-text-secondary flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500/60 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
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
      )}

      {/* Tab Content: Services */}
      {activeTab === 'services' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {INTEGRATED_SERVICES.map((serv, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 border border-ragda-border-subtle space-y-6">
              <div className="space-y-2">
                <h4 className="text-md font-extrabold text-white">{serv.name}</h4>
                <p className="text-xs text-ragda-text-muted leading-relaxed">{serv.description}</p>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] text-ragda-text-subtle uppercase font-extrabold tracking-wider block">
                  Capabilities & Tech Stack
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serv.items.map((item, iidx) => (
                    <div key={iidx} className="bg-slate-950/60 border border-ragda-border-subtle p-3 rounded-xl text-xs text-ragda-text-secondary flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
