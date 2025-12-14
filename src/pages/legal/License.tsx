import { Scale } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export function License() {
  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Scale size={14} /> Usage Rights
            </div>
            <h1 className="text-4xl font-bold mb-4">License Agreement</h1>
            <p className="text-gray-400">Last updated: June 15, 2025</p>
        </div>

        <GlassCard className="p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Standard License (Personal/Internal Use)</h2>
                <p>
                    When you purchase an Automation Pack or AI Kit under the Standard License, you are granted a non-exclusive, non-transferable license to use the product for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Your own personal projects.</li>
                    <li>Internal business operations within your company.</li>
                    <li>One single client project (you must purchase a new license for each additional client).</li>
                </ul>
                <p className="mt-4 text-red-400">
                    <strong>Restriction:</strong> You may NOT resell, redistribute, or share the source code or JSON files publicly.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">2. White Label License (Agency/Reseller)</h2>
                <p>
                    The White Label License grants you extended rights to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Rebrand the automation pack as your own product.</li>
                    <li>Resell the product to unlimited clients.</li>
                    <li>Bundle the product with your own services.</li>
                    <li>Charge your own prices and keep 100% of the revenue.</li>
                </ul>
                <p className="mt-4">
                    However, you still may not upload the source files to public repositories or free template marketplaces.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Termination</h2>
                <p>
                    This license is effective until terminated. Your rights under this license will terminate automatically without notice from Automalix if you fail to comply with any term(s) of this license. Upon termination of the license, you shall cease all use of the product and destroy all copies, full or partial, of the product.
                </p>
            </section>
        </GlassCard>
      </div>
    </div>
  );
}
