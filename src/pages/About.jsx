import { ShieldCheck, Compass, Users, Cpu, FileSpreadsheet } from 'lucide-react';

export default function About() {
  const profileDetails = [
    { label: 'Company Name', value: 'PT Ragdalion Revolusi Industri' },
    { label: 'Head Office', value: 'Cikarang, Bekasi, West Java, Indonesia' },
    { label: 'Established', value: '01 October 2020' },
    { label: 'Business Sector', value: 'Information Technology, IoT, Digital Transformation, Factory DX' },
    { label: 'Total Employees', value: '88 persons' },
    { label: 'Shareholders', value: '100% Local Indonesia' },
    { label: 'Certifications', value: 'ISO 27001 · ISO 9001' }
  ];

  const teamCapabilities = [
    {
      title: 'Information Technology',
      skills: ['UI/UX Design', 'Software Engineer', 'AI Engineer', 'Mobile App Developer', 'QA Tester']
    },
    {
      title: 'Operation Technology',
      skills: ['IoT Engineer', 'Automation Engineer', 'PLC & HMI Programmer', 'Electrical Engineer']
    },
    {
      title: 'Project Management',
      skills: ['Business Analyst', 'Technical Writer', 'Project Control', 'Technical Support']
    },
    {
      title: 'Infrastructure & Security',
      skills: ['DevOps Engineer', 'Security Engineer', 'Network Engineer', 'System Administrator']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-[10px] text-amber-500 uppercase font-extrabold tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight heading-title">
          About Ragdalion Technology
        </h2>
        <p className="text-xs text-ragda-text-muted leading-relaxed max-w-2xl">
          PT Ragdalion Revolusi Industri is a digital transformation partner based in Cikarang, Indonesia, focused on IT, IoT, AI, and Factory DX solutions for industrial companies.
        </p>
      </div>

      {/* Profile Details Card */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="glass-card rounded-3xl p-6 shadow-xl relative overflow-hidden h-fit">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-[40px]"></div>
          <h3 className="text-xs font-extrabold text-white uppercase tracking-widest flex items-center gap-2 mb-6">
            <Compass className="w-4 h-4 text-amber-500" />
            Company Profile
          </h3>
          <div className="space-y-4">
            {profileDetails.map((det, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[9px] text-ragda-text-muted uppercase font-bold tracking-wider">{det.label}</span>
                <p className="text-xs text-white font-bold">{det.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Value */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-3xl p-8 border border-ragda-border-standard flex flex-col justify-between h-full">
            <div className="space-y-4">
              <span className="text-[9px] text-amber-500 uppercase font-extrabold tracking-widest">Our Vision</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white display-title leading-tight">
                Empowering Industry Through Technology
              </h3>
              <p className="text-xs text-ragda-text-muted leading-relaxed">
                To be the leading technology and digital transformation partner, delivering innovative IT solutions that empower businesses across industries in Indonesia. We combine software, hardware, automation, IoT, and artificial intelligence to create practical digital solutions for industrial operations.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-ragda-border-subtle mt-10">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '60+', label: 'Customers' },
                { value: '130+', label: 'Projects Delivered' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-xl font-black text-white">{stat.value}</p>
                  <p className="text-[9px] text-ragda-text-muted uppercase font-bold tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network Collaboration */}
      <section className="space-y-8">
        <h3 className="text-lg font-extrabold text-white uppercase tracking-wider text-center">Our Business Network</h3>
        <p className="text-xs text-ragda-text-muted text-center max-w-2xl mx-auto">
          Ragdalion actively collaborates with customers, partners, universities, and government-related stakeholders to support industrial digital transformation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {[
            { title: 'Customer Engagement', desc: 'Long-term partnerships with industrial customers across Indonesia.' },
            { title: 'Global Partnership', desc: 'Collaboration with technology vendors and global solution providers.' },
            { title: 'Industry Collaboration', desc: 'Active engagement with associations and industry stakeholders.' },
            { title: 'Technology Community', desc: 'Knowledge sharing with universities, developers, and tech communities.' }
          ].map((net, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-ragda-border-subtle text-center space-y-3">
              <h4 className="text-xs font-bold text-white">{net.title}</h4>
              <p className="text-[11px] text-ragda-text-muted leading-relaxed">{net.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Capabilities */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-extrabold text-white uppercase tracking-wider">Capabilities Across Our 88-Person Team</h3>
          <p className="text-xs text-ragda-text-muted">Multi-disciplinary teams across IT, OT, project management, and infrastructure & security.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {teamCapabilities.map((cap, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-ragda-border-subtle space-y-4">
              <h4 className="text-xs font-extrabold text-amber-500 uppercase tracking-widest border-b border-ragda-border-subtle pb-2">
                {cap.title}
              </h4>
              <ul className="space-y-2">
                {cap.skills.map((skill, sidx) => (
                  <li key={sidx} className="text-xs text-ragda-text-secondary flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500/60 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
