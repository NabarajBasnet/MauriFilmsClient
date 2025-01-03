import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Services = () => {
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
        <div>
            <div className="relative bg-cover bg-center h-[230px]" style={{ backgroundImage: "url('/aboutusheader.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-3xl md:text-6xl font-bold text-white">Services</h1>
                </div>
            </div>
            <section className="bg-white py-16 px-20">
                <div className="container mx-auto">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
                            >

                                {/* Image Content */}
                                <div className="relative md:w-1/2 w-full h-96">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-none shadow-xl"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="md:w-1/2">
                                    <h2 className="text-2xl text-center md:text-start font-bold">{service.title}</h2>
                                    <p className="text-sm my-4 font-semibold text-gray-700 leading-relaxed">{service.description}</p>
                                    <Button className="px-10 bg-gradient-to-r from-black via-gray-700 to-gray-500 hover:bg-gradient-to-l hover:from-black hover:via-gray-700 hover:to-gray-500 rounded-none transition-all duration-500 my-10 py-4">BOOK DATE</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
