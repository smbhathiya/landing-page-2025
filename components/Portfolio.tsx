'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'DigitalFlow transformed our online presence completely. Our organic traffic increased by 400% in just 6 months, and our conversion rates improved dramatically.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The team at DigitalFlow is exceptional. They not only delivered on their promises but exceeded our expectations. Our ROI has been incredible.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, EcoStyle',
      content: 'Working with DigitalFlow has been a game-changer for our business. Their strategic approach and attention to detail have helped us scale rapidly.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];



  return (
    <section id="portfolio" className="py-20 bg-white">
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
            Success Stories &
            <span className="block text-black">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses achieve remarkable growth and success through our digital marketing expertise.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                                 <Quote className="w-8 h-8 text-black mb-6" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                                     <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-black rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            Our Impact in Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
                             <div className="text-gray-200">Campaigns Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
                             <div className="text-gray-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
                             <div className="text-gray-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
                             <div className="text-gray-200">Avg. Traffic Increase</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 