// Website Data for PT Ragdalion Revolusi Industri

export const CONTACT_DETAILS = {
  email: 'info@ragdalion.com',
  phone: '+62 21 8991 1438',
  whatsapp: '+62 851 1740 5393',
  whatsappLink: 'https://wa.me/6285117405393?text=Halo%20Ragdalion,%0ASaya%20ingin%20tau%20lebih%20lanjut%20terkait%20produk/proyek%20yang%20sedang%20dikembangkan.%20Saya%20berminat%20untuk%20dijadwalkan%20meeting%20online%20dengan%20team%20Ragdalion.%20Boleh%20diinfokan%20lebih%20lanjut%20kapan%20Saya%20bisa%20menjadwalkan%20meeting%20online%20nya?%0A%0ATerima%20kasih',
  address: 'Commercial Center Block C No. 5, Jl. Cikarang Baru Raya, Jababeka, Bekasi, West Java 17530',
  instagram: 'https://instagram.com/ragdalion',
  linkedin: 'https://linkedin.com/company/pt-ragdalion-revolusi-industri',
  facebook: 'https://facebook.com/ragdalion'
};

export const PRODUCT_LINEUP = [
  {
    id: 'pes',
    name: 'Production Execution System',
    tagline: 'ELEVATE PRODUCTION EFFICIENCY & ANDON REAL-TIME',
    description: 'Streamline shopfloor operations, monitor line speed, real-time andon systems, and automatically calculate OEE.',
    features: ['Andon Dashboard & Alerts', 'Live OEE Analytics', 'Cycle Time Monitoring', 'Operator Performance Index'],
    url: 'https://production-ragdalion.lovable.app'
  },
  {
    id: 'mms',
    name: 'Maintenance Management System',
    tagline: 'MAXIMIZE EQUIPMENT UPTIME & PREVENTIVE PLANNING',
    description: 'Structure preventive, corrective, and predictive maintenance. Control work orders, MTBF, and spare parts.',
    features: ['Work Order Dispatch System', 'Predictive MTBF & MTTR', 'Preventive Calendars', 'Sparepart Stock Controls'],
    url: 'https://maintenance-ragdalion.lovable.app'
  },
  {
    id: 'qcs',
    name: 'Quality Control System',
    tagline: 'DELIVER UNPARALLELED QUALITY WITH TRACEABILITY',
    description: 'Digital quality check gates, defect tracing, supplier incoming inspection, and AI quality analytics.',
    features: ['Defect Patterns Tracking', 'End-to-End Lot Traceability', 'Statistical Process Control (SPC)', 'Incoming Quality Audit'],
    url: 'https://quality-ragdalion.lovable.app'
  },
  {
    id: 'ems',
    name: 'Energy Monitoring System',
    tagline: 'REDUCE UTILITY WASTE & MONITOR CARBON FOOTPRINT',
    description: 'Track electricity, gas, water, and steam consumption in real-time. Automatically spot anomalies and peaks.',
    features: ['Real-Time Load Analysis', 'Utility Peak Alarms', 'Section-wise Allocations', 'Carbon Footprint Dashboard'],
    url: 'https://energy-ragdalion.lovable.app'
  },
  {
    id: 'rfid',
    name: 'RFID Inventory Monitoring System',
    tagline: 'ACHIEVE NEAR-100% WAREHOUSE STOCK ACCURACY',
    description: 'Automate material movement records using RFID readers, smart warehouse gates, and inventory locations.',
    features: ['Automated RFID Gate Scan', 'Location Bin Tracing', 'Instant Stock Audit App', 'Discrepancy Alerts'],
    url: 'https://inventory-ragdalion.lovable.app'
  },
  {
    id: 'hardware',
    name: 'AMR/AGV & Robot Automation',
    tagline: 'NATIVE WAREHOUSE LOGISTICS AUTOMATION',
    description: 'Deploy Autonomous Mobile Robots (AMR) and Automated Guided Vehicles (AGV) for smart shopfloor transport.',
    features: ['Autonomous Route Navigation', 'Obstacle Avoidance System', 'Automatic Charger Docking', 'WMS API Integrations'],
    url: 'https://agv-amr-ragdalion.lovable.app'
  },
  {
    id: 'rfid-hw',
    name: 'RFID Reader & Tag Infrastructures',
    tagline: 'INDUSTRIAL GRADE RFID INFRASTRUCTURE',
    description: 'High-performance fixed RFID readers, antennas, industrial tags, and handheld devices setup.',
    features: ['Fixed Reader Enclosures', 'High-Gain Antennas', 'Metal-Mount Tags', 'Handheld Integration SDK'],
    url: 'https://rfid-ragdalion.lovable.app'
  },
  {
    id: 'ai-training',
    name: 'Corporate AI Training Program',
    tagline: 'TURN AI INTO DAILY TEAM PRODUCTIVITY',
    description: 'AI masterclasses and workshops for operations and management teams to design daily automation.',
    features: ['1 Day Intensive Session', 'Industrial Use Cases', 'Prompt Design Blueprints', 'Workplace AI Safety'],
    url: 'https://ai-ragdalion.lovable.app'
  },
  {
    id: 'ai-masterclass',
    name: 'AI Masterclass for Business Owners',
    tagline: 'FORMULATE CORPORATE AI ROADMAPS',
    description: 'Executive learning programs to implement AI systems safely and direct digital investments.',
    features: ['Executive Online Webinar', 'Business Impact Audits', 'Compliance Frameworks', 'ROI Tracking Templates'],
    url: 'https://ai-masterclass-ragdalion.lovable.app'
  }
];

