import { RefreshCw } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
                <RefreshCw size={14} /> Buyer Protection
            </div>
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-gray-400">Last updated: June 15, 2025</p>
        </div>

        <GlassCard className="p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-white mb-4">1. The "Fix-My-Flow" Guarantee</h2>
                <p>
                    At Automalix, we stand behind our products. Every Automation Pack and AI Kit comes with our 60-Day "Fix-My-Flow" Guarantee. If a workflow fails to run in your environment due to a technical error in our code, and our support team cannot fix it within 24 hours of your ticket submission, you are entitled to a full refund.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Eligibility for Refunds</h2>
                <p className="mb-4">To be eligible for a refund, the following conditions must be met:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>You must request the refund within 60 days of purchase.</li>
                    <li>You must have contacted support and allowed us one attempt to resolve the technical issue.</li>
                    <li>The issue must be related to the product itself, not a limitation of your third-party accounts (e.g., if OpenAI bans your API key, that is not grounds for a refund).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Non-Refundable Items</h2>
                <p>The following items are non-refundable:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>White Label License upgrades (due to the transfer of intellectual property rights).</li>
                    <li>Consulting or custom development hours that have already been utilized.</li>
                    <li>Downloadable "Business-in-a-Box" assets that have been accessed.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">4. How to Request a Refund</h2>
                <p>
                    To request a refund, please email <a href="mailto:support@automalix.com" className="text-tech-primary hover:underline">support@automalix.com</a> with your Order ID and a description of the issue. We process refunds within 3-5 business days.
                </p>
            </section>
        </GlassCard>
      </div>
    </div>
  );
}
