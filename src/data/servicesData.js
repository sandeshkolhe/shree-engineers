export const companyInfo = {
  name: "Shree Engineers",
  address: "B/12, Prabhat CHSL, Senapati Bapat Marg, Dadar (West), Mumbai, Maharashtra 400028",
  phone: "+91 8976600537",
  whatsappNumber: "918976600537",
  email: "info@shreeengineerscom.org",
  website: "shreeengineerss.in",
  websiteUrl: "https://shreeengineerss.in",
  mainBrochure: "/docs/shree-engineers-autocad-brochure.pdf"
};

export const engineeringServices = [
  {
    id: "autocad-2d-3d",
    title: "AutoCAD 2D & 3D Design",
    category: "Drafting & Modeling",
    icon: "DraftingCompass",
    badge: "Core Engineering",
    brochure: "/docs/shree-engineers-autocad-brochure.pdf",
    brochureName: "AutoCAD 2D & 3D Brochure",
    shortDesc: "High-precision drafting, schematic generation, and 3D parametric spatial modeling.",
    fullDesc: "We provide comprehensive 2D drafting and 3D modeling solutions following ISO, DIN, and ASME drafting standards. From conceptual sketches to fabrication-ready shop drawings, our models ensure seamless manufacturing integration and zero clash tolerance.",
    keyHighlights: [
      "Fabrication & Manufacturing Drawings",
      "Assembly & Disassembly Modeling",
      "GA (General Arrangement) Drawings",
      "BOM (Bill of Materials) Generation",
      "Reverse Engineering from Physical Prototypes"
    ],
    standards: ["ASME Y14.5", "ISO 128", "DIN ISO 2768"],
    deliverables: ["DWG / DXF Files", "STEP / IGES 3D Models", "High-Res PDF Plot Sheets"]
  },
  {
    id: "mechanical-equipment",
    title: "Mechanical Equipment Design",
    category: "Heavy Equipment",
    icon: "Boxes",
    badge: "Industrial Equipment",
    brochure: "/docs/02-pressure-vessel-design.pdf",
    brochureName: "Pressure Vessel & Equipment Brochure",
    shortDesc: "Thermal, mechanical, and code-compliant design for process industry equipment.",
    fullDesc: "Specialized engineering design calculations, FEA verification, and detailing for static process plant equipment, catering to oil & gas, chemical, petrochemical, and power generation industries.",
    subcategories: [
      {
        name: "Pressure Vessels",
        code: "ASME Sec VIII Div 1 & 2",
        detail: "Internal/external pressure calculations, nozzle reinforcement, saddle & skirt support design, hydro-test analysis.",
        brochure: "/docs/02-pressure-vessel-design.pdf"
      },
      {
        name: "Heat Exchangers [Shell & Tube]",
        code: "TEMA & ASME Sec VIII",
        detail: "Thermal rating, tube-sheet thickness, baffle spacing, floating head / fixed tube-sheet mechanical engineering.",
        brochure: "/docs/03-heat-exchanger-design.pdf"
      },
      {
        name: "Storage Tanks",
        code: "API 650 & API 620",
        detail: "Atmospheric & low-pressure storage tank design, shell thickness computation, cone/floating roof, wind girder & seismic load verification.",
        brochure: "/docs/04-api-650-storage-tank-design.pdf"
      }
    ],
    keyHighlights: [
      "Code Compliance: ASME Sec VIII Div 1 & 2, TEMA, API 650",
      "Finite Element Analysis (FEA) Stress Verification",
      "Nozzle Reinforcement & Load Calculations (WRC 107/297)",
      "Fabrication Tolerances & Hydrostatic Test Procedures"
    ],
    standards: ["ASME Sec VIII", "TEMA Class R, C, B", "API 650", "EN 13445"],
    deliverables: ["Mechanical Data Sheets", "Fabrication GA & Detail Drawings", "Complete Calculation Dossiers"]
  },
  {
    id: "machine-compound-design",
    title: "Mechanical Machine & Component Design",
    category: "Industrial Machinery",
    icon: "Cpu",
    badge: "Custom Machinery",
    brochure: "/docs/07-mechanical-machine-design.pdf",
    brochureName: "Mechanical Machine Design Brochure",
    shortDesc: "End-to-end design of custom industrial machines, compound mechanisms, and tooling.",
    fullDesc: "We turn complex mechanical requirements into operational reality. From custom automation machinery, conveyor systems, and hydraulic/pneumatic test rigs to compound mechanical assemblies, we handle kinematics, stress distribution, and component life calculations.",
    keyHighlights: [
      "Custom Automation & Material Handling Equipment",
      "Compound Gearbox, Transmission & Cam Design",
      "Hydraulic & Pneumatic Circuit Integration",
      "Structural Stress Analysis & Dynamic Balancing",
      "Design for Manufacturing & Assembly (DFMA)"
    ],
    standards: ["AGMA (Gears)", "ISO DIN Machinery Directives", "ASTM Materials"],
    deliverables: ["Kinematic Simulations", "Exploded View & Parts Catalogs", "Full Tolerance Stack-up Reports"]
  },
  {
    id: "civil-structural-design",
    title: "Civil & Structural Design",
    category: "Infrastructure",
    icon: "Building2",
    badge: "Structural Integrity",
    brochure: "/docs/06-civil-structural-engineering.pdf",
    brochureName: "Civil & Structural Design Brochure",
    shortDesc: "Robust structural steel and reinforced concrete design for plants and facilities.",
    fullDesc: "Specialized in structural design for industrial plant buildings, equipment support structures, pipe racks, platform stairways, and foundations. Engineered to withstand heavy dead loads, dynamic operating machinery, wind, and seismic conditions.",
    keyHighlights: [
      "Industrial Pipe Racks & Technological Structures",
      "Equipment Foundation & Equipment Skids (Dynamic / Static)",
      "Steel Sheds, Warehouses & Mezzanine Floors",
      "Connection Detailing (Bolted & Welded)",
      "Wind (IS 875 / ASCE 7) & Seismic (IS 1893) Analysis"
    ],
    standards: ["AISC 360", "IS 800:2007", "IS 456 (Concrete)", "Eurocode 3"],
    deliverables: ["STAAD.Pro / ETABS Models", "Fabrication & Erection Shop Drawings", "Bar Bending Schedules (BBS)"]
  },
  {
    id: "piping-e3d-works",
    title: "Piping Design Works & AVEVA E3D",
    category: "Process Piping",
    icon: "GitBranch",
    badge: "3D Plant Piping",
    brochure: "/docs/05-aveva-e3d-plant-design.pdf",
    brochureName: "AVEVA E3D Plant Design Brochure",
    shortDesc: "Complete piping engineering, 3D plant layout, isometric extraction, and stress analysis.",
    fullDesc: "Delivering end-to-end piping engineering using industry gold-standard tools like AVEVA E3D / PDMS and AutoCAD Plant 3D. We engineer clash-free plant layouts, plot plans, piping isometrics with full BOM, and thermal stress calculations.",
    keyHighlights: [
      "AVEVA E3D / PDMS Intelligent 3D Plant Modeling",
      "Piping Stress Analysis using CAESAR II (Thermal, Sustained, Occasional)",
      "Piping & Instrumentation Diagrams (P&ID) Implementation",
      "Isometric Drawing Generation with complete MTO/BOM",
      "Pipe Support Design & Optimization (Spring, Rigid, Guides)"
    ],
    standards: ["ASME B31.3 (Process Piping)", "ASME B31.1 (Power)", "MSS-SP Supports"],
    deliverables: ["E3D 3D Database Models", "Piping Isometrics & Spool Sheets", "Stress Analysis Reports & Support Schedules"]
  }
];

