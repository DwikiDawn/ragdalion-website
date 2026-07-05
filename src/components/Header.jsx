import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Success Story', path: '/success' },
    { name: 'News & Update', path: '/news' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-ragda-primary/80 backdrop-blur-md border-b border-ragda-border-subtle transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-amber-500/10 border border-amber-500/30 p-2 rounded-xl text-amber-500 relative overflow-hidden transition-all duration-300 group-hover:border-amber-500/60">
            <div className="absolute inset-0 bg-amber-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Shield className="w-5 h-5 relative z-10" />
          </div>
          <div>
            <h1 className="text-sm font-extrabold tracking-tight text-white leading-none">RAGDALION</h1>
            <p className="text-[9px] text-slate-500 font-bold uppercase mt-1 tracking-widest">Technology</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                isActive(link.path)
                  ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                  : 'text-ragda-text-muted hover:text-white hover:bg-ragda-surface-hover border border-transparent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 uppercase tracking-wider"
          >
            Book Consultation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ragda-text-muted hover:text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-ragda-secondary border-b border-ragda-border-subtle p-6 space-y-4 shadow-2xl flex flex-col absolute top-full left-0 right-0 animate-fadeIn">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                isActive(link.path)
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-ragda-text-muted hover:bg-ragda-surface-hover hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs py-3.5 rounded-xl transition-all uppercase tracking-wider"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
