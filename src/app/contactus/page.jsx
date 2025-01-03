"use client";

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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <div className="relative bg-cover bg-center h-[230px]" style={{ backgroundImage: "url('/aboutusheader.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-3xl md:text-6xl font-bold text-white">Contact Us</h1>
                </div>
            </div>

            <section className="bg-gray-100 py-16 px-4 md:px-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-sm mb-6">We’d love to hear from you! Reach out to us to discuss your next project:</p>

                        <div className="space-y-4">
                            <h1 className="text-xl font-bold">Numbers</h1>
                            <div className="flex items-center space-x-4">
                                <FaPhoneAlt className="text-gray-600 text-xl" />
                                <span className="text-sm">9868177119</span>
                            </div>

                            <h1 className="text-xl font-bold">Email</h1>
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-gray-600 text-xl" />
                                <span className="text-sm">maurinrpal@gmail.com</span>
                            </div>

                            <h1 className="text-xl font-bold">Address</h1>
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-gray-600 text-xl" />
                                <span className="text-sm">Imadol-04, Lalitpur</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="interest" className="block text-lg font-medium mb-2">
                                    I'm interested in:
                                </label>

                                <Select>
                                    <SelectTrigger className="w-full py-6 shadow-sm">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="wedding-bride-side">Wedding - Bride Side</SelectItem>
                                            <SelectItem value="wedding-groom-side">Wedding - Groom Side</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-lg font-medium mb-2">
                                    Name
                                </label>
                                <Input id="name" placeholder="Your name" className="w-full py-6 shadow-sm" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-medium mb-2">
                                    Email
                                </label>
                                <Input id="email" placeholder="Your email" type="email" className="py-6 w-full shadow-sm" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-lg font-medium mb-2">
                                    Phone Number
                                </label>
                                <Input id="phone" placeholder="Your phone number" type="tel" className="py-6 w-full shadow-sm" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-medium mb-2">
                                    Comment or Message
                                </label>
                                <Textarea id="message" placeholder="Your message" className="w-full shadow-sm" rows={5} />
                            </div>

                            <Button className="w-full rounded-none bg-black text-white py-6 text-lg font-medium">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4565198222667!2d85.33282757498846!3d27.703187676184896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194487783651%3A0xcbfa6f39863d05f6!2sThe%20Physique%20Workshop!5e0!3m2!1sen!2snp!4v1735902286633!5m2!1sen!2snp" width="100%" height="450" loading="lazy"></iframe>

        </div>
    );
};

export default Contact;
