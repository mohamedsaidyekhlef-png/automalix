import { motion } from 'framer-motion';
import { CheckCircle, Database, Key, RefreshCw, ArrowRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Link } from 'react-router-dom';

export function GuaranteeSection() {
  const features = [
    {
      icon: RefreshCw,
      title: "1-Click Environment Deploy",
      desc: "No more manual setup. Deploy the entire stack to your environment instantly.",
      color: "text-blue-400"
    },
    {
      icon: Key,
      title: "API Key Pre-check System",
      desc: "Our tool verifies your API keys before you even start, preventing 99% of errors.",
      color: "text-yellow-400",
      link: "/resources/api-checker",
      linkText: "Try Tool"
    },
    {
      icon: Database,
      title: "Seed Data Kit Included",
      desc: "Every pack comes with 50+ rows of mock data so you can test safely immediately.",
      color: "text-green-400"
    },
    {
      icon: CheckCircle,
      title: "60-Day 'Fix-My-Flow' Guarantee",
      desc: "If it breaks and we can't fix it within 24h, you get a full refund. Zero risk.",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <span className="text-tech-accent text-sm font-bold tracking-wider uppercase">The Automalix Promise</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">Launch-Ready Guarantee™</h2>
        <p className="text-gray-400 mt-2">We don't just sell templates. We sell working systems.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <GlassCard key={i} className="p-6 text-center hover:bg-white/10 transition-colors relative group" delay={i * 0.1}>
            <div className={`w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4 ${feature.color}`}>
              <feature.icon size={24} />
            </div>
            <h3 className="font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{feature.desc}</p>
            
            {feature.link && (
              <Link to={feature.link} className="inline-flex items-center text-xs font-bold text-tech-primary hover:text-white transition-colors">
                {feature.linkText} <ArrowRight size={12} className="ml-1" />
              </Link>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