export const softwareServices = [
  {
    id: "web-apps-portals",
    title: "Web Applications & Business Portals",
    icon: "Globe",
    badge: "Enterprise Web",
    brochure: "/docs/08-website-web-application-development.pdf",
    desc: "Custom, cloud-native web portals and SaaS platforms built with high-velocity frameworks for exceptional reliability and responsiveness."
  },
  {
    id: "admin-crm-systems",
    title: "Admin Panels & CRM Systems",
    icon: "LayoutDashboard",
    badge: "Operations",
    brochure: "/docs/09-admin-panel-crm-development.pdf",
    desc: "Centralized client management, sales pipelines, task tracking, and role-governed admin interfaces to streamline enterprise workflows."
  },
  {
    id: "erp-management-software",
    title: "ERP & Business Management Software",
    icon: "Network",
    badge: "Full ERP",
    brochure: "/docs/10-erp-software-development.pdf",
    desc: "Integrated ERP systems orchestrating inventory, procurement, billing, production scheduling, and vendor relationships."
  },
  {
    id: "mobile-apps",
    title: "Android & iOS Mobile Applications",
    icon: "Smartphone",
    badge: "Cross-Platform",
    brochure: "/docs/11-android-ios-mobile-app-development.pdf",
    desc: "Cross-platform mobile apps built with Flutter, ensuring fluid 60FPS UI, offline capability, and native OS integrations."
  },
  {
    id: "security-rbac",
    title: "Secure Login, User Roles & Permissions",
    icon: "ShieldCheck",
    badge: "Security First",
    brochure: "/docs/10-erp-software-development.pdf",
    desc: "Enterprise-grade authentication with JWT/OAuth2, multi-factor authentication (MFA), and fine-grained Role-Based Access Control (RBAC)."
  },
  {
    id: "ecommerce-platforms",
    title: "E-Commerce Websites & Online Platforms",
    icon: "ShoppingCart",
    badge: "Digital Commerce",
    brochure: "/docs/12-ecommerce-development.pdf",
    desc: "Scalable B2B & B2C e-commerce portals equipped with secure payment gateways, inventory sync, and intelligent order tracking."
  },
  {
    id: "dashboards-reporting",
    title: "Interactive Dashboards & Reporting Systems",
    icon: "BarChart3",
    badge: "Real-time BI",
    brochure: "/docs/09-admin-panel-crm-development.pdf",
    desc: "Live analytics dashboards, scheduled automated report generation, and data visualization engines for strategic decision-making."
  },
  {
    id: "rest-apis-integrations",
    title: "REST APIs & Third-Party Integrations",
    icon: "Webhook",
    badge: "Interoperability",
    brochure: "/docs/14-database-backend-development.pdf",
    desc: "Robust REST & GraphQL microservices integrating payment gateways, SMS/Email services, ERPs, and legacy enterprise software."
  },
  {
    id: "cloud-hosting-devops",
    title: "Cloud Hosting, Deployment & Maintenance",
    icon: "Cloud",
    badge: "High Availability",
    brochure: "/docs/13-cloud-hosting-deployment.pdf",
    desc: "Automated CI/CD pipelines, containerized Docker deployments, AWS/Azure setup, monitoring, and 99.9% uptime maintenance."
  },
  {
    id: "database-backend",
    title: "Database Design & Backend Development",
    icon: "Database",
    badge: "Robust Backend",
    brochure: "/docs/14-database-backend-development.pdf",
    desc: "High-performance data architecture using PostgreSQL, MySQL, and MongoDB with indexing, replication, and query optimization."
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation & Custom Business Solutions",
    icon: "Cog",
    badge: "Smart Automation",
    brochure: "/docs/15-workflow-automation.pdf",
    desc: "Eliminate repetitive operations with tailored digital workflows, approval triggers, document parsing, and business logic automation."
  }
];

