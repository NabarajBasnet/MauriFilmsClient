'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    const isDashboard = pathname.startsWith('/dashboard');

    return (
        <div>
            {!isDashboard && <Navbar />}
            {children}
            {!isDashboard && <Footer />}
        </div>
    );
}
