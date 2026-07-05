import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CONTACT_DETAILS } from '../data/websiteData';
import { Mail, Phone, MapPin, CheckCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const { addLead } = useApp();
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [industry, setIndustry] = useState('');
  const [solutionInterest, setSolutionInterest] = useState('Production Execution System');
  const [projectTimeline, setProjectTimeline] = useState('< 1 month');
  const [message, setMessage] = useState('');
  
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      q: 'What kind of companies does Ragdalion work with?',
      a: 'We primarily partner with manufacturing, industrial, oil & gas, mining, logistics, and warehouse companies across Indonesia, plus enterprise organizations adopting digital transformation.'
    },
    {
      q: 'Can Ragdalion build custom software based on our process?',
      a: 'Yes! We specialize in custom web and mobile software development tailored exactly to your shopfloor processes and operational requirements.'
    },
    {
      q: 'Does Ragdalion support IoT and machine integration?',
      a: 'Absolutely. We integrate sensors, PLCs, HMIs, and IoT gateways to capture live machine telemetry, run OEE monitoring, and build real-time control dashboards.'
    },
    {
      q: 'Can Ragdalion integrate with existing ERP or database systems?',
      a: 'Yes, we regularly build integrations with major ERP systems (SAP, Oracle, Microsoft Dynamics) and local database environments using standard REST APIs and query integrations.'
    },
    {
      q: 'Does Ragdalion provide AI implementation and training?',
      a: 'Yes! We offer corporate AI training programs for team productivity, as well as AI implementation services like predictive maintenance algorithms and quality defect analytics.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      addLead({
        fullName,
        companyName,
        jobTitle,
        email,
        whatsapp,
        industry,
        solutionInterest,
        projectTimeline,
        message
      });

      setSuccess(true);
      setIsSubmitting(false);

      // Reset fields
      setFullName('');
      setCompanyName('');
      setJobTitle('');
      setEmail('');
      setWhatsapp('');
      setIndustry('');
      setMessage('');
    }, 500);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-[10px] text-blue-600 uppercase font-extrabold tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
          Contact Us
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight heading-title mt-2">
          Contact Ragdalion Technology
        </h2>
        <p className="text-xs text-slate-500 max-w-xl">
          Tell us your business challenge and our team will help you identify the right digital transformation solution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info & Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">
              We're Here to Help
            </h3>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Office Address</p>
                  <p className="text-slate-500 mt-0.5">{CONTACT_DETAILS.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900">Email Address</p>
                  <p className="text-slate-500 mt-0.5">{CONTACT_DETAILS.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900">Phone & WhatsApp</p>
                  <p className="text-slate-500 mt-0.5">Phone: {CONTACT_DETAILS.phone}</p>
                  <p className="text-slate-500 mt-0.5">WhatsApp: {CONTACT_DETAILS.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple OpenStreetMap Iframe */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm h-64">
            <iframe
              title="Office Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=107.145%2C-6.305%2C107.175%2C-6.285&amp;layer=mapnik&amp;marker=-6.295%2C107.16"
              className="w-full h-full border-none opacity-85 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        </div>

        {/* Right: Consultation Form */}
        <div className="lg:col-span-7">
          {success ? (
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 text-center space-y-4 shadow-sm animate-fadeIn">
              <div className="inline-flex p-3.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-extrabold text-slate-900">Consultation Request Submitted</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you for contacting PT Ragdalion. Our sales & engineering team will contact you via email or WhatsApp within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all uppercase tracking-wider mt-4"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest mb-2">
                Book a Free Consultation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full glass-input rounded-xl text-xs p-3.5"
                  />
                </div>
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="PT Manufacture Co"
                    className="w-full glass-input rounded-xl text-xs p-3.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Job Title</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Plant Manager / Engineer"
                    className="w-full glass-input rounded-xl text-xs p-3.5"
                  />
                </div>
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full glass-input rounded-xl text-xs p-3.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">WhatsApp Number</label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full glass-input rounded-xl text-xs p-3.5"
                  />
                </div>
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Industry</label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="Automotive, FMCG, Electronics..."
                    className="w-full glass-input rounded-xl text-xs p-3.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Solution Interest</label>
                  <select
                    value={solutionInterest}
                    onChange={(e) => setSolutionInterest(e.target.value)}
                    className="w-full glass-input rounded-xl text-xs p-3.5 bg-white focus:outline-none"
                  >
                    {[
                      'Production Execution System',
                      'Maintenance Management System',
                      'Quality Control System',
                      'Energy Monitoring System',
                      'RFID Inventory Monitoring System',
                      'Fleet Management System',
                      'AI Training',
                      'Custom Software Development',
                      'System Integration',
                      'IoT Project',
                      'Other'
                    ].map(sol => (
                      <option key={sol} value={sol}>{sol}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Project Timeline</label>
                  <select
                    value={projectTimeline}
                    onChange={(e) => setProjectTimeline(e.target.value)}
                    className="w-full glass-input rounded-xl text-xs p-3.5 bg-white focus:outline-none"
                  >
                    {['< 1 month', '1–3 months', '3–6 months', '6–12 months', 'Exploring'].map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[9px] text-slate-500 uppercase font-extrabold tracking-wider block mb-1.5">Message / Requirements</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project specifications or pain points..."
                  rows="3"
                  className="w-full glass-input rounded-xl text-xs p-3.5 focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[10px] text-slate-500 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Processed securely in compliance with PT Ragdalion ISO 27001 data guidelines.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-4 rounded-xl transition-all duration-300 shadow-md shadow-blue-600/10 uppercase tracking-wider"
              >
                {isSubmitting ? 'Sending Request...' : 'Submit Consultation Request'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wider text-center">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-xs font-extrabold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              
              {openFaq === idx && (
                <div className="p-5 border-t border-slate-100 bg-slate-50 text-xs text-slate-600 leading-relaxed animate-slideDown">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
