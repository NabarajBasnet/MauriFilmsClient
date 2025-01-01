'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Array of paths and their corresponding labels
    const links = [
        { path: '/', label: 'Home' },
        { path: '/aboutus', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contactus', label: 'Contact Us' },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/" className="hover:text-gray-600">
                        BrandName
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-sm">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className="text-gray-700 hover:text-gray-900 transition"
                            >
                                {link.label}
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
                    {links.map((link) => (
                        <li key={link.path} className="py-2 px-6">
                            <Link
                                href={link.path}
                                className="block text-gray-700 hover:text-gray-900 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
