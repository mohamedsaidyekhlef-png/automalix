import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, Zap, DollarSign, Briefcase, Building } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';
import { ServiceDepositModal } from '../../components/checkout/ServiceDepositModal';

export function HireExpert() {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    projectType: 'Custom n8n Workflow',
    description: '',
    budget: 1000
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-primary/10 border border-tech-primary/20 text-tech-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Users size={14} /> Automalix Talent Pool
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hire the Top 1% of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary to-tech-accent">
              Automation Engineers
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Stop gambling on Upwork. Hire vetted experts who build enterprise-grade systems. 
            Protected by our <strong>Escrow Guarantee</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-400" /> Pre-Vetted Talent</span>
            <span className="flex items-center gap-2"><Shield size={16} className="text-green-400" /> Escrow Protection</span>
            <span className="flex items-center gap-2"><Zap size={16} className="text-green-400" /> NDA Included</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left: Form */}
          <GlassCard className="p-8 border-tech-primary/30 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-primary to-tech-accent"></div>
             <h2 className="text-2xl font-bold mb-6">Start Your Project</h2>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={e => setFormData({...formData, businessName: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all appearance-none"
                    >
                      <option>Custom n8n Workflow</option>
                      <option>AI Agent Development (Python)</option>
                      <option>Full Agency System Setup</option>
                      <option>Audit & Compliance Review</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                    placeholder="Describe what you need automated..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Budget (USD)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="number"
                      required
                      min="500"
                      step="100"
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: parseInt(e.target.value)})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Minimum engagement starts at $500.</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Upfront Deposit (50%)</span>
                    <span className="text-white font-bold">${(formData.budget * 0.5).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Due Upon Completion (50%)</span>
                    <span className="text-white font-bold">${(formData.budget * 0.5).toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" variant="glow" className="w-full py-4 text-lg">
                  Hire Expert & Secure Deposit
                </Button>
                
                <p className="text-center text-xs text-gray-500">
                  Funds are held in Escrow. You can request a full refund before work begins.
                </p>
             </form>
          </GlassCard>

          {/* Right: Trust & Process */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">How It Works</h3>
              {[
                { step: "1", title: "Submit & Deposit", desc: "Fill out the project details and pay the 50% refundable deposit to secure your expert." },
                { step: "2", title: "Expert Match", desc: "We assign a senior engineer within 24 hours. They review your scope and schedule a kickoff." },
                { step: "3", title: "Build & Review", desc: "You get weekly updates. Once the system is live and tested, you approve the final 50% payment." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-tech-primary flex items-center justify-center font-bold text-white shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <GlassCard className="p-6 bg-green-500/5 border-green-500/20">
              <div className="flex items-start gap-4">
                <Shield className="text-green-400 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-white text-lg">Escrow Protection Guarantee</h4>
                  <p className="text-gray-400 text-sm mt-2">
                    Your money is safe. We use a licensed escrow service to hold your funds. 
                    If the expert fails to deliver according to the agreed scope, you get 100% of your deposit back.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>

      <ServiceDepositModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectData={formData}
      />
    </div>
  );
}
