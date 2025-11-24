import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, Scale, CheckCircle2, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { GuaranteeSection } from '../../components/sections/GuaranteeSection';

export function AuditReadyPage() {
  const auditProducts = products.filter(p => p.category === 'Audit-Ready');

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 pb-20">
      {/* Hero Header */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} /> Enterprise Risk Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Audit-Ready Automation Packs™
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            The only automation systems built for <span className="text-white font-bold">Finance, Legal, and HR</span> compliance. 
            Includes immutable audit logs, version control, and data residency guarantees.
          </p>
        </div>
      </div>

      {/* The "Why" Section (Gold Mine Analysis) */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: Scale, 
              title: "Regulatory Shield", 
              desc: "Don't just automate tasks. Automate compliance. Protect your business from GDPR, CCPA, and SOX fines.",
              color: "text-purple-400"
            },
            { 
              icon: Lock, 
              title: "Zero-Trust Security", 
              desc: "Every workflow includes a 'Data-Seeding' kit to test safely without exposing real client data.",
              color: "text-red-400"
            },
            { 
              icon: FileText, 
              title: "Audit Trails", 
              desc: "Native integration with Notion/Airtable to log every single AI decision and data change for legal review.",
              color: "text-blue-400"
            }
          ].map((item, i) => (
            <GlassCard key={i} className="p-8 border-white/5 bg-white/5">
              <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <CheckCircle2 className="text-green-500" /> Available Compliance Systems
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auditProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <GlassCard hoverEffect className="h-full flex flex-col group">
                <div className="relative h-56 overflow-hidden border-b border-white/10">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg">
                      AUDIT READY
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-3">
                    {product.niche.map(n => (
                      <span key={n} className="text-[10px] uppercase font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {n}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-tech-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Button size="sm" variant="outline">Inspect Pack</Button>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Guarantee Footer */}
      <div className="container mx-auto px-4 md:px-6">
        <GuaranteeSection />
      </div>
    </div>
  );
}
