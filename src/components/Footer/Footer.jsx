import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#800000] text-white py-12">
            <div className="w-full container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission Section */}
                <div>
                    <h3 className="text-xl font-bold">Mission</h3>
                    <p className="mt-4 text-sm flex items-center">
                        Preserve your special day creating timeless memories cherished by generations.
                    </p>
                </div>

                {/* Vision Section */}
                <div>
                    <h3 className="text-xl font-bold">Vision</h3>
                    <p className="mt-4 text-sm flex items-center">
                        To be the premier choice for couples seeking exquisite, heartfelt photography that tells
                        their unique love story.
                    </p>
                </div>

                {/* Values Section */}
                <div>
                    <h3 className="text-xl font-bold">Values</h3>
                    <ul className="mt-4 text-sm space-y-2">
                        <li className="flex items-center">Customer Satisfaction</li>
                        <li className="flex items-center">Industry Professionals</li>
                        <li className="flex items-center">Storytelling</li>
                    </ul>
                </div>
            </div>

            {/* Social Media and Copyright Section */}
            <div className="mt-12 border-t border-gray-300 pt-6">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    {/* Social Media Icons */}
                    <div className="flex space-x-6 text-white">
                        <Link href="#" aria-label="Facebook">
                            <FaFacebookF className="w-6 h-6 hover:text-white" />
                        </Link>
                        <Link href="#" aria-label="TikTok">
                            <FaTiktok className="w-6 h-6 hover:text-white" />
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6 hover:text-white" />
                        </Link>
                        <Link href="#" aria-label="YouTube">
                            <FaYoutube className="w-6 h-6 hover:text-white" />
                        </Link>
                        <Link href="#" aria-label="Pinterest">
                            <FaPinterestP className="w-6 h-6 hover:text-white" />
                        </Link>
                    </div>

                    {/* Copyright Section */}
                    <p className="text-sm text-white font-semibold mt-6 md:mt-0">
                        Copyright © 2025 Mauri Films | Powered by Mauri Films
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
