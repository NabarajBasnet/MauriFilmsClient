'use client';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer/Footer';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const getRandomDelay = () => Math.random() * 0.5;

export default function HomePage() {
  const [galleryState, setGalleryState] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const router = useRouter();
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, margin: "0px 0px -100px 0px" });

  const images = [
    { id: 2, image: '/images/2.jpg' },
    { id: 3, image: '/images/3.jpg' },
    { id: 4, image: '/images/4.jpg' },
    { id: 5, image: '/images/5.jpg' },
    { id: 6, image: '/images/6.jpg' },
    { id: 7, image: '/images/7.jpg' },
    { id: 8, image: '/images/8.jpg' },
    { id: 9, image: '/images/9.jpg' },
];

  const galleryDelays = images.map((_, i) => i * 0.1 + getRandomDelay());

  const handleKeyDown = (e) => {
    if (galleryState) {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setGalleryState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryState, currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.div
            variants={floatingVariants}
            initial="float"
            animate="float"
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 font-playfair tracking-wide"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'circOut' }}
            >
              Welcome to Mauri Films
            </motion.h1>
          </motion.div>

          <motion.div
            className="max-w-3xl space-y-6 font-poppins"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.5
                }
              }
            }}
          >
            <motion.p
              className="text-lg md:text-2xl mb-8 font-medium italic"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              Your Story, Our Creativity
            </motion.p>

            <motion.div
              className="flex flex-col space-y-4 items-center"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              <motion.p
                className="text-sm md:text-lg max-w-2xl mb-10 font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                At Mauri Films, we transform moments into memories and stories into
                timeless visuals. Whether it's a wedding, a cultural celebration, or a
                commercial venture, our creative team is here to bring your vision to
                life. Let us craft your narrative with passion and precision.
              </motion.p>

              <div className="flex space-x-4 font-raleway">
                <Button
                  className="rounded-none hover:bg-[#800000] bg-[#800000] px-8 py-6 font-semibold tracking-wide"
                  size="lg"
                >
                  Our Portfolio
                </Button>
                <a href="https://wa.me/+9779868177119" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-black rounded-none hover:text-gray-700 transition-colors duration-300 border-white hover:border-gray-300 px-8 py-6 font-semibold tracking-wide"
                  >
                    Contact Us
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
            <div className="mt-2 w-24 h-1 bg-[#800000] mx-auto"></div>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative w-full h-96 bg-gray-200 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: galleryDelays[index], duration: 0.5 }}
                onClick={() => {
                  setGalleryState(true);
                  setCurrentImageIndex(index);
                }}
              >
                <Image
                  src={image.image}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {galleryState && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-7xl h-[90vh]">
              <motion.div
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
              >
                <button
                  className="p-4 text-white hover:text-[#800000] transition-all"
                  onClick={handlePrev}
                >
                  <FaAngleLeft size={40} />
                </button>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
              >
                <button
                  className="p-4 text-white hover:text-[#800000] transition-all"
                  onClick={handleNext}
                >
                  <FaAngleRight size={40} />
                </button>
              </motion.div>

              <motion.div
                className="h-full w-full flex items-center justify-center"
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[currentImageIndex]?.image}
                  alt={`Selected Image`}
                  width={1200}
                  height={800}
                  className="object-contain h-full w-full"
                />
              </motion.div>
            </div>

            <button
              className="absolute top-8 right-8 text-white text-2xl hover:text-[#800000]"
              onClick={() => setGalleryState(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};