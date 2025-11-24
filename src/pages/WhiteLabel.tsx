import { Check, Download, Lock, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';

export function WhiteLabel() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 md:pt-32 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 text-center mb-16 md:mb-20">
        <span className="text-tech-accent font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">For Agencies & Consultants</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Own Automation Agency.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Instantly.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Purchase reseller rights to our enterprise-grade Automation Packs™. Rebrand them, set your own price, and keep 100% of the profit.
        </p>
        <Button size="lg" variant="glow" className="w-full md:w-auto">View White-Label Bundles</Button>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "100% White Label", desc: "We remove all Automalix branding. You get the raw source files (JSON, Python, Notion).", icon: Lock },
            { title: "Agency License", desc: "Legal rights to resell to unlimited clients. No royalties. No recurring fees.", icon: Check },
            { title: "Marketing Assets", desc: "Get our high-converting landing page copy, demo videos, and sales scripts.", icon: Zap }
          ].map((item, i) => (
            <GlassCard key={i} className="p-6 md:p-8">
              <item.icon className="text-tech-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Pricing Table */}
      <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <GlassCard className="max-w-4xl mx-auto p-6 md:p-10 border-tech-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-tech-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
            BEST VALUE
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">The Agency Partner Bundle</h2>
              <p className="text-gray-400 mb-6">Get everything we've ever built + future updates.</p>
              <ul className="space-y-3 mb-8">
                {['Access to ALL 50+ Automation Packs', 'Access to ALL AI Kits', 'Full White-Label Rights', 'Priority Slack Support', 'Private Strategy Call'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                    <Check size={16} className="text-green-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right w-full md:w-auto">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">$2,499</div>
              <div className="text-gray-500 text-sm mb-6">One-time payment. Lifetime access.</div>
              <Button size="lg" variant="glow" className="w-full">
                Buy Agency License
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Guarantee */}
      <div className="container mx-auto px-4 md:px-6">
        <GuaranteeSection />
      </div>
    </div>
  );
}
