'use client';

import Image from 'next/image';
import heroImg from '../../public/assets/heroImg.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Increased stagger delay
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Slower fade and slide
        ease: 'easeOut',
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8, // Slower scale and fade
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1, // Slower slide-in
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="hero grid gap-8 align-element md:mt-11"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section */}
      <motion.div variants={childVariants}>
        <div className="mb-12">
          <div className="flex">
            {/* Star and Ellipse Animations */}
            <motion.div variants={starVariants}>
              <Image
                src="/assets/Star3.svg"
                className="mt-10 mr-16 block"
                width={40}
                height={40}
                alt="elipse"
              />
            </motion.div>
            <motion.div variants={starVariants}>
              <Image
                className="mr-[70px]"
                src="/assets/Ellipse-8.svg"
                width={30}
                height={30}
                alt="elipse"
              />
            </motion.div>
            <motion.div variants={starVariants}>
              <Image
                className="translate-y-[20px] md:translate-x-[20px]"
                src="/assets/Ellipse-8.svg"
                width={30}
                height={30}
                alt="elipse"
              />
            </motion.div>
            <motion.div variants={starVariants}>
              <Image
                className="translate-y-[70px] md:translate-x-[120px]"
                src="/assets/Star2.svg"
                width={40}
                height={40}
                alt="elipse"
              />
            </motion.div>
          </div>
        </div>

        {/* Text Animations */}
        <div className="text-center md:text-left">
          <motion.h1 className="font-heading" variants={childVariants}>
            Manage Chores.
            <br /> Teach Responsibility
          </motion.h1>
          <motion.p
            className="font-sub-heading !text-[#008080]"
            variants={childVariants}
          >
            Build Better Habits.
          </motion.p>
          <motion.p
            className="mt-4 md:text-lg text-[#383838]"
            variants={childVariants}
          >
            Chore Economy helps you organize tasks, guide your kids toward
            responsibility, and track their progress all in one place.
          </motion.p>
        </div>

        {/* Button Animations */}
        <motion.div
          className="flex flex-wrap items-center  justify-center md:justify-start gap-7 mt-8"
          variants={childVariants}
        >
          <div className="relative">
            <div className="absolute top-[2px] left-[2px] w-full h-full border-2 border-black bg-black rounded-[14px]"></div>
            <button className="primary-btn !bg-[#008080] !text-white">
              Download app
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-[2px] left-[2px] w-full h-full border-2 border-black rounded-[14px]"></div>
            <button className="primary-btn">Try it Risk-free</button>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div variants={imageVariants}>
        <Image
          src={heroImg}
          className="h-[600px] object-contain w-full"
          alt="chore mockup"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
