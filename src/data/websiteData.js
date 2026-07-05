// Website Data for PT Ragdalion Revolusi Industri

export const CONTACT_DETAILS = {
  email: 'info@ragdalion.com',
  phone: '+62 21 0000 0000',
  whatsapp: '+62 812 0000 0000',
  address: 'Cikarang, Bekasi, West Java, Indonesia',
  instagram: 'https://instagram.com/ragdalion',
  linkedin: 'https://linkedin.com/company/ragdalion',
  facebook: 'https://facebook.com/ragdalion'
};

export const PRODUCT_LINEUP = [
  {
    id: 'pes',
    name: 'Production Execution System',
    tagline: 'INCREASE OEE AND REDUCE PRODUCTION DOWNTIME',
    description: 'Real-time production monitoring, OEE analytics, production tracking, and shopfloor control.',
    features: ['Andon Dashboard', 'Live OEE Calculations', 'Machine Downtime Alerts', 'Shift Reporting'],
    url: 'https://production-ragdalion.lovable.app'
  },
  {
    id: 'mms',
    name: 'Maintenance Management System',
    tagline: 'REDUCE UNPLANNED DOWNTIME AND EXTEND ASSET LIFE',
    description: 'Condition-based, preventive, corrective and predictive maintenance with work orders and spare parts.',
    features: ['Work Order Dispatch', 'Asset Performance Index', 'Preventive Scheduling', 'Sparepart Inventory'],
    url: 'https://maintenance-ragdalion.lovable.app'
  },
  {
    id: 'qcs',
    name: 'Quality Control System',
    tagline: 'IMPROVE PRODUCT QUALITY AND REDUCE DEFECT COST',
    description: 'Quality inspection, defect tracking, traceability, quality reporting, and AI-assisted analytics.',
    features: ['Real-time Defect Tracking', 'Traceability Analysis', 'Supplier Quality Check', 'Statistical Process Control (SPC)'],
    url: 'https://quality-ragdalion.lovable.app'
  },
  {
    id: 'ems',
    name: 'Energy Monitoring System',
    tagline: 'REDUCE ENERGY WASTE AND SUPPORT SUSTAINABILITY GOALS',
    description: 'Energy usage monitoring, utility tracking, carbon monitoring, and optimization dashboard.',
    features: ['Energy Allocations', 'Carbon Footprint Tracking', 'Peak Load Management', 'Utility Anomaly Detection'],
    url: 'https://energy-ragdalion.lovable.app'
  },
  {
    id: 'rfid',
    name: 'RFID Inventory Monitoring System',
    tagline: 'ACHIEVE NEAR-100% INVENTORY ACCURACY',
    description: 'RFID-based inventory tracking, automatic stock control, location traceability, and warehouse monitoring.',
    features: ['RFID Gate Scanners', 'Handheld Audit Interface', 'Real-time Stock Updates', 'Bin Location History'],
    url: 'https://inventory-ragdalion.lovable.app'
  },
  {
    id: 'fms',
    name: 'Fleet Management System',
    tagline: 'MAXIMIZE FLEET UTILIZATION AND REDUCE IDLE COST',
    description: 'Fleet tracking, asset utilization monitoring, operation history, and performance dashboard.',
    features: ['Real-time GPS Tracking', 'Fuel Consumption Analytics', 'Driver Behavior Safety Score', 'Maintenance Alerts'],
    url: 'https://agv-amr-ragdalion.lovable.app' // Direct to AGV/AMR
  },
  {
    id: 'hardware',
    name: 'Hardware & Infrastructure Solution',
    tagline: 'RELIABLE HARDWARE FOUNDATION FOR EVERY DIGITAL INITIATIVE',
    description: 'Server, RFID hardware, AMR, AGV, IoT devices, networking, and industrial infrastructure support.',
    features: ['Industrial Servers', 'Active RFID Gates & Readers', 'AMR/AGV Robots', 'Reliable IoT Gateways'],
    url: 'https://agv-amr-ragdalion.lovable.app'
  },
  {
    id: 'ai-training',
    name: 'Corporate AI Training Program',
    tagline: 'TURN AI FROM A BUZZWORD INTO DAILY PRODUCTIVITY',
    description: 'AI training for companies to improve productivity, workflow automation, and practical AI adoption.',
    features: ['1 Day Intensive Offline Session', 'Custom Corporate Case Studies', 'Prompt Engineering Hands-on', 'AI Tools Auditing'],
    url: 'https://ai-ragdalion.lovable.app'
  },
  {
    id: 'ai-masterclass',
    name: 'AI Masterclass for Business Owner',
    tagline: 'MAKE CONFIDENT AI DECISIONS AT THE LEADERSHIP LEVEL',
    description: 'Executive AI learning program for business owners, directors, and managers to adopt AI strategically.',
    features: ['Online Interactive Webinar', 'Strategic Roadmap Templates', 'Security & Compliance Auditing', 'AI Business Cases'],
    url: 'https://ai-masterclass-ragdalion.lovable.app'
  }
];

