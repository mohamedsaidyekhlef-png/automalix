import { GitCommit } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export function Changelog() {
  const changes = [
    {
        version: "v2.4.0",
        date: "June 10, 2025",
        title: "Audit-Ready Packs Release",
        items: [
            "Added GDPR Deletion Request Pack",
            "Added SOX Finance Reporting Pack",
            "Implemented immutable audit logging for all Enterprise workflows",
            "New 'Compliance' category in Marketplace"
        ]
    },
    {
        version: "v2.3.1",
        date: "May 28, 2025",
        title: "Performance Improvements",
        items: [
            "Reduced n8n template load time by 40%",
            "Fixed Stripe webhook timeout issue in E-commerce pack",
            "Updated OpenAI connector to support GPT-5-turbo"
        ]
    },
    {
        version: "v2.3.0",
        date: "May 15, 2025",
        title: "AI Agent Kits",
        items: [
            "Launched Python-based AI Agent Kits",
            "Added vector database support (Pinecone) to templates",
            "New 'Generator' tool for custom workflow architecture"
        ]
    }
  ];

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Changelog</h1>
        
        <div className="space-y-12">
            {changes.map((change, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-tech-primary" />
                    <div className="mb-2 flex items-center gap-3">
                        <span className="font-mono text-tech-accent font-bold">{change.version}</span>
                        <span className="text-gray-500 text-sm">{change.date}</span>
                    </div>
                    <GlassCard className="p-6">
                        <h3 className="text-xl font-bold mb-4">{change.title}</h3>
                        <ul className="space-y-2">
                            {change.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-300">
                                    <GitCommit size={16} className="mt-1 text-gray-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
