import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { Button } from '../components/ui/Button';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  // Dynamic SEO Injection
  useEffect(() => {
    if (post) {
      document.title = post.title + " | Automalix Blog";
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', post.description);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', post.keywords);

      // Canonical
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', `https://automalix.com/blog/${post.slug}`);
    }
    
    // Cleanup function to reset title when leaving
    return () => {
      document.title = "Automalix | Enterprise Automation Marketplace";
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-tech-darker flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">404 - Article Not Found</h1>
        <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-24 pb-20">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-tech-primary z-50 w-full origin-left scale-x-0 animate-scroll-progress" />

      <article className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-tech-accent font-medium mb-6 uppercase tracking-wider">
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">{post.description}</p>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        </div>

        {/* Content Body */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-tech-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-tech-accent prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer / Share */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <div className="text-gray-400 text-sm">
            © 2026 AutomaLix — build, sell, scale.
          </div>
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </button>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
