import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, User, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';
import { useAuth } from '../../context/AuthContext';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email);
    navigate('/vault');
  };

  return (
    <div className="min-h-screen bg-tech-darker flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-tech-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-center">
        
        {/* Left Side - Value Prop */}
        <div className="hidden md:block space-y-8 pr-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Join the Top 1% of Automation Engineers</h1>
            <p className="text-xl text-gray-400">Get instant access to the Vault, community, and launch-ready systems.</p>
          </div>
          
          <div className="space-y-4">
            {[
              "Access to 50+ Automation Packs",
              "Monthly AI Agent Drops",
              "Private Discord Community",
              "Launch-Ready Guarantee™"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <CheckCircle size={14} />
                </div>
                {item}
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 italic mb-4">"Automalix saved my agency. We deployed the GDPR pack in 10 minutes and charged the client $3k."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600" />
              <div>
                <div className="text-white font-bold">Sarah Jenkins</div>
                <div className="text-xs text-gray-400">Founder, ScaleFlow Agency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <GlassCard className="p-8 border-tech-secondary/20">
            <div className="text-center mb-8 md:hidden">
              <h1 className="text-2xl font-bold text-white">Create Account</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                variant="glow" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Get Instant Access'}
              </Button>
            </form>

            <p className="text-center mt-8 text-gray-400 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-tech-primary hover:text-white font-medium transition-colors">
                Sign In
              </Link>
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
