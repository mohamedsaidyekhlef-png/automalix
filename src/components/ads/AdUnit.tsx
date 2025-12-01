import { motion } from 'framer-motion';
import { ExternalLink, Megaphone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface AdUnitProps {
  variant?: 'card' | 'banner' | 'sidebar';
  className?: string;
}

// Mock Ad Data (In a real app, this would come from an Ad Server)
const adContent = {
  card: {
    title: "Deploy n8n in 1-Click",
    desc: "Stop wrestling with Docker. Get a pre-configured n8n instance on DigitalOcean with $200 free credit.",
    cta: "Claim Credit",
    link: "#",
    image: "https://images.unsplash.com/photo-1667372393119-c81c0e8303f5?auto=format&fit=crop&q=80&w=600",
    sponsor: "DigitalOcean"
  },
  banner: {
    title: "Scale your Agency with SmartLead",
    desc: "The #1 Cold Email Infrastructure. Unlimited mailboxes, AI warmups, and enterprise deliverability.",
    cta: "Start Free Trial",
    link: "#",
    sponsor: "SmartLead.ai"
  },
  sidebar: {
    title: "Need Custom Workflows?",
    desc: "Hire the top 1% of automation engineers directly from our vetted talent pool.",
    cta: "Hire Expert",
    link: "/hire-expert",
    sponsor: "Automalix Talent"
  }
};

export function AdUnit({ variant = 'card', className }: AdUnitProps) {
  const content = adContent[variant];

  if (variant === 'banner') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "relative overflow-hidden rounded-xl border border-tech-primary/30 bg-gradient-to-r from-tech-darker to-tech-surface p-1",
          className
        )}
      >
        <div className="absolute top-0 right-0 bg-tech-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg z-20">
          SPONSORED
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-black/20 rounded-lg backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Megaphone className="text-tech-accent" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{content.title}</h4>
              <p className="text-sm text-gray-400">{content.desc}</p>
            </div>
          </div>
          <Button size="sm" variant="outline" className="shrink-0 border-tech-primary/50 text-tech-primary hover:bg-tech-primary/10">
            {content.cta} <ExternalLink size={14} className="ml-2" />
          </Button>
        </div>
      </motion.div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className={cn("rounded-xl border border-white/10 bg-white/5 p-6 text-center relative overflow-hidden group", className)}>
        <div className="absolute top-2 right-2 text-[10px] text-gray-600 font-bold uppercase tracking-wider">Ad</div>
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Megaphone className="text-white" size={24} />
        </div>
        <h4 className="font-bold text-white mb-2">{content.title}</h4>
        <p className="text-sm text-gray-400 mb-6">{content.desc}</p>
        <Link to={content.link}>
            <Button size="sm" variant="glow" className="w-full">
            {content.cta}
            </Button>
        </Link>
        <p className="text-[10px] text-gray-600 mt-4">Sponsored by {content.sponsor}</p>
      </div>
    );
  }

  // Default Card Variant (for Grid)
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-tech-accent/20 bg-tech-surface/50 h-full flex flex-col group",
        className
      )}
    >
      <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md text-[10px] font-bold text-gray-400 px-2 py-1 rounded border border-white/10">
        SPONSORED
      </div>
      
      <div className="relative h-48 overflow-hidden bg-gray-900">
        <img 
          src={content.image} 
          alt="Ad" 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-surface to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-bold text-tech-accent bg-tech-accent/10 px-2 py-1 rounded border border-tech-accent/20">
            {content.sponsor}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2">{content.title}</h3>
        <p className="text-sm text-gray-400 mb-6 flex-1">{content.desc}</p>
        <Button variant="outline" className="w-full border-tech-accent/30 text-tech-accent hover:bg-tech-accent/10">
          {content.cta} <ExternalLink size={14} className="ml-1" />
        </Button>
      </div>
    </motion.div>
  );
}
