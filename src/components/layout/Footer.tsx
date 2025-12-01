import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-tech-darker border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <Logo />
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
              {['Audit-Ready Packs', 'AI Kits', 'Data Analysis', 'Business-in-a-Box', 'White Label', 'SaaS Starters'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-gray-400 hover:text-tech-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Academy', 'Blog', 'Documentation', 'Changelog', 'Community'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Blog' ? '/blog' : '#'} className="text-gray-400 hover:text-tech-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {['License', 'Terms of Service', 'Privacy Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-tech-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 AUTOMALIX. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-400 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