export const trainingProgrammes = [
  {
    id: "cad-piping-training",
    title: "Industrial Piping & E3D Plant Design Training",
    badge: "Engineering Academy",
    brochure: "/docs/16-aveva-e3d-industrial-piping-training.pdf",
    duration: "8 - 12 Weeks",
    mode: "Hands-on Practical & Live Industrial Projects",
    highlights: [
      "AVEVA E3D / PDMS 3D Modeling & Equipment Layout",
      "Piping Isometrics, P&ID Reading & MTO Generation",
      "ASME B31.3 Code Guidelines & CAESAR II Basics",
      "Industry-standard project portfolio creation"
    ],
    audience: "Mechanical & Chemical Engineers, Diploma Holders, CAD Draftsmen"
  },
  {
    id: "equipment-design-training",
    title: "Pressure Vessel & Heat Exchanger Design (ASME / API)",
    badge: "Equipment Specialization",
    brochure: "/docs/17-pressure-vessel-heat-exchanger-training.pdf",
    duration: "6 - 10 Weeks",
    mode: "Code Calculations + Software Modeling",
    highlights: [
      "ASME Sec VIII Div 1 Code Calculations (Shell, Heads, Nozzles)",
      "TEMA Shell & Tube Heat Exchanger Thermal & Mechanical Design",
      "API 650 Storage Tank Sizing & Wind/Seismic Checks",
      "AutoCAD drafting of fabrication-ready general arrangement drawings"
    ],
    audience: "Mechanical Design Engineers, Quality Engineers, Project Trainees"
  },
  {
    id: "fullstack-software-training",
    title: "Full-Stack Web & Mobile App Development Bootcamp",
    badge: "Software Academy",
    brochure: "/docs/18-full-stack-web-mobile-development-training.pdf",
    duration: "12 - 16 Weeks",
    mode: "Live Coding & Enterprise Project Deployment",
    highlights: [
      "Frontend: React, TypeScript, Modern Responsive UI with Tailwind",
      "Backend: Java & Spring Boot / .NET & C# Enterprise APIs",
      "Mobile: Flutter for Android & iOS Production Apps",
      "Database: SQL (PostgreSQL/MySQL) & MongoDB with Docker & Cloud Deploy"
    ],
    audience: "Computer Science Students, IT Aspirants, Career Switchers"
  }
];

