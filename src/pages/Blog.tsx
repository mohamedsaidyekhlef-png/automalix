import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

export function Blog() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Automalix Insights</h1>
          <p className="text-xl text-gray-400">
            Strategies, guides, and technical deep-dives on building an automated empire.
          </p>
        </div>

        {/* Featured Post (First one) */}
        {blogPosts.length > 0 && (
          <Link to={`/blog/${blogPosts[0].slug}`} className="block mb-16">
            <GlassCard hoverEffect className="p-0 overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={blogPosts[0].coverImage} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-tech-primary font-bold uppercase tracking-wider mb-4">
                    <span>{blogPosts[0].category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-tech-accent transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                        {blogPosts[0].author[0]}
                      </div>
                      <div className="text-sm">
                        <div className="text-white font-medium">{blogPosts[0].author}</div>
                        <div className="text-gray-500">{blogPosts[0].date}</div>
                      </div>
                    </div>
                    <span className="flex items-center text-tech-accent font-bold group-hover:translate-x-2 transition-transform">
                      Read Article <ArrowRight size={18} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        )}

        {/* Grid for other posts (if any) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <GlassCard hoverEffect className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-tech-primary font-bold uppercase mb-3">
                    <span>{post.category}</span>
                    <span className="text-gray-600">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-tech-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-sm font-bold text-white group-hover:text-tech-accent">Read More</span>
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
