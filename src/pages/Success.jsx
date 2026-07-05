import { useState, useMemo } from 'react';
import { SUCCESS_STORIES } from '../data/websiteData';
import { ShieldCheck, Info } from 'lucide-react';

export default function Success() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI', 'Maintenance', 'Production', 'Hardware'];

  const filteredStories = useMemo(() => {
    if (activeCategory === 'All') return SUCCESS_STORIES;
    return SUCCESS_STORIES.filter(story => story.category.toUpperCase() === activeCategory.toUpperCase());
  }, [activeCategory]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-[10px] text-blue-600 uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
          Portfolio
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight heading-title mt-2">
          Success Stories & Industrial Use Cases
        </h2>
        <p className="text-xs text-slate-500 max-w-xl">
          Explore how Ragdalion helps companies improve operations through software, IoT, AI, RFID, and system integration.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-none bg-slate-100 p-1.5 rounded-2xl w-fit">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Success Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredStories.length === 0 ? (
          <div className="md:col-span-2 py-16 text-center text-slate-400 border border-dashed border-slate-200 bg-white rounded-3xl">
            <Info className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="font-semibold text-xs">Belum ada success story untuk kategori ini</p>
          </div>
        ) : (
          filteredStories.map(story => (
            <div key={story.id} className="glass-card rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-slate-800 font-mono shadow-sm">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-950">{story.title}</h3>

                {/* Problem, Solution, Impact Grid */}
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-4 gap-2 items-start text-xs">
                    <span className="col-span-1 text-[9px] text-rose-600 font-extrabold uppercase tracking-wider mt-0.5">PROBLEM</span>
                    <p className="col-span-3 text-slate-600 leading-relaxed font-medium">{story.problem}</p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 items-start text-xs">
                    <span className="col-span-1 text-[9px] text-blue-600 font-extrabold uppercase tracking-wider mt-0.5">SOLUTION</span>
                    <p className="col-span-3 text-slate-600 leading-relaxed font-medium">{story.solution}</p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 items-start text-xs bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                    <span className="col-span-1 text-[9px] text-emerald-700 font-extrabold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      IMPACT
                    </span>
                    <p className="col-span-3 text-emerald-950 font-extrabold leading-relaxed">{story.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
