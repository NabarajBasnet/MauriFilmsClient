import { Button } from "@/components/ui/button";
import React from "react";

export default function AboutUs() {
    return (
        <section className="relative bg-white">
            {/* Banner Section */}
            <div className="relative bg-cover bg-center h-[230px]" style={{ backgroundImage: "url('/aboutusheader.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-20 py-16">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mauri Films: Where Stories Come to Life</h2>
                    <p className="text-sm md:text-md font-semibold text-gray-600 max-w-2xl mx-auto">
                        Mauri Films is more than just a creative studio; it's a space where your cherished moments and unique ideas take center stage. Founded with the belief that every story deserves to be told beautifully, we specialize in capturing life's most meaningful events with artistry and flair.
                    </p>
                </div>

                {/* Mission & Values Section */}
                <div className="md:flex md:items-start gap-8">
                    {/* Image Section */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="/aboutusheader.jpg"
                            alt="Stories Come to Life"
                            className="shadow-xl w-full"
                        />
                    </div>
                    {/* Text Content Section */}
                    <div className="md:w-1/2 space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                            <p className="text-md text-gray-700 leading-relaxed mt-2">
                                To deliver stunning visual storytelling that reflects the essence of our clients' most significant milestones.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Our Values</h3>
                            <p className="text-md text-gray-700 leading-relaxed mt-2">
                                Creativity, authenticity, and an unwavering commitment to excellence. We believe in building connections and weaving unforgettable narratives that resonate with every audience.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Button className="hover:bg-transparent border-2 border-yellow-400 text-black hover:text-yellow-600 px-6 py-3 rounded-none p-4 hover:shadow-sm transition-all bg-yellow-400">
                                Book Your Date
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
