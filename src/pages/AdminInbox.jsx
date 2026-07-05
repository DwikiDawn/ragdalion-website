import { useApp } from '../context/AppContext';
import { ShieldCheck, Mail, Phone, Calendar, Clock, Database, User } from 'lucide-react';

export default function AdminInbox() {
  const { leads } = useApp();

  const formatTimestamp = (isoStr) => {
    const d = new Date(isoStr);
    return d.toLocaleString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-ragda-border-subtle pb-6">
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight heading-title">Sales CRM & Consultation Inbox</h2>
          <p className="text-xs text-ragda-text-muted mt-1">Sistem pelacakan calon klien (leads) yang masuk dari form web utama</p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          ISO 27001 Log
        </div>
      </div>

      {/* CRM Dashboard Table */}
      <div className="glass-card rounded-3xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-ragda-border-subtle flex items-center justify-between">
          <h3 className="font-extrabold text-white text-xs uppercase tracking-widest flex items-center gap-2">
            <Database className="w-4 h-4 text-amber-500" />
            Submitted Lead Database ({leads.length})
          </h3>
        </div>

        {leads.length === 0 ? (
          <div className="p-20 text-center text-ragda-text-muted">
            <ShieldCheck className="w-12 h-12 text-slate-700 mx-auto mb-3" />
            <p className="font-semibold text-xs">Belum ada data prospek masuk saat ini</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-ragda-border-subtle bg-slate-950/40 text-ragda-text-muted font-bold uppercase tracking-wider text-[9px]">
                  <th className="p-4 w-44">Timestamp (WIB)</th>
                  <th className="p-4 w-48">Nama Prospek & Perusahaan</th>
                  <th className="p-4 w-48">Solusi & Timeline</th>
                  <th className="p-4">Message / Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ragda-border-subtle text-slate-300">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-slate-900/30 font-medium">
                    <td className="p-4 text-ragda-text-muted text-[10px] font-mono">{formatTimestamp(lead.timestamp)}</td>
                    <td className="p-4 space-y-1">
                      <p className="text-white font-extrabold flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        {lead.fullName}
                      </p>
                      <p className="text-ragda-text-muted">{lead.jobTitle} at <strong>{lead.companyName}</strong></p>
                      <p className="text-[10px] text-ragda-text-subtle font-mono">{lead.email} | {lead.whatsapp}</p>
                    </td>
                    <td className="p-4 space-y-1">
                      <span className="inline-block text-[10px] font-extrabold uppercase bg-amber-500/10 border border-amber-500/20 text-amber-500 px-2 py-0.5 rounded">
                        {lead.solutionInterest}
                      </span>
                      <p className="text-[10px] text-ragda-text-muted">Timeline: <strong>{lead.projectTimeline}</strong></p>
                      <p className="text-[10px] text-ragda-text-subtle">Industry: {lead.industry || 'N/A'}</p>
                    </td>
                    <td className="p-4 text-ragda-text-secondary leading-relaxed max-w-xs truncate hover:text-clip hover:whitespace-normal">
                      {lead.message || <span className="italic text-ragda-text-subtle">No specific message</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
