import { Link } from 'react-router-dom';
import { Hash, TrendingUp, Briefcase, Cpu, BarChart } from 'lucide-react';

export function SeoKeywords() {
  const categories = [
    {
      title: "Business Solutions",
      icon: TrendingUp,
      keywords: [
        "Business Automation", "Enterprise Automation", "Business Process Automation", 
        "Workflow Automation", "Automation Solutions", "Automation Strategy", 
        "Automation Consulting", "Automation Implementation"
      ]
    },
    {
      title: "Platform & Tools",
      icon: Cpu,
      keywords: [
        "Automation Platform", "Automation Software", "Automation Tools", 
        "Automation Systems", "Process Automation Software", "Automation Infrastructure",
        "Automation Integration", "Zero-Code RPA"
      ]
    },
    {
      title: "Careers & Experts",
      icon: Briefcase,
      keywords: [
        "Automation Specialist", "Automation Expert", "Automation Engineer Jobs",
        "Automation Careers", "Automation Training", "Automation Certification",
        "Automation Staffing", "Automation Engineer Salary"
      ]
    },
    {
      title: "Impact & ROI",
      icon: BarChart,
      keywords: [
        "Automation ROI", "Automation Efficiency", "Automation Benefits",
        "Automation Savings", "Automation Productivity", "Automation Scalability",
        "Automation Governance", "Automation Compliance"
      ]
    }
  ];

  return (
    <section className="py-16 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8 opacity-70">
          <Hash size={16} className="text-tech-primary" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Popular Industry Topics</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-2 text-white font-semibold">
                <cat.icon size={18} className="text-tech-accent" />
                <h4>{cat.title}</h4>
              </div>
              <ul className="space-y-2">
                {cat.keywords.map((kw, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`/products?q=${encodeURIComponent(kw)}`}
                      className="text-sm text-gray-500 hover:text-tech-primary hover:underline transition-colors block"
                    >
                      {kw}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-gray-600 max-w-4xl mx-auto">
                Automalix is the premier <strong>Enterprise Automation Platform</strong> connecting businesses with high-performance <strong>automation tools</strong> and <strong>specialists</strong>. 
                Whether you need <strong>automation consulting</strong>, <strong>staffing</strong>, or a robust <strong>automation architecture</strong>, our marketplace delivers 
                proven solutions for <strong>business process automation</strong> and <strong>workflow optimization</strong>.
            </p>
        </div>
      </div>
    </section>
  );
}