export const INTEGRATED_SERVICES = [
  {
    name: 'Customized Software',
    description: 'Scalable web, mobile (Android/iOS), and dashboard applications built custom for unique industrial workflows.',
    items: ['Web Applications', 'Mobile App Development', 'Custom Operations Dashboards', 'Workflow Automation Systems', 'Shopfloor Interfaces']
  },
  {
    name: 'System Integration 4.0',
    description: 'Connecting legacy databases, enterprise ERPs, cloud APIs, and industrial machinery PLCs into a unified data hub.',
    items: ['ERP (SAP, Oracle) Connectors', 'PLC / HMI Integrations', 'Legacy Database Bridges', 'API Gateway Development', 'Secure Cloud Sync']
  },
  {
    name: 'Internet of Things (IoT)',
    description: 'End-to-end industrial IoT configurations including telemetry sensors, gateways, and live status monitoring boards.',
    items: ['Sensor Node Integration', 'Industrial IoT Gateways', 'Real-Time Edge Analytics', 'Telemetry Control Panels', 'Wireless Sensor Networks']
  },
  {
    name: 'Artificial Intelligence (AI)',
    description: 'Applying predictive learning models, machine vision checks, and analytical algorithms to maximize efficiency.',
    items: ['Predictive Maintenance AI', 'Visual Quality Defect AI', 'Operations Forecasting', 'Natural Language Report Bot', 'Team AI Onboarding']
  }
];

export const SUCCESS_STORIES = [
  {
    id: 'story-1',
    category: 'AI',
    title: 'AI Inspection for Electronics Factory',
    problem: 'Manual inspection missed micro-cracks in circuit boards.',
    solution: 'Vision AI camera setup trained to detect anomalies in real-time.',
    impact: 'Defect rate dropped by 35% with zero delays on production line.'
  },
  {
    id: 'story-2',
    category: 'Maintenance',
    title: 'CMMS Rollout for Automotive Supplier',
    problem: 'Reactive repairs resulted in high machine downtime costs.',
    solution: 'Digitalized Maintenance Management System with QR asset tagging.',
    impact: 'Unplanned downtime reduced by 22% in the first 90 days.'
  },
  {
    id: 'story-3',
    category: 'Production',
    title: 'Andon Display Integration for Metal Pressing',
    problem: 'Supervisors were late to identify line bottlenecks.',
    solution: 'PES Andon dashboards showing real-time OEE on shopfloor screens.',
    impact: 'Increased daily output consistency by 14% across 4 assembly lines.'
  },
  {
    id: 'story-4',
    category: 'Hardware',
    title: 'RFID Warehouse Gate for Logistics Center',
    problem: 'Manual scanning created trucks queue at loading docks.',
    solution: 'RFID high-speed gate setup reading up to 200 items in seconds.',
    impact: 'Loading times cut from 45 minutes to less than 8 minutes.'
  }
];

export const NEWS_UPDATES = [
  {
    id: 'news-1',
    category: 'INDUSTRY INSIGHT',
    title: 'Why Real-Time OEE Matters on Modern Shopfloors',
    summary: 'A look at how instant machine telemetry changes operational targets and reduces waste.',
    date: 'September 11, 2025'
  },
  {
    id: 'news-2',
    category: 'INDUSTRY INSIGHT',
    title: 'A Guide to RFID Tag Selection for Metal Assets',
    summary: 'How tag physics impacts reads and what to configure for heavy metal containers.',
    date: 'August 27, 2025'
  },
  {
    id: 'news-3',
    category: 'INDUSTRY INSIGHT',
    title: 'Transitioning from Reactive to Preventive Maintenance',
    summary: 'Step-by-step framework to launch a digitalized maintenance plan without disruption.',
    date: 'August 9, 2025'
  }
];

export const TRUSTED_PARTNERS = [
  'PT Sugity Creatives',
  'PT Indonesia Koito',
  'PT Toyota Motor Manufacturing',
  'PT Winteq',
  'Sharp Electronics',
  'Telkomsel Indonesia',
  'PepsiCo Indofood'
];
