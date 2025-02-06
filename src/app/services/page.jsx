'use client';

import { CameraIcon, HeartIcon, UsersIcon, FilmIcon, CalendarIcon, BriefcaseIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer/Footer';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Weddings",
            description: "Capture every magical moment of your special day with our cinematic storytelling",
            image: "/images/9.jpg",
            icon: HeartIcon,
            features: ["Full-Day Coverage", "4K Cinematic Film", "Custom Photo Album", "Drone Coverage"]
        },
        {
            title: "Bartabandha",
            description: "Document your sacred ceremonies with cultural authenticity and modern flair",
            image: "/images/8.jpg",
            icon: UsersIcon,
            features: ["Traditional Rituals", "Family Portraits", "Cultural Documentation", "Custom Editing"]
        },
        {
            title: "Pre/Post Wedding",
            description: "Create timeless memories with bespoke pre and post-wedding sessions",
            image: "/images/10.jpg",
            icon: CameraIcon,
            features: ["Location Shoots", "Themed Sessions", "Candid Photography", "Advanced Editing"]
        },
        {
            title: "Corporate Events",
            description: "Professional coverage for conferences, product launches, and corporate milestones",
            image: "/images/1.jpg",
            icon: BriefcaseIcon,
            features: ["Multi-Camera Setup", "Branded Content", "Executive Portraits", "Social Media Clips"]
        },
        {
            title: "Documentaries",
            description: "Craft compelling narratives for social impact and historical preservation",
            image: "/images/12.jpg",
            icon: FilmIcon,
            features: ["Research Support", "Cinematic Interviews", "Archival Footage", "Post-Production"]
        },
        {
            title: "Short Films",
            description: "Bring creative visions to life with professional film production services",
            image: "/images/6.jpg",
            icon: CalendarIcon,
            features: ["Script Development", "Professional Casting", "Location Scouting", "Full Post-Production"]
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[250px] bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/2.jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Our Professional Services
                    </motion.h1>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4">
                            Comprehensive Visual Solutions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From intimate ceremonies to large-scale productions, we deliver exceptional visual storytelling tailored to your needs
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                {/* Image Section */}
                                <div className="relative h-64">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <service.icon className="w-12 h-12 text-white" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 bg-white">
                                    <div className="flex items-center gap-3 mb-4">
                                        <service.icon className="w-8 h-8 text-[#800000]" />
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <ul className="grid grid-cols-2 gap-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm">
                                                <span className="w-2 h-2 bg-[#800000] mr-2 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="https://wa.me/+9779868177119" target="_blank" rel="noopener noreferrer">
                                        <Button className="w-full bg-[#800000] hover:bg-[#600000]">
                                            Book Now
                                        </Button>
                                    </a>
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
                        Custom Packages Available
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Need something tailored? Let's create a personalized package for your unique requirements
                    </p>
                    <Button
                        variant="outline"
                        className="bg-transparent text-white border-white hover:bg-white hover:text-[#800000]"
                    >
                        Request Custom Quote
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;