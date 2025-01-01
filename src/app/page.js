'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AboutUs from './aboutus/page';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/homepage.jpg')" }}>
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

      <AboutUs />
      <Footer />
    </div>
  );
}