export const INTEGRATED_SERVICES = [
  {
    name: 'Software Development',
    description: 'Custom Android, iOS, and web-based application development for industrial and enterprise needs.',
    items: ['Web application', 'Mobile application', 'Dashboard system', 'Workflow application', 'Business process digitization']
  },
  {
    name: 'System Integration 4.0',
    description: 'Connecting machines, sensors, databases, APIs, ERP, and production systems into one integrated digital ecosystem.',
    items: ['API integration', 'Database integration', 'Machine integration', 'PLC / HMI data integration', 'Cloud and on-premise integration']
  },
  {
    name: 'Internet of Things',
    description: 'IoT implementation for real-time data collection, machine monitoring, energy monitoring, and smart factory operations.',
    items: ['Sensor integration', 'IoT gateway', 'Machine telemetry', 'Real-time monitoring', 'Industrial dashboard']
  },
  {
    name: 'Artificial Intelligence',
    description: 'AI implementation for analytics, prediction, automation, training, and smarter business decision-making.',
    items: ['AI analytics', 'Predictive maintenance', 'Intelligent reporting', 'AI training', 'AI workflow automation']
  }
];

export const SUCCESS_STORIES = [
  {
    id: 'story-1',
    category: 'AI',
    title: 'AI Implementation for Quality Analytics',
    problem: 'Defect root-cause analysis took weeks of manual review.',
    solution: 'AI-assisted defect pattern detection integrated into quality dashboards.',
    impact: 'Faster root cause identification and reduced rework on critical product lines.'
  },
  {
    id: 'story-2',
    category: 'Maintenance',
    title: 'Preventive Maintenance Digitization',
    problem: 'Maintenance was largely reactive, with paper-based work orders.',
    solution: 'Digital CMMS rollout with preventive schedules and mobile execution.',
    impact: 'Significant reduction in unplanned downtime on critical assets.'
  },
  {
    id: 'story-3',
    category: 'Production',
    title: 'Real-Time OEE Monitoring',
    problem: 'Plant leadership lacked real-time OEE visibility.',
    solution: 'Production Execution System with andon and OEE dashboards across lines.',
    impact: 'Daily OEE reviews and measurable performance gains within the first quarter.'
  },
  {
    id: 'story-4',
    category: 'Hardware',
    title: 'RFID Warehouse Traceability',
    problem: 'Manual stock-take took days and accuracy was low.',
    solution: 'Fixed and handheld RFID infrastructure with automated stock updates.',
    impact: 'Stock-take time cut drastically with near-perfect accuracy.'
  }
];

export const NEWS_UPDATES = [
  {
    id: 'news-1',
    category: 'INDUSTRY INSIGHT',
    title: 'What Is a Production Monitoring System and Why Manufacturing Companies Need It',
    summary: 'A practical look at how production monitoring transforms shopfloor decision making.',
    date: 'September 11, 2025'
  },
  {
    id: 'news-2',
    category: 'INDUSTRY INSIGHT',
    title: 'How RFID Improves Inventory Accuracy in Warehouse Operations',
    summary: 'RFID isn\'t just a tag — it\'s an operating model change. Here is how it pays back.',
    date: 'August 27, 2025'
  },
  {
    id: 'news-3',
    category: 'INDUSTRY INSIGHT',
    title: 'Benefits of a Maintenance Management System for Industrial Companies',
    summary: 'From reactive firefighting to predictive operations in three steps.',
    date: 'August 9, 2025'
  },
  {
    id: 'news-4',
    category: 'INDUSTRY INSIGHT',
    title: 'How Energy Monitoring Helps Reduce Operational Cost',
    summary: 'Where most plants waste energy and how to find it within 30 days.',
    date: 'July 21, 2025'
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
