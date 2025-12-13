import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wand2, Bot, Zap, Settings, Check, Copy, Download, Cpu, ArrowRight, 
  Code, Shield, AlertTriangle, Layers, Terminal, Database, Globe, 
  Workflow, Share2, FileJson, Activity
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { cn } from '../lib/utils';

// --- Types ---
type Platform = 'n8n' | 'make' | 'zapier' | 'power-automate';
type Complexity = 'mvp' | 'standard' | 'enterprise';
type ErrorHandling = 'none' | 'basic' | 'auto-retry' | 'dead-letter-queue';

interface GeneratorConfig {
  platform: Platform;
  complexity: Complexity;
  errorHandling: ErrorHandling;
  includeWebhooks: boolean;
  includeAuditLogs: boolean;
  description: string;
}

// --- SEO Helper ---
const usePageSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);
};

export function WorkflowGenerator() {
  // SEO
  usePageSEO(
    "AI Workflow Architect | Enterprise Automation Generator",
    "Generate production-ready automation workflows for n8n, Make.com, and Zapier. AI-powered architecture for complex business logic, compliance, and error handling."
  );

  // State
  const [step, setStep] = useState<'config' | 'architecting' | 'result'>('config');
  const [config, setConfig] = useState<GeneratorConfig>({
    platform: 'n8n',
    complexity: 'standard',
    errorHandling: 'basic',
    includeWebhooks: false,
    includeAuditLogs: false,
    description: ''
  });
  const [logs, setLogs] = useState<string[]>([]);
  const [generatedJson, setGeneratedJson] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  // Constants
  const platforms = [
    { id: 'n8n', name: 'n8n Enterprise', icon: Zap, color: 'text-red-400', border: 'border-red-400/50', desc: 'Self-hosted, highly customizable.' },
    { id: 'make', name: 'Make.com', icon: Bot, color: 'text-purple-400', border: 'border-purple-400/50', desc: 'Visual, drag-and-drop logic.' },
    { id: 'zapier', name: 'Zapier', icon: Activity, color: 'text-orange-400', border: 'border-orange-400/50', desc: 'User-friendly, vast integrations.' },
    { id: 'power-automate', name: 'Power Automate', icon: Layers, color: 'text-blue-400', border: 'border-blue-400/50', desc: 'Microsoft ecosystem native.' },
  ];

  // Simulation Logic
  const handleGenerate = () => {
    if (!config.description) return;
    setStep('architecting');
    setLogs([]);

    const sequence = [
      "Initializing AI Architect Core v2.4...",
      `Analyzing intent for platform: ${config.platform.toUpperCase()}...`,
      "Identifying trigger events and data schemas...",
      "Constructing Directed Acyclic Graph (DAG)...",
      config.includeWebhooks ? "Configuring secure webhook endpoints (HMAC)..." : "Skipping webhook configuration...",
      config.complexity === 'enterprise' ? "Injecting enterprise middleware patterns..." : "Applying standard logic patterns...",
      config.errorHandling !== 'none' ? `Implementing '${config.errorHandling}' strategy...` : "Error handling skipped...",
      config.includeAuditLogs ? "Attaching immutable audit log nodes..." : "Audit logging disabled...",
      "Validating JSON structure against schema...",
      "Optimizing for execution speed...",
      "Finalizing blueprint..."
    ];

    let delay = 0;
    sequence.forEach((log, index) => {
      delay += Math.random() * 600 + 400; // Random delay between 400ms and 1000ms
      setTimeout(() => {
        setLogs(prev => [...prev, `> ${log}`]);
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        if (index === sequence.length - 1) {
          setTimeout(() => {
            const mock = generateMockWorkflow(config);
            setGeneratedJson(JSON.stringify(mock, null, 2));
            setStep('result');
          }, 800);
        }
      }, delay);
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
  };

  const downloadJson = () => {
    const blob = new Blob([generatedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `automalix-${config.platform}-${config.complexity}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Senior Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-primary/10 border border-tech-primary/20 text-tech-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Cpu size={14} /> Enterprise Architect Agent
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Workflow Generator <span className="text-gray-600">v2.0</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Transform natural language requirements into production-ready JSON blueprints. 
              Supports complex branching, error handling strategies, and compliance logging.
            </p>
          </div>
          <div className="hidden md:flex gap-4 mt-6 md:mt-0">
            <div className="text-right">
              <div className="text-2xl font-bold text-white">14,203</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Workflows Generated</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400">99.9%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Valid Syntax</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Config Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {step === 'config' && (
                <motion.div
                  key="config"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-6"
                >
                  {/* Platform Grid */}
                  <section>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                      <Settings size={16} /> Target Platform
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {platforms.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setConfig({ ...config, platform: p.id as Platform })}
                          className={cn(
                            "relative p-5 rounded-xl border transition-all duration-200 text-left group hover:bg-white/5",
                            config.platform === p.id 
                              ? `bg-white/5 ${p.border} shadow-lg shadow-${p.color.split('-')[1]}-500/10` 
                              : "bg-transparent border-white/10"
                          )}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className={cn("p-2 rounded-lg bg-white/5", p.color)}>
                              <p.icon size={24} />
                            </div>
                            {config.platform === p.id && <Check size={18} className="text-green-400" />}
                          </div>
                          <div className="font-bold text-white text-lg">{p.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{p.desc}</div>
                        </button>
                      ))}
                    </div>
                  </section>

                  {/* Advanced Settings */}
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Complexity & Error Handling */}
                    <GlassCard className="p-6 border-white/5">
                      <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Layers size={16} className="text-tech-accent" /> Architecture
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-400 mb-2">Complexity Level</label>
                          <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                            {(['mvp', 'standard', 'enterprise'] as Complexity[]).map((c) => (
                              <button
                                key={c}
                                onClick={() => setConfig({ ...config, complexity: c })}
                                className={cn(
                                  "flex-1 py-1.5 text-xs font-medium rounded-md transition-all capitalize",
                                  config.complexity === c ? "bg-tech-primary text-white shadow" : "text-gray-500 hover:text-gray-300"
                                )}
                              >
                                {c}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-gray-400 mb-2">Error Handling Strategy</label>
                          <select 
                            value={config.errorHandling}
                            onChange={(e) => setConfig({ ...config, errorHandling: e.target.value as ErrorHandling })}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-tech-primary outline-none"
                          >
                            <option value="none">None (Fail Fast)</option>
                            <option value="basic">Basic (Continue on Error)</option>
                            <option value="auto-retry">Auto-Retry (Exp. Backoff)</option>
                            <option value="dead-letter-queue">Dead Letter Queue (Enterprise)</option>
                          </select>
                        </div>
                      </div>
                    </GlassCard>

                    {/* Governance */}
                    <GlassCard className="p-6 border-white/5">
                      <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                        <Shield size={16} className="text-green-400" /> Governance & Security
                      </h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-blue-500/20 rounded text-blue-400"><Globe size={14} /></div>
                            <div>
                              <div className="text-sm font-medium text-white">Webhook Security</div>
                              <div className="text-[10px] text-gray-500">HMAC verification headers</div>
                            </div>
                          </div>
                          <input 
                            type="checkbox" 
                            checked={config.includeWebhooks}
                            onChange={(e) => setConfig({ ...config, includeWebhooks: e.target.checked })}
                            className="accent-tech-primary"
                          />
                        </label>

                        <label className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-yellow-500/20 rounded text-yellow-400"><Database size={14} /></div>
                            <div>
                              <div className="text-sm font-medium text-white">Audit Logging</div>
                              <div className="text-[10px] text-gray-500">Record all executions to DB</div>
                            </div>
                          </div>
                          <input 
                            type="checkbox" 
                            checked={config.includeAuditLogs}
                            onChange={(e) => setConfig({ ...config, includeAuditLogs: e.target.checked })}
                            className="accent-tech-primary"
                          />
                        </label>
                      </div>
                    </GlassCard>
                  </section>

                  {/* Prompt Input */}
                  <section>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                      <Terminal size={16} /> Business Logic Prompt
                    </label>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
                      <textarea
                        value={config.description}
                        onChange={(e) => setConfig({ ...config, description: e.target.value })}
                        placeholder="Describe your process in detail. Example: 'Watch for new Stripe payments. If amount > $1000, send a Slack alert to #sales-vip and add to Salesforce. If < $1000, just add to Google Sheets. Handle API rate limits automatically.'"
                        className="relative w-full h-48 bg-tech-darker border border-white/10 rounded-xl p-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all resize-none font-mono text-sm leading-relaxed"
                      />
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <span className="text-[10px] uppercase font-bold text-gray-600 bg-black/40 px-2 py-1 rounded border border-white/5">Markdown Supported</span>
                      </div>
                    </div>
                  </section>

                  <Button 
                    onClick={handleGenerate} 
                    disabled={!config.description}
                    variant="glow" 
                    size="lg" 
                    className="w-full h-16 text-lg font-bold shadow-2xl shadow-tech-primary/20"
                  >
                    <Wand2 className="mr-2" /> Generate Architecture
                  </Button>
                </motion.div>
              )}

              {step === 'architecting' && (
                <motion.div
                  key="architecting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[600px] bg-black rounded-xl border border-white/10 p-4 font-mono text-sm overflow-hidden flex flex-col shadow-2xl"
                >
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-xs text-gray-500">automalix-architect — -zsh — 80x24</div>
                  </div>
                  <div 
                    ref={terminalRef}
                    className="flex-1 overflow-y-auto space-y-2 text-green-400/90 scrollbar-thin scrollbar-thumb-white/20"
                  >
                    {logs.map((log, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {log}
                      </motion.div>
                    ))}
                    <motion.div 
                      animate={{ opacity: [0, 1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="w-2 h-4 bg-green-400 inline-block align-middle ml-1"
                    />
                  </div>
                </motion.div>
              )}

              {step === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-full text-green-400">
                        <Check size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Blueprint Generated Successfully</h3>
                        <p className="text-xs text-green-300/70">
                          {config.platform} • {config.complexity} • {config.errorHandling}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setStep('config')}>New Workflow</Button>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-2xl opacity-20 blur-lg"></div>
                    <GlassCard className="p-0 overflow-hidden border-tech-primary/30 relative">
                      <div className="bg-[#0d1117] border-b border-white/10 p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-400 px-2">
                          <FileJson size={14} />
                          <span className="font-mono">workflow.json</span>
                          <span className="ml-2 px-1.5 py-0.5 rounded bg-white/10 text-[10px]">{generatedJson.length} bytes</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" onClick={copyToClipboard} className="h-8 text-xs">
                            <Copy size={12} className="mr-1.5" /> Copy
                          </Button>
                          <Button size="sm" variant="primary" onClick={downloadJson} className="h-8 text-xs">
                            <Download size={12} className="mr-1.5" /> Download
                          </Button>
                        </div>
                      </div>
                      <pre className="bg-[#0d1117] text-gray-300 p-6 overflow-x-auto text-xs font-mono leading-relaxed h-[500px] scrollbar-thin scrollbar-thumb-white/10">
                        {generatedJson}
                      </pre>
                    </GlassCard>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar - Pro Tips & Stats */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard className="p-6 border-tech-accent/20 bg-gradient-to-br from-tech-darker to-tech-surface">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Workflow size={18} className="text-tech-accent" /> Why Use This?
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Standardized Architecture", desc: "Ensures all team workflows follow the same error handling patterns." },
                  { title: "Security First", desc: "Automatically injects HMAC verification and secret rotation logic." },
                  { title: "Audit Ready", desc: "Pre-configured logging for GDPR/SOC2 compliance." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-tech-accent mt-2 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-gray-200">{item.title}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6 border-white/5">
              <h3 className="font-bold text-white mb-4">Popular Templates</h3>
              <div className="space-y-3">
                {[
                  "Stripe Failed Payment Recovery",
                  "OpenAI Lead Scoring Pipeline",
                  "Notion <> Jira 2-Way Sync",
                  "Social Media Content Repurposer"
                ].map((t, i) => (
                  <button 
                    key={i}
                    onClick={() => setConfig({ ...config, description: t })}
                    className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 transition-colors flex items-center justify-between group"
                  >
                    {t}
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </GlassCard>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg h-fit text-blue-400">
                  <Share2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Need Custom Integration?</h4>
                  <p className="text-xs text-gray-400 mt-1 mb-3">
                    Our expert team can build bespoke connectors for your legacy systems.
                  </p>
                  <Button size="sm" variant="outline" className="w-full text-xs border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                    Contact Enterprise Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- Mock Generators ---

function generateMockWorkflow(config: GeneratorConfig) {
  const timestamp = new Date().toISOString();
  
  // Base Metadata
  const meta = {
    generator: "Automalix Enterprise Architect v2.4",
    timestamp,
    compliance: config.includeAuditLogs ? ["GDPR", "SOC2_LOGGING"] : [],
    security: config.includeWebhooks ? ["HMAC_SHA256"] : [],
    complexity: config.complexity
  };

  if (config.platform === 'n8n') {
    const nodes = [
      {
        parameters: { path: "webhook", options: {} },
        name: "Webhook Trigger",
        type: "n8n-nodes-base.webhook",
        typeVersion: 1,
        position: [100, 300],
        webhookId: "uuid-placeholder"
      }
    ];

    if (config.includeWebhooks) {
      nodes.push({
        parameters: {
          functionCode: "// HMAC Verification Logic\nconst crypto = require('crypto');\nconst signature = $input.headers['x-signature'];\n// Verify..."
        },
        name: "Security Guard",
        type: "n8n-nodes-base.function",
        typeVersion: 1,
        position: [300, 300]
      });
    }

    if (config.complexity === 'enterprise') {
      nodes.push({
        parameters: {
          conditions: { boolean: [{ value1: "={{$json.error}}", value2: true }] }
        },
        name: "Error Router",
        type: "n8n-nodes-base.if",
        typeVersion: 1,
        position: [500, 300]
      });
    }

    // Add main logic placeholder
    nodes.push({
      parameters: { content: `## Business Logic\n${config.description}` },
      name: "Logic Placeholder",
      type: "n8n-nodes-base.stickyNote",
      typeVersion: 1,
      position: [500, 100]
    });

    return { name: "Enterprise Workflow", nodes, connections: {}, meta };
  }

  // Generic fallback for other platforms
  return {
    platform: config.platform,
    version: "1.0.0",
    description: config.description,
    steps: [
      { type: "trigger", name: "Incoming Event", secure: config.includeWebhooks },
      { type: "action", name: "Data Transformation" },
      ...(config.errorHandling !== 'none' ? [{ type: "logic", name: "Error Handler", strategy: config.errorHandling }] : []),
      ...(config.includeAuditLogs ? [{ type: "action", name: "Audit Log to DB" }] : []),
      { type: "action", name: "Execute Core Logic" }
    ],
    meta
  };
}
