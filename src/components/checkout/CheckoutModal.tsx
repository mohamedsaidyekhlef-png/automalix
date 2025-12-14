import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Lock, CheckCircle, Loader2, ShieldCheck, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { Product } from '../../data/products';
import { formatCurrency } from '../../lib/utils';

interface CheckoutModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ product, isOpen, onClose }: CheckoutModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep('details');
      setEmail('');
      setCardNumber('');
      setExpiry('');
      setCvc('');
      setError('');
    }
  }, [isOpen]);

  // Basic Validation Logic
  const validateForm = () => {
    if (!email.includes('@')) return "Please enter a valid email address.";
    if (cardNumber.replace(/\s/g, '').length < 16) return "Invalid card number.";
    if (expiry.length < 5) return "Invalid expiry date.";
    if (cvc.length < 3) return "Invalid CVC.";
    return null;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
        setError(validationError);
        return;
    }
    setError('');
    setStep('processing');

    // Simulate Payment Gateway Delay
    setTimeout(() => {
      // 90% Success Rate Simulation
      if (Math.random() > 0.1) {
          setStep('success');
          // Redirect to success page after brief delay
          setTimeout(() => {
              onClose();
              navigate('/payment-success');
          }, 1500);
      } else {
          setStep('details');
          setError('Card declined. Please try a different payment method.');
      }
    }, 2500);
  };

  // Input Formatters
  const formatCardNumber = (val: string) => {
    return val.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
  };
  
  const formatExpiry = (val: string) => {
    return val.replace(/\D/g, '').replace(/(.{2})/, '$1/').trim().slice(0, 5);
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

            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
              {/* Left: Order Summary */}
              <div className="bg-tech-surface p-8 border-r border-white/10 hidden md:block">
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-gray-400 text-sm uppercase font-bold tracking-wider mb-2">Order Summary</h3>
                    <h2 className="text-2xl font-bold text-white">{product.title}</h2>
                  </div>

                  <div className="relative aspect-video rounded-lg overflow-hidden mb-6 border border-white/10">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>{formatCurrency(product.price)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Tax (Estimated)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex justify-between text-white font-bold text-xl">
                      <span>Total</span>
                      <span>{formatCurrency(product.price)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                    <ShieldCheck size={16} />
                    <span>Launch-Ready Guarantee™ Included</span>
                  </div>
                </div>
              </div>

              {/* Right: Payment Form */}
              <div className="bg-tech-darker p-8 relative">
                {step === 'details' && (
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Payment Details</h3>
                      <div className="flex gap-2">
                        <div className="w-8 h-5 bg-gray-600 rounded"></div>
                        <div className="w-8 h-5 bg-gray-600 rounded"></div>
                      </div>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle size={16} /> {error}
                        </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-tech-primary outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Card Information</label>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input 
                            type="text" 
                            required
                            value={cardNumber}
                            onChange={e => setCardNumber(formatCardNumber(e.target.value))}
                            placeholder="0000 0000 0000 0000"
                            maxLength={19}
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
                            onChange={e => setExpiry(formatExpiry(e.target.value))}
                            placeholder="MM / YY"
                            maxLength={5}
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
                              onChange={e => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                              placeholder="123"
                              className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:border-tech-primary outline-none transition-colors font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="glow" className="w-full py-4 text-lg shadow-xl shadow-tech-primary/20">
                      Pay {formatCurrency(product.price)}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <Lock size={12} /> Payments secured by 256-bit SSL encryption
                    </div>
                  </form>
                )}

                {step === 'processing' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-tech-darker z-20">
                    <Loader2 size={48} className="text-tech-primary animate-spin mb-4" />
                    <h3 className="text-xl font-bold text-white">Processing Transaction...</h3>
                    <p className="text-gray-400 text-sm">Verifying with bank...</p>
                  </div>
                )}

                {step === 'success' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-tech-darker z-20 text-center p-8">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Payment Approved!</h3>
                    <p className="text-gray-400 mb-8">
                      Redirecting you to your download...
                    </p>
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
