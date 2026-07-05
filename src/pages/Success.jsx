import { useState, useMemo } from 'react';
import { SUCCESS_STORIES } from '../data/websiteData';
import { Sparkles, ArrowRight, ShieldCheck, AlertCircle, Info } from 'lucide-react';

export default function Success() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI', 'Maintenance', 'Production', 'Utility Monitoring', 'Quality', 'Fleet Management', 'Hardware'];

  // Match items based on selected category filter
  const filteredStories = useMemo(() => {
    if (activeCategory === 'All') return SUCCESS_STORIES;
    
    // Normalize matching names (e.g. Utility Monitoring matching prefix, etc.)
    return SUCCESS_STORIES.filter(story => {
      if (activeCategory === 'Utility Monitoring') {
        return story.category.toUpperCase().includes('UTILITY') || story.category.toUpperCase().includes('ENERGY');
      }
      return story.category.toUpperCase() === activeCategory.toUpperCase();
    });
  }, [activeCategory]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-[10px] text-amber-500 uppercase font-extrabold tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
          Portfolio
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight heading-title">
          Success Stories & Industrial Use Cases
        </h2>
        <p className="text-xs text-ragda-text-muted max-w-xl">
          Explore how Ragdalion helps companies improve operations through software, IoT, AI, RFID, and system integration.
        </p>
      </div>

      {/* Categories Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-thin">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeCategory === cat
                ? 'bg-amber-500 text-slate-950'
                : 'text-ragda-text-muted hover:bg-ragda-surface-hover hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Success Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredStories.length === 0 ? (
          <div className="md:col-span-2 py-16 text-center text-ragda-text-muted border border-dashed border-ragda-border-subtle rounded-3xl">
            <Info className="w-10 h-10 text-slate-700 mx-auto mb-3" />
            <p className="font-semibold text-xs">Belum ada success story untuk kategori ini</p>
          </div>
        ) : (
          filteredStories.map(story => (
            <div key={story.id} className="glass-card rounded-3xl p-6 border border-ragda-border-standard flex flex-col justify-between hover:border-amber-500/25 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-800/10 rounded-full blur-2xl"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold uppercase bg-slate-900 border border-ragda-border-standard px-2.5 py-1 rounded text-white font-mono">
                    {story.category}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-white">{story.title}</h3>

                {/* Problem, Solution, Impact Grid */}
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-4 gap-2 items-start text-xs">
                    <span className="col-span-1 text-[9px] text-red-400 font-extrabold uppercase tracking-wider mt-0.5">PROBLEM</span>
                    <p className="col-span-3 text-ragda-text-secondary leading-relaxed font-medium">{story.problem}</p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 items-start text-xs">
                    <span className="col-span-1 text-[9px] text-amber-500 font-extrabold uppercase tracking-wider mt-0.5">SOLUTION</span>
                    <p className="col-span-3 text-ragda-text-secondary leading-relaxed font-medium">{story.solution}</p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 items-start text-xs bg-slate-950/40 p-3 rounded-xl border border-ragda-border-subtle">
                    <span className="col-span-1 text-[9px] text-emerald-400 font-extrabold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      IMPACT
                    </span>
                    <p className="col-span-3 text-white font-extrabold leading-relaxed">{story.impact}</p>
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
