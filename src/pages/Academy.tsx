import { Play, Clock, BookOpen, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { products } from '../data/products';

export function Academy() {
  const courses = products.filter(p => p.category === 'Course');

  return (
    <div className="min-h-screen bg-tech-darker text-white pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">Automalix Academy</h1>
          <p className="text-xl text-gray-400">
            Master the business of automation. Learn how to build, sell, and scale your own agency from the experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map(course => (
            <GlassCard key={course.id} className="overflow-hidden flex flex-col">
              <div className="relative h-56">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Play className="fill-white text-white ml-1" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Clock size={14} /> 10 Hours</span>
                  <span className="flex items-center gap-1"><BookOpen size={14} /> 12 Modules</span>
                  <span className="flex items-center gap-1 text-yellow-400"><Star size={14} fill="currentColor" /> 5.0</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-400 mb-6 flex-1">{course.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-2xl font-bold">${course.price}</span>
                  <Button variant="primary">Enroll Now</Button>
                </div>
              </div>
            </GlassCard>
          ))}

          {/* Coming Soon Card */}
          <GlassCard className="p-8 flex flex-col justify-center items-center text-center border-dashed border-white/20 bg-transparent">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Clock className="text-gray-500" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">New Courses Coming Soon</h3>
            <p className="text-gray-500">
              We are recording modules on "AI Agent Architecture" and "Advanced n8n Logic".
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
