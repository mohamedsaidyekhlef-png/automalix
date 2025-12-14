import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-tech-darker border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8">
                 <img 
                    src="https://i.postimg.cc/W11s3pjy/Adobe-Express-file.png" 
                    alt="Automalix Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]" 
                 />
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-tech-primary to-white bg-[length:200%_auto] animate-text-gradient">
                AUTOMALIX
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The #1 Marketplace for Automation Packs, AI Agents, and Ready-to-Launch Digital Systems. Save time, automate, and scale.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Marketplace</h4>
            <ul className="space-y-3">
              {[
                  { name: 'Audit-Ready Packs', link: '/audit-ready' },
                  { name: 'AI Kits', link: '/products?category=AI+Kit' },
                  { name: 'Business-in-a-Box', link: '/products?category=Business-in-a-Box' },
                  { name: 'White Label', link: '/white-label' },
                  { name: 'SaaS Starters', link: '/products?category=SaaS+Kit' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-gray-400 hover:text-tech-accent text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                  { name: 'Academy', link: '/academy' },
                  { name: 'Documentation', link: '/resources/docs' },
                  { name: 'Blog', link: '/blog' },
                  { name: 'Changelog', link: '/resources/changelog' },
                  { name: 'Community', link: '/resources/community' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-gray-400 hover:text-tech-accent text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                  { name: 'License Agreement', link: '/legal/license' },
                  { name: 'Terms of Service', link: '/legal/terms' },
                  { name: 'Privacy Policy', link: '/legal/privacy' },
                  { name: 'Refund Policy', link: '/legal/refund' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-gray-400 hover:text-tech-accent text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 AUTOMALIX HQ. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-400 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
