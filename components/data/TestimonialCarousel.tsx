'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah M',
    role: 'Dad of Two',
    image: '/assets/t1.png',
    review:
      'Chore App changed our family. Kids are more responsible, and managing tasks is easier!',
    rating: 5,
  },
  {
    name: 'James T',
    role: 'Dad of 2',
    image: '/assets/t2.png',
    review:
      'Chore App means no more nagging. The kids enjoy earning rewards, and I enjoy the peace!',
    rating: 5,
  },
  {
    name: 'Emily R',
    role: 'Mom of Three',
    image: '/assets/t1.png',
    review:
      'This app teaches responsibility in a fun way. Highly recommend for busy parents!',
    rating: 5,
  },
  {
    name: 'Emily R',
    role: 'Mom of Three',
    image: '/assets/t1.png',
    review:
      'This app teaches responsibility in a fun way. Highly recommend for busy parents!',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the carousel container
  const testimonialRef = useRef<HTMLDivElement>(null); // Ref for a single testimonial

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically go to the next slide
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  // Calculate the width of a single testimonial
  const getTestimonialWidth = () => {
    if (testimonialRef.current) {
      return testimonialRef.current.offsetWidth;
    }
    return 0;
  };

  // Calculate the translateX value based on the current index and testimonial width
  const getTranslateX = () => {
    const testimonialWidth = getTestimonialWidth();
    return -currentIndex * (testimonialWidth + 20); // 20px is the gap between testimonials
  };

  return (
    <section className="bg-[#FAFAFA] mt-[100px] py-14">
      <div className="text-center pb-10 md:pb-14">
        <div
          className=" flex justify-center items-center gap-1
        "
        >
          <span className="bg-[#008080] w-3  h-2 block"></span>
          <p className="font-semibold text-lg"> Visuals</p>
        </div>

        <h2 className="font-sub-heading !text-[#008080]">Testimonials</h2>
      </div>
      <div className="relative  flex gap-4 flex-col items-start w-full px-5 py-10 lg:flex-row lg:items-center lg:px-20">
        {/* Left Section */}
        <div className="w-full mb-6 lg:w-1/3 lg:mb-0">
          <p className="text-[#008080] font-semibold">Client Feedback</p>
          <h2 className="text-xl font-bold md:text-2xl">
            What They Say After Using Our App
          </h2>
          <p className="text-gray-500 mt-2">
            Many of our members have started their early careers with us
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center mt-4 space-x-3">
            <button onClick={prevSlide} className="p-2 bg-gray-200 rounded-lg">
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-[#008080] text-white rounded-lg"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div
          ref={containerRef}
          className="relative w-full lg:w-2/3 overflow-hidden"
        >
          <div
            className="flex space-x-5 transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(${getTranslateX()}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? testimonialRef : null} // Attach ref to the first testimonial
                className={`w-[300px] md:w-[350px] p-5 bg-white rounded-lg shadow-md flex-shrink-0 ${
                  index === currentIndex
                    ? 'border-4 shadow-custom border-[#008080]'
                    : ''
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Rating */}
                <div className="flex mb-2 text-orange-500">
                  {'★'.repeat(testimonial.rating)}
                </div>
                {/* Review */}
                <p className="text-gray-700">{testimonial.review}</p>
                {/* User Info */}
                <div className="flex items-center mt-4">
                  <Image
                    src={testimonial.image}
                    width={40}
                    height={40}
                    alt={testimonial.name}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
