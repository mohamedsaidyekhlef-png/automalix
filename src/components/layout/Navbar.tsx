import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Box, Users, Shield, GraduationCap, Search, Wrench, LogOut, ChevronRight, Wand2, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { useAuth } from '../../context/AuthContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Marketplace', path: '/products', icon: Box, desc: 'Browse Automation Packs' },
    { name: 'Generator', path: '/generator', icon: Wand2, desc: 'AI Workflow Architect' },
    { name: 'Vault', path: '/vault', icon: Shield, desc: 'Subscription Access' },
    { name: 'Academy', path: '/academy', icon: GraduationCap, desc: 'Learn & Grow' },
    { name: 'Blog', path: '/blog', icon: BookOpen, desc: 'Industry Insights' },
    { name: 'White Label', path: '/white-label', icon: Users, desc: 'Agency Reseller Rights' },
  ];

  // Animation Variants
  const menuVariants = {
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 35 }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 35, staggerChildren: 0.07, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 35 } }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-tech-darker/90 backdrop-blur-lg border-white/10 py-3' 
            : 'bg-transparent border-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-[60]">
              {/* Logo Image with Glow Effect */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-tech-primary/60 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="https://i.postimg.cc/W11s3pjy/Adobe-Express-file.png" 
                  alt="Automalix Logo" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              
              {/* Animated Gradient Text */}
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-tech-primary to-white bg-[length:200%_auto] animate-text-gradient tracking-tight">
                AUTOMALIX
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors flex items-center gap-2",
                    location.pathname.startsWith(link.path) ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name === 'Generator' && <Wand2 size={14} className="text-purple-400" />}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Auth */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/products" className="text-gray-400 hover:text-white">
                <Search size={20} />
              </Link>
              
              {isAuthenticated && user ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <span className="text-sm font-medium text-white ml-2">{user.name}</span>
                    <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full bg-tech-primary/20" />
                  </button>

                  {isProfileOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-tech-surface border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                      <div className="px-4 py-2 border-b border-white/5">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="text-sm font-bold text-white truncate">{user.email}</p>
                      </div>
                      <Link to="/vault" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">My Vault</Link>
                      <Link to="/vault" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white">Settings</Link>
                      <button 
                        onClick={logout}
                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-white/5 flex items-center gap-2"
                      >
                        <LogOut size={14} /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white">
                    Log in
                  </Link>
                  <Link to="/signup">
                    <Button size="sm" variant="glow">
                      Get All Access
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-2 relative z-[60] rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay - Portaled to Body to fix scrolling/cutoff issues */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-[49] bg-tech-darker/98 backdrop-blur-xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto h-[100dvh] overscroll-contain"
            >
              {/* Menu Items */}
              <div className="flex-1 flex flex-col gap-6 max-w-lg mx-auto w-full pb-10">
                
                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <motion.div variants={itemVariants} key={link.name}>
                      <Link
                        to={link.path}
                        className={cn(
                          "group flex items-center justify-between p-4 rounded-2xl border border-transparent transition-all duration-300",
                          location.pathname === link.path 
                            ? "bg-white/10 border-white/10 shadow-lg" 
                            : "hover:bg-white/5 hover:border-white/5"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                            location.pathname === link.path ? "bg-tech-primary text-white" : "bg-white/5 text-gray-400 group-hover:text-white"
                          )}>
                            <link.icon size={24} />
                          </div>
                          <div>
                            <div className={cn(
                              "text-lg font-bold transition-colors",
                              location.pathname === link.path ? "text-white" : "text-gray-300 group-hover:text-white"
                            )}>
                              {link.name}
                            </div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-400">
                              {link.desc}
                            </div>
                          </div>
                        </div>
                        <ChevronRight size={20} className={cn(
                          "text-gray-600 transition-transform group-hover:translate-x-1",
                          location.pathname === link.path && "text-tech-primary"
                        )} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="h-px bg-white/10 w-full my-2" />

                {/* Auth Section */}
                <motion.div variants={itemVariants}>
                  {isAuthenticated && user ? (
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                      <div className="flex items-center gap-4 mb-6">
                        <img src={user.avatar} alt="Avatar" className="w-14 h-14 rounded-full border-2 border-tech-primary" />
                        <div>
                          <div className="text-white font-bold text-lg">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                          <div className="text-xs text-tech-accent mt-1 font-medium">Pro Member</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Link to="/vault">
                          <Button variant="primary" className="w-full text-sm py-3">My Vault</Button>
                        </Link>
                        <Button variant="outline" onClick={logout} className="w-full text-sm py-3 border-red-500/30 text-red-400 hover:bg-red-500/10">
                          Sign Out
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="text-center mb-2">
                        <h4 className="text-white font-bold text-lg">Join the Revolution</h4>
                        <p className="text-gray-400 text-sm">Access 50+ Automation Packs instantly.</p>
                      </div>
                      <Link to="/signup">
                        <Button className="w-full py-4 text-lg shadow-xl shadow-tech-primary/20" variant="glow">
                          Get All Access <ArrowRight size={20} />
                        </Button>
                      </Link>
                      <Link to="/login">
                        <Button className="w-full py-4 text-lg" variant="secondary">
                          Log In to Account
                        </Button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
