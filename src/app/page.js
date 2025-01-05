'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {

  const services = [
    {
      title: "Wedding Films",
      description: "Capturing the magic of your special day with elegance and detail.",
      image: "/aboutusheader.jpg",
    },
    {
      title: "Reception Coverage",
      description: "Relive the joy and celebrations of your post-wedding festivities.",
      image: "/aboutusheader.jpg",
    },
    {
      title: "Haldi/Mehendi Events",
      description: "Highlighting the vibrant traditions and heartfelt moments of pre-wedding rituals.",
      image: "/aboutusheader.jpg",
    },
    {
      title: "Bratabandha",
      description: "Documenting the sacred journey of coming-of-age ceremonies with cultural authenticity.",
      image: "/aboutusheader.jpg",
    },
    {
      title: "Pre-Wedding/Post-Wedding Shoots",
      description: "Showcasing your love story in captivating locations and settings.",
      image: "/aboutusheader.jpg",
    },
    {
      title: "Commercials",
      description: "Crafting impactful advertisements that resonate with your target audience.",
      image: "/aboutusheader.jpg",
    },
    {
      title: "Documentaries",
      description: "Telling compelling real-life stories with depth and emotion.",
      image: "/aboutusheader.jpg",
    },
    {
      title: "Short Films",
      description: "Creating artistic and engaging narratives with precision and style.",
      image: "/aboutusheader.jpg",
    },
  ];

  return (
    <div className="relative h-screen w-full bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to Mauri Films
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg font-semibold md:text-2xl mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Your Story, Our Creativity
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base font-semibold md:text-lg max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          At Mauri Films, we transform moments into memories and stories into timeless visuals. Whether it's a wedding, a cultural celebration, or a commercial venture, our creative team is here to bring your vision to life. Let us craft your narrative with passion and precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
        >
          <Button variant="destructive" className='rounded-none' size="lg">
            Our Portfolio
          </Button>
          <Button variant="outline" size="lg" className='text-black rounded-none hover:text-gray-700 transition-colors duration-300'>
            Contact Us
          </Button>
        </motion.div>
      </div>

      <div className='w-full flex justify-center min-h-screen items-center'>
        <div className='w-11/12'>
          <div className='grid grid-cols-4 gap-4'>
            {services.map((service, index) =>
              <div key={index}>
                <img src={service.image} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
