import { Check, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';

export function Vault() {
  const plans = [
    {
      name: 'Starter',
      price: 19,
      features: ['2 New Workflows / mo', 'Community Access', 'Basic Templates', 'Standard Support'],
      notIncluded: ['AI Agents', 'White Label Rights', 'Priority Support']
    },
    {
      name: 'Pro',
      price: 39,
      popular: true,
      features: ['Everything in Starter', '1 New AI Agent / mo', 'Full Template Library', 'Private Discord Channel', 'Early Access Updates'],
      notIncluded: ['White Label Rights']
    },
    {
      name: 'Agency',
      price: 79,
      features: ['Everything in Pro', 'Reseller Rights (Selected)', 'Priority Support', 'Agency-in-a-Box Systems', '1-on-1 Onboarding Call'],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Automation Vault™</h1>
          <p className="text-xl text-gray-400">
            The ultimate subscription for automation engineers and agencies. Stop building from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <GlassCard 
              key={i} 
              className={`p-8 flex flex-col ${plan.popular ? 'border-tech-primary shadow-2xl shadow-tech-primary/20 scale-105 z-10' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-tech-primary text-white text-xs font-bold px-3 py-1 rounded-b-lg">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-green-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm opacity-50">
                    <X size={16} className="text-gray-500 shrink-0 mt-0.5" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'glow' : 'outline'} 
                className="w-full"
              >
                Choose {plan.name}
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
