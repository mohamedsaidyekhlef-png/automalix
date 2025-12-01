import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Lock, CheckCircle, Loader2, Shield, Building2, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../lib/utils';

interface ServiceDepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: {
    businessName: string;
    projectType: string;
    budget: number;
  };
}

export function ServiceDepositModal({ isOpen, onClose, projectData }: ServiceDepositModalProps) {
  const [step, setStep] = useState<'review' | 'processing' | 'success'>('review');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const depositAmount = projectData.budget * 0.5;

  useEffect(() => {
    if (isOpen) {
      setStep('review');
      setCardNumber('');
      setExpiry('');
      setCvc('');
    }
  }, [isOpen]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    // Simulate Stripe/Escrow API call
    setTimeout(() => {
      setStep('success');
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-4xl relative"
          >
            <button 
              onClick={onClose}
              className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              
              {/* Left: Escrow Trust Summary */}
              <div className="bg-tech-surface p-8 border-r border-white/10 hidden md:block relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-green-400 font-bold mb-2">
                    <Shield size={20} /> ESCROW PROTECTION ACTIVE
                  </div>
                  <h2 className="text-2xl font-bold text-white">Secure Project Deposit</h2>
                  <p className="text-gray-400 text-sm mt-2">
                    Your funds are held in a neutral escrow account. The expert is not paid until you approve the final delivery.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Project Details</h4>
                    <div className="flex items-center gap-3 text-white mb-1">
                      <Building2 size={16} className="text-tech-primary" />
                      <span className="font-medium">{projectData.businessName}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <FileText size={16} className="text-tech-primary" />
                      <span className="font-medium">{projectData.projectType}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-400">
                      <span>Total Project Budget</span>
                      <span>{formatCurrency(projectData.budget)}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-lg border-t border-white/10 pt-3">
                      <span>50% Deposit Due Now</span>
                      <span className="text-green-400">{formatCurrency(depositAmount)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>Remaining 50%</span>
                      <span>Due upon completion</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 opacity-70">
                   {/* Trust Badges */}
                   <div className="h-8 bg-white/10 rounded px-2 flex items-center text-xs font-bold text-white">Powered by Stripe</div>
                   <div className="h-8 bg-white/10 rounded px-2 flex items-center text-xs font-bold text-white">Escrow.com Verified</div>
                </div>
              </div>

              {/* Right: Payment Form */}
              <div className="bg-tech-darker p-8 relative">
                {step === 'review' && (
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Payment Method</h3>
                      <div className="flex gap-2">
                        <div className="w-8 h-5 bg-gray-600 rounded"></div>
                        <div className="w-8 h-5 bg-gray-600 rounded"></div>
                      </div>
                    </div>

                    {/* Mobile Summary */}
                    <div className="md:hidden mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                       <div className="flex justify-between font-bold text-white">
                          <span>Deposit Due</span>
                          <span className="text-green-400">{formatCurrency(depositAmount)}</span>
                       </div>
                       <p className="text-xs text-gray-400 mt-1">50% of {formatCurrency(projectData.budget)} budget</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Card Number</label>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input 
                            type="text" 
                            required
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value)}
                            placeholder="0000 0000 0000 0000"
                            className="w-full bg-black/20 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:border-tech-primary outline-none transition-colors font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Expiry</label>
                          <input 
                            type="text" 
                            required
                            value={expiry}
                            onChange={e => setExpiry(e.target.value)}
                            placeholder="MM / YY"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-tech-primary outline-none transition-colors font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase mb-1">CVC</label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                            <input 
                              type="text" 
                              required
                              value={cvc}
                              onChange={e => setCvc(e.target.value)}
                              placeholder="123"
                              className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:border-tech-primary outline-none transition-colors font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg flex gap-3">
                        <Shield className="text-blue-400 shrink-0" size={20} />
                        <p className="text-xs text-blue-200">
                            <strong>Escrow Protection:</strong> This payment is held securely. The expert will not receive funds until you mark the project as complete.
                        </p>
                    </div>

                    <Button type="submit" variant="glow" className="w-full py-4 text-lg shadow-xl shadow-tech-primary/20">
                      Secure Deposit {formatCurrency(depositAmount)}
                    </Button>
                  </form>
                )}

                {step === 'processing' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-tech-darker z-20">
                    <Loader2 size={48} className="text-tech-primary animate-spin mb-4" />
                    <h3 className="text-xl font-bold text-white">Securing Funds in Escrow...</h3>
                    <p className="text-gray-400 text-sm">Establishing secure contract.</p>
                  </div>
                )}

                {step === 'success' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-tech-darker z-20 text-center p-8">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Project Initiated!</h3>
                    <p className="text-gray-400 mb-8">
                      Your deposit is secured. We have notified the expert team. You will receive an onboarding email within 15 minutes.
                    </p>
                    <Button variant="primary" onClick={onClose}>
                      Go to Project Dashboard
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
