import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Moon, Sun, Stars, Zap, Heart, Gem, Layers, Wind, ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '../assets/yunchuan-luo-7emiteIwfuk-unsplash.jpg';

const services = [
    {
        id: 1,
        title: 'Tarot Reading',
        icon: <Moon size={32} />,
        price: '₹1,500',
        duration: '30 Mins',
        description: 'Unveil subconscious patterns and emotional blocks through the mirror of Tarot.',
        span: 'md:col-span-1',
        link: '/services/tarot',
        gradient: 'from-indigo-500/20 to-violet-600/20',
        borderColor: 'border-indigo-500/30',
        iconColor: 'text-indigo-400',
        glowColor: 'bg-indigo-500'
    },
    {
        id: 2,
        title: 'Vedic Astrology',
        icon: <Stars size={32} />,
        price: '₹2,000',
        duration: '30 Mins',
        description: 'Decode your cosmic DNA. Understand your birth chart and karmic lessons.',
        span: 'md:col-span-1',
        link: '/services/astrology',
        gradient: 'from-amber-500/20 to-orange-600/20',
        borderColor: 'border-amber-500/30',
        iconColor: 'text-amber-400',
        glowColor: 'bg-amber-500'
    },
    {
        id: 3,
        title: 'Vedic Numerology',
        icon: <Sun size={32} />,
        price: '₹1,500',
        duration: '30 Mins',
        description: 'Discover the numeric frequency of your life path and destiny.',
        span: 'md:col-span-1',
        link: '/services/numerology',
        gradient: 'from-sky-500/20 to-blue-600/20',
        borderColor: 'border-sky-500/30',
        iconColor: 'text-sky-400',
        glowColor: 'bg-sky-500'
    },
    {
        id: 4,
        title: 'Akashic Records',
        icon: <Layers size={32} />,
        price: '₹4,000',
        duration: '30 Mins',
        description: 'Access soul-level information to clear past-life trauma and understand your purpose.',
        span: 'md:col-span-1',
        link: '/services/akashic',
        gradient: 'from-purple-500/20 to-fuchsia-600/20',
        borderColor: 'border-purple-500/30',
        iconColor: 'text-purple-400',
        glowColor: 'bg-purple-500'
    },
    {
        id: 5,
        title: 'Reiki Healing',
        icon: <Zap size={32} />,
        price: '₹2,000',
        duration: 'Per Session',
        description: 'Channel universal energy to balance chakras and restore vitality.',
        span: 'md:col-span-1',
        link: '/services/reiki',
        gradient: 'from-emerald-500/20 to-teal-600/20',
        borderColor: 'border-emerald-500/30',
        iconColor: 'text-emerald-400',
        glowColor: 'bg-emerald-500'
    },
    {
        id: 6,
        title: 'General Consultation',
        icon: <Sparkles size={32} />,
        price: '₹300',
        duration: '15 Mins',
        description: 'Not sure where to start? Get guidance on the right modality for you.',
        span: 'md:col-span-1',
        link: '/booking',
        gradient: 'from-gray-500/20 to-slate-600/20',
        borderColor: 'border-gray-500/30',
        iconColor: 'text-gray-300',
        glowColor: 'bg-gray-500'
    },
    {
        id: 7,
        title: 'General Counseling',
        icon: <Heart size={32} />,
        price: '₹1,000/hr',
        duration: 'Block of 6',
        description: 'Therapeutic talking sessions to process emotions and gain mental clarity.',
        span: 'md:col-span-2',
        link: '/booking',
        gradient: 'from-rose-500/20 to-pink-600/20',
        borderColor: 'border-rose-500/30',
        iconColor: 'text-rose-400',
        glowColor: 'bg-rose-500'
    },
    {
        id: 8,
        title: 'Crystal Healing',
        icon: <Gem size={32} />,
        price: '₹1,500',
        duration: '1 Hour',
        description: 'Align your energy body using the precise frequencies of crystals.',
        span: 'md:col-span-1',
        link: '/services/crystals',
        gradient: 'from-cyan-500/20 to-blue-600/20',
        borderColor: 'border-cyan-500/30',
        iconColor: 'text-cyan-400',
        glowColor: 'bg-cyan-500'
    },
    {
        id: 9,
        title: 'Crystal, Switchwords & Frequency',
        icon: <Wind size={32} />,
        price: 'From ₹14,000',
        duration: 'Consultation',
        description: 'Advanced frequency work using switchwords and crystal grids for major shifts.',
        span: 'md:col-span-2',
        link: '/services/healing-codes',
        gradient: 'from-fuchsia-500/20 to-pink-600/20',
        borderColor: 'border-fuchsia-500/30',
        iconColor: 'text-fuchsia-400',
        glowColor: 'bg-fuchsia-500'
    },
];

