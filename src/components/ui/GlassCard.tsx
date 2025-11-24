import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hoverEffect = false, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.2)' } : undefined}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md',
        'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
