'use client';

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTiktok } from "react-icons/fa";
import { CheckIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import { CameraIcon, VideoIcon, BrushIcon, UsersIcon, StarIcon, CalendarIcon } from 'lucide-react';
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

  const packages = [
    { title: "Basic", price: "100", features: ["HD Video", "Basic Editing"] },
    { title: "Premium", price: "250", features: ["4K Video", "Advanced Editing", "Drone Shots"], popular: true },
    { title: "Custom", price: "Custom", features: ["Tailored Packages", "Videography Add-ons", "Extended Editing"] }
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
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

          <motion.p
            style={{ fontFamily: "BebasNeue-Regular", letterSpacing: '0.3rem' }}
            className="text-md m-4 text-white md:text-lg font-bold"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            YOUR STORY, OUR CREATIVITY
          </motion.p>

          <motion.div
            variants={floatingVariants}
            initial="float"
            animate="float"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'circOut' }}>

              <motion.h1
                className='flex items-center space-x-1 md:space-x-7'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'circOut' }}
              >
                <motion.span
                  style={{ fontFamily: "BebasNeue-Regular", letterSpacing: '0.05em' }}
                  className="text-6xl md:text-[12rem] font-bold tracking-wide"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'circOut' }}
                >
                  WELCOME
                </motion.span>
                <motion.span
                  style={{ fontFamily: "Courgette-Regular" }}
                  className="text-5xl md:text-[12rem] italic font-bold tracking-wide"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'circOut' }}
                >to</motion.span>
              </motion.h1>

              <motion.h1
                style={{ fontFamily: "BebasNeue-Regular", letterSpacing: '0.05em' }}
                className="text-6xl md:text-[12rem] font-bold mb-6 md:mb-0 tracking-wide"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'circOut' }}
              >
                MAURI FILMS
              </motion.h1>
            </motion.div>

            <motion.div
              className="w-full flex justify-center m-6 items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              <motion.div className="flex space-x-6 text-white">
                <Link href="#" aria-label="Facebook">
                  <FaFacebookF className="w-6 h-6 hover:text-white" />
                </Link>
                <Link href="#" aria-label="TikTok">
                  <FaTiktok className="w-6 h-6 hover:text-white" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <FaInstagram className="w-6 h-6 hover:text-white" />
                </Link>
                <Link href="#" aria-label="YouTube">
                  <FaYoutube className="w-6 h-6 hover:text-white" />
                </Link>
                <Link href="#" aria-label="Pinterest">
                  <FaPinterestP className="w-6 h-6 hover:text-white" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-3xl font-poppins"
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

            <motion.div
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              <div className="flex space-x-4">
                <Button
                  onClick={() => router.push('/portfolio')}
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
      {/* Services Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#800000]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
            <div className="mt-2 w-24 h-1 bg-[#800000] mx-auto"></div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CameraIcon, title: "Photography", description: "Wedding, Portrait, Event & Commercial Photography" },
              { icon: VideoIcon, title: "Videography", description: "Cinematic Wedding Films & Corporate Videos" },
              { icon: BrushIcon, title: "Editing", description: "Professional Photo Retouching & Video Editing" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-12 h-12 text-[#800000] mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
            <div className="mt-2 w-24 h-1 bg-[#800000] mx-auto"></div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "John Doe", role: "Lead Photographer", image: "/images/1.jpg" },
              { name: "Jane Smith", role: "Videographer", image: "/images/2.jpg" },
              { name: "Mike Johnson", role: "Editor", image: "/images/3.jpg" },
              { name: "Sarah Williams", role: "Studio Manager", image: "/images/4.jpg" }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={member.image}
                  width={400}
                  height={500}
                  className="w-full h-96 object-cover"
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-200">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#800000]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client Testimonials
            <div className="mt-2 w-24 h-1 bg-[#800000] mx-auto"></div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Absolutely stunning work! Mauri Films captured our wedding perfectly.", author: "Emily & Robert" },
              { text: "Professional team with amazing attention to detail. Highly recommend!", author: "Sarah Johnson" },
              { text: "Best investment we made for our corporate event. Exceptional quality!", author: "Tech Corp Inc." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <StarIcon className="w-8 h-8 text-[#800000] mb-4" />
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-[#800000]">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Packages
            <div className="mt-2 w-24 h-1 bg-[#800000] mx-auto"></div>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((packaged, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl shadow-lg ${packaged.popular ? "border-2 border-[#800000]" : "border border-gray-200"
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {packaged.popular && (
                  <div className="absolute top-0 right-0 bg-[#800000] text-white px-4 py-1 rounded-tr-xl rounded-bl-2xl">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{packaged.title}</h3>
                <div className="text-4xl font-bold text-[#800000] mb-6">
                  ${packaged.price}{!isNaN(packaged.price) && <span className="text-lg">/event</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {packaged.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-[#800000] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/+9779868177119" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                    Book Now
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-[#800000]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch
            <div className="mt-2 w-24 h-1 bg-[#800000] mx-auto"></div>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPinIcon className="w-6 h-6 text-[#800000] mr-3" />
                      <span>Imadol - 04, lalitpur</span>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="w-6 h-6 text-[#800000] mr-3" />
                      <span>+977 9868177119</span>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="w-6 h-6 text-[#800000] mr-3" />
                      <span>maurinepal@gmail.com</span>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full focus:outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full focus:outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full focus:outline-none p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};