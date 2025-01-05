'use client';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';

export default function HomePage() {
  const [galleryState, setGalleryState] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const images = [
    { id: 1, image: '/images/1.jpg' },
    { id: 2, image: '/images/2.jpg' },
    { id: 3, image: '/images/3.jpg' },
    { id: 4, image: '/images/4.jpg' },
    { id: 5, image: '/images/5.jpg' },
    { id: 6, image: '/images/6.jpg' },
    { id: 7, image: '/images/7.jpg' },
    { id: 8, image: '/images/8.jpg' },
    { id: 9, image: '/images/9.jpg' },
    { id: 10, image: '/images/10.jpg' },
    { id: 11, image: '/images/11.jpg' },
    { id: 12, image: '/images/12.jpg' },
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-screen w-full bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to Mauri Films
        </motion.h1>

        <motion.p
          className="text-lg font-semibold md:text-2xl mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Your Story, Our Creativity
        </motion.p>

        <motion.p
          className="text-base font-semibold md:text-lg max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          At Mauri Films, we transform moments into memories and stories into
          timeless visuals. Whether it's a wedding, a cultural celebration, or a
          commercial venture, our creative team is here to bring your vision to
          life. Let us craft your narrative with passion and precision.
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
        >
          <Button variant="destructive" className="rounded-none" size="lg">
            Our Portfolio
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-black rounded-none hover:text-gray-700 transition-colors duration-300"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      {galleryState && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setGalleryState(false)}
        >
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-75"
          ></div>

          {/* Modal Content */}
          <div
            className="relative bg-white w-11/12 md:w-3/4 lg:w-1/2 shadow-xl rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImageIndex].image}
              alt={`Image ${currentImageIndex + 1}`}
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div className="flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2">
              <button
                className="text-gray-600 hover:text-black bg-white rounded-full p-2 shadow-md"
                onClick={handlePrev}
              >
                <FaAngleLeft size={24} />
              </button>
              <button
                className="text-gray-600 hover:text-black bg-white rounded-full p-2 shadow-md"
                onClick={handleNext}
              >
                <FaAngleRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Gallery Grid */}
      <div className="w-full py-16">
        <h1 className="text-center mb-8 text-4xl font-bold">Our Galary</h1>
        <div className="w-full flex justify-center min-h-full items-center">
          <div className="w-10/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-96 bg-gray-200 overflow-hidden cursor-pointer"
                  onClick={() => {
                    setGalleryState(true);
                    setCurrentImageIndex(index);
                  }}
                >
                  <Image
                    src={image.image}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
