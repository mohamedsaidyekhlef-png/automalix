import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  ...props 
}: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-tech-primary to-tech-secondary text-white hover:shadow-lg hover:shadow-tech-primary/25 border border-transparent',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm',
    outline: 'bg-transparent border border-tech-primary/50 text-tech-primary hover:bg-tech-primary/10',
    ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
    glow: 'bg-tech-darker border border-tech-accent/50 text-tech-accent shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:bg-tech-accent/10'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
}
