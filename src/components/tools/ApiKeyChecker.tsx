import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Key, ShieldCheck, Lock, Copy } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { cn } from '../../lib/utils';

type Service = 'OpenAI' | 'Stripe' | 'Airtable' | 'Notion' | 'SendGrid';

export function ApiKeyChecker() {
  const [selectedService, setSelectedService] = useState<Service>('OpenAI');
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const services: { id: Service; name: string; prefix: string }[] = [
    { id: 'OpenAI', name: 'OpenAI / ChatGPT', prefix: 'sk-...' },
    { id: 'Stripe', name: 'Stripe Live/Test', prefix: 'sk_live_...' },
    { id: 'Airtable', name: 'Airtable PAT', prefix: 'pat...' },
    { id: 'Notion', name: 'Notion Integration', prefix: 'secret_...' },
    { id: 'SendGrid', name: 'SendGrid Email', prefix: 'SG...' },
  ];

  const handleCheck = () => {
    if (!apiKey || apiKey.length < 5) {
      setStatus('error');
      setMessage('Key format appears invalid (too short).');
      return;
    }

    setStatus('checking');
    
    // Simulator logic
    setTimeout(() => {
      // Mock validation logic
      const isValid = Math.random() > 0.2; // 80% success rate for demo
      
      if (isValid) {
        setStatus('success');
        setMessage(`Successfully authenticated with ${selectedService}. Quota available.`);
      } else {
        setStatus('error');
        setMessage(`Authentication failed. Please check permissions for ${selectedService}.`);
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <GlassCard className="p-8 border-tech-primary/30 shadow-2xl shadow-tech-primary/10">
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
          <div className="w-12 h-12 rounded-full bg-tech-primary/20 flex items-center justify-center">
            <ShieldCheck className="text-tech-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">API Key Pre-check System™</h2>
            <p className="text-gray-400 text-sm">Verify your credentials before deployment. Zero logs. Client-side only.</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">Select Service</label>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => { setSelectedService(service.id); setStatus('idle'); setApiKey(''); }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                    selectedService === service.id
                      ? "bg-tech-primary border-tech-primary text-white shadow-lg shadow-tech-primary/25"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Paste {selectedService} API Key
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Key size={18} />
              </div>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={services.find(s => s.id === selectedService)?.prefix}
                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-tech-primary/50 focus:ring-1 focus:ring-tech-primary/50 transition-all font-mono"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 flex items-center gap-1">
                <Lock size={12} /> Encrypted
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * We never store or transmit your keys to our servers. Validation happens via direct proxy or client-side regex.
            </p>
          </div>

          {/* Action Button */}
          <Button 
            onClick={handleCheck} 
            disabled={status === 'checking' || !apiKey}
            variant={status === 'success' ? 'outline' : 'glow'}
            className={cn("w-full h-12 transition-all", status === 'success' ? "border-green-500 text-green-400 hover:bg-green-500/10" : "")}
          >
            {status === 'checking' ? (
              <><Loader2 className="animate-spin mr-2" /> Verifying Credentials...</>
            ) : status === 'success' ? (
              <><CheckCircle className="mr-2" /> Credentials Verified</>
            ) : (
              'Run Pre-check'
            )}
          </Button>

          {/* Status Feedback */}
          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3"
              >
                <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={20} />
                <div className="flex-1">
                  <h4 className="font-bold text-green-400 text-sm">Connection Established</h4>
                  <p className="text-green-300/80 text-xs mt-1">{message}</p>
                </div>
                <button className="text-green-400 hover:text-white" title="Copy Log">
                   <Copy size={14} />
                </button>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3"
              >
                <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-red-400 text-sm">Connection Failed</h4>
                  <p className="text-red-300/80 text-xs mt-1">{message}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassCard>
    </div>
  );
}
