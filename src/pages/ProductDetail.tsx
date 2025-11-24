import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Play, Shield, Clock, Download, Star, ArrowRight, AlertTriangle, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { products } from '../data/products';
import { formatCurrency } from '../lib/utils';
import { GuaranteeSection } from '../components/sections/GuaranteeSection';
import { CheckoutModal } from '../components/checkout/CheckoutModal';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-24 pb-32 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6 lg:mb-8">
          <span>Marketplace</span>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-white truncate max-w-[200px]">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Left Column - Media & Details */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-10">
            {/* Main Image/Video Area */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-tech-surface aspect-video relative group shadow-2xl shadow-black/50">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="fill-white text-white ml-1" size={24} />
                </div>
              </div>
              {product.category === 'Audit-Ready' && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] lg:text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  AUDIT READY
                </div>
              )}
            </div>

            {/* Mobile Title Block (Visible only on mobile) */}
            <div className="lg:hidden">
                <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                <div className="flex items-center gap-2 text-yellow-400 text-sm mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-gray-400">({product.reviews} Reviews)</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-white">{formatCurrency(product.price)}</span>
                    <span className="text-gray-500 line-through">{formatCurrency(product.price * 1.5)}</span>
                </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl lg:text-2xl font-bold mb-4">What's Inside</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                  {product.description} This comprehensive package is designed to save you countless hours of manual work. Built with enterprise-grade security and scalability in mind, it seamlessly integrates with your existing stack.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mt-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm lg:text-base">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-tech-primary/20 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-tech-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROI Calculator */}
            <GlassCard className="p-6 lg:p-8 border-tech-accent/20 bg-gradient-to-br from-tech-darker to-tech-surface">
              <h3 className="text-lg lg:text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="text-tech-accent" /> ROI Calculator
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start border-b sm:border-b-0 border-white/5 pb-4 sm:pb-0">
                  <label className="block text-sm text-gray-400 mb-0 sm:mb-2">Hours Saved/Wk</label>
                  <div className="text-2xl lg:text-3xl font-bold text-white">15 hrs</div>
                </div>
                <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start border-b sm:border-b-0 border-white/5 pb-4 sm:pb-0">
                  <label className="block text-sm text-gray-400 mb-0 sm:mb-2">Hourly Value</label>
                  <div className="text-2xl lg:text-3xl font-bold text-white">$100</div>
                </div>
                <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start">
                  <label className="block text-sm text-tech-accent mb-0 sm:mb-2">Monthly Savings</label>
                  <div className="text-2xl lg:text-3xl font-bold text-tech-accent">$6,000</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs lg:text-sm text-gray-400">
                  * Based on average implementation data. This pack pays for itself in <span className="text-white font-bold">less than 3 days</span>.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Sticky Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <GlassCard className="p-8 border-tech-primary/30 shadow-2xl shadow-tech-primary/10">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-gray-400">{product.reviews} Verified Reviews</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{formatCurrency(product.price)}</span>
                    <span className="text-gray-500 line-through text-lg">{formatCurrency(product.price * 1.5)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full mb-4" 
                  size="lg" 
                  variant="glow"
                  onClick={() => setIsCheckoutOpen(true)}
                >
                  Buy Now
                </Button>
                <Button className="w-full mb-6" variant="secondary">
                  Add to Cart
                </Button>

                <div className="space-y-4 text-sm text-gray-400 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <Download size={16} /> Instant Digital Download
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={16} /> Secure Payment via Stripe
                  </div>
                  <div className="flex items-center gap-3">
                    <Check size={16} /> Lifetime Updates Included
                  </div>
                </div>
              </GlassCard>

              {/* Upsell */}
              <GlassCard className="p-6 bg-gradient-to-br from-tech-primary/20 to-tech-secondary/20 border-none">
                <h4 className="font-bold mb-2">Want this for free?</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Join the Automation Vault™ and get this pack plus 50+ others for just $39/mo.
                </p>
                <Button size="sm" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  View Subscription <ArrowRight size={14} />
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Guarantee Section Embedded */}
        <div className="border-t border-white/10 pt-12">
          <GuaranteeSection />
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-tech-darker/95 backdrop-blur-lg border-t border-white/10 z-40 lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
            <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase font-bold">Total Price</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">{formatCurrency(product.price)}</span>
                    <span className="text-sm text-gray-500 line-through">{formatCurrency(product.price * 1.5)}</span>
                </div>
            </div>
            <Button 
              variant="glow" 
              size="md" 
              className="shadow-lg shadow-tech-primary/20 px-8"
              onClick={() => setIsCheckoutOpen(true)}
            >
                Buy Now
            </Button>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        product={product} 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}
