import { ApiKeyChecker } from '../../components/tools/ApiKeyChecker';

export function ApiCheckerPage() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-primary/10 border border-tech-primary/20 text-tech-primary text-xs font-bold uppercase tracking-wider mb-4">
            Part of the Launch-Ready Guarantee™
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">API Key Pre-check System</h1>
          <p className="text-xl text-gray-400">
            Don't let a typo break your workflow. Verify your API keys instantly before configuring your Automation Pack.
          </p>
        </div>
        
        <ApiKeyChecker />
      </div>
    </div>
  );
}
