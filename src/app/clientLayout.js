'use client';

import { IoLogoWhatsapp } from "react-icons/io";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    const hideLayout = pathname.startsWith('/dashboard') || pathname.startsWith('/login') || pathname.startsWith('/signup');

    return (
        <div>
            {!hideLayout && <Navbar />}
            <div className="w-full min-h-screen bg-fixed bg-cover bg-center bg-[url('/homepage.jpg')] -z-10">
                {children}
            </div>
            <IoLogoWhatsapp className="fixed bottom-8 md:bottom-16 right-8 md:right-16 z-50 text-6xl text-green-500 cursor-pointer" />
        </div>
    );
}
