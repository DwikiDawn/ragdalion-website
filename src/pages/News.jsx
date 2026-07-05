import { useState, useMemo } from 'react';
import { NEWS_UPDATES } from '../data/websiteData';
import { Calendar, ArrowRight, Info } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function News() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Industry Insight'];

  const filteredNews = useMemo(() => {
    if (activeFilter === 'All') return NEWS_UPDATES;
    return NEWS_UPDATES.filter(n => n.category.toUpperCase() === activeFilter.toUpperCase());
  }, [activeFilter]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-[10px] text-blue-600 uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
          News & Update
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight heading-title mt-2">
          Latest Insights & Corporate News
        </h2>
        <p className="text-xs text-slate-500">
          Latest insights, product updates, events, and articles from Ragdalion Technology.
        </p>
      </div>

      {/* Instagram Integration Notice */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl text-blue-600 shrink-0">
            <InstagramIcon />
          </div>
          <div className="space-y-1 text-xs">
            <h4 className="font-extrabold text-slate-900">Instagram Feed Connection</h4>
            <p className="text-slate-500 leading-relaxed">
              Buat feed gratis di <strong>behold.so</strong>, hubungkan akun Instagram <strong>@ragdalion</strong>, lalu masukkan Feed ID pada variabel <strong>VITE_BEHOLD_FEED_ID</strong> untuk integrasi feed langsung.
            </p>
          </div>
        </div>
        <a
          href="https://instagram.com/ragdalion"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-950 hover:bg-blue-600 text-white font-extrabold text-[10px] px-5 py-3 rounded-xl transition-all uppercase tracking-wider shrink-0 shadow-sm"
        >
          Kunjungi @ragdalion
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 bg-slate-100 p-1.5 rounded-2xl w-fit">
        {filters.map((f, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeFilter === f
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.length === 0 ? (
          <div className="md:col-span-2 py-16 text-center text-slate-400 border border-dashed border-slate-200 bg-white rounded-3xl">
            <Info className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="font-semibold text-xs">Belum ada artikel untuk kategori ini</p>
          </div>
        ) : (
          filteredNews.map(art => (
            <article key={art.id} className="glass-card rounded-3xl p-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-slate-800 font-mono shadow-sm">
                    {art.category}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                  {art.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6">
                <button className="text-[10px] text-blue-600 font-extrabold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
