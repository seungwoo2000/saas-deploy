"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Write<span className="text-brand-primary">Flow</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Resources
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Login
          </Link>
          <button className="btn-primary py-2 px-5 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
