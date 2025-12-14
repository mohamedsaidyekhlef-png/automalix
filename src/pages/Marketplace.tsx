import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { products, Product } from '../data/products';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Link, useSearchParams } from 'react-router-dom';
import { cn } from '../lib/utils';

// Filter Types
type SortOption = 'best-match' | 'price-asc' | 'price-desc' | 'newest' | 'rating';

export function Marketplace() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  // State
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortOption, setSortOption] = useState<SortOption>('best-match');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedComplexity, setSelectedComplexity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  // Data derivation
  const allCategories = Array.from(new Set(products.map(p => p.category)));
  const allNiches = Array.from(new Set(products.flatMap(p => p.niche)));
  const allTools = Array.from(new Set(products.flatMap(p => p.tools)));
  const allComplexity = ['Beginner', 'Intermediate', 'Expert'];

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search
      const matchesSearch = 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filters
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesNiche = selectedNiches.length === 0 || product.niche.some(n => selectedNiches.includes(n));
      const matchesTool = selectedTools.length === 0 || product.tools.some(t => selectedTools.includes(t));
      const matchesComplexity = selectedComplexity.length === 0 || selectedComplexity.includes(product.complexity);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesNiche && matchesTool && matchesComplexity && matchesPrice;
    }).sort((a, b) => {
      switch (sortOption) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'newest': return (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1;
        case 'rating': return b.rating - a.rating;
        default: return 0; // Best Match (default order)
      }
    });
  }, [searchQuery, selectedCategories, selectedNiches, selectedTools, selectedComplexity, priceRange, sortOption]);

  // Helper for checkboxes
  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, current: string[], value: string) => {
    if (current.includes(value)) {
      setter(current.filter(item => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div className="space-y-3">
        <h3 className="font-bold text-white flex items-center gap-2"><Filter size={16} className="text-tech-primary"/> Product Type</h3>
        <div className="space-y-1">
          {allCategories.map(cat => (
            <label key={cat} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer p-1">
              <div className={cn("w-4 h-4 rounded border flex items-center justify-center transition-colors", selectedCategories.includes(cat) ? "bg-tech-primary border-tech-primary" : "border-gray-600")}>
                {selectedCategories.includes(cat) && <Check size={10} className="text-white" />}
              </div>
              <input 
                type="checkbox" 
                className="hidden"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleFilter(setSelectedCategories, selectedCategories, cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="space-y-3 pt-6 border-t border-white/10">
        <h3 className="font-bold text-white">Automation Tool</h3>
        <div className="space-y-1">
          {allTools.map(tool => (
            <label key={tool} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer p-1">
              <div className={cn("w-4 h-4 rounded border flex items-center justify-center transition-colors", selectedTools.includes(tool) ? "bg-tech-primary border-tech-primary" : "border-gray-600")}>
                {selectedTools.includes(tool) && <Check size={10} className="text-white" />}
              </div>
              <input 
                type="checkbox" 
                className="hidden"
                checked={selectedTools.includes(tool)}
                onChange={() => toggleFilter(setSelectedTools, selectedTools, tool)}
              />
              {tool}
            </label>
          ))}
        </div>
      </div>

      {/* Complexity */}
      <div className="space-y-3 pt-6 border-t border-white/10">
        <h3 className="font-bold text-white">Complexity</h3>
        <div className="flex flex-wrap gap-2">
          {allComplexity.map(level => (
            <button
              key={level}
              onClick={() => toggleFilter(setSelectedComplexity, selectedComplexity, level)}
              className={cn(
                "px-3 py-1 rounded-md text-xs font-medium border transition-all",
                selectedComplexity.includes(level)
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-gray-400 border-transparent hover:bg-white/10"
              )}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Custom CTA */}
      <GlassCard className="p-6 bg-gradient-to-br from-tech-darker to-tech-surface border-tech-accent/20 mt-8">
        <h4 className="font-bold text-tech-accent mb-2">Enterprise?</h4>
        <p className="text-xs text-gray-400 mb-4">
          Need a custom audit-ready system built for your compliance team?
        </p>
        <Button 
            size="sm" 
            variant="outline" 
            className="w-full text-xs"
            onClick={() => window.location.href = 'mailto:sales@automalix.com?subject=Enterprise%20Audit%20System'}
        >
            Contact Sales
        </Button>
      </GlassCard>
    </div>
  );

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Automation Solutions</h1>
            <p className="text-gray-400 text-sm md:text-base">
              {filteredProducts.length} Enterprise-Grade <strong>Automation Tools</strong> Available
            </p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search automation tools..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-tech-primary/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="lg:hidden"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <Filter size={20} />
            </Button>
          </div>
        </div>

        {/* Sorting & Active Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
             {/* Quick Niche Filters (Horizontal) */}
             <button 
               onClick={() => setSelectedNiches([])}
               className={cn("px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors", selectedNiches.length === 0 ? "bg-white text-black font-medium" : "bg-white/5 text-gray-400 hover:text-white")}
             >
               All Niches
             </button>
             {allNiches.slice(0, 5).map(niche => (
               <button
                 key={niche}
                 onClick={() => toggleFilter(setSelectedNiches, selectedNiches, niche)}
                 className={cn(
                   "px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-colors",
                   selectedNiches.includes(niche) 
                     ? "bg-tech-primary/20 border-tech-primary text-tech-primary" 
                     : "bg-transparent border-white/10 text-gray-400 hover:border-white/30"
                 )}
               >
                 {niche}
               </button>
             ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-sm text-gray-500 hidden md:inline">Sort by:</span>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none w-full md:w-auto"
            >
              <option value="best-match">Best Match</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block">
             <FilterContent />
          </div>

          {/* Mobile Filters (Expandable) */}
          <AnimatePresence>
             {mobileFiltersOpen && (
                 <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="lg:hidden overflow-hidden bg-white/5 rounded-xl border border-white/10 mb-6"
                 >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold">Filters</h3>
                            <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-400"><X size={20}/></button>
                        </div>
                        <FilterContent />
                        <Button className="w-full mt-6" onClick={() => setMobileFiltersOpen(false)}>Show Results</Button>
                    </div>
                 </motion.div>
             )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link to={`/products/${product.id}`} key={product.id}>
                    <GlassCard hoverEffect className="h-full flex flex-col group relative overflow-hidden">
                      {/* Badges */}
                      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                         {product.category === 'Audit-Ready' && (
                          <span className="px-2 py-1 rounded bg-red-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase shadow-lg">
                            Audit Ready
                          </span>
                        )}
                        {product.isBestSeller && (
                          <span className="px-2 py-1 rounded bg-yellow-500/90 backdrop-blur-md text-black text-[10px] font-bold uppercase shadow-lg">
                            Best Seller
                          </span>
                        )}
                      </div>

                      <div className="relative h-48 overflow-hidden border-b border-white/10">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button size="sm" variant="glow">View Details</Button>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex gap-2">
                             {product.tools.slice(0, 2).map(t => (
                               <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300 border border-white/5">{t}</span>
                             ))}
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400 text-xs">
                            <span>★</span> <span>{product.rating}</span>
                          </div>
                        </div>

                        <h3 className="font-bold mb-2 text-lg leading-tight group-hover:text-tech-accent transition-colors">{product.title}</h3>
                        <p className="text-gray-400 text-xs mb-4 line-clamp-2 flex-1">{product.description}</p>
                        
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                          <div className="flex flex-col">
                             <span className="text-[10px] text-gray-500 uppercase tracking-wider">One-time</span>
                             <span className="font-bold text-white text-lg">${product.price}</span>
                          </div>
                          {product.hasGuarantee && (
                            <div className="flex items-center gap-1 text-[10px] text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                               <Check size={10} /> Guaranteed
                            </div>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-2xl bg-white/5">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Search className="text-gray-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">No matches found</h3>
                <p className="text-gray-500 mb-6 max-w-md">
                  We couldn't find any automation packs matching your specific filters. Try adjusting the price range or categories.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategories([]);
                    setSelectedNiches([]);
                    setSelectedTools([]);
                    setSelectedComplexity([]);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
