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
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { path: '/', label: 'Home' },
        { path: '/aboutus', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contactus', label: 'Contact Us' },
    ];

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log("Logged out");
    };

    return (
        <nav className="bg-[#800000] shadow-lg sticky top-0 w-full z-50 border-b border-[#600000]">
            <div className="container mx-auto flex items-center justify-between py-1 px-4 sm:px-6">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold"
                >
                    <Link href="/" className="hover:opacity-90 transition-opacity">
                        <img
                            src='/mauri films_white.png'
                            alt="Mauri Films Logo"
                            className="w-36 md:w-40"
                        />
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {links.map((link, index) => (
                        <motion.li
                            key={link.path}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            <Link
                                href={link.path}
                                className={cn(
                                    "text-white/90 hover:text-white font-medium",
                                    "text-sm relative italic group transition-all"
                                )}
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* User Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {isLoggedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <UserIcon className="w-5 h-5 text-white" />
                                    <span className="text-white font-medium">Account</span>
                                </motion.button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="min-w-[200px] bg-white/95 backdrop-blur-sm border border-gray-100 shadow-xl"
                            >
                                <DropdownMenuItem className="px-4 py-3">
                                    <Link href="/dashboard" className="flex items-center gap-3 w-full">
                                        <UserIcon className="w-4 h-4 text-gray-700" />
                                        <span className="text-gray-700 font-medium">Dashboard</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-4 py-3">
                                    <Link href="/account" className="flex items-center gap-3 w-full">
                                        <UserIcon className="w-4 h-4 text-gray-700" />
                                        <span className="text-gray-700 font-medium">My Account</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-gray-100" />
                                <DropdownMenuItem
                                    onClick={handleLogout}
                                    className="px-4 py-3 hover:bg-red-50/50"
                                >
                                    <div className="flex items-center gap-3 w-full">
                                        <LogOutIcon className="w-4 h-4 text-red-600" />
                                        <span className="text-red-600 font-medium">Logout</span>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Button
                                asChild
                                variant="ghost"
                                className="text-white hover:bg-white/10 hover:text-white border border-white/20"
                            >
                                <Link href="/login">
                                    Login
                                </Link>
                            </Button>
                            <Button
                                asChild
                                className="bg-white text-[#800000] hover:bg-white/90 hover:text-[#700000]"
                            >
                                <Link href="/signup">
                                    Sign Up
                                </Link>
                            </Button>
                        </motion.div>
                    )}
                </div>

                {/* Mobile Menu */}
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="text-white md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Open Menu"
                        >
                            <MenuIcon className="w-6 h-6" />
                        </motion.button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[85%] sm:max-w-sm border-l border-gray-100/20 bg-[#800000]/95 backdrop-blur-sm"
                    >
                        <SheetHeader className="mb-6">
                            <SheetTitle className="text-white flex items-center gap-2">
                                <img
                                    src='/mauri films_white.png'
                                    alt="Mauri Films Logo"
                                    className="w-32"
                                />
                            </SheetTitle>
                        </SheetHeader>

                        <nav className="flex flex-col gap-2">
                            {links.map((link) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="mt-6 pt-4 border-t border-white/10">
                                {isLoggedIn ? (
                                    <motion.button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:text-red-100"
                                    >
                                        <LogOutIcon className="w-5 h-5" />
                                        Logout
                                    </motion.button>
                                ) : (
                                    <>
                                        <motion.div whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href="/login"
                                                className="block w-full text-center py-3 px-6 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors mb-3"
                                            >
                                                Login
                                            </Link>
                                        </motion.div>
                                        <motion.div whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href="/signup"
                                                className="block w-full text-center py-3 px-6 bg-white text-[#800000] rounded-lg hover:bg-white/90 transition-colors"
                                            >
                                                Sign Up
                                            </Link>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}