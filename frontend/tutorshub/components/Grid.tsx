"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data/index';

const Grid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-maroon-900 to-gray-950">
      {/* Header Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-blue-200 bg-blue-900/30 rounded-full">
          <Sparkles className="w-4 h-4 mr-2" />
          Expert Tutoring Services
        </motion.div>
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400"
        >
          Our Subjects
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg text-gray-300"
        >
          Comprehensive tutoring in key academic areas to help you excel
        </motion.p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <BentoGrid>
          {gridItems.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                topics={item.topics}
                levels={item.levels}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mt-24"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/20 backdrop-blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              I tailor tutoring sessions to meet your specific needs, focusing on areas where you need the most support. Whether you&apos;re studying for an exam, working on assignments, or need to clarify concepts, I&apos;m here to guide you through every topic in detail.
            </p>
            
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Grid;