const Services = () => {
    const scrollRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effect for hero
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    /* Floating particles animation state */
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToServices = () => {
        const element = document.getElementById('services-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={scrollRef} className="min-h-screen bg-[var(--color-primary)] overflow-x-hidden relative">
            {/* Floating particles background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[var(--color-secondary)] rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, (mousePosition.x / 100) * (i % 2 ? 1 : -1)],
                            y: [0, (mousePosition.y / 100) * (i % 2 ? -1 : 1)],
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* ═══════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════ */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 select-none">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroBg})`,
                            filter: 'brightness(0.3) contrast(1.1) saturate(1.2)'
                        }}
                    />
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/30 via-transparent to-[var(--color-primary)] z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-primary)_90%)] z-0" />

                {/* Content */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-[var(--color-secondary)]/20 mb-8 backdrop-blur-xl"
                    >
                        <Sparkles size={16} className="text-[var(--color-secondary)]" />
                        <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                            Our Offerings
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
                    >
                        Holistic Services <br />
                        <span className="text-[var(--color-secondary)] italic">for Mind, Body & Soul</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                    >
                        Explore ancient modalities and modern techniques designed to help you decode your life's patterns and unlock your true potential.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button
                            onClick={scrollToServices}
                            className="group relative px-8 py-3 rounded-full overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[var(--color-secondary)]/30"
                        >
                            <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-secondary)]">
                                Explore Services
                                <ChevronDown className="group-hover:translate-y-1 transition-transform" size={16} />
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            <div id="services-grid" className="container mx-auto px-6 relative z-10 py-20">
                {/* ── Bento Grid ── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, index) => (
                        <Link to={service.link} key={service.id} className={`${service.span} block group`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.01 }}
                                className="relative h-full"
                            >
                                {/* Hover Glow Background */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                                {/* Card Content */}
                                <div className={`relative h-full glass rounded-[2rem] p-8 border border-white/5 group-hover:${service.borderColor} transition-all duration-500 overflow-hidden flex flex-col`}>

                                    {/* Top Row: Icon & Price */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`p-4 rounded-2xl bg-white/5 ${service.iconColor} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 border border-white/5`}>
                                            {service.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-[var(--color-secondary)]">{service.price}</div>
                                            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-medium">{service.duration}</div>
                                        </div>
                                    </div>

                                    {/* Middle: Text */}
                                    <div className="mb-8 flex-grow">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-white group-hover:text-[var(--color-secondary)] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Bottom: Action */}
                                    <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-white transition-colors">
                                            Learn More
                                        </span>
                                        <div className={`h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:${service.glowColor} group-hover:text-white transition-all duration-300`}>
                                            <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* ── Signature Service: Deep Healing ── */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden mb-32"
                >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1000] via-[var(--color-primary)] to-[#0c0a00]" />
                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                    {/* Glowing Orbs */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16 lg:p-20">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5"
                            >
                                <Sparkles size={14} className="text-[var(--color-secondary)]" />
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">Signature Service</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                                Integrated <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-200">
                                    Deep Healing
                                </span>
                            </h2>

                            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                                A comprehensive, transformative session designed for major life shifts. We combine Womb Healing, Entity Cleanup, and Ancestral Clearing to reset your energetic blueprint.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to="/booking">
                                    <button className="px-8 py-4 bg-[#D4AF37] text-[#022C22] font-bold rounded-xl hover:bg-[#F4D03F] transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                                        Book Consultation <ArrowRight size={18} />
                                    </button>
                                </Link>
                                <Link to="/services/integrated-healing">
                                    <button className="px-8 py-4 glass text-white border border-white/10 hover:border-[var(--color-secondary)]/50 rounded-xl transition-colors w-full sm:w-auto">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Visual Side */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)]/20 to-transparent rounded-3xl blur-2xl transform rotate-3" />
                            <div className="relative glass rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                                <div className="space-y-6">
                                    {[
                                        { title: "Womb Healing", desc: "Release trauma stored in the creative center." },
                                        { title: "Entity Cleanup", desc: "Clear attachments draining your energy." },
                                        { title: "Ancestral Clearing", desc: "Break cycles passed down through generations." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_var(--color-secondary)]" />
                                            <div>
                                                <h4 className="text-lg font-serif font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* ── Final CTA Section ── */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-primary)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-secondary)_0%,transparent_70%)] opacity-5" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10">
                        The path to clarity and healing is just one step away.
                    </p>
                    <Link to="/booking">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-[#D4AF37] text-[#022C22] font-bold text-lg rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:bg-[#F4D03F] transition-all"
                        >
                            Book a Session Today
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;

