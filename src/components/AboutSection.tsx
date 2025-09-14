import { Target, Eye, User } from 'lucide-react';

const teamMembers = [
  { name: 'Abhin Das', role: 'CEO' },
  { name: 'Arjun Krishna', role: 'Co-Founder' },
  { name: 'Arif Khan', role: 'Creative Director' },
  { name: 'Akshay', role: 'Technical Lead' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Empelix</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] mx-auto"></div>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#2a2a2a] rounded-xl p-8 hover:bg-[#333333] transition-all duration-300 border border-gray-700 hover:border-[#6A7CFF]/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6A7CFF] to-[#FFA85B] rounded-lg flex items-center justify-center mr-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6A7CFF]">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To empower creators and innovators with cutting-edge design, technology, and storytelling 
              thereby transforming imagination into impactful experiences that inspire and connect.
            </p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-8 hover:bg-[#333333] transition-all duration-300 border border-gray-700 hover:border-[#FFA85B]/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFA85B] to-[#6A7CFF] rounded-lg flex items-center justify-center mr-4">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFA85B]">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become the global standard of creative innovation, where bold ideas meet flawless execution, 
              shaping the future of design and digital expression.
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] rounded-xl p-6 text-center hover:bg-[#333333] transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-[#6A7CFF]/50 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#6A7CFF] to-[#FFA85B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <User size={40} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#F6F5ED] group-hover:text-[#6A7CFF] transition-colors">
                  {member.name}
                </h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;