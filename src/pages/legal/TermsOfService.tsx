import { FileText } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                <FileText size={14} /> Usage Agreement
            </div>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: June 15, 2025</p>
        </div>

        <GlassCard className="p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Automalix (“we,” “us” or “our”), concerning your access to and use of the Automalix website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                <p>
                    Unless otherwise indicated, the Site and the Automation Packs, AI Kits, and templates are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">3. User Representations</h2>
                <p>
                    By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Purchases and Payment</h2>
                <p>
                    We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and PayPal. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Prohibited Activities</h2>
                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p>
                    In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                </p>
            </section>
        </GlassCard>
      </div>
    </div>
  );
}
