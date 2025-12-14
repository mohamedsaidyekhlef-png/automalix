import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, ArrowRight, FileJson, FileText } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { GlassCard } from '../../components/ui/GlassCard';
import confetti from 'canvas-confetti';

export function PaymentSuccess() {
  const [downloadReady, setDownloadReady] = useState(false);
  const location = useLocation();
  const product = location.state?.product;

  useEffect(() => {
    // Fire confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    // Simulate file preparation
    setTimeout(() => setDownloadReady(true), 2000);

    return () => clearInterval(interval);
  }, []);

  // Fallback if accessed directly without product state
  const displayTitle = product?.title || "Enterprise Automation Pack";
  const displayCategory = product?.category || "Digital Product";

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <GlassCard className="text-center p-10 md:p-16 border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/40"
            >
                <CheckCircle size={48} className="text-white" />
            </motion.div>
            
            <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-400 mb-8">
                Thank you for your purchase. Your automation assets are ready.
            </p>

            <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10 text-left">
                <h3 className="font-bold mb-4 text-gray-300 uppercase text-xs tracking-wider">Order Summary</h3>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-tech-primary/20 rounded-lg">
                            <FileJson size={20} className="text-tech-primary" />
                        </div>
                        <div>
                            <div className="font-bold">{displayTitle}</div>
                            <div className="text-xs text-gray-500">License: Standard Commercial • {displayCategory}</div>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3 text-sm">
                            <FileJson size={16} className="text-yellow-400" />
                            <span>workflow.json</span>
                        </div>
                        {downloadReady ? (
                            <Button size="sm" variant="ghost" className="h-8 text-xs text-green-400 hover:text-green-300">
                                <Download size={14} className="mr-1" /> Ready
                            </Button>
                        ) : (
                            <span className="text-xs text-gray-500 animate-pulse">Preparing...</span>
                        )}
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3 text-sm">
                            <FileText size={16} className="text-blue-400" />
                            <span>setup_guide.pdf</span>
                        </div>
                         {downloadReady ? (
                            <Button size="sm" variant="ghost" className="h-8 text-xs text-green-400 hover:text-green-300">
                                <Download size={14} className="mr-1" /> Ready
                            </Button>
                        ) : (
                            <span className="text-xs text-gray-500 animate-pulse">Preparing...</span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" size="lg" className="w-full sm:w-auto" disabled={!downloadReady}>
                    <Download size={20} className="mr-2" /> Download All Assets
                </Button>
                <Link to="/products">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        Continue Shopping <ArrowRight size={20} className="ml-2" />
                    </Button>
                </Link>
            </div>
            
            <p className="mt-8 text-xs text-gray-500">
                An email receipt has been sent to your inbox. Order ID: #ORD-{Math.floor(Math.random() * 1000000)}
            </p>
        </GlassCard>
      </div>
    </div>
  );
}
