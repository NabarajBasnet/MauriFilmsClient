'use client';

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    const hideLayout = pathname.startsWith('/dashboard') || pathname.startsWith('/login') || pathname.startsWith('/signup');

    return (
        <div>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </div>
    );
}
