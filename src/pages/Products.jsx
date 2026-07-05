import { useState } from 'react';
import { PRODUCT_LINEUP, INTEGRATED_SERVICES } from '../data/websiteData';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState('products'); // products, services

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div className="space-y-3">
          <span className="text-[10px] text-blue-600 uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            Solutions
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight heading-title mt-2">
            Industrial Products & Services
          </h2>
          <p className="text-xs text-slate-500">
            End-to-end software, IoT, hardware infrastructure, and AI configurations built for manufacturing scale.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'products'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Products Line-up
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'services'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
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
                  {prod.features.map((feat, fidx) => (
                    <li key={fidx} className="text-[10px] text-slate-600 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-blue-500/60 shrink-0" />
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
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white font-extrabold text-[10px] py-3 rounded-xl transition-all uppercase tracking-wider"
                >
                  View Solution Page
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
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
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="space-y-2">
                <h4 className="text-md font-extrabold text-slate-900">{serv.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{serv.description}</p>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] text-slate-400 uppercase font-extrabold tracking-wider block">
                  Capabilities & Tech Stack
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serv.items.map((item, iidx) => (
                    <div key={iidx} className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-xs text-slate-700 flex items-center gap-2 font-bold shadow-sm">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
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
