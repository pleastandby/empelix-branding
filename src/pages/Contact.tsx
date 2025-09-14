import React, { useState } from 'react';
import { Mail, Instagram, Youtube, Facebook, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would send the email here
    console.log('Form submitted:', formData);
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to bring your vision to life? Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#6A7CFF]">Contact Information</h2>
              
              <div className="flex items-center mb-6 p-4 bg-[#2a2a2a] rounded-lg border border-gray-700 hover:border-[#6A7CFF]/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6A7CFF] to-[#FFA85B] rounded-lg flex items-center justify-center mr-4">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F6F5ED]">Email</h3>
                  <a
                    href="mailto:empelixbranding@gmail.com"
                    className="text-[#6A7CFF] hover:text-[#FFA85B] transition-colors"
                  >
                    empelixbranding@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-[#FFA85B]">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/empelix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#6A7CFF] transition-all duration-300 transform hover:scale-110 border border-gray-700"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://youtube.com/empelix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#6A7CFF] transition-all duration-300 transform hover:scale-110 border border-gray-700"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://facebook.com/empelix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center hover:bg-[#6A7CFF] transition-all duration-300 transform hover:scale-110 border border-gray-700"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-[#FFA85B]">Send us a message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-500 mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#F6F5ED] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#212121] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6A7CFF] focus:border-transparent transition-all text-[#F6F5ED] placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#F6F5ED] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#212121] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6A7CFF] focus:border-transparent transition-all text-[#F6F5ED] placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#F6F5ED] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#212121] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#6A7CFF] focus:border-transparent transition-all text-[#F6F5ED] placeholder-gray-400 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;