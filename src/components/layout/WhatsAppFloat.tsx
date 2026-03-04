"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFloat() {
    return (
        <motion.a
            href="https://wa.me/923000943975"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-shadow group"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
        >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
            <MessageCircle className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
        </motion.a>
    );
}