export const techStack = {
  frontend: [
    { name: "React", level: "Production", desc: "Interactive, scalable component-driven Web UIs" },
    { name: "TypeScript", level: "Enterprise", desc: "Type-safe robust web and client application code" },
    { name: "JavaScript (ES6+)", level: "Core", desc: "High performance client-side web scripting" },
    { name: "Tailwind CSS", level: "Design System", desc: "Utility-first modern responsive UI framework" }
  ],
  backend: [
    { name: "Java & Spring Boot", level: "Enterprise Tier", desc: "Battle-tested microservices and enterprise business logic" },
    { name: ".NET & C#", level: "High Performance", desc: "Robust web APIs, Windows services, and cloud backends" },
    { name: "RESTful Architecture", level: "Standards-based", desc: "Secure, predictable API communication protocols" }
  ],
  mobile: [
    { name: "Flutter", level: "Cross-Platform", desc: "Single codebase compiling natively to Android and iOS" },
    { name: "Dart", level: "High Velocity", desc: "Fast UI iteration, state management & reactive layouts" }
  ],
  database: [
    { name: "SQL (PostgreSQL / MySQL)", level: "Relational", desc: "ACID-compliant, normalized complex business schemas" },
    { name: "MongoDB", level: "Document / NoSQL", desc: "Flexible, high-throughput unstructured data storage" }
  ],
  engineeringTools: [
    { name: "AutoCAD (2D & 3D)", level: "Gold Standard", desc: "Precision fabrication, layout, and drafting" },
    { name: "AVEVA E3D / PDMS", level: "Plant Modeling", desc: "Intelligent 3D plant piping and equipment layout" },
    { name: "ASME / TEMA / API Codes", level: "Industry Standards", desc: "Sec VIII Div 1/2, TEMA Class R/C, API 650 tanks" },
    { name: "Structural Detailing", level: "AISC / IS 800", desc: "Industrial steel structures, pipe racks, and foundations" }
  ]
};

