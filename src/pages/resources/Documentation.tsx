import { Book, Code, Terminal, Search } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function Documentation() {
  const docs = [
    { 
        id: 'getting-started',
        icon: Book, 
        title: "Getting Started", 
        desc: "Installation guides, environment setup, and first deployment." 
    },
    { 
        id: 'api-reference',
        icon: Code, 
        title: "API Reference", 
        desc: "Detailed endpoints for our AI Agents and webhook structures." 
    },
    { 
        id: 'cli-tools',
        icon: Terminal, 
        title: "CLI Tools", 
        desc: "How to use the Automalix CLI for bulk deployments." 
    }
  ];

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-gray-400 mb-8">
            Everything you need to configure, deploy, and scale your Automalix workflows.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
                type="text" 
                placeholder="Search docs (e.g., 'Stripe Integration', 'Error Handling')" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {docs.map((item, i) => (
                <GlassCard key={i} hoverEffect className="p-8 flex flex-col h-full">
                    <item.icon className="text-tech-primary mb-4" size={32} />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-6 flex-1">{item.desc}</p>
                    <Link to={`/resources/docs/${item.id}`}>
                        <Button variant="outline" size="sm" className="w-full">View Docs</Button>
                    </Link>
                </GlassCard>
            ))}
        </div>
      </div>
    </div>
  );
}
