'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: '10+ years of digital marketing experience. Former Google Ads specialist with a passion for data-driven strategies.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@abc.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategy',
      image: '/api/placeholder/300/300',
      bio: 'Strategic marketing expert with expertise in SEO, content marketing, and conversion optimization.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@abc.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      image: '/api/placeholder/300/300',
      bio: 'Award-winning creative professional specializing in brand development and visual storytelling.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@abc.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Technical Lead',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer and technical SEO expert with deep knowledge of web performance and user experience.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@abc.com'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'PPC Specialist',
      image: '/api/placeholder/300/300',
      bio: 'Google Ads certified professional with 8+ years optimizing campaigns for maximum ROI.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@abc.com'
      }
    },
    {
      name: 'Alex Morgan',
      role: 'Content Strategist',
      image: '/api/placeholder/300/300',
      bio: 'Content marketing expert with a background in journalism and digital storytelling.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@abc.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="block text-black">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of digital marketing professionals brings together diverse expertise 
            to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Team Member Image */}
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-400">
                  {member.name.charAt(0)}
                </div>
              </div>

              {/* Team Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-black font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.social.linkedin}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href={member.social.twitter}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Work with Our Team?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Let&rsquo;s discuss your project and see how our expert team can help you achieve your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 