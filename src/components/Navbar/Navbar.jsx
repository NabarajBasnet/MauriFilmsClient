'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, UserIcon, LogOutIcon, LogInIcon } from 'lucide-react';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const links = [
        { path: '/', label: 'Home' },
        { path: '/aboutus', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contactus', label: 'Contact Us' },
    ];

    const handleLogout = () => {
        // Add logout logic here
        setIsLoggedIn(false);
        console.log("Logged out");
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 w-full z-50">
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

                {/* User Dropdown */}
                <div className="hidden md:flex items-center space-x-4">
                    {isLoggedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center space-x-2 text-gray-800 font-semibold hover:text-gray-900">
                                    <UserIcon className="w-5 h-5" />
                                    <span>Account</span>
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem>
                                    <Link href="/dashboard" className="flex items-center space-x-2">
                                        <UserIcon className="w-4 h-4" />
                                        <span>Dashboard</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/account" className="flex items-center space-x-2">
                                        <UserIcon className="w-4 h-4" />
                                        <span>My Account</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout} className="flex items-center space-x-2">
                                    <LogOutIcon className="w-4 h-4" />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button asChild>
                            <Link href="/login" className="text-sm font-semibold">
                                <LogInIcon className="w-4 h-4 mr-2" />
                                Login
                            </Link>
                        </Button>
                    )}
                </div>

                {/* Mobile Menu (Sheet Trigger) */}
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            className="text-gray-800 md:hidden focus:outline-none"
                            aria-label="Open Menu"
                        >
                            <MenuIcon className="w-8 h-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-9/12">
                        <SheetHeader>
                            <SheetTitle className="text-xl font-bold">Mauri Films</SheetTitle>
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
                                <li>
                                    {isLoggedIn ? (
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left text-gray-700 hover:text-gray-900 transition-all font-semibold text-sm"
                                        >
                                            <LogOutIcon className="w-4 h-4 mr-2 inline" />
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            href="/login"
                                            className="block text-gray-700 hover:text-gray-900 transition-all font-semibold text-sm"
                                        >
                                            <LogInIcon className="w-4 h-4 mr-2 inline" />
                                            Login
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
