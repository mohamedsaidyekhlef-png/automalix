import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { blogPosts } from '../data/blogPosts';

export function Blog() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-primary/10 border border-tech-primary/20 text-tech-primary text-xs font-bold uppercase tracking-wider mb-4">
            <TrendingUp size={14} /> Industry Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Automalix Blog</h1>
          <p className="text-xl text-gray-400">
            Expert guides on AI automation, GEO optimization, and enterprise workflow architecture.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <GlassCard 
                hoverEffect 
                delay={index * 0.1}
                className="h-full flex flex-col group overflow-hidden border-white/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs font-medium text-white/90">
                    <span className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded backdrop-blur-md">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded backdrop-blur-md">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-tech-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-tech-accent font-bold text-sm group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
