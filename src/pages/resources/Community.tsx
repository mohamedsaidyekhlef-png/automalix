import { MessageCircle, Twitter, Github, Users } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';
import { Button } from '../../components/ui/Button';

export function Community() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Community</h1>
          <p className="text-xl text-gray-400">
            Connect with 25,000+ automation engineers, agency owners, and developers building the future of work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <GlassCard className="p-8 flex items-center gap-6 group hover:bg-indigo-900/10 transition-colors cursor-pointer" onClick={() => window.open('https://discord.com', '_blank')}>
                <div className="w-16 h-16 rounded-2xl bg-[#5865F2] flex items-center justify-center text-white shrink-0">
                    <MessageCircle size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">Discord Server</h3>
                    <p className="text-gray-400 text-sm mb-4">Live chat, support, and show-and-tell.</p>
                    <Button size="sm" variant="secondary">Join 12k+ Members</Button>
                </div>
            </GlassCard>

            <GlassCard className="p-8 flex items-center gap-6 group hover:bg-blue-900/10 transition-colors cursor-pointer" onClick={() => window.open('https://twitter.com', '_blank')}>
                <div className="w-16 h-16 rounded-2xl bg-[#1DA1F2] flex items-center justify-center text-white shrink-0">
                    <Twitter size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">Twitter / X</h3>
                    <p className="text-gray-400 text-sm mb-4">Latest updates, tips, and threads.</p>
                    <Button size="sm" variant="secondary">Follow @automalix</Button>
                </div>
            </GlassCard>

            <GlassCard className="p-8 flex items-center gap-6 group hover:bg-gray-800/50 transition-colors cursor-pointer" onClick={() => window.open('https://github.com', '_blank')}>
                <div className="w-16 h-16 rounded-2xl bg-[#333] flex items-center justify-center text-white shrink-0">
                    <Github size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">GitHub</h3>
                    <p className="text-gray-400 text-sm mb-4">Open source tools and issue tracking.</p>
                    <Button size="sm" variant="secondary">Star Repo</Button>
                </div>
            </GlassCard>

            <GlassCard className="p-8 flex items-center gap-6 group hover:bg-purple-900/10 transition-colors cursor-pointer" onClick={() => window.open('https://reddit.com', '_blank')}>
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-white shrink-0">
                    <Users size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-1">Community Forum</h3>
                    <p className="text-gray-400 text-sm mb-4">Long-form discussions and tutorials.</p>
                    <Button size="sm" variant="secondary">Browse Topics</Button>
                </div>
            </GlassCard>
        </div>
      </div>
    </div>
  );
}
