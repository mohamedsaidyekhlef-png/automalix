import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Zap, Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen/closed the popup
    const hasSeenPopup = localStorage.getItem('automalix_newsletter_seen');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 8000); // Show after 8 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('automalix_newsletter_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-lg relative"
          >
            <button 
              onClick={handleClose}
              className="absolute -top-2 -right-2 z-10 p-2 rounded-full bg-tech-surface border border-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <GlassCard className="p-0 overflow-hidden border-tech-primary/40 shadow-2xl shadow-tech-primary/20">
              <div className="relative h-32 bg-gradient-to-r from-tech-primary to-tech-secondary overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <div className="text-center relative z-10">
                  <div className="w-12 h-12 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-2">
                    <Zap className="text-white fill-white" size={24} />
                  </div>
                  <h3 className="text-white font-bold text-xl">Unlock the Vault Insider</h3>
                </div>
              </div>

              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    <h4 className="text-2xl font-bold text-white mb-2 text-center">Get 2 Free Workflows</h4>
                    <p className="text-gray-400 text-center mb-6">
                      Join 25,000+ automation engineers. Get our "Lead Enrichment" and "Contract Auto-fill" flows sent to your inbox instantly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                        />
                      </div>
                      <Button variant="glow" className="w-full">
                        Send Me The Workflows
                      </Button>
                    </form>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      No spam. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <Check className="text-green-500" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">You're In!</h4>
                    <p className="text-gray-400">Check your inbox for the download link.</p>
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
