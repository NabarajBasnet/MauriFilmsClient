"use client";

import { motion } from 'framer-motion';
import { IoIosTime } from "react-icons/io";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
    const serviceOptions = [
        { category: "Weddings", items: ["Bride Side", "Groom Side", "Both Sides"] },
        { category: "Cultural Events", items: ["Reception Mehendi", "Engagement", "Pasni"] },
        { category: "Photography", items: ["Pre-Wedding Shoot", "Post-Wedding Shoot", "Birthday"] },
        { category: "Traditional Ceremonies", items: ["Bartabandha", "Belbibaha", "Guniyo Cholo"] },
        { category: "Corporate", items: ["Events", "Documentaries"] },
        { category: "Films", items: ["Short Films", "Documentaries"] },
        { value: "other", label: "Other" }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[250px] bg-cover bg-center" style={{ backgroundImage: "url('/images/6.jpg')" }}>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Let's Create Together
                    </motion.h1>
                </div>
            </div>

            {/* Contact Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold text-[#800000]">Get in Touch</h2>
                        <p className="text-lg text-gray-600">Have a project in mind? Let's discuss how we can bring your vision to life.</p>

                        <div className="space-y-6">
                            <motion.div
                                className="p-6 bg-white rounded-xl shadow-md"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <FaPhoneAlt className="text-[#800000] text-xl" />
                                    <h3 className="text-xl font-semibold">Contact Numbers</h3>
                                </div>
                                <p className="text-gray-600">+977 9868177119</p>
                                <p className="text-gray-600">+977 9800000000</p>
                            </motion.div>

                            <motion.div
                                className="p-6 bg-white rounded-xl shadow-md"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <FaEnvelope className="text-[#800000] text-xl" />
                                    <h3 className="text-xl font-semibold">Email Address</h3>
                                </div>
                                <p className="text-gray-600">maurinepal@gmail.com</p>
                            </motion.div>

                            <motion.div
                                className="p-6 bg-white rounded-xl shadow-md"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <FaMapMarkerAlt className="text-[#800000] text-xl" />
                                    <h3 className="text-xl font-semibold">Studio Address</h3>
                                </div>
                                <p className="text-gray-600">Imadol - 04, Lalitpur, Nepal</p>
                            </motion.div>

                            <motion.div
                                className="p-6 bg-white rounded-xl shadow-md"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <IoIosTime className="text-[#800000] text-xl" />
                                    <h3 className="text-xl font-semibold">Business Hours</h3>
                                </div>
                                <p className="text-gray-600">Sunday - Friday: 10 AM - 5 PM</p>
                                <p className="text-red-600 font-medium">Saturday: Closed</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="bg-white p-8 rounded-2xl shadow-xl"
                    >
                        <h3 className="text-3xl font-bold text-[#800000] mb-8">Send Us a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-lg font-medium mb-3">Service Interest</label>
                                <Select>
                                    <SelectTrigger className="w-full h-14">
                                        <SelectValue placeholder="Select service type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {serviceOptions.map((option, index) => (
                                            option.category ? (
                                                <SelectGroup key={index} label={option.category}>
                                                    {option.items.map((item, idx) => (
                                                        <SelectItem
                                                            key={idx}
                                                            value={`${option.category}-${item}`}
                                                        >
                                                            {item}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            ) : (
                                                <SelectItem key={index} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            )
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-3">Full Name</label>
                                <Input
                                    placeholder="Enter your full name"
                                    className="h-14 focus-visible:ring-[#800000]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-lg font-medium mb-3">Email Address</label>
                                    <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="h-14 focus-visible:ring-[#800000]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-lg font-medium mb-3">Phone Number</label>
                                    <Input
                                        type="tel"
                                        placeholder="+977 98XXXXXXXX"
                                        className="h-14 focus-visible:ring-[#800000]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-3">Your Message</label>
                                <Textarea
                                    placeholder="Describe your project or inquiry..."
                                    className="min-h-[150px] focus-visible:ring-[#800000]"
                                />
                            </div>

                            <Button
                                className="w-full h-14 bg-[#800000] hover:bg-[#600000] text-lg rounded-lg transition-all"
                                type="submit"
                            >
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <motion.div
                className="px-4 md:px-8 pb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4565198222667!2d85.33282757498846!3d27.703187676184896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194487783651%3A0xcbfa6f39863d05f6!2sThe%20Physique%20Workshop!5e0!3m2!1sen!2snp!4v1735902286633!5m2!1sen!2snp"
                        width="100%"
                        height="450"
                        loading="lazy"
                        className="border-0"
                    />
                </div>
            </motion.div>

            {/* CTA Section */}
            <section className="bg-[#800000] py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Prefer Direct Communication?
                    </h3>
                    <p className="text-lg text-white/90 mb-8">
                        Connect with us directly via WhatsApp for instant support
                    </p>
                    <a href="https://wa.me/+9779868177119" target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="outline"
                            className="bg-transparent text-white border-white hover:bg-white hover:text-[#800000] h-14 px-8 text-lg"
                        >
                            <FaWhatsapp className="text-6xl" />
                            Chat on WhatsApp
                        </Button>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;