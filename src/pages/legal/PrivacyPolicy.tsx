import { Shield } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Shield size={14} /> Legal Compliance
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: June 15, 2025</p>
        </div>

        <GlassCard className="p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                    Welcome to Automalix ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">2. The Data We Collect</h2>
                <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong>Financial Data:</strong> includes bank account and payment card details (processed securely via Stripe).</li>
                    <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
                <p>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Links</h2>
                <p>
                    This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">6. Contact Us</h2>
                <p>
                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:legal@automalix.com" className="text-tech-primary hover:underline">legal@automalix.com</a>.
                </p>
            </section>
        </GlassCard>
      </div>
    </div>
  );
}
