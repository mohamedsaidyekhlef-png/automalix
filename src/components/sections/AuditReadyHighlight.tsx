import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, Scale, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { Link } from 'react-router-dom';

export function AuditReadyHighlight() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[600px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} /> New Category Unlocked
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              From "Productivity Tool" to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                Enterprise Risk Partner
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Businesses don't just need speed—they need governance. Our <strong>Audit-Ready Automation Packs™</strong> solve the technical knowledge gap in GDPR, SOX, and AI Compliance.
            </p>

            <div className="space-y-6 mb-10 text-left">
              {[
                { title: "Zero Competition", desc: "Be the first to sell systems with built-in audit logging and version control.", icon: Lock },
                { title: "High-Ticket Pricing", desc: "Save clients from $50k fines. Sell packs for $500 - $5,000.", icon: Scale },
                { title: "AI Future Proofing", desc: "Pre-packaged governance for the coming AI regulation wave.", icon: FileText }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-tech-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/audit-ready">
              <Button size="lg" variant="glow" className="w-full md:w-auto border-red-500/30 shadow-red-500/20 text-white">
                View Audit-Ready Packs <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          {/* Right Visuals */}
          <div className="lg:w-1/2 relative w-full">
            <div className="grid gap-6">
              <GlassCard className="p-6 border-red-500/30 bg-gradient-to-br from-tech-surface to-red-900/10 transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <FileText className="text-red-400" size={24} />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-gray-400">v2.4.1 • AUDIT_LOG_ENABLED</span>
                </div>
                <h3 className="text-xl font-bold mb-2">GDPR Deletion Request Pack</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Auto-scans CRM, DB, and Email. Generates immutable PDF proof of deletion.
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl font-bold text-white">$299</span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">Health & Legal</span>
                </div>
              </GlassCard>

              <GlassCard className="p-6 border-purple-500/30 bg-gradient-to-br from-tech-surface to-purple-900/10 transform lg:-rotate-1 hover:rotate-0 transition-all duration-500 lg:ml-12">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Scale className="text-purple-400" size={24} />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-gray-400">SOX_COMPLIANT • S3_SYNC</span>
                </div>
                <h3 className="text-xl font-bold mb-2">SOX Finance Reporting</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Daily reconciliation with version-controlled snapshots to AWS S3.
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl font-bold text-white">$399</span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded">Finance</span>
                </div>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
