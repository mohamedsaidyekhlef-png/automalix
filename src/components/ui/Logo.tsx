import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-8 w-8 p-1',
    md: 'h-10 w-10 p-1.5',
    lg: 'h-16 w-16 p-2',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-4xl',
  };

  return (
    <div className={cn("relative flex items-center gap-3 group select-none", className)}>
      {/* Glow Effect Background (Behind everything) */}
      <div className="absolute -inset-4 bg-tech-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Logo Image Frame */}
      <div className={cn(
        "relative z-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/20 shadow-lg shadow-black/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-white/40",
        sizes[size]
      )}>
        <img 
          src="https://i.postimg.cc/J75N04kj/file-0000000035947208894fe8bb56255606.png" 
          alt="Automalix Logo" 
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {showText && (
        <div className="flex flex-col relative z-10">
          <span className={cn(
            "font-bold leading-none tracking-tight font-display",
            "bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400 drop-shadow-sm",
            textSizes[size]
          )}>
            AUTOMALIX
          </span>
        </div>
      )}
    </div>
  );
}
