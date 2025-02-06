'use client';

import { motion } from 'framer-motion';
import { CameraIcon, FilmIcon, HeartIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

const Portfolio = () => {
    const portfolioItems = [
        {
            title: "Weddings & Receptions",
            description: "Glimpse into the magical celebrations we've immortalized.",
            image: "/images/4.jpg",
            icon: HeartIcon,
            stats: ["200+ Weddings", "4K Cinematic Films", "Custom Albums"]
        },
        {
            title: "Cultural Ceremonies",
            description: "View our vibrant documentation of traditional events.",
            image: "/images/5.jpg",
            icon: UsersIcon,
            stats: ["50+ Ceremonies", "Traditional Storytelling", "Cultural Expertise"]
        },
        {
            title: "Commercial Projects",
            description: "Experience the impact of our branded content.",
            image: "/images/3.jpg",
            icon: CameraIcon,
            stats: ["100+ Brands", "Corporate Videos", "Product Photography"]
        },
        {
            title: "Documentaries & Short Films",
            description: "Dive into the captivating stories we've brought to life.",
            image: "/images/7.jpg",
            icon: FilmIcon,
            stats: ["20+ Projects", "Award-Winning", "Social Impact"]
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[250px] bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/6.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Our Creative Journey
                    </motion.h1>
                </div>
            </div>

            {/* Portfolio Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4">
                            Portfolio Showcase
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our diverse portfolio that showcases our passion for visual storytelling across various genres and styles.
                        </p>
                    </motion.div>

                    {/* Portfolio Items */}
                    <div className="space-y-20">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 h-[400px] relative group overflow-hidden rounded-xl shadow-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-white/90 text-[#800000] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
                                            View Gallery
                                        </button>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <item.icon className="w-10 h-10 text-[#800000]" />
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {item.stats.map((stat, i) => (
                                            <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                                <p className="text-sm text-gray-600">{stat}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#800000] py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Create Something Amazing?
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Let's discuss how we can bring your vision to life with our creative expertise.
                    </p>
                    <a href="https://wa.me/+9779868177119" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-[#800000] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Start Your Project
                        </button>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Portfolio;