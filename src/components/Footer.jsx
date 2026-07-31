"use client";
import React from "react";
import { Globe, Mail, MapPin, ArrowUpRight, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white text-gray-800 pt-24 pb-8 border-t border-emerald-100">
      
      {/* 1. Modern Background: Topographic Dot Grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      {/* 2. Subtle Glow at the Top */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-green-50/60 to-transparent pointer-events-none" />

      {/* ================= CONTENT ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative max-w-7xl mx-auto px-6 z-10"
      >
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
          
          {/* ================= BRAND ================= */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/vlogo.png"
                  alt="Bharatx Logo"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-emerald-900">
                  Bharatx Ventures
                </h2>
                <span className="text-[10px] text-emerald-600 font-bold tracking-[0.2em] uppercase block leading-tight">
                  Private Limited
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              A premier venture development firm committed to institutional
              excellence and scaling India's industrial backbone through
              strategic innovation and capital.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-sm border border-emerald-200 flex items-center justify-center text-emerald-700 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={2} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ================= FAST LINKS ================= */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <h4 className="font-bold text-emerald-900 uppercase tracking-widest text-xs mb-1">
              Explore
            </h4>

            <ul className="flex flex-col gap-3 text-sm font-medium text-slate-600">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/service">Services</FooterLink>
              <FooterLink href="/contact-us">Contact</FooterLink>
            </ul>
          </motion.div>

          {/* ================= REGULATORY ================= */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <h4 className="font-bold text-emerald-900 uppercase tracking-widest text-xs mb-1">
              Regulatory Identity
            </h4>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-emerald-100 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
              <ul className="flex flex-col gap-5">
                <li>
                  <span className="block text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-1">Corporate Identity</span>
                  <span className="block text-slate-800 font-mono text-sm bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                    U01139BR2026PTC083018
                  </span>
                </li>
                <li>
                  <span className="block text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-1">Tax Identity</span>
                  <span className="block text-slate-800 font-mono text-sm bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                    AAOCB4970H
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ================= ADDRESS ================= */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <h4 className="font-bold text-emerald-900 uppercase tracking-widest text-xs mb-1">
              Contact Us
            </h4>

            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-emerald-100 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
              <div className="flex items-start gap-3 mb-5">
                <div className="mt-1 p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <div>
                  <span className="block text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Registered Office
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Bihar Infrastructure Hub,<br />
                    Gaya, Bihar, India
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-emerald-100/50 mb-5"></div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <Mail size={18} strokeWidth={2} />
                </div>
                <div>
                  <span className="block text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <a href="mailto:info@bharatx.ventures" className="text-slate-700 text-sm font-medium hover:text-emerald-600 transition-colors">
                    info@bharatx.vc
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="font-medium">
            © {new Date().getFullYear()} Bharatx Ventures Private Limited. All Rights Reserved.
          </p>
          <div className="flex gap-6 font-semibold">
            <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

// Reusable Link Component with Hover Arrow
function FooterLink({ href, children }) {
  return (
    <li>
      <Link 
        href={href} 
        className="flex items-center gap-2 group text-slate-600 hover:text-emerald-700 transition-all duration-300 w-max"
      >
        {children}
        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-500" />
      </Link>
    </li>
  );
}
