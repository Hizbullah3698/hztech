"use client";

import { motion, type Variants, useScroll, useTransform, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";

// ── Reusable animation variants ──

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
};

export const blurIn: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

export const slideUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
};

export const revealFromBottom: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

// ── Wrapper Components ──

interface MotionSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    variant?: Variants;
}

/**
 * Wraps any section/block to animate on scroll.
 * Uses spring-based transitions for a more natural feel.
 */
export function MotionSection({
    children,
    className = "",
    delay = 0,
    variant = fadeUp,
}: MotionSectionProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={variant}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Stagger container: children animate one-by-one with spring physics.
 */
export function MotionStagger({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Individual item inside a stagger group with spring transition.
 */
export function MotionItem({
    children,
    className = "",
    variant = fadeUp,
}: {
    children: ReactNode;
    className?: string;
    variant?: Variants;
}) {
    return (
        <motion.div
            variants={variant}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Word-by-word text reveal animation.
 */
export function MotionText({
    children,
    className = "",
    delay = 0,
}: {
    children: string;
    className?: string;
    delay?: number;
}) {
    const words = children.split(" ");
    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.06,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="inline-block mr-[0.3em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

/**
 * Parallax wrapper - translates element based on scroll position.
 */
export function MotionParallax({
    children,
    className = "",
    speed = 0.15,
}: {
    children: ReactNode;
    className?: string;
    speed?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-40 * speed, 40 * speed]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <motion.div ref={ref} style={{ y: smoothY }} className={className}>
            {children}
        </motion.div>
    );
}

/**
 * Floating animation (subtle up-down bob).
 */
export function MotionFloat({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
