import React from 'react';
import { TrendingUp, Palette, Play, GraduationCap, Brain } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Empelix provides tailored campaigns that drive engagement and growth, using data-driven strategies to make brands stand out.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'We craft unique brand identities that capture your essence and resonate with your audience.',
  },
  {
    icon: Play,
    title: 'Visualized Learning Experience',
    description: 'A new way to learn through interactive, cinematic, and immersive experiences. (Upcoming)',
    upcoming: true,
  },
  {
    icon: GraduationCap,
    title: 'Visual Media Education',
    description: 'Learn the art of design and media production with practical, project-based teaching.',
  },
  {
    icon: Brain,
    title: 'AI Education',
    description: 'Demystifying artificial intelligence with beginner-friendly and applied AI learning.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#2a2a2a] rounded-xl p-8 hover:bg-[#333333] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-[#6A7CFF]/50 relative overflow-hidden"
              >
                {service.upcoming && (
                  <div className="absolute top-4 right-4 bg-[#FFA85B] text-[#212121] px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6A7CFF] to-[#FFA85B] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-[#F6F5ED] group-hover:text-[#6A7CFF] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;