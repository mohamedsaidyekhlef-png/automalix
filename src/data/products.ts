export interface Product {
  id: string;
  title: string;
  category: 'Automation Pack' | 'AI Kit' | 'Business-in-a-Box' | 'White Label' | 'SaaS Kit' | 'Audit-Ready' | 'Course' | 'Notion OS' | 'Data Analysis';
  niche: ('Real Estate' | 'E-commerce' | 'Marketing' | 'SaaS' | 'Finance' | 'Health & Legal' | 'General')[];
  tools: ('n8n' | 'Make' | 'Zapier' | 'Airtable' | 'Notion API' | 'Python' | 'Node.js' | 'Looker Studio' | 'Google Sheets')[];
  complexity: 'Beginner' | 'Intermediate' | 'Expert';
  integrations: string[];
  price: number;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  hasGuarantee?: boolean;
}

export const products: Product[] = [
  // Data Analysis (NEW)
  {
    id: 'ga4-reporting-suite',
    title: 'GA4 Automated Reporting Suite',
    category: 'Data Analysis',
    niche: ['Marketing', 'SaaS', 'E-commerce'],
    tools: ['n8n', 'Looker Studio', 'Google Sheets'],
    complexity: 'Intermediate',
    integrations: ['Google Analytics 4', 'Slack', 'Gmail'],
    price: 149,
    description: 'Stop manually exporting CSVs. This workflow pulls GA4 metrics daily, processes them in n8n, and updates a client-ready Looker Studio dashboard.',
    features: ['Auto-refreshing Dashboard', 'Client Email Summaries', 'Custom Event Tracking', 'Looker Studio Template'],
    tags: ['Analytics', 'Reporting', 'Agency', 'Launch-Ready Guarantee'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9,
    reviews: 64,
    isNew: true,
    hasGuarantee: true
  },
  {
    id: 'ecom-cohort-analysis',
    title: 'E-com Cohort Analysis Kit',
    category: 'Data Analysis',
    niche: ['E-commerce', 'Finance'],
    tools: ['Python', 'Node.js'],
    complexity: 'Expert',
    integrations: ['Stripe', 'Shopify', 'Pandas'],
    price: 249,
    description: 'Advanced Python script that pulls Stripe/Shopify data to generate LTV and retention cohort heatmaps. Essential for raising capital.',
    features: ['LTV Calculation', 'Retention Heatmaps', 'Churn Prediction', 'Jupyter Notebook Included'],
    tags: ['Data Science', 'E-commerce', 'Growth'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    rating: 5.0,
    reviews: 28,
    hasGuarantee: true
  },
  {
    id: 'sentiment-analyzer',
    title: 'Social Sentiment Analyzer',
    category: 'Data Analysis',
    niche: ['Marketing', 'SaaS'],
    tools: ['Make', 'Airtable'],
    complexity: 'Intermediate',
    integrations: ['OpenAI', 'Twitter/X', 'Reddit'],
    price: 129,
    description: 'Analyzes brand mentions on Twitter & Reddit, scores sentiment using GPT-4, and categorizes feedback in Airtable for product teams.',
    features: ['Real-time Monitoring', 'GPT-4 Sentiment Scoring', 'Crisis Alerts', 'Competitor Tracking'],
    tags: ['AI', 'Social Media', 'Brand Reputation'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000',
    rating: 4.7,
    reviews: 42,
    hasGuarantee: true
  },

  // Audit-Ready / Compliance
  {
    id: 'gdpr-deletion-pack',
    title: 'GDPR Deletion Request Pack™',
    category: 'Audit-Ready',
    niche: ['Health & Legal', 'SaaS', 'E-commerce'],
    tools: ['n8n', 'Notion API'],
    complexity: 'Intermediate',
    integrations: ['Hubspot', 'Salesforce', 'Postgres'],
    price: 299,
    description: 'Automate "Right to be Forgotten" requests across all your systems with audit logs. Searches CRM, Email, and DBs to delete user data securely.',
    features: ['n8n Workflow', 'Immutable Audit Logs', 'Multi-DB Support', 'Compliance Ready', 'Seed Data Included'],
    tags: ['Compliance', 'Security', 'GDPR', 'Launch-Ready Guarantee'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    rating: 5.0,
    reviews: 42,
    isNew: true,
    hasGuarantee: true
  },
  {
    id: 'sox-finance-pack',
    title: 'SOX Finance Reporting Pack',
    category: 'Audit-Ready',
    niche: ['Finance', 'Health & Legal'],
    tools: ['n8n', 'Python'],
    complexity: 'Expert',
    integrations: ['AWS S3', 'Quickbooks', 'Xero'],
    price: 399,
    description: 'Daily reconciliation and discrepancy flagging with version-controlled audit trails synced to AWS S3 for 7-year storage.',
    features: ['Finance Reconciliation', 'AWS S3 Sync', 'Version Control', 'Audit Ready', 'Discrepancy Alerts'],
    tags: ['Finance', 'Enterprise', 'Risk', 'SOX'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    rating: 5.0,
    reviews: 15,
    hasGuarantee: true
  },
  {
    id: 'ai-decision-audit',
    title: 'AI Decision Audit Kit™',
    category: 'Audit-Ready',
    niche: ['SaaS', 'Health & Legal'],
    tools: ['Python', 'Node.js'],
    complexity: 'Expert',
    integrations: ['OpenAI', 'Pinecone', 'LangChain'],
    price: 449,
    description: 'Wraps around your core AI Agent to log full prompts, raw outputs, confidence scores, and user profiles for future legal review.',
    features: ['Python/Node Middleware', 'Decision Logging', 'Confidence Scoring', 'Legal Export'],
    tags: ['AI Governance', 'Legal', 'Risk'],
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9,
    reviews: 8,
    hasGuarantee: true
  },

  // Business-in-a-Box
  {
    id: 'cold-email-agency',
    title: 'Cold Email Agency-in-a-Box',
    category: 'Business-in-a-Box',
    niche: ['Marketing', 'SaaS'],
    tools: ['Make', 'Airtable', 'Notion API'],
    complexity: 'Intermediate',
    integrations: ['Instantly', 'SmartLead', 'Gmail'],
    price: 497,
    description: 'Complete system to launch a cold email agency. Includes landing pages, scripts, delivery workflows, and pricing models.',
    features: ['Sales Scripts', 'Notion CRM', 'Delivery Workflows', 'Pricing Models', 'Client Onboarding'],
    tags: ['Agency', 'Marketing', 'Startups', 'Launch-Ready Guarantee'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9,
    reviews: 128,
    isBestSeller: true,
    hasGuarantee: true
  },
  {
    id: 'micro-saas-starter',
    title: 'Micro SaaS Starter Kit',
    category: 'Business-in-a-Box',
    niche: ['SaaS', 'General'],
    tools: ['Node.js'],
    complexity: 'Expert',
    integrations: ['Stripe', 'Supabase', 'OpenAI'],
    price: 599,
    description: 'Launch a micro-SaaS in a weekend. Includes auth, payments, landing page, and basic AI wrapper functionality.',
    features: ['Next.js Boilerplate', 'Stripe Integration', 'Supabase Auth', 'Landing Page'],
    tags: ['SaaS', 'Dev', 'Startup'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    rating: 4.7,
    reviews: 56,
    hasGuarantee: true
  },

  // AI Kits
  {
    id: 'sdr-agent-kit',
    title: 'AI SDR Agent Kit™',
    category: 'AI Kit',
    niche: ['Marketing', 'SaaS', 'Real Estate'],
    tools: ['Python', 'n8n'],
    complexity: 'Intermediate',
    integrations: ['OpenAI', 'Hubspot', 'Google Calendar'],
    price: 149,
    description: 'Deploy-ready AI agent that qualifies leads and books meetings 24/7. Includes Dockerfile and Vercel deploy config.',
    features: ['Python Repo', 'Dockerfile', 'Vercel Deploy', 'Prompt Engineering', 'Calendar Sync'],
    tags: ['AI', 'Sales', 'Python', 'Launch-Ready Guarantee'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    rating: 4.8,
    reviews: 85,
    hasGuarantee: true
  },
  {
    id: 'support-agent-kit',
    title: 'L1 Support Agent Kit',
    category: 'AI Kit',
    niche: ['SaaS', 'E-commerce'],
    tools: ['Python', 'Make'],
    complexity: 'Intermediate',
    integrations: ['Zendesk', 'Intercom', 'OpenAI'],
    price: 199,
    description: 'Auto-resolve 60% of support tickets. Trains on your documentation and integrates with Zendesk/Intercom.',
    features: ['RAG Pipeline', 'Zendesk Integration', 'Tone Matching', 'Escalation Logic'],
    tags: ['Support', 'AI', 'Customer Service'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
    rating: 4.6,
    reviews: 32,
    hasGuarantee: true
  },

  // White Label
  {
    id: 'white-label-bundle',
    title: 'Ultimate White-Label Bundle',
    category: 'White Label',
    niche: ['Marketing', 'General'],
    tools: ['n8n', 'Make', 'Notion API'],
    complexity: 'Intermediate',
    integrations: ['All'],
    price: 2499,
    description: 'Resell our top 10 automation packs under your own brand. Keep 100% of profits. Includes agency license.',
    features: ['Reseller License', 'Unbranded Assets', 'Source Files', 'Marketing Materials', 'Private Onboarding'],
    tags: ['B2B', 'Reseller', 'High Ticket'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9,
    reviews: 34
  },

  // Automation Packs
  {
    id: 'freelancer-pack',
    title: 'Freelancer Automation Pack™',
    category: 'Automation Pack',
    niche: ['Marketing', 'General'],
    tools: ['Notion API', 'Make'],
    complexity: 'Beginner',
    integrations: ['Notion', 'Gmail', 'Stripe'],
    price: 99,
    description: 'Auto-generate contracts, invoices, and project boards. Syncs email to Notion.',
    features: ['Invoice Gen', 'Contract Auto-fill', 'Client Portal', 'Email Sync'],
    tags: ['Freelance', 'Productivity', 'Notion', 'Launch-Ready Guarantee'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000',
    rating: 4.8,
    reviews: 210,
    hasGuarantee: true
  },
  {
    id: 'real-estate-pack',
    title: 'Real Estate Lead Gen Pack',
    category: 'Automation Pack',
    niche: ['Real Estate'],
    tools: ['Zapier', 'Airtable'],
    complexity: 'Beginner',
    integrations: ['Facebook Ads', 'Airtable', 'Slack'],
    price: 149,
    description: 'Capture leads from FB Ads, enrich them with data, and notify agents instantly on Slack.',
    features: ['Lead Enrichment', 'Instant Notification', 'CRM Sync', 'Auto-Followup Script'],
    tags: ['Real Estate', 'Sales', 'Zapier'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
    rating: 4.7,
    reviews: 45,
    hasGuarantee: true
  },
  
  // Academy
  {
    id: 'agency-masterclass',
    title: 'Build an Automation Agency',
    category: 'Course',
    niche: ['General'],
    tools: ['n8n', 'Make'],
    complexity: 'Beginner',
    integrations: [],
    price: 299,
    description: 'Learn how to price, sell, and deliver automation services to high-ticket clients.',
    features: ['10h Video Content', 'Sales Scripts', 'Proposal Templates', 'Pricing Calculators'],
    tags: ['Education', 'Agency', 'Business'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    rating: 5.0,
    reviews: 89
  }
];
