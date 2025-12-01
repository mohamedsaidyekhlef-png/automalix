import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { NewsletterPopup } from '../components/marketing/NewsletterPopup';
import { AdUnit } from '../components/ads/AdUnit';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  // SEO & Schema Injection
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Automalix Blog`;
      
      // Update Meta Tags
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

      // Inject JSON-LD Structured Data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.coverImage,
        "author": {
          "@type": "Organization",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Automalix",
          "logo": {
            "@type": "ImageObject",
            "url": "https://automalix.com/logo.png"
          }
        },
        "datePublished": "2025-03-15",
        "description": post.excerpt
      });
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-tech-darker flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog"><Button variant="primary">Back to Blog</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 pb-20">
      {/* Progress Bar (Simple implementation) */}
      <div className="fixed top-0 left-0 h-1 bg-tech-primary z-[60] w-full origin-left scale-x-0 animate-[progress_1s_ease-out_forwards]" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Article Content */}
          <article className="lg:col-span-2">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Articles
            </Link>

            {/* Header */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-tech-primary font-bold uppercase tracking-wider mb-6">
                <span className="px-3 py-1 rounded-full bg-tech-primary/10 border border-tech-primary/20">{post.category}</span>
                <span className="flex items-center gap-1 text-gray-400 normal-case"><Clock size={14} /> {post.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-between border-y border-white/10 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold">
                    {post.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{post.author}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar size={12} /> {post.date}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-white/10 text-gray-400 hover:text-white">
                    <Twitter size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/10 text-gray-400 hover:text-white">
                    <Linkedin size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/10 text-gray-400 hover:text-white">
                    <Share2 size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-black/50">
              <img src={post.coverImage} alt={post.title} className="w-full h-auto" />
            </div>

            {/* Ad Banner (Inline) */}
            <div className="mb-12">
              <AdUnit variant="banner" />
            </div>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-tech-primary prose-strong:text-white prose-code:text-tech-accent prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Footer */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <GlassCard className="text-center p-10 bg-gradient-to-br from-tech-primary/20 to-tech-secondary/20 border-tech-primary/30">
                <h3 className="text-2xl font-bold mb-4">Ready to build your first workflow?</h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Don't start from scratch. Grab our "Freelancer Automation Pack" and see exactly how a 5-star workflow is structured.
                </p>
                <Link to="/products">
                  <Button size="lg" variant="glow">
                    Explore Marketplace
                  </Button>
                </Link>
              </GlassCard>
            </div>
          </article>

          {/* Sidebar (Ads & Related) */}
          <aside className="hidden lg:block lg:col-span-1 space-y-8">
            <div className="sticky top-28">
              {/* Author Bio */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8">
                <h4 className="font-bold text-white mb-4">About the Author</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Automalix Research Team specializes in enterprise automation architecture and AI governance.
                </p>
                <Button size="sm" variant="outline" className="w-full">Follow on Twitter</Button>
              </div>

              {/* Sidebar Ad */}
              <AdUnit variant="sidebar" />

              {/* Newsletter Box */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-b from-tech-primary/20 to-transparent border border-tech-primary/20">
                <h4 className="font-bold text-white mb-2">Join the Insider List</h4>
                <p className="text-xs text-gray-300 mb-4">Get weekly automation tips delivered to your inbox.</p>
                <input type="email" placeholder="Email address" className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm mb-2 text-white" />
                <Button size="sm" variant="glow" className="w-full">Subscribe</Button>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
