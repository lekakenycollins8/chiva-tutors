'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 mb-8 mt-8 text-sm font-medium text-blue-200 bg-blue-900/30 rounded-full backdrop-blur-sm"
        >
          <GraduationCap className="w-4 h-4 mr-2" />
          Welcome to Chiva TutorHub
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="max-w-4xl mb-6 text-4xl font-bold tracking-tight text-center text-white sm:text-5xl md:text-6xl md:leading-tight"
        >
          Unlock Your Potential with Expert Tutoring
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mb-8 text-xl text-center text-gray-300 md:text-2xl"
        >
          Personalized learning in Chemistry, Math, Business & Accounting to help you excel in your academic journey.
        </motion.p>

        {/* Tutor Introduction */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center mb-12 space-x-4"
        >
          <Image 
            src="/pfp.jpg" 
            alt="Charles"
            className="object-cover rounded-full"
            width={48}
            height={48}
          />
          <p className="text-lg text-gray-200">
            Hi, I&apos;m Charles, your expert tutor with 10 years of experience
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          variants={buttonVariants}
          whileHover="hover"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-colors bg-indigo-700 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Contact Us Today
          <ArrowRight className="w-5 h-5 ml-2" />
        </motion.a>

        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 gap-8 mt-16 sm:grid-cols-3 md:gap-12"
        >
          {[
            { label: 'Students Helped', value: '500+' },
            { label: 'Success Rate', value: '95%' },
            { label: 'Subjects', value: '4+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;