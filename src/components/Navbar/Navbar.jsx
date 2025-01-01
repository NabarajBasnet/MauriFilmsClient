'use client';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

export default function Navbar() {
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
                        Mauri Films
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-sm font-semibold">
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

                {/* Mobile Menu (Sheet Trigger) */}
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            className="md:hidden text-gray-800 focus:outline-none"
                            aria-label="Open Menu"
                        >
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-72">
                        <SheetHeader>
                            <SheetTitle className="text-lg font-bold">Mauri Films</SheetTitle>
                        </SheetHeader>
                        <nav className="mt-4">
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            href={link.path}
                                            className="block text-gray-700 hover:text-gray-900 transition-all font-semibold text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
