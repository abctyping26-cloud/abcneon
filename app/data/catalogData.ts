export interface SubItemDetail {
  tagline: string;
  overview: string;
  turnaround: string;
  deliverables: string[];
  prerequisites: string;
}

export interface CatalogCategory {
  id: string;
  number: string;
  title: string;
  note?: string;
  hook?: string;
  bgColor: string;
  accentColor: string;
  ctaText: string;
  items: {
    name: string;
    detail: SubItemDetail;
  }[];
}

export const catalogCategories: CatalogCategory[] = [
  {
    id: "business-setup",
    number: "01",
    title: "Business Setup",
    note: "Most important. Establish legal status, registration, and core banking for your new enterprise.",
    bgColor: "#eaf7ee",
    accentColor: "#16a34a",
    ctaText: "Start My Business",
    items: [
      {
        name: "Company registration",
        detail: {
          tagline: "Incorporate Private Limited with MCA & ROC certification",
          overview: "End-to-end corporate registration including Name Approval (RUN), SPICe+ filing, digital signature, MOA, and AOA drafting.",
          turnaround: "5–7 Business Days",
          deliverables: ["Certificate of Incorporation (COI)", "PAN & TAN Allocation", "Articles & Memorandum (MOA/AOA)", "Bank Account Assistance"],
          prerequisites: "PAN card, Aadhaar, address proof & bank statement of directors."
        }
      },
      {
        name: "LLP / Partnership",
        detail: {
          tagline: "Limited Liability Partnership with shared ownership & protection",
          overview: "Register an LLP or General Partnership deed with statutory legal protection and minimal compliance overhead compared to private entities.",
          turnaround: "4–6 Business Days",
          deliverables: ["LLP Incorporation Certificate", "Drafted Partnership Deed", "Designated Partner DIN", "Stamp Duty Documentation"],
          prerequisites: "Identity proof of partners & proof of registered office premises."
        }
      },
      {
        name: "Proprietorship",
        detail: {
          tagline: "Simplest single-owner business setup",
          overview: "Start your business venture with full sole-proprietor control, registered under local commercial and tax authorities.",
          turnaround: "2–3 Business Days",
          deliverables: ["Sole Proprietor Certificate", "MSME Registration", "Current Bank Account Support"],
          prerequisites: "Aadhaar Card, PAN Card, electricity bill of premises."
        }
      },
      {
        name: "GST",
        detail: {
          tagline: "Goods & Services Tax identification number (GSTIN)",
          overview: "Mandatory tax registration for intra-state and inter-state commerce, allowing input tax credit claiming and lawful billing.",
          turnaround: "3–5 Business Days",
          deliverables: ["Official GSTIN Certificate", "HSN/SAC Code Mapping", "GST Portal Credentials"],
          prerequisites: "Business registration certificate, bank proof, electricity bill."
        }
      },
      {
        name: "MSME / Udyam",
        detail: {
          tagline: "Government recognition with preferential subsidy & loan access",
          overview: "Government portal registration unlocking lower interest loans, tender eligibility, and priority government benefits.",
          turnaround: "24–48 Hours",
          deliverables: ["Official Udyam Registration Certificate", "MSME Classification ID", "Priority Scheme Access"],
          prerequisites: "Aadhaar number of promoter & PAN card."
        }
      },
      {
        name: "Startup India",
        detail: {
          tagline: "DPIIT recognition & 3-year tax exemption benefit",
          overview: "Recognition under Department for Promotion of Industry and Internal Trade granting patent fee reductions and funding scheme access.",
          turnaround: "7–10 Business Days",
          deliverables: ["DPIIT Recognition Certificate", "Section 80-IAC Tax Exemption Application", "GeM Fast-Track Onboarding"],
          prerequisites: "Entity incorporation proof, pitch deck & innovative workflow note."
        }
      },
      {
        name: "Trade licence",
        detail: {
          tagline: "Local municipal corporation commercial permit",
          overview: "Legal permit issued by local municipal body allowing commercial activity within municipal zoning boundaries.",
          turnaround: "5–8 Business Days",
          deliverables: ["Municipal Trade Licence Certificate", "Zoning Compliance Proof", "Annual Renewal Schedule"],
          prerequisites: "Premises rent agreement, property tax receipt, NOC."
        }
      },
      {
        name: "FSSAI",
        detail: {
          tagline: "Food safety & standards authority licence",
          overview: "Mandatory certification for food manufacturers, distributors, restaurants, cloud kitchens, and packaged goods sellers.",
          turnaround: "4–7 Business Days",
          deliverables: ["FSSAI 14-Digit Licence Number", "Official QR Certificate", "Food Safety Guidelines Package"],
          prerequisites: "Photo ID, food category list, premises layout."
        }
      },
      {
        name: "Import Export Code",
        detail: {
          tagline: "10-digit DGFT code for international trade",
          overview: "Lifetime validity code issued by Directorate General of Foreign Trade required for cross-border import and export shipments.",
          turnaround: "24–48 Hours",
          deliverables: ["DGFT IEC Certificate", "AD Code Registration Advice", "Export Promotion Guidance"],
          prerequisites: "Company PAN, cancelled cheque & director IDs."
        }
      },
      {
        name: "Business bank account",
        detail: {
          tagline: "Zero-balance & premium commercial corporate accounts",
          overview: "Fast-track onboarding with leading commercial banking partners with preferred API integrations and zero hassle.",
          turnaround: "1–2 Business Days",
          deliverables: ["Active Corporate Current Account", "Corporate NetBanking Access", "Business Debit Card"],
          prerequisites: "Certificate of Incorporation, PAN, GST certificate."
        }
      },
      {
        name: "DSC / PAN / TAN",
        detail: {
          tagline: "Class 3 digital signatures & tax deduction accounts",
          overview: "Hardware cryptographic tokens for secure electronic signing of government filings, plus dedicated corporate PAN and TAN numbers.",
          turnaround: "24–48 Hours",
          deliverables: ["Class 3 Digital Signature Token (ePass)", "Corporate PAN Card", "TAN Allotment Letter"],
          prerequisites: "Aadhaar-linked mobile verification & photo ID."
        }
      }
    ]
  },
  {
    id: "tax-compliance",
    number: "02",
    title: "Tax & Compliance",
    note: "Stay 100% compliant with timely GST, direct tax, payroll, and ROC corporate filings.",
    bgColor: "#edf5ff",
    accentColor: "#2563eb",
    ctaText: "Manage Compliance",
    items: [
      {
        name: "GST registration",
        detail: {
          tagline: "Seamless GSTIN issuance with state jurisdiction mapping",
          overview: "Hassle-free application handling queries, officer clarification, and expedited GSTIN approval.",
          turnaround: "3–5 Days",
          deliverables: ["GSTIN Certificate", "Portal Credentials", "Input Tax Invoicing Guide"],
          prerequisites: "PAN, business address proof & cancelled cheque."
        }
      },
      {
        name: "GST filing",
        detail: {
          tagline: "Monthly & quarterly GSTR-1, GSTR-3B & annual GSTR-9 filings",
          overview: "Accurate invoice reconciliation against GSTR-2B to maximize input tax credit without penalty or notice risk.",
          turnaround: "Monthly On-Time",
          deliverables: ["Filed Return Acknowledgment", "Input Credit Match Report", "Tax Computation Sheet"],
          prerequisites: "Sales & purchase registers, bank statements."
        }
      },
      {
        name: "Income tax",
        detail: {
          tagline: "Corporate & individual annual ITR filing",
          overview: "Comprehensive direct tax computation utilizing all statutory exemptions, deductions, and accurate advance tax assessment.",
          turnaround: "2–4 Days",
          deliverables: ["ITR-V Filing Acknowledgement", "Tax Computation Worksheet", "Loss Carry-Forward Ledger"],
          prerequisites: "Audited balance sheet, Profit & Loss statement, Form 26AS/AIS."
        }
      },
      {
        name: "TDS",
        detail: {
          tagline: "Quarterly TDS returns (24Q, 26Q) & Form 16 issuance",
          overview: "Accurate withholding tax calculation, challan deposit, and timely quarterly return submissions.",
          turnaround: "Quarterly Schedule",
          deliverables: ["TDS Return Acknowledgement", "Digitally Signed Form 16 / 16A", "TDS Ledger Reconciliation"],
          prerequisites: "Vendor payment list, payroll register & challan receipts."
        }
      },
      {
        name: "Accounting",
        detail: {
          tagline: "Full-cycle automated ledger & financial reporting",
          overview: "Regular ledger maintenance, journal entries, accounts payable/receivable monitoring, and balance sheet preparation.",
          turnaround: "Ongoing / Monthly",
          deliverables: ["Monthly Financial Statements", "Ledger Reports", "Cash Flow Analysis"],
          prerequisites: "Bank statements, invoices, receipts."
        }
      },
      {
        name: "Bookkeeping",
        detail: {
          tagline: "Accurate transaction tracking on cloud accounting tools",
          overview: "Daily/weekly categorization of revenue and expense transactions on Tally, Zoho Books, or QuickBooks.",
          turnaround: "Real-Time / Weekly",
          deliverables: ["Reconciled Cloud Books", "Expense Classification Summary", "Vendor Aging Report"],
          prerequisites: "Invoices, payment gateway summaries."
        }
      },
      {
        name: "Payroll",
        detail: {
          tagline: "Salary disbursement, payslip generation & statutory deductions",
          overview: "End-to-end employee salary structuring, net pay calculation, tax deduction, and automated salary slip dispatch.",
          turnaround: "Monthly Cycle",
          deliverables: ["Salary Slips (PDF)", "Bank Transfer Sheet", "Deduction Breakdown (PF/ESI/TDS)"],
          prerequisites: "Employee attendance records & salary matrix."
        }
      },
      {
        name: "ROC filing",
        detail: {
          tagline: "Annual returns with Registrar of Companies (AOC-4 & MGT-7)",
          overview: "Mandatory corporate secretarial filing covering financial statements, annual returns, and director disclosures.",
          turnaround: "Annual Compliance",
          deliverables: ["Filed AOC-4 & MGT-7 Receipts", "Director Disclosure Documentation", "Secretarial Audit Records"],
          prerequisites: "Audited financial statements & board minutes."
        }
      },
      {
        name: "Annual compliance",
        detail: {
          tagline: "Comprehensive 360-degree corporate legal maintenance",
          overview: "Bundled secretarial, direct tax, GST, and statutory registry filings ensuring zero default penalties.",
          turnaround: "Annual Retainer",
          deliverables: ["Statutory Compliance Calendar", "Annual Compliance Audit Report", "Zero-Penalty Certificate"],
          prerequisites: "Incorporation documents & full year financial logs."
        }
      },
      {
        name: "Tax audit",
        detail: {
          tagline: "Section 44AB chartered accountant independent audit",
          overview: "Thorough verification of books of accounts for businesses exceeding statutory turnover limits under Income Tax Act.",
          turnaround: "7–10 Business Days",
          deliverables: ["Form 3CA/3CB & 3CD Audit Report", "Tax Audit Annexures", "Observation & Rectification Letter"],
          prerequisites: "Complete year-end financial ledgers & bank reconciliations."
        }
      },
      {
        name: "Corporate compliance",
        detail: {
          tagline: "Board resolutions, statutory registers & director filings",
          overview: "Preparation of AGM/EGM notices, DIR-3 KYC director verifications, and statutory company register maintenance.",
          turnaround: "2–4 Business Days",
          deliverables: ["Director KYC Receipts (DIR-3)", "Draft Board Resolutions", "Updated Statutory Registers"],
          prerequisites: "Director DIN numbers, Aadhaar & mobile OTP."
        }
      }
    ]
  },
  {
    id: "labour-hr",
    number: "03",
    title: "Labour & HR",
    note: "Essential workforce governance, statutory benefits, payroll, and hiring compliance after setup.",
    bgColor: "#f4f0fd",
    accentColor: "#7c3aed",
    ctaText: "Manage Employees",
    items: [
      {
        name: "EPF",
        detail: {
          tagline: "Employees' Provident Fund registration & monthly ECR filing",
          overview: "Registration with EPFO portal, establishment code allocation, and monthly contribution filings for all employees.",
          turnaround: "3–4 Business Days",
          deliverables: ["EPFO Establishment Code", "Monthly ECR Filing Challan", "Universal Account Number (UAN) Allotment"],
          prerequisites: "Company registration, employee list & salary breakdown."
        }
      },
      {
        name: "ESI",
        detail: {
          tagline: "Employee State Insurance healthcare & disability benefits",
          overview: "Statutory health insurance coverage for eligible workforce, employee card issuance, and monthly portal compliance.",
          turnaround: "3–4 Business Days",
          deliverables: ["ESIC 17-Digit Employer Code", "Monthly Contribution Filing", "Employee E-Pehchan Cards"],
          prerequisites: "Staff roster, bank details, PAN & address proof."
        }
      },
      {
        name: "Labour registration",
        detail: {
          tagline: "Shop & Establishment Act or Factories Act registration",
          overview: "State labour department commercial license establishing working hours, employee welfare, and overtime standards.",
          turnaround: "4–6 Business Days",
          deliverables: ["Shop & Establishment Certificate", "Labour Department Clearance", "Statutory Display Formats"],
          prerequisites: "Premises rent deed, employee count, utility bill."
        }
      },
      {
        name: "Labour licence",
        detail: {
          tagline: "Contract Labour Regulation & Abolition (CLRA) licence",
          overview: "Mandatory permit for contractors and principal employers deploying contract workforce exceeding threshold limits.",
          turnaround: "7–10 Business Days",
          deliverables: ["Official CLRA Labour Licence", "Contractor Onboarding Pack", "Half-Yearly Return Format"],
          prerequisites: "Principal employer agreement & worker strength declaration."
        }
      },
      {
        name: "Employee contracts",
        detail: {
          tagline: "Enforceable offer letters & employment agreements",
          overview: "Bespoke legal contracts covering non-compete, confidentiality, notice periods, IP ownership, and termination terms.",
          turnaround: "24–48 Hours",
          deliverables: ["Custom Employment Agreement Template", "Executive Offer Letter", "NDAs & Code of Conduct Doc"],
          prerequisites: "Role designations, compensation structures, policies."
        }
      },
      {
        name: "HR policies",
        detail: {
          tagline: "Comprehensive corporate handbook & statutory policies",
          overview: "Full employee handbook including POSH (sexual harassment prevention), leaves, appraisal systems, and remote work guidelines.",
          turnaround: "3–5 Business Days",
          deliverables: ["Customized Employee Handbook", "POSH Committee Framework", "Leave & Attendance Policy"],
          prerequisites: "Company culture goals & leadership input."
        }
      },
      {
        name: "Payroll",
        detail: {
          tagline: "Automated monthly salary structuring & statutory filing",
          overview: "Complete salary computation with PF, ESI, professional tax, and TDS deductions plus one-click bank disbursement files.",
          turnaround: "Monthly Retainer",
          deliverables: ["Employee Payslips", "Bank NEFT Salary File", "Monthly Statutory Deductions Ledger"],
          prerequisites: "Attendance and overtime logs."
        }
      },
      {
        name: "Recruitment",
        detail: {
          tagline: "Talent acquisition for technical, commercial & executive roles",
          overview: "Candidate sourcing, technical pre-screening, background checking, and interview scheduling with fast turnaround.",
          turnaround: "Ongoing / Targeted",
          deliverables: ["Pre-Screened Candidate Shortlist", "Interview Evaluation Notes", "Background Verification File"],
          prerequisites: "Job description, budget, seniority tier."
        }
      },
      {
        name: "Employee onboarding",
        detail: {
          tagline: "Seamless document collection & orientation workflow",
          overview: "Digital onboarding portal for background verifications, PF transfer forms, identity collection, and company asset assignment.",
          turnaround: "1–2 Days per Hire",
          deliverables: ["Completed Digital Employee Dossier", "Signed Documentation Archive", "Asset Acknowledgement Slips"],
          prerequisites: "Selected candidate contact details."
        }
      },
      {
        name: "Labour compliance",
        detail: {
          tagline: "Statutory registers & annual labour return filings",
          overview: "Maintenance of statutory muster rolls, wage registers, inspection assistance, and zero-default dispute resolution.",
          turnaround: "Quarterly & Annual",
          deliverables: ["Form A to Form E Statutory Registers", "Annual Labour Return Filings", "Inspection Defense Record"],
          prerequisites: "Monthly payroll and attendance registers."
        }
      }
    ]
  },
  {
    id: "finance-loans",
    number: "04",
    title: "Finance & Loans",
    hook: "Need Capital to Move Forward?",
    note: "Secure working capital, government MSME subsidies, and institutional bank credit.",
    bgColor: "#fef8ea",
    accentColor: "#d97706",
    ctaText: "Explore Funding",
    items: [
      {
        name: "Business loans",
        detail: {
          tagline: "Unsecured & secured commercial debt from leading banks",
          overview: "Tailored debt financing options with top private & PSU banks at competitive interest rates for expansion.",
          turnaround: "7–12 Business Days",
          deliverables: ["Loan Eligibility Evaluation", "Sanction Letter Assistance", "Disbursement Coordination"],
          prerequisites: "Last 2 years ITR, 12 months bank statements, GST returns."
        }
      },
      {
        name: "MSME loans",
        detail: {
          tagline: "Collateral-free credit under CGTMSE government cover",
          overview: "Access loans up to ₹5 Crores without third-party guarantee or collateral under the credit guarantee scheme.",
          turnaround: "7–10 Business Days",
          deliverables: ["CGTMSE Scheme Application", "Bank Liaison File", "Interest Subsidy Check"],
          prerequisites: "Udyam Certificate, business vintage proof & KYC."
        }
      },
      {
        name: "Mudra",
        detail: {
          tagline: "Micro-enterprise funding under Shishu, Kishor & Tarun",
          overview: "Government micro-funding up to ₹10 Lakhs for small business machinery, retail ventures, and local enterprises.",
          turnaround: "5–8 Business Days",
          deliverables: ["Mudra Application Pack", "Simplified Project Overview", "Sanction Follow-up"],
          prerequisites: "Business establishment proof, quotation of machinery/goods."
        }
      },
      {
        name: "Working capital",
        detail: {
          tagline: "Cash Credit (CC) & Overdraft (OD) bank facilities",
          overview: "Flexible operational credit lines to bridge accounts receivable cycles and maintain smooth vendor supplier payments.",
          turnaround: "10–14 Business Days",
          deliverables: ["Working Capital Assessment Sheet", "Drawing Power Report", "Bank Sanction Letter"],
          prerequisites: "Debtors/creditors aging list, stock statement."
        }
      },
      {
        name: "Equipment finance",
        detail: {
          tagline: "Machinery, commercial vehicle & hardware financing",
          overview: "Specialized low-interest loans for buying production machinery, servers, or commercial vehicles with hypothecation.",
          turnaround: "5–8 Business Days",
          deliverables: ["Equipment Loan Term Sheet", "Vendor Invoice Coordination", "Asset Insurance Arrangement"],
          prerequisites: "Proforma invoice of machinery, entity financials."
        }
      },
      {
        name: "Government schemes",
        detail: {
          tagline: "Central & state industrial incentive schemes",
          overview: "Identification and application for eligible schemes like PMEGP, Stand-Up India, and state industrial development packages.",
          turnaround: "10–15 Business Days",
          deliverables: ["Scheme Applicability Audit", "Government Portal Filing", "Nodal Agency Representation"],
          prerequisites: "Promoter profile, educational certificates, project plan."
        }
      },
      {
        name: "Subsidies",
        detail: {
          tagline: "Capital investment & interest subsidy claims",
          overview: "Direct benefit claims for capital expenditure, green energy adoption, and technology upgrades under official schemes.",
          turnaround: "15–20 Business Days",
          deliverables: ["Subsidy Eligibility Docket", "Inspection Dossier", "Disbursement Tracking"],
          prerequisites: "Machinery purchase invoices, power connection proof."
        }
      },
      {
        name: "Project reports",
        detail: {
          tagline: "Detailed Project Report (DPR) for bank approval",
          overview: "Comprehensive institutional dossiers including technical feasibility, market analysis, economic viability, and ROI projections.",
          turnaround: "3–5 Business Days",
          deliverables: ["Executive DPR Document (40+ pages)", "Debt Service Coverage Ratio (DSCR)", "BEP Analysis"],
          prerequisites: "Project cost breakdown, capacity estimation."
        }
      },
      {
        name: "CMA reports",
        detail: {
          tagline: "Credit Monitoring Arrangement financial projections",
          overview: "Standard 7-year multi-table financial forecasting required by bank credit managers to sanction term loans and ODs.",
          turnaround: "48–72 Hours",
          deliverables: ["CMA Data Excel & PDF", "Balance Sheet Projections", "Ratio & Fund Flow Analysis"],
          prerequisites: "Last 3 years audited balance sheets & provisional figures."
        }
      },
      {
        name: "Funding documentation",
        detail: {
          tagline: "Comprehensive financial dossiers for credit appraisal",
          overview: "Organized compliance verification packages that satisfy bank underwriting standards on the first review.",
          turnaround: "2–3 Business Days",
          deliverables: ["Audited Verification Binder", "Net Worth Certificates", "Bank Rating File"],
          prerequisites: "Entity legal documents, asset deeds."
        }
      },
      {
        name: "Investor documentation",
        detail: {
          tagline: "Pitch decks, cap tables & financial valuation models",
          overview: "Venture-grade investor pitch decks, discounted cash flow (DCF) valuation reports, and cap table models for equity rounds.",
          turnaround: "5–8 Business Days",
          deliverables: ["Investor Pitch Deck (Slide Deck)", "Financial Model (Excel)", "Valuation Certificate (CA/Merchant Banker)"],
          prerequisites: "Historic revenue, product roadmap & growth metrics."
        }
      }
    ]
  },
  {
    id: "legal-documentation",
    number: "05",
    title: "Legal & Documentation",
    note: "Protect intellectual property, enforce contracts, and safeguard company equity with ironclad legal paperwork.",
    bgColor: "#eaf8f8",
    accentColor: "#0d9488",
    ctaText: "Get Documents",
    items: [
      {
        name: "Business agreements",
        detail: {
          tagline: "Commercial contract drafting & legal review",
          overview: "Legally enforceable commercial contracts drafted by corporate legal experts to protect rights, margins, and operational remedies.",
          turnaround: "24–48 Hours",
          deliverables: ["Custom Drafted Agreement", "Redline Legal Review", "Electronic Execution Guidance"],
          prerequisites: "Scope of work, financial terms & party details."
        }
      },
      {
        name: "Partnership agreements",
        detail: {
          tagline: "Co-founder & equity shareholder contracts",
          overview: "Definitive agreements governing equity dilution, voting rights, profit sharing, dispute mediation, and exit clauses.",
          turnaround: "2–3 Business Days",
          deliverables: ["Shareholders' Agreement (SHA)", "Co-Founder Deed", "Vesting Schedule Annexure"],
          prerequisites: "Equity split percentages, roles, capital contribution."
        }
      },
      {
        name: "Employment agreements",
        detail: {
          tagline: "Enforceable staff, freelancer & executive contracts",
          overview: "Watertight employment covenants covering non-solicitation, invention assignment, and enforceable garden leave.",
          turnaround: "24 Hours",
          deliverables: ["Master Employment Contract", "Consultant Agreement", "Probation Evaluation Template"],
          prerequisites: "Designation, compensation, notice period terms."
        }
      },
      {
        name: "Vendor agreements",
        detail: {
          tagline: "Supply chain, service provider & procurement contracts",
          overview: "Service Level Agreements (SLAs) with penalty terms, indemnification, warranty standards, and dispute jurisdiction.",
          turnaround: "24–48 Hours",
          deliverables: ["Vendor Master Agreement", "SLA Annexure", "Delivery & Acceptance Protocol"],
          prerequisites: "Vendor deliverable specifications & payment schedules."
        }
      },
      {
        name: "NDA",
        detail: {
          tagline: "Non-Disclosure Agreements (Unilateral & Bilateral)",
          overview: "Ironclad confidentiality contracts to safeguard proprietary tech, client lists, and trade secrets before business talks.",
          turnaround: "Instant / 24 Hours",
          deliverables: ["Standard Unilateral NDA", "Mutual Bilateral NDA", "Execution Checklist"],
          prerequisites: "Names of exchanging entities & confidentiality scope."
        }
      },
      {
        name: "MOU",
        detail: {
          tagline: "Memorandum of Understanding for strategic alliances",
          overview: "Formal document outlining collaborative intent, preliminary milestones, and operational frameworks prior to definitive agreements.",
          turnaround: "24–48 Hours",
          deliverables: ["Structured MOU Document", "Milestone Roadmap Annexure", "Binding/Non-Binding Clause Clauses"],
          prerequisites: "High-level partnership objectives & milestone goals."
        }
      },
      {
        name: "Terms & Conditions",
        detail: {
          tagline: "Custom Terms of Service for websites, apps & SaaS",
          overview: "Comprehensive user covenants, liability disclaimers, dispute arbitration, and subscription payment terms.",
          turnaround: "24–48 Hours",
          deliverables: ["Platform Terms of Service", "End User License Agreement (EULA)", "Refund & Cancellation Policy"],
          prerequisites: "Website/app URL & business monetization model."
        }
      },
      {
        name: "Privacy Policy",
        detail: {
          tagline: "GDPR, DPDP & global data protection compliant policies",
          overview: "Mandatory consumer data handling, cookie policies, tracking disclosures, and user data rights compliant with latest privacy laws.",
          turnaround: "24 Hours",
          deliverables: ["Data Privacy Policy", "Cookie Policy Document", "User Consent Architecture Guide"],
          prerequisites: "Data collection methods (analytics, forms, payments)."
        }
      },
      {
        name: "Legal notices",
        detail: {
          tagline: "Formal advocate notices for debt recovery & contract breaches",
          overview: "Official notices drafted and issued by High Court advocates demanding settlement, payment clearance, or contractual remedy.",
          turnaround: "24–48 Hours",
          deliverables: ["Advocate Legal Notice (Signed)", "Registered Postal Proof", "Tracking & Response Advisory"],
          prerequisites: "Proof of default/breach (invoices, emails, agreement)."
        }
      },
      {
        name: "Trademark",
        detail: {
          tagline: "Brand name, logo & slogan trademark protection",
          overview: "Comprehensive trademark search, class identification (Classes 1–45), TM application filing, and objection clearance.",
          turnaround: "Application in 24 Hours",
          deliverables: ["TM Filing Receipt (Allowing use of ™)", "Trademark Examination Advisory", "Class Allocation Certificate"],
          prerequisites: "Brand name/logo, power of attorney, MSME certificate."
        }
      },
      {
        name: "Copyright",
        detail: {
          tagline: "Intellectual property registration for code, literary & art",
          overview: "Securing statutory copyright ownership for software source code, creative designs, books, and audiovisual productions.",
          turnaround: "3–5 Business Days",
          deliverables: ["Copyright Application Receipt", "Source Code Escrow Dossier", "Official Diary Number"],
          prerequisites: "Creative work samples, author NOC, statement of novelty."
        }
      },
      {
        name: "Patent assistance",
        detail: {
          tagline: "Provisional & complete patent specification filing",
          overview: "Prior art search, patent drafting with patent attorneys, and filing with Indian Patent Office / PCT for international coverage.",
          turnaround: "10–15 Business Days",
          deliverables: ["Patentability Assessment Report", "Drafted Claims & Specifications", "Official Patent Filing Receipt"],
          prerequisites: "Technical invention breakdown, drawings & flowcharts."
        }
      }
    ]
  },
  {
    id: "website-technology",
    number: "06",
    title: "Website & Technology",
    hook: "Turn Your Business Into a Digital Business.",
    note: "Custom engineering, web apps, automation, and modern cloud infrastructure.",
    bgColor: "#edf5ff",
    accentColor: "#2563eb",
    ctaText: "Build My Digital Presence",
    items: [
      {
        name: "Business website",
        detail: {
          tagline: "High-performance marketing & corporate sites",
          overview: "Next.js / Tailwind modern websites engineered with perfect 100/100 Lighthouse performance, mobile responsiveness, and SEO.",
          turnaround: "5–8 Business Days",
          deliverables: ["Custom Responsive Website", "Lead Capture Integration", "Google Analytics & Speed Setup"],
          prerequisites: "Brand assets, content draft, preferred references."
        }
      },
      {
        name: "E-commerce",
        detail: {
          tagline: "Full-scale online stores with payment & logistics integration",
          overview: "Shopify or custom Next.js storefronts with automated inventory sync, discount engines, and conversion-optimized checkouts.",
          turnaround: "7–12 Business Days",
          deliverables: ["Configured Storefront", "Payment Gateway Integration", "Shipping & SMS Automation"],
          prerequisites: "Product catalog, pricing, payment credentials."
        }
      },
      {
        name: "Landing page",
        detail: {
          tagline: "High-conversion single-page sales & lead generation pages",
          overview: "Laser-focused landing pages designed for PPC and social ad campaigns with persuasive typography and fast loading.",
          turnaround: "48–72 Hours",
          deliverables: ["Conversion Landing Page", "A/B Testing Framework", "CRM Lead Webhook"],
          prerequisites: "Offer details, target audience, primary CTA."
        }
      },
      {
        name: "Mobile app",
        detail: {
          tagline: "Native iOS & Android apps built on React Native / Flutter",
          overview: "Cross-platform mobile applications with offline storage, push notifications, and App Store / Google Play publishing.",
          turnaround: "3–6 Weeks",
          deliverables: ["iOS & Android App Builds", "App Store Submission", "Push Notification Architecture"],
          prerequisites: "Feature scope, user flow, backend requirements."
        }
      },
      {
        name: "Custom software",
        detail: {
          tagline: "Bespoke SaaS & internal workflow software engineering",
          overview: "Custom-built web platforms, client portals, and workflow tools engineered to replace slow manual spreadsheets.",
          turnaround: "Custom Timeline",
          deliverables: ["Full Stack Application", "Scalable Database Schema", "Source Code & Deployment Pipeline"],
          prerequisites: "Detailed operational requirements & logic."
        }
      },
      {
        name: "CRM",
        detail: {
          tagline: "Customer Relationship Management & sales pipelines",
          overview: "Implementation of HubSpot, Zoho CRM, or custom dashboards to track incoming leads, deal stages, and sales team calls.",
          turnaround: "3–5 Business Days",
          deliverables: ["Configured Sales Pipeline", "Lead Ingestion Automations", "Team Role Permissions"],
          prerequisites: "Sales team structure, current lead sources."
        }
      },
      {
        name: "ERP",
        detail: {
          tagline: "Integrated enterprise inventory, finance & supply chain",
          overview: "Full enterprise resource planning modules connecting warehousing, manufacturing, vendor purchase orders, and accounting.",
          turnaround: "2–4 Weeks",
          deliverables: ["Connected ERP System", "Inventory Tracking Module", "Staff Training Sessions"],
          prerequisites: "Existing operational ledgers, product SKUs."
        }
      },
      {
        name: "POS",
        detail: {
          tagline: "Point of Sale retail billing & barcode scanning systems",
          overview: "Fast touch-screen retail billing software with thermal receipt printing, GST calculation, and cash drawer integration.",
          turnaround: "3–5 Business Days",
          deliverables: ["Installed POS Software", "Hardware Sync (Printers/Scanners)", "Daily Cash Reconciliation Sheet"],
          prerequisites: "Store details, hardware specifications, item list."
        }
      },
      {
        name: "WhatsApp integration",
        detail: {
          tagline: "Official WhatsApp Business Cloud API & automated chat",
          overview: "Official Meta-verified green tick API setup, automated order updates, instant FAQs, and bulk broadcast messaging.",
          turnaround: "2–4 Business Days",
          deliverables: ["Active WhatsApp Cloud API", "Approved Message Templates", "Automated Greeting & Reply Bot"],
          prerequisites: "Facebook Business Manager & active phone number."
        }
      },
      {
        name: "Payment gateway",
        detail: {
          tagline: "Razorpay, Cashfree & Stripe automated payment checkout",
          overview: "Instant merchant approval with lowest transaction MDR rates supporting UPI, NetBanking, cards, EMI, and recurring billing.",
          turnaround: "24–48 Hours",
          deliverables: ["Active Merchant Account", "Checkout Integration on Site", "Automated GST Invoicing Webhook"],
          prerequisites: "Business registration certificate, bank verification."
        }
      },
      {
        name: "Business email",
        detail: {
          tagline: "Google Workspace & Microsoft 365 custom domain email",
          overview: "Professional @yourcompany.com email addresses with enterprise security, SPF/DKIM authentication, and spam protection.",
          turnaround: "24 Hours",
          deliverables: ["Google Workspace / M365 Setup", "DNS Authentication (SPF/DKIM/DMARC)", "Device Mail Sync"],
          prerequisites: "Domain registrar access & user accounts list."
        }
      },
      {
        name: "Domain & hosting",
        detail: {
          tagline: "High-speed cloud hosting on Vercel, AWS & Cloudflare",
          overview: "Domain name registration, SSL security certificates, Cloudflare CDN protection, and automated daily cloud backups.",
          turnaround: "Instant / 24 Hours",
          deliverables: ["Registered Domain", "Cloud CDN & SSL Certificate", "Automated Daily Backups"],
          prerequisites: "Desired domain name options."
        }
      },
      {
        name: "AI automation",
        detail: {
          tagline: "Autonomous AI agents & no-code workflow automations",
          overview: "Connect Make, Zapier, and OpenAI APIs to automatically extract data, generate invoices, and route incoming customer requests.",
          turnaround: "3–5 Business Days",
          deliverables: ["Live Automated Workflows", "OpenAI / Claude API Connection", "Error Alert Monitoring"],
          prerequisites: "Software stack tools and manual workflow description."
        }
      },
      {
        name: "Chatbots",
        detail: {
          tagline: "24/7 intelligent customer support chatbots",
          overview: "Trained AI customer service agents on your company docs and FAQs to answer customer questions and book meetings.",
          turnaround: "3–5 Business Days",
          deliverables: ["Trained AI Chat Widget", "Lead Capture Webhook", "Knowledge Base Embeddings"],
          prerequisites: "Company FAQs, pricing sheet, product docs."
        }
      },
      {
        name: "Website maintenance",
        detail: {
          tagline: "Security patching, content updates & uptime monitoring",
          overview: "Ongoing monthly technical retainer for speed optimization, bug fixing, malware scanning, and content publishing.",
          turnaround: "Monthly Retainer",
          deliverables: ["Monthly Health Report", "24/7 Uptime Monitoring", "Dedicated Developer Hours"],
          prerequisites: "Website repository / hosting access."
        }
      }
    ]
  },
  {
    id: "branding-marketing",
    number: "07",
    title: "Branding & Marketing",
    note: "Attract qualified leads, establish brand authority, and scale revenue.",
    bgColor: "#fff0eb",
    accentColor: "#ea580c",
    ctaText: "Grow My Business",
    items: [
      {
        name: "Logo",
        detail: {
          tagline: "Memorable modern vector logo design with complete brand guidelines",
          overview: "Original vector logo concepts designed for scalability across apps, business cards, billboards, and social avatars.",
          turnaround: "3–4 Business Days",
          deliverables: ["3 Logo Concept Directions", "Full Vector Source Files (SVG, AI, EPS)", "Light/Dark/Monochrome Variants"],
          prerequisites: "Brand name, industry, aesthetic preferences."
        }
      },
      {
        name: "Brand identity",
        detail: {
          tagline: "Complete visual identity system & typography guidelines",
          overview: "Comprehensive brand book detailing color systems, font pairings, visual tone of voice, and icon styles.",
          turnaround: "5–7 Business Days",
          deliverables: ["Brand Identity Book (PDF)", "Color Palette Hex/CMYK Codes", "Custom Typography Assets"],
          prerequisites: "Approved logo & core company values."
        }
      },
      {
        name: "Business cards",
        detail: {
          tagline: "Executive print-ready NFC & physical business card designs",
          overview: "Minimalist, tactile business cards formatted for spot UV, metallic foil, and digital QR code / NFC contact sharing.",
          turnaround: "24–48 Hours",
          deliverables: ["Print-Ready PDF with Bleeds", "Smart QR Code Generator", "Editable Source File"],
          prerequisites: "Staff contact details, addresses, designations."
        }
      },
      {
        name: "Company profile",
        detail: {
          tagline: "High-impact pitch brochure & investor corporate dossier",
          overview: "Professionally copywritten and designed corporate brochure showcasing services, leadership, milestones, and client reviews.",
          turnaround: "4–6 Business Days",
          deliverables: ["Multi-Page Corporate Deck (PDF)", "Interactive Digital Version", "High-Res Print File"],
          prerequisites: "Company overview, achievements, team bios."
        }
      },
      {
        name: "Brochures",
        detail: {
          tagline: "Sales collateral, product flyers & bi-fold brochures",
          overview: "Engaging commercial collateral created to explain complex technical offerings clearly at conferences and meetings.",
          turnaround: "2–4 Business Days",
          deliverables: ["Bi-Fold/Tri-Fold Print Files", "Digital PDF Distribution Format", "Source Asset Package"],
          prerequisites: "Product specifications & images."
        }
      },
      {
        name: "Social media",
        detail: {
          tagline: "Content strategy & creative visual posts for LinkedIn & Instagram",
          overview: "Consistent publishing calendar with custom carousel designs, industry infographics, and engagement-driven copy.",
          turnaround: "Monthly Retainer",
          deliverables: ["Monthly Content Calendar (12–16 Posts)", "Custom Graphic Carousels & Reels", "Caption Copy & Hashtags"],
          prerequisites: "Brand guidelines & target audience personas."
        }
      },
      {
        name: "SEO",
        detail: {
          tagline: "First-page Google rankings & organic search optimization",
          overview: "Comprehensive technical SEO audit, high-intent commercial keyword targeting, on-page optimization, and high-DA backlink building.",
          turnaround: "Ongoing (Results in 60–90 Days)",
          deliverables: ["Monthly Keyword Ranking Reports", "On-Page Metadata Enhancements", "Technical Speed Audit"],
          prerequisites: "Website CMS access, target locations."
        }
      },
      {
        name: "Google Business Profile",
        detail: {
          tagline: "Local Google Maps verification & top 3 map pack ranking",
          overview: "Claiming, verifying, and optimizing your Google Business Profile to capture high-intent local customer phone calls and visits.",
          turnaround: "3–5 Business Days",
          deliverables: ["Verified Google Maps Profile", "Local Category & Service Schema", "Review Generation Kit"],
          prerequisites: "Physical address proof, business phone, signage photo."
        }
      },
      {
        name: "Google Ads",
        detail: {
          tagline: "High-intent Search, Performance Max & Display campaigns",
          overview: "Target customers actively searching for your services with negative keyword filtering, conversion tracking, and high ROI.",
          turnaround: "Setup in 3–5 Days",
          deliverables: ["Configured Google Ads Campaigns", "High-Converting Ad Copy", "Conversion Tracking GTM Tag"],
          prerequisites: "Google Ads account, daily ad spend budget."
        }
      },
      {
        name: "Meta Ads",
        detail: {
          tagline: "Facebook & Instagram laser-targeted lead generation campaigns",
          overview: "Custom audience funnels, lookalike audiences, and creative video/image ads that generate verified phone and email leads.",
          turnaround: "Setup in 3–5 Days",
          deliverables: ["Meta Ad Sets & Creatives", "Lead Form CRM Webhooks", "Pixel Event Tracking"],
          prerequisites: "Meta Business Manager, ad spend budget."
        }
      },
      {
        name: "Content creation",
        detail: {
          tagline: "Thought leadership articles, case studies & whitepapers",
          overview: "Authoritative industry articles written by domain experts to build trust, educate prospects, and drive organic inbound leads.",
          turnaround: "Weekly Deliveries",
          deliverables: ["SEO-Optimized Blog Articles", "Customer Case Study PDFs", "Executive Ghostwriting"],
          prerequisites: "Topic focus & tone preferences."
        }
      },
      {
        name: "Lead generation",
        detail: {
          tagline: "Predictable B2B & B2C customer acquisition funnels",
          overview: "End-to-end inbound and outbound lead generation systems that deliver qualified sales appointments directly to your calendar.",
          turnaround: "Ongoing Monthly",
          deliverables: ["Verified Prospect Leads", "Automated Email & SMS Sequences", "Calendar Booking Integration"],
          prerequisites: "Ideal Customer Profile (ICP), value proposition."
        }
      },
      {
        name: "WhatsApp marketing",
        detail: {
          tagline: "High open-rate promotional broadcasts & automated funnels",
          overview: "Compliant broadcast messaging with 98% open rates, dynamic customer name insertion, and automated quick-reply buttons.",
          turnaround: "24–48 Hours",
          deliverables: ["Broadcast Campaign Execution", "Meta-Approved Templates", "Click-Through Analytics Report"],
          prerequisites: "Opt-in customer contact list, campaign offer."
        }
      },
      {
        name: "Reputation management",
        detail: {
          tagline: "5-star Google review systems & brand sentiment monitoring",
          overview: "Automated post-purchase review collection workflows and proactive online brand monitoring to protect corporate reputation.",
          turnaround: "Ongoing Monitoring",
          deliverables: ["Automated Review Collection Flow", "Real-Time Mention Alerts", "Negative Feedback Mediation Advice"],
          prerequisites: "Google profile & client CRM access."
        }
      }
    ]
  },
  {
    id: "government-services",
    number: "08",
    title: "Government & Professional Services",
    note: "We handle the complicated stuff — government registrations, tenders, GeM portal, and chartered advisory.",
    bgColor: "#eef6f0",
    accentColor: "#059669",
    ctaText: "Consult a Professional",
    items: [
      {
        name: "Government applications",
        detail: {
          tagline: "End-to-end liaison with central & state departments",
          overview: "Expert documentation and filing for specialized state clearances, pollution control board NOCs, and regulatory permissions.",
          turnaround: "7–14 Business Days",
          deliverables: ["Completed Department Application", "Official Acknowledgment Receipt", "Liaison Tracking Logs"],
          prerequisites: "Entity legal papers, premise details, project brief."
        }
      },
      {
        name: "Licences",
        detail: {
          tagline: "Industry-specific regulatory approvals & operating permits",
          overview: "Specialized licensing for healthcare, manufacturing, transport, security agencies (PSARA), and educational institutions.",
          turnaround: "10–20 Business Days",
          deliverables: ["Official Operating Licence", "Compliance Inspection Kit", "Statutory Renewal Schedule"],
          prerequisites: "Premises inspection clearance, director qualifications."
        }
      },
      {
        name: "Certificates",
        detail: {
          tagline: "ISO 9001, 27001, CE & international standard certifications",
          overview: "Management audit preparation, documentation alignment, and certification issuance by accredited certification bodies.",
          turnaround: "7–10 Business Days",
          deliverables: ["Accredited ISO Certificate", "Quality Management Manual", "Surveillance Audit Schedule"],
          prerequisites: "Process workflows, org chart, employee list."
        }
      },
      {
        name: "Government registrations",
        detail: {
          tagline: "NITI Aayog Darpan, NSIC & statutory supplier registries",
          overview: "Specialized registrations allowing NGOs and commercial businesses to access government grants, tenders, and subsidies.",
          turnaround: "3–5 Business Days",
          deliverables: ["NITI Aayog / NSIC Unique ID", "Government Supplier Certificate", "Priority Scheme Access"],
          prerequisites: "PAN, 3-year financial track record, trust/company deed."
        }
      },
      {
        name: "Tender assistance",
        detail: {
          tagline: "Bid preparation, technical qualification & e-tender filing",
          overview: "End-to-end bid documentation, technical proposal writing, financial quote structuring, and submission on CPPP / e-procure portals.",
          turnaround: "Project Specific (Fast-Track)",
          deliverables: ["Complete Technical Bid Binder", "Financial Bid Compilation", "Portal Submission Confirmation"],
          prerequisites: "Tender document (RFP/NIT), past experience proof."
        }
      },
      {
        name: "GeM",
        detail: {
          tagline: "Government e-Marketplace seller onboarding & bidding",
          overview: "Primary and secondary seller registration, brand approval, product OEM catalogue upload, and direct government procurement access.",
          turnaround: "2–4 Business Days",
          deliverables: ["Verified GeM Seller Account", "Approved Product Catalogues", "L1 Bidding Notification Setup"],
          prerequisites: "GSTIN, Udyam registration, active bank account."
        }
      },
      {
        name: "Professional consultations",
        detail: {
          tagline: "1-on-1 strategic advisory with senior corporate leaders",
          overview: "Structured advisory sessions on entity restructuring, cross-border holding setup, tax optimization, and risk mitigation.",
          turnaround: "Scheduled on Demand",
          deliverables: ["Advisory Session Recording & Notes", "Strategic Action Blueprint", "Risk Assessment Matrix"],
          prerequisites: "Specific challenge or transaction overview."
        }
      },
      {
        name: "CA services",
        detail: {
          tagline: "Dedicated Chartered Accountant retainers & opinions",
          overview: "Direct access to practicing CAs for net worth certificates, financial auditing, tax notice drafting, and strategic advisory.",
          turnaround: "24–48 Hours",
          deliverables: ["Attested CA Certificates", "Formal Tax Opinion Memorandums", "Year-End Audit Representation"],
          prerequisites: "Relevant financial ledgers & bank records."
        }
      },
      {
        name: "CS services",
        detail: {
          tagline: "Company Secretary statutory filings & share capital advisory",
          overview: "Practicing CS services for share allotments, rights issues, director additions/removals, registered office shifts, and ROC approvals.",
          turnaround: "3–5 Business Days",
          deliverables: ["Certified Secretarial Forms", "Share Certificates & Stamping", "Updated MCA Master Data"],
          prerequisites: "Board resolutions, shareholder consent, filings history."
        }
      },
      {
        name: "Legal professionals",
        detail: {
          tagline: "Advocate representation, contract litigation & dispute counsel",
          overview: "Qualified corporate attorneys for arbitration, civil recovery, NCLT representation, and trademark opposition hearings.",
          turnaround: "On Demand / Hearing Dates",
          deliverables: ["Drafted Court Petitions / Rejoinders", "Litigation Defense Strategy", "Court Appearance Representation"],
          prerequisites: "Case facts, prior correspondence, agreements."
        }
      },
      {
        name: "Government scheme assistance",
        detail: {
          tagline: "Dedicated liaison for state & central financial incentive grants",
          overview: "Complete project preparation, physical inspection assistance, and disbursement follow-ups for state industrial subsidies.",
          turnaround: "10–20 Business Days",
          deliverables: ["Approved Scheme Sanction", "Government Department Liaisons", "Subsidy Credit Tracking"],
          prerequisites: "Land/lease deeds, machinery bills, entity KYC."
        }
      }
    ]
  }
];
