import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
    const portfolioItems = [
        {
            title: "Weddings & Receptions",
            description: "Glimpse into the magical celebrations we’ve immortalized.",
            image: "/aboutusheader.jpg",
        },
        {
            title: "Cultural Ceremonies",
            description: "View our vibrant documentation of traditional events.",
            image: "/aboutusheader.jpg",
        },
        {
            title: "Commercial Projects",
            description: "Experience the impact of our branded content.",
            image: "/aboutusheader.jpg",
        },
        {
            title: "Documentaries & Short Films",
            description: "Dive into the captivating stories we’ve brought to life.",
            image: "/aboutusheader.jpg",
        },
    ];

    return (
        <div>
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center h-[230px]"
                style={{ backgroundImage: "url('/aboutusheader.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-3xl md:text-6xl font-bold text-white">Portfolio</h1>
                </div>
            </div>

            {/* Portfolio Section */}
            <section className="bg-white py-16 px-4 md:px-20">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12">Portfolio</h1>
                    <p className="text-center text-md mb-16 max-w-3xl mx-auto">
                        Our portfolio speaks to the creativity and quality we bring to every project. Explore our work in the following categories:
                    </p>

                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Section */}
                            <div className={`space-y-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <h2 className="text-2xl text-center md:text-start font-bold">{item.title}</h2>
                                <p className="text-sm leading-relaxed text-center md:text-start">{item.description}</p>
                            </div>

                            {/* Image Section */}
                            <div className="relative w-full h-96">
                                <Image
                                    src={"/aboutusheader.jpg"}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-none shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
