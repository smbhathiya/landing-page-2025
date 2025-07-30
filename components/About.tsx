'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Industry Awards',
      description: 'Recognized as a top digital marketing agency for 3 consecutive years'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of combined experience'
    },
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'Results-focused approach with measurable ROI for every campaign'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 300% increase in organic traffic for our clients'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About
                          <span className="block text-black">
              ABC
            </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2018, abc has been at the forefront of digital marketing innovation, 
              helping businesses of all sizes achieve remarkable growth through strategic digital solutions.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to empower businesses with cutting-edge digital marketing strategies that 
              not only drive traffic and conversions but also build lasting relationships with their audiences. 
              We believe in the power of data-driven decisions and creative storytelling.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative bg-black rounded-3xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Our Success Story
                </h3>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Campaigns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">200+</div>
                    <div className="text-blue-100">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <div className="text-blue-100">Years</div>
                  </div>
                </div>
                <p className="text-lg opacity-90">
                  &ldquo;We&rsquo;ve helped businesses achieve remarkable growth through innovative digital strategies and unwavering commitment to results.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
            >
                              <div className="text-3xl font-bold text-black">300%</div>
              <div className="text-sm text-gray-600">Avg. Traffic Increase</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
            >
                              <div className="text-3xl font-bold text-black">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                             <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Target className="w-8 h-8 text-black" />
               </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Results-Driven</h4>
              <p className="text-gray-600">
                We focus on delivering measurable results that directly impact your business growth and success.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                             <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Users className="w-8 h-8 text-black" />
               </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Client-First</h4>
              <p className="text-gray-600">
                Your success is our priority. We build lasting partnerships based on trust, transparency, and mutual growth.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                             <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <TrendingUp className="w-8 h-8 text-black" />
               </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h4>
              <p className="text-gray-600">
                We stay ahead of industry trends and leverage cutting-edge technologies to give you a competitive edge.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 