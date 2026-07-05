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

  const filters = ['All', 'Company News', 'Product Update', 'Event / Webinar', 'Industry Insight'];

  const filteredNews = useMemo(() => {
    if (activeFilter === 'All') return NEWS_UPDATES;
    return NEWS_UPDATES.filter(n => n.category.toUpperCase() === activeFilter.toUpperCase());
  }, [activeFilter]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-[10px] text-amber-500 uppercase font-extrabold tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
          News & Update
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight heading-title">
          Latest Insights & Corporate News
        </h2>
        <p className="text-xs text-ragda-text-muted">
          Latest insights, product updates, events, and articles from Ragdalion Technology.
        </p>
      </div>

      {/* Instagram Integration Notice */}
      <div className="glass-card rounded-3xl p-6 border border-ragda-border-standard flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-2xl text-amber-500 shrink-0">
            <InstagramIcon />
          </div>
          <div className="space-y-1 text-xs">
            <h4 className="font-extrabold text-white">Instagram Feed Connection</h4>
            <p className="text-ragda-text-muted leading-relaxed">
              Buat feed gratis di <strong>behold.so</strong>, hubungkan akun Instagram <strong>@ragdalion</strong>, lalu masukkan Feed ID pada variabel <strong>VITE_BEHOLD_FEED_ID</strong> untuk integrasi feed langsung.
            </p>
          </div>
        </div>
        <a
          href="https://instagram.com/ragdalion"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900 border border-ragda-border-standard hover:border-amber-500/40 text-white font-extrabold text-[10px] px-5 py-3 rounded-xl transition-all uppercase tracking-wider shrink-0"
        >
          Kunjungi @ragdalion
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-thin">
        {filters.map((f, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeFilter === f
                ? 'bg-amber-500 text-slate-950'
                : 'text-ragda-text-muted hover:bg-ragda-surface-hover hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.length === 0 ? (
          <div className="md:col-span-2 py-16 text-center text-ragda-text-muted border border-dashed border-ragda-border-subtle rounded-3xl">
            <Info className="w-10 h-10 text-slate-700 mx-auto mb-3" />
            <p className="font-semibold text-xs">Belum ada artikel untuk kategori ini</p>
          </div>
        ) : (
          filteredNews.map(art => (
            <article key={art.id} className="glass-card rounded-3xl p-6 border border-ragda-border-standard flex flex-col justify-between hover:border-amber-500/25 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-800/10 rounded-full blur-2xl"></div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase bg-slate-900 border border-ragda-border-standard px-2.5 py-1 rounded text-white font-mono">
                    {art.category}
                  </span>
                  <span className="text-[10px] text-ragda-text-muted flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-white group-hover:text-amber-500 transition-colors leading-tight">
                  {art.title}
                </h3>
                
                <p className="text-xs text-ragda-text-muted leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <button className="text-[10px] text-amber-500 font-extrabold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
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
