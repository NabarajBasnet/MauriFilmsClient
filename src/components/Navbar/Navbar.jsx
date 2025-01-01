'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/" className="hover:text-gray-600">
                        BrandName
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    {['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'].map((page) => (
                        <li key={page}>
                            <Link
                                href={`/${page.toLowerCase().replace(/\\s+/g, '-')}`}
                                className="text-gray-700 hover:text-gray-900 transition"
                            >
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    {['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'].map((page) => (
                        <li key={page} className="py-2 px-6">
                            <Link
                                href={`/${page.toLowerCase().replace(/\\s+/g, '-')}`}
                                className="block text-gray-700 hover:text-gray-900 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
