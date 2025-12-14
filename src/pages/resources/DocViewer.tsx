import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Book, Code, Terminal, ChevronRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';

// Mock Data for Documentation
const docContent: Record<string, {
  title: string;
  icon: any;
  sections: { title: string; content: string; code?: string }[];
}> = {
  'getting-started': {
    title: 'Getting Started',
    icon: Book,
    sections: [
      {
        title: 'Prerequisites',
        content: 'Before you begin, ensure you have the following installed in your environment. Automalix workflows are designed to be environment-agnostic but work best with standard Node.js runtimes.',
        code: 'node -v  # v18.0.0 or higher\nnpm -v   # v9.0.0 or higher\ngit --version'
      },
      {
        title: 'Installation',
        content: 'Install the Automalix CLI globally to manage your automation packs and deployments.',
        code: 'npm install -g @automalix/cli\nautomalix login'
      },
      {
        title: 'First Deployment',
        content: 'Once authenticated, you can pull your purchased workflows directly into your local directory.',
        code: 'automalix pull <pack-id>\ncd my-automation-pack\nautomalix deploy --env=production'
      }
    ]
  },
  'api-reference': {
    title: 'API Reference',
    icon: Code,
    sections: [
      {
        title: 'Authentication',
        content: 'All API requests must include your API key in the `Authorization` header. You can generate keys in your Vault dashboard.',
        code: 'Authorization: Bearer sk_live_51Mz...'
      },
      {
        title: 'Rate Limits',
        content: 'Standard accounts are limited to 100 requests per minute. Enterprise accounts have custom rate limits based on the SLA.',
        code: 'X-RateLimit-Limit: 100\nX-RateLimit-Remaining: 99\nX-RateLimit-Reset: 1678900000'
      },
      {
        title: 'Endpoints: Workflows',
        content: 'Trigger a workflow programmatically via POST request.',
        code: 'POST /v1/workflows/{workflow_id}/execute\nContent-Type: application/json\n\n{\n  "input": {\n    "email": "customer@example.com"\n  }\n}'
      }
    ]
  },
  'cli-tools': {
    title: 'CLI Tools',
    icon: Terminal,
    sections: [
      {
        title: 'Overview',
        content: 'The Automalix CLI is the fastest way to manage your automation infrastructure. It supports bulk operations, secret management, and log streaming.',
        code: 'automalix --help'
      },
      {
        title: 'Secret Management',
        content: 'Securely inject environment variables into your workflows without exposing them in code.',
        code: 'automalix secrets set STRIPE_KEY=sk_test_...\nautomalix secrets list'
      },
      {
        title: 'Log Streaming',
        content: 'Watch your workflow execution logs in real-time for debugging.',
        code: 'automalix logs --tail --follow'
      }
    ]
  }
};

export function DocViewer() {
  const { docId } = useParams();
  const doc = docContent[docId as string];
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!doc) {
    return (
      <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Documentation Not Found</h1>
        <Link to="/resources/docs">
          <Button variant="outline">Back to Overview</Button>
        </Link>
      </div>
    );
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-64 shrink-0">
            <Link to="/resources/docs" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors text-sm">
              <ArrowLeft size={16} className="mr-2" /> Back to Docs
            </Link>
            
            <div className="sticky top-28 space-y-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">On this page</h4>
              {doc.sections.map((section, i) => (
                <a 
                  key={i} 
                  href={`#section-${i}`} 
                  className="block text-sm text-gray-400 hover:text-tech-primary transition-colors py-1 border-l-2 border-transparent hover:border-tech-primary pl-4"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-tech-primary/20 flex items-center justify-center text-tech-primary">
                <doc.icon size={24} />
              </div>
              <h1 className="text-4xl font-bold">{doc.title}</h1>
            </div>

            <div className="space-y-12">
              {doc.sections.map((section, i) => (
                <GlassCard key={i} id={`section-${i}`} className="p-8 border-white/5">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-tech-accent">#</span> {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {section.content}
                  </p>
                  
                  {section.code && (
                    <div className="relative group">
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => copyToClipboard(section.code!, i)}
                          className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedIndex === i ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                      <pre className="bg-black/40 border border-white/10 rounded-lg p-4 overflow-x-auto text-sm font-mono text-gray-300">
                        {section.code}
                      </pre>
                    </div>
                  )}
                </GlassCard>
              ))}
            </div>

            {/* Next Steps */}
            <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
              <p className="text-gray-400 text-sm">Was this page helpful?</p>
              <div className="flex gap-4">
                <Link to="/resources/community">
                  <Button variant="ghost" size="sm">Ask Community</Button>
                </Link>
                <Link to="/support">
                  <Button variant="outline" size="sm">Contact Support</Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