export const whyChooseUs = [
  {
    title: "Customized Solutions for Your Business",
    desc: "We don't do one-size-fits-all. Every mechanical drawing, equipment calculation, or software architecture is tailored specifically to your exact operational parameters.",
    icon: "Sliders"
  },
  {
    title: "Modern & User-Friendly Applications",
    desc: "Clean intuitive interfaces, frictionless UX, and ergonomic industrial layouts that enhance employee productivity and client satisfaction.",
    icon: "Layout"
  },
  {
    title: "Scalable and Reliable Technology",
    desc: "From equipment that withstands extreme plant pressures to software backends capable of scaling with your organization's exponential growth.",
    icon: "TrendingUp"
  },
  {
    title: "Secure & Efficient Systems",
    desc: "Industry-standard safety factors in engineering calculations and zero-trust, encrypted, role-managed architectures in our software deliverables.",
    icon: "Lock"
  },
  {
    title: "End-to-End Digital & Engineering Support",
    desc: "From conceptual 3D sketches to shop fabrication, and from system architecture to cloud maintenance — we are your complete lifecycle partner.",
    icon: "LifeBuoy"
  }
];

export const portfolioProjects = [
  {
    title: "50,000L Chemical Pressure Vessel",
    category: "Engineering",
    tag: "ASME Sec VIII Div 1",
    summary: "Complete mechanical design, shell/dished head calculation, saddle support design, and fabrication drawings for a specialty chemical plant.",
    metrics: "Design Pressure: 24 Bar | FEA Verified | Zero Flaw Inspection"
  },
  {
    title: "Shell & Tube Heat Exchanger (TEMA R)",
    category: "Engineering",
    tag: "TEMA & ASME",
    summary: "Thermal and mechanical design of a fixed tube-sheet exchanger for refinery crude preheat train with full tube layout and baffle spacing.",
    metrics: "Heat Duty: 3.5 MW | 620 Tubes | Zero Vibration Resonances"
  },
  {
    title: "API 650 Storage Tank Farm Facility",
    category: "Engineering",
    tag: "API 650 / Civil",
    summary: "Design and detailing of five 15-meter diameter crude storage tanks including floating roof, annular plates, wind girders, and reinforced ring foundations.",
    metrics: "Capacity: 12,500 m³ | Wind & Seismic Verified"
  },
  {
    title: "E3D Plant Piping & Equipment Layout",
    category: "Engineering",
    tag: "AVEVA E3D",
    summary: "3D plant piping layout across a 4-tier process skid, generating over 180 isometric drawings with automatic BOM and zero clash clearance.",
    metrics: "180+ Isometrics | 100% Clash-Free | CAESAR II Validated"
  },
  {
    title: "Enterprise Manufacturing ERP & Portal",
    category: "Software",
    tag: "React + Spring Boot",
    summary: "Comprehensive ERP software managing job cards, raw material inventory, quality inspection checklists, and customer dispatch invoicing.",
    metrics: "500+ Daily Active Operators | 45% Faster Dispatch Cycle"
  },
  {
    title: "Mobile Field Inspection App (Flutter)",
    category: "Software",
    tag: "Flutter + Offline Sync",
    summary: "Cross-platform mobile tool enabling field quality inspectors to log weld inspections, upload thickness gauge photos, and sync offline data.",
    metrics: "Android & iOS | Real-time GPS & Photo Watermarking"
  },
  {
    title: "Interactive Analytics & Production Dashboard",
    category: "Software",
    tag: "React + TypeScript + ChartJS",
    summary: "Live IoT and manual shop-floor dashboard reporting OEE (Overall Equipment Effectiveness), downtime breakdown, and automated daily email digests.",
    metrics: "Sub-second Query Latency | Automated Shift Reports"
  },
  {
    title: "B2B Industrial Spares E-Commerce Platform",
    category: "Software",
    tag: "Full-Stack + Secure Payments",
    summary: "High-volume wholesale ordering platform featuring dynamic price tiers, GST invoicing, order tracking, and integrated ERP synchronization.",
    metrics: "Multi-vendor Catalog | Automated PO Generation"
  }
];
