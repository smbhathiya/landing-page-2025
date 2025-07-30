'use client';

import { motion } from 'framer-motion';
import { Search, BarChart3, Share2, PenTool, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: BarChart3,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns across Google Ads, Facebook, and other platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Remarketing', 'Conversion Tracking']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience and increase brand awareness through strategic social media campaigns.',
      features: ['Content Strategy', 'Community Management', 'Paid Social', 'Analytics']
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives engagement and conversions.',
      features: ['Blog Writing', 'Video Content', 'Infographics', 'Email Marketing']
    },
    {
      icon: Smartphone,
      title: 'Web Design & Development',
      description: 'Build stunning, high-converting websites that provide exceptional user experiences and drive results.',
      features: ['Responsive Design', 'UX/UI Design', 'E-commerce', 'Performance Optimization']
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes and nurture leads automatically with smart automation tools.',
      features: ['Email Automation', 'Lead Scoring', 'CRM Integration', 'Analytics Dashboard']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Digital Marketing
            <span className="block text-black">
              Services
            </span>
          </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital marketing solutions designed to grow your business 
              and achieve measurable results in today&rsquo;s competitive landscape.
            </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                                     <li key={feature} className="flex items-center text-gray-700">
                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                     {feature}
                   </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Let&rsquo;s discuss how our digital marketing services can help you achieve your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 