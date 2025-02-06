'use client';

import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { UsersIcon, FilmIcon, CameraIcon, TrophyIcon, HeartIcon } from "lucide-react";

export default function AboutUs() {
    const stats = [
        { number: "500+", label: "Events Captured" },
        { number: "15+", label: "Industry Awards" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "10+", label: "Years Experience" },
    ];

    const values = [
        { icon: HeartIcon, title: "Passion-Driven", text: "We breathe life into every frame with genuine enthusiasm" },
        { icon: TrophyIcon, title: "Excellence", text: "Award-winning quality in every project we undertake" },
        { icon: UsersIcon, title: "Collaboration", text: "Your vision + our expertise = magic" },
        { icon: CameraIcon, title: "Innovation", text: "Always pushing creative boundaries" },
    ];

    return (
        <section className="relative bg-white">
            {/* Hero Banner */}
            <div className="relative h-[400px] bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/about-banner.jpg')" }}>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Crafting Visual Legacies
                    </motion.h1>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">

                {/* Intro Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#800000]">
                        Your Story, Our Artistry
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        At Mauri Films, we don't just capture moments - we transform them into timeless visual narratives.
                        Born from a passion for storytelling and technical excellence, we've been crafting cinematic memories
                        that resonate across generations since 2012.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#800000] text-white p-6 text-center rounded-lg shadow-lg"
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-3xl font-bold mb-2">{stat.number}</div>
                            <div className="text-sm font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Mission Section */}
                <div className="md:flex gap-12 items-center mb-16">
                    <motion.div
                        className="md:w-1/2 mb-8 md:mb-0"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    >
                        <img
                            src="/team-working.jpg"
                            alt="Our Team"
                            className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                        />
                    </motion.div>

                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#800000] mb-4">Our Philosophy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We believe every frame should tell a story, every sequence should evoke emotion,
                                and every project should push creative boundaries. Our approach combines technical
                                mastery with artistic intuition, ensuring your memories are preserved as works of art.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#800000] mb-4">Why Choose Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <FilmIcon className="w-6 h-6 text-[#800000] mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Cinematic Storytelling</h4>
                                        <p className="text-gray-600">Hollywood-inspired narrative techniques</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CameraIcon className="w-6 h-6 text-[#800000] mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Cutting-Edge Technology</h4>
                                        <p className="text-gray-600">4K resolution & advanced stabilization</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="py-16 bg-gray-50 rounded-xl">
                    <h3 className="text-3xl font-bold text-center text-[#800000] mb-12">
                        Core Values
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8 px-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md text-center"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <value.icon className="w-12 h-12 text-[#800000] mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                                <p className="text-gray-600">{value.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#800000] mb-6">
                        Ready to Create Magic Together?
                    </h3>
                    <Button
                        className="bg-[#800000] hover:bg-[#600000] px-8 py-6 text-lg rounded-none"
                    >
                        Start Your Journey
                    </Button>
                </motion.div>
            </div>

            <Footer />
        </section>
    );
}