// data/domains.js

export const domains = [
  {
    id: "AI01",
    title: "AI-Powered Energy Consumption Prediction & Optimization for Campuses",
    subtitle: "Intelligent Energy Management for Educational Institutions",
    description:
      "Build an AI/ML-based Energy Intelligence System that predicts future energy consumption, incorporates historical usage, environmental factors, and occupancy data, recommends actionable optimization strategies, and provides interpretable insights instead of just raw forecasts. The goal is to move from passive monitoring to intelligent, data-driven energy optimization.",
    requirements: [
      "Time-Series Forecasting Model for energy consumption",
      "Integration of external variables (weather, occupancy, schedules)",
      "Optimization recommendations (peak load reduction, usage scheduling)",
      "Explainable insights for suggested optimizations",
      "Basic dashboard/UI to visualize predictions and recommendations",
      "Consideration of real-world deployment feasibility"
    ],
    tags: [
      "AI/ML/GenAI",
      "Energy Optimization",
      "Predictive Analytics",
      "Smart Campus",
    ],
  },
  {
    id: "AI02",
    title: "AI-Based Micro-Failure Prediction in Urban Infrastructure",
    subtitle: "Predictive Maintenance for Urban Systems",
    description:
      "Build an AI/ML-based predictive system that analyzes sensor logs, maintenance history, and usage data to detect early micro-failure patterns, predict infrastructure risk scores before critical breakdowns, recommend preventive maintenance prioritization, and provide interpretable risk indicators. The goal is to shift from reactive maintenance to predictive, data-driven infrastructure management.",
    requirements: [
      "Multi-variable time-series analysis",
      "Anomaly detection or early degradation pattern identification",
      "Handling of class imbalance (rare failure events)",
      "Predictive modeling for risk scoring",
      "Explainable AI outputs for decision-makers",
      "Basic dashboard/interface for visualization"
    ],
    tags: [
      "AI/ML/GenAI",
      "Infrastructure Monitoring",
      "Predictive Maintenance",
      "Anomaly Detection",
    ],
  },
  {
    id: "W01",
    title: "Smart Web Platform for Real-Time Issue Reporting & Resolution",
    subtitle: "Streamlined Community Issue Management System",
    description:
      "Build a full-stack web application that allows users to report issues easily, enables real-time tracking of resolution status, provides administrators with tools to manage and prioritize requests, and ensures transparency through status updates and notifications. The goal is to create a reliable and scalable issue management system with an intuitive user experience.",
    requirements: [
      "User Authentication & Role-Based Access (User / Admin)",
      "Issue Reporting Module (with category, description, status tracking)",
      "Real-Time Updates (status changes, notifications)",
      "Admin Dashboard for prioritization and workflow management",
      "Basic Analytics Dashboard (issue trends, resolution time)",
      "Secure backend with scalable database design",
      "Clean, responsive UI/UX"
    ],
    tags: [
      "Web Development",
      "Issue Management",
      "Real-Time Systems",
      "Full-Stack Development",
    ],
  },
  {
    id: "W02",
    title: "Scalable Talent Discovery & Intelligent Matching Platform",
    subtitle: "Smart Professional Opportunity Matching System",
    description:
      "Build a scalable web-based platform that matches users with relevant opportunities intelligently using structured profiles, skill indicators, experience data, and preferences, generates match scores, provides clear reasoning behind recommendations, and dynamically updates matches as profiles evolve. The goal is to move beyond simple keyword search and create an intelligent matching ecosystem.",
    requirements: [
      "User Authentication & Role-Based Access (Candidate / Recruiter / Admin)",
      "Structured Profile System (skills, experience, portfolio, preferences)",
      "Backend Matching & Ranking Logic",
      "Match Score Generation",
      "Explainable Recommendation Insights",
      "Scalable database design",
      "Clean, intuitive UI for viewing matches",
      "Consideration of concurrency and system scalability"
    ],
    tags: [
      "Web Development",
      "Intelligent Matching",
      "Talent Discovery",
      "Recommendation Systems",
    ],
  },
  {
    id: "SI01",
    title: "Technology-Enabled Food Waste Intelligence & Redistribution Platform",
    subtitle: "Smart Food Waste Reduction and Donation System",
    description:
      "Design a technology-enabled platform that allows donors to report surplus food in real time, intelligently matches donations with nearby verified recipients, optimizes collection and redistribution timelines, ensures traceability and basic quality checks, and measures and displays social impact. The goal is to create a reliable, transparent, and efficient food redistribution ecosystem.",
    requirements: [
      "Role-Based Access (Donor / Recipient / Admin)",
      "Real-time surplus reporting system",
      "Intelligent matching based on location, quantity, and urgency",
      "Status tracking (reported → accepted → picked up → delivered)",
      "Basic verification and trust indicators",
      "Impact dashboard (meals saved, waste reduced)",
      "Mobile-responsive design"
    ],
    tags: [
      "Social Impact",
      "Food Security",
      "Waste Reduction",
      "Community Platform",
    ],
  },
  {
    id: "SI02",
    title: "AI-Based Essential Services Accessibility Gap Detection System",
    subtitle: "Data-Driven Service Equity Analysis",
    description:
      "Design a data-driven system that analyzes geospatial, demographic, and infrastructure datasets to identify underserved regions, quantifies accessibility gaps using scoring mechanisms, highlights critical service deserts, and provides prioritized intervention recommendations. The goal is to enable data-backed planning and equitable resource distribution.",
    requirements: [
      "Integration of geospatial and demographic data",
      "Accessibility or coverage scoring model",
      "Clustering or demand-supply gap analysis",
      "Identification of high-risk underserved zones",
      "Prioritized intervention recommendations",
      "Clear and intuitive visualizations (maps/dashboards)",
      "Consideration of fairness-aware decision logic"
    ],
    tags: [
      "Social Impact",
      "Data Analytics",
      "Geospatial Analysis",
      "Public Services",
    ],
  },
  {
    id: "AG01",
    title: "Smart Crop Planning & Risk-Aware Decision Support System for Farmers",
    subtitle: "Intelligent Agricultural Decision Support",
    description:
      "Design a technology-driven decision support system that recommends suitable crops based on local conditions, analyzes soil, weather, and resource availability data, incorporates historical trends and market signals, accounts for risk and uncertainty in predictions, and provides clear, actionable farming recommendations. The goal is to enable informed, low-risk crop planning through intelligent data integration.",
    requirements: [
      "Integration of multiple data inputs (soil, weather, water, market - simulated allowed)",
      "Crop suitability prediction or recommendation logic",
      "Risk-aware scoring or uncertainty handling",
      "Clear and simple recommendation outputs",
      "Farmer-friendly, accessible interface (mobile-responsive preferred)",
      "Consideration of scalability and real-world usability"
    ],
    tags: [
      "Agriculture",
      "Decision Support",
      "Risk Management",
      "Smart Farming",
    ],
  },
  {
    id: "AG02",
    title: "AI-Based Crop Lodging Detection & Structural Damage Assessment System",
    subtitle: "Computer Vision for Crop Damage Analysis",
    description:
      "Design a computer vision based system that analyzes crop field images, detects lodging patterns, differentiates between healthy standing crops and lodged crops, estimates severity levels of structural damage, and provides actionable insights for intervention or yield adjustment. The goal is to enable fast, scalable, and data-driven crop damage assessment.",
    requirements: [
      "Image-based classification or segmentation model",
      "Detection of structural tilt or lodging patterns",
      "Severity scoring mechanism (mild / moderate / severe)",
      "Handling of real-world image variability (lighting, angles, density)",
      "Actionable recommendations or yield impact insights",
      "Simple, field-friendly user interface"
    ],
    tags: [
      "Agriculture",
      "Computer Vision",
      "Crop Monitoring",
      "Damage Assessment",
    ],
  },
  {
    id: "H01",
    title: "Intelligent Patient Triage & Care Prioritization System",
    subtitle: "AI-Assisted Healthcare Triage",
    description:
      "Design a technology-enabled patient triage system that captures basic patient details, symptoms, and vital indicators, assists healthcare staff in prioritizing patient care, generates risk or urgency scores, provides explainable reasoning behind prioritization, and supports decision-making without replacing medical professionals. The goal is to enhance efficiency, transparency, and safety in patient prioritization.",
    requirements: [
      "Structured patient input capture (symptoms, vitals - simulated data allowed)",
      "Triage logic or risk scoring mechanism",
      "Handling of incomplete or uncertain inputs",
      "Explainable prioritization outputs",
      "Clear disclaimer and ethical use framework",
      "Secure handling of sensitive data",
      "Simple, healthcare-friendly interface"
    ],
    tags: [
      "Healthcare",
      "Patient Triage",
      "Decision Support",
      "Medical AI",
    ],
  },
  {
    id: "H02",
    title: "Proactive Anomaly Anticipation in Intensive Care Units",
    subtitle: "Predictive ICU Monitoring System",
    description:
      "Design an AI-driven telemetry monitoring system that analyzes multi-parameter vital data streams in real time, detects early deterioration patterns, generates predictive risk alerts before critical thresholds are crossed, reduces false alarms, and provides clear and actionable risk indicators. The goal is to shift from reactive threshold-based alerts to proactive, intelligent clinical decision support.",
    requirements: [
      "Multi-variable time-series analysis of vital signs (simulated data allowed)",
      "Early anomaly or deterioration pattern detection",
      "Risk scoring or predictive alert mechanism",
      "False-positive reduction strategy",
      "Explainable AI outputs for clinical transparency",
      "Real-time clinical dashboard interface",
      "Ethical and safe-use framework (decision support only, not replacement of medical staff)"
    ],
    tags: [
      "Healthcare",
      "ICU Monitoring",
      "Predictive Analytics",
      "Critical Care",
    ],
  },
];
