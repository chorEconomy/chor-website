'use client';
import { useState, useEffect } from 'react'; // Import useEffect
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/assets/img1.png',
  '/assets/img2.png',
  '/assets/img3.png',
  '/assets/img4.png',
  '/assets/img5.png',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Automatically go to the next image
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const getPosition = (index: number) => {
    const total = images.length;
    const offset = (index - currentIndex + total) % total;

    switch (offset) {
      case 0:
        return { scale: 1, opacity: 1, zIndex: 10, x: '0%' }; // Center image
      case 1:
        return { scale: 0.9, opacity: 0.8, zIndex: 5, x: '20%' }; // Right image
      case 2:
        return { scale: 0.8, opacity: 0.6, zIndex: 1, x: '40%' }; // Far-right
      case total - 1:
        return { scale: 0.9, opacity: 0.8, zIndex: 5, x: '-20%' }; // Left image
      case total - 2:
        return { scale: 0.8, opacity: 0.6, zIndex: 1, x: '-40%' }; // Far-left
      default:
        return { scale: 0.5, opacity: 0, zIndex: 0, x: '0%' }; // Hidden images
    }
  };

  return (
    <>
      <div className="text-center pb-4">
        <div className="flex justify-center items-center gap-1">
          <span className="bg-[#008080] w-3 h-2 block"></span>
          <p className="font-semibold text-lg">Visuals</p>
        </div>
        <h2 className="font-sub-heading !text-[#008080]">App Screenshots</h2>
      </div>
      <div className="flex items-center justify-center w-full h-[80vh] md:h-screen bg-[#FEFEFE]">
        <div className="relative flex items-center justify-center w-full max-w-7xl py-6 md:py-8  lg:py-10 overflow-hidden">
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-5 bg-gray-200 p-2 rounded-full z-20 hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft />
          </button>

          {/* Image Container */}
          <div className="relative flex items-center justify-center w-full md:w-[1600px] h-[500px] md:h-[900px]">
            {images.map((src, index) => {
              const { scale, opacity, zIndex, x } = getPosition(index);

              return (
                <motion.img
                  key={index}
                  src={src}
                  alt="App Screenshot"
                  className="absolute rounded-lg w-[300px] h-[500px] md:w-[600px] md:h-[800px]"
                  style={{
                    zIndex,
                    objectFit: 'cover',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity, scale, x }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-5 bg-[#008080] text-white p-2 rounded-full z-20 hover:bg-gray-300 transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
