import { Link } from 'react-router-dom';
import { CONTACT_DETAILS } from '../data/websiteData';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ragda-secondary border-t border-ragda-border-subtle mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.02),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Profile */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-amber-500/10 border border-amber-500/30 p-2 rounded-xl text-amber-500">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold tracking-tight text-white leading-none">RAGDALION</h3>
                <p className="text-[9px] text-slate-500 font-bold uppercase mt-1 tracking-widest">Technology</p>
              </div>
            </Link>

            <p className="text-xs text-ragda-text-muted leading-relaxed">
              PT Ragdalion Revolusi Industri is a digital transformation partner specializing in software development, IoT, AI, system integration, and industrial digital solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href={CONTACT_DETAILS.instagram} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-950/80 rounded-xl border border-ragda-border-subtle text-ragda-text-muted hover:text-amber-500 hover:border-amber-500/40 transition-all">
                <InstagramIcon />
              </a>
              <a href={CONTACT_DETAILS.linkedin} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-950/80 rounded-xl border border-ragda-border-subtle text-ragda-text-muted hover:text-amber-500 hover:border-amber-500/40 transition-all">
                <LinkedinIcon />
              </a>
              <a href={CONTACT_DETAILS.facebook} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-950/80 rounded-xl border border-ragda-border-subtle text-ragda-text-muted hover:text-amber-500 hover:border-amber-500/40 transition-all">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] text-white uppercase font-extrabold tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-ragda-text-muted">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products & Services</Link></li>
              <li><Link to="/success" className="hover:text-white transition-colors">Success Story</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Update</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] text-white uppercase font-extrabold tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-xs text-ragda-text-muted">
              <li><Link to="/products" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">System Integration 4.0</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Internet of Things</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
            </ul>
          </div>

          {/* Contact details & Certifications */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-[10px] text-white uppercase font-extrabold tracking-wider">Contact Info</h4>
              <ul className="space-y-2.5 text-xs text-ragda-text-muted">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-500 shrink-0" /> {CONTACT_DETAILS.address}</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-500 shrink-0" /> {CONTACT_DETAILS.email}</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500 shrink-0" /> {CONTACT_DETAILS.phone}</li>
              </ul>
            </div>

            {/* Certifications (ISO 27001 & ISO 9001) */}
            <div className="flex gap-4 border-t border-ragda-border-subtle pt-4">
              <div className="flex items-center gap-2">
                <div className="text-[9px] font-extrabold text-white bg-slate-900 border border-ragda-border-standard px-2 py-1 rounded">
                  ISO 27001
                </div>
                <div className="text-[8px] text-ragda-text-muted leading-none font-bold">INFO SECURITY</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[9px] font-extrabold text-white bg-slate-900 border border-ragda-border-standard px-2 py-1 rounded">
                  ISO 9001
                </div>
                <div className="text-[8px] text-ragda-text-muted leading-none font-bold">QUALITY MGMT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-ragda-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-ragda-text-subtle font-medium">
          <p>&copy; {new Date().getFullYear()} PT Ragdalion Revolusi Industri. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.ragdalion.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.ragdalion.com</a>
            <span>|</span>
            <Link to="/admin-inbox" className="hover:text-amber-500 transition-colors">Sales CRM Inbox</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
