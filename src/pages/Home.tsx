import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play, Zap, Shield, TrendingUp, Cpu } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';
import { AuditReadyHighlight } from '../components/sections/AuditReadyHighlight';
import { SeoKeywords } from '../components/sections/SeoKeywords';

export function Home() {
  return (
    <div className="min-h-screen bg-tech-darker text-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-tech-primary/20 rounded-full blur-[80px] md:blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-tech-secondary/20 rounded-full blur-[80px] md:blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-tech-accent text-xs md:text-sm font-medium mb-6 md:mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent"></span>
              </span>
              New: Enterprise Automation Platform™
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              The #1 Marketplace for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary via-tech-secondary to-tech-accent">
                Business Automation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto px-4"
            >
              Streamline your <strong>business process automation</strong> with expert-vetted <strong>workflow automation tools</strong>. 
              Deploy enterprise-grade systems, find <strong>automation specialists</strong>, and scale faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
            >
              <Link to="/products" className="w-full sm:w-auto">
                <Button size="lg" variant="glow" icon={<ArrowRight size={20} />} className="w-full sm:w-auto">
                  Find Automation Tools
                </Button>
              </Link>
              <Link to="/vault" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" icon={<Play size={20} />} className="w-full sm:w-auto">
                  View Platform Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Teaser */}
      <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-20">
        <GuaranteeSection />
      </div>

      {/* Stats / Social Proof */}
      <section className="py-8 md:py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Specialists', value: '10,000+' },
              { label: 'Workflows Ran', value: '5M+' },
              { label: 'Hours Saved', value: '500k+' },
              { label: 'Community', value: '25k+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Audit-Ready Highlight Section */}
      <AuditReadyHighlight />

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Explore Solutions</h2>
              <p className="text-sm md:text-base text-gray-400">Everything you need to build a modern automation infrastructure.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-tech-accent hover:text-white transition-colors">
              View all <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Audit-Ready Packs™', desc: 'GDPR, SOX, & Risk Management', icon: Shield, color: 'text-red-400', link: '/products' },
              { title: 'Automation Software', desc: 'n8n & Make workflows for every niche', icon: Zap, color: 'text-yellow-400', link: '/products' },
              { title: 'AI Agents', desc: 'Deploy-ready AI agents with code', icon: Cpu, color: 'text-tech-accent', link: '/products' },
              { title: 'Business-in-a-Box', desc: 'Complete agency systems & assets', icon: TrendingUp, color: 'text-green-400', link: '/products' },
              { title: 'White Label', desc: 'Resell our systems as your own', icon: Shield, color: 'text-purple-400', link: '/white-label' },
            ].map((cat, i) => (
              <Link to={cat.link} key={i}>
                <GlassCard hoverEffect className="p-6 md:p-8 group cursor-pointer h-full">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon className={cat.color} size={20} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">{cat.desc}</p>
                  <span className="flex items-center text-sm font-medium text-white group-hover:text-tech-accent transition-colors">
                    Browse Solutions <ArrowRight size={16} className="ml-2" />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products">
                <Button variant="outline" className="w-full">View All Categories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-tech-surface/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Trending Automation Systems</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Top-rated automation tools and kits used by industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map((product, i) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <GlassCard hoverEffect delay={i * 0.1} className="h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden border-b border-white/10">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        <span>★</span> <span>{product.rating}</span> <span className="text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-1">{product.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-1">{product.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                      <span className="text-xl md:text-2xl font-bold text-white">${product.price}</span>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 to-tech-secondary/20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <GlassCard className="max-w-5xl mx-auto p-8 md:p-20 text-center border-tech-primary/30">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Join the Automation Vault™</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
              Get instant access to $5,000+ worth of automation assets, plus new workflows and AI agents dropped every month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/vault" className="w-full sm:w-auto">
                <Button size="lg" variant="glow" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <CheckCircle2 size={16} className="text-green-500" /> Cancel anytime
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SEO Keywords Footer */}
      <SeoKeywords />
    </div>
  );
}
