import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/yunchuan-luo-7emiteIwfuk-unsplash.jpg';
import { Star, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react';
import levelOfCons from '../assets/levelOfCons.jpeg'
/* Unified Sophisticated Design
   Consistent typography, spacing, and aesthetic throughout
*/

const consciousnessLevels = [
    { level: '700+', name: 'Enlightenment', tier: 'peak', desc: 'Pure consciousness. The state of "Is-ness". Complete transcendence of the ego.' },
    { level: '600', name: 'Peace', tier: 'peak', desc: 'Total transcendence. Perfect bliss and suspension of time. Illumination.' },
    { level: '540', name: 'Joy', tier: 'high', desc: 'Love becoming increasingly unconditional. A state of pervasive, unshakable happiness.' },
    { level: '500', name: 'Love', tier: 'high', desc: 'A permanent state of benevolence. Forgiveness and nurturing support of life.' },
    { level: '400', name: 'Reason', tier: 'mid', desc: 'Rationality, intelligence, and clarity. The level of science and medicine.' },
    { level: '350', name: 'Acceptance', tier: 'mid', desc: 'Realization that one is the source of one\'s own experience. Taking responsibility.' },
    { level: '310', name: 'Willingness', tier: 'mid', desc: 'Optimism and openness. Growth becomes rapid and easy.' },
    { level: '250', name: 'Neutrality', tier: 'mid', desc: 'A state of release from judgment. Flexibility and non-attachment to outcomes.' },
    { level: '200', name: 'Courage', tier: 'threshold', desc: 'The critical turning point. Empowerment and determination to affect change.' },
    { level: '175', name: 'Pride', tier: 'low', desc: 'Demanding and inflated ego. Vulnerable to shame and external validation.' },
    { level: '150', name: 'Anger', tier: 'low', desc: 'Frustration and resentment. Can be a catalyst for action or destructive.' },
    { level: '125', name: 'Desire', tier: 'low', desc: 'Craving and acquisitiveness. The root of addiction and attachment.' },
    { level: '100', name: 'Fear', tier: 'low', desc: 'Anxiety and worry. Viewing the world as dangerous and threatening.' },
    { level: '75', name: 'Grief', tier: 'low', desc: 'Sadness, loss, and despondency. A state of helplessness.' },
    { level: '50', name: 'Apathy', tier: 'low', desc: 'Hopelessness and despair. The state of being "stuck" or heavy.' },
    { level: '30', name: 'Guilt', tier: 'low', desc: 'Blame and remorse. Used to manipulate and punish oneself and others.' },
    { level: '20', name: 'Shame', tier: 'low', desc: 'Humiliation and elimination. The lowest level of energy, bordering on death.' },
];

const reviews = [
    {
        text: 'The guidance was gentle, honest, and surprisingly accurate in ways that mattered. Aashna picked up on things I hadn\'t shared with anyone — it felt like she was reading the blueprint of my life.',
        name: 'Constanza',
        location: 'Spain',
        modality: 'Tarot Guidance',
        stars: 5,
    },
    {
        text: 'I finally understood why I kept attracting the same situations and relationships. One session gave me immense clarity. Within weeks, I noticed myself responding differently to old triggers.',
        name: 'Priya M.',
        location: 'Mumbai, India',
        modality: 'Integrated Healing',
        stars: 5,
    },
    {
        text: 'Aashna bridges science and spirituality like no one else. The session was deeply transformative. She explained every insight with logic and precision, yet it felt deeply intuitive at the same time.',
        name: 'Rahul K.',
        location: 'Bangalore, India',
        modality: 'Astrology Reading',
        stars: 5,
    },
    {
        text: 'I was skeptical, but after the Akashic reading, I felt a shift I can\'t explain. Three months later, a career opportunity I\'d chased for years materialized effortlessly.',
        name: 'Ananya S.',
        location: 'Delhi, India',
        modality: 'Akashic Records',
        stars: 5,
    },
    {
        text: 'The Reiki session was unlike anything I\'d experienced before. A deep, lasting calm settled in — something I hadn\'t felt in years. Life-changing doesn\'t begin to cover it.',
        name: 'David L.',
        location: 'London, UK',
        modality: 'Reiki Healing',
        stars: 5,
    },
];

// Custom Animated Upward Spiral Component
// Custom Animated Upward Spiral Component (3D Vortex Style)
const UpwardSpiral = () => {
    return (
        <div className="relative w-full aspect-[3/4] max-w-[400px] mx-auto flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" />

            <motion.svg
                viewBox="0 0 200 300"
                className="w-full h-full relative z-10 overflow-visible"
                initial="hidden"
                animate="visible"
            >
                <defs>
                    <linearGradient id="vortexGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                        <stop offset="40%" stopColor="#10b981" stopOpacity="0.6" />
                        <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.7" />
                    </linearGradient>
                    <filter id="vortexGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="beamGradient">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Central Light Beam */}
                <motion.rect
                    x="99" y="20" width="2" height="260"
                    fill="url(#vortexGradient)"
                    filter="url(#vortexGlow)"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ originY: 1 }}
                />

                {/* Vortex Rings */}
                {[...Array(12)].map((_, i) => {
                    const yPos = 280 - (i * 22);
                    const width = 20 + (i * 12);
                    const height = 6 + (i * 3);
                    const delay = i * 0.15;

                    return (
                        <motion.ellipse
                            key={i}
                            cx="100"
                            cy={yPos}
                            rx={width / 2}
                            ry={height / 2}
                            fill="none"
                            stroke="url(#vortexGradient)"
                            strokeWidth="1.5"
                            filter="url(#vortexGlow)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.6, 0.3],
                                scale: [0.8, 1, 1.1],
                                y: [10, 0, -5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: delay,
                                ease: "linear"
                            }}
                        />
                    );
                })}

                {/* Ascending Particles */}
                {[...Array(20)].map((_, i) => {
                    const delay = Math.random() * 5;
                    const duration = 3 + Math.random() * 2;
                    const startX = 90 + Math.random() * 20;

                    return (
                        <motion.circle
                            key={`p-${i}`}
                            r={Math.random() * 1.5 + 0.5}
                            fill="#fff"
                            filter="url(#vortexGlow)"
                            initial={{ x: startX, y: 280, opacity: 0 }}
                            animate={{
                                y: 20,
                                opacity: [0, 1, 1, 0],
                                x: [startX, startX + (Math.random() * 40 - 20)]
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "linear"
                            }}
                        />
                    );
                })}

                {/* Top Star/Light */}
                <motion.circle
                    cx="100" cy="20" r="4"
                    fill="#fff"
                    filter="url(#vortexGlow)"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.svg>
        </div>
    );
};

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedLevel, setExpandedLevel] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#0f1410]">

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroBg})`,
                            filter: 'brightness(0.7) saturate(1.0)',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f1410]/30 via-transparent to-[#0f1410]/80" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-sm mb-8">
                            <Sparkles size={14} className="text-emerald-400" />
                            <span className="text-xs tracking-[0.2em] text-emerald-300 uppercase">
                                Transform Your Reality
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 tracking-tight leading-[0.9]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Decode Your Life
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="mb-10"
                    >
                        <p className="text-emerald-300/90 text-2xl md:text-3xl font-light tracking-[0.15em] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            "Healing begins where illusion ends"
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-emerald-100/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Your life isn't random—it's patterned, decodable, and transformable through ancient wisdom and modern insight.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link to="/booking">
                            <button className="group px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-900/50">
                                <span className="text-sm font-medium tracking-wide">Book Your Session</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-emerald-200/60"
                    >
                        <div className="flex items-center gap-2">
                            <Check size={16} className="text-emerald-400" />
                            <span>Confidential</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check size={16} className="text-emerald-400" />
                            <span>Professional</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check size={16} className="text-emerald-400" />
                            <span>Transformative</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <ChevronDown size={32} className="text-emerald-400/50" strokeWidth={1} />
                </motion.div>
            </section>

            {/* STATS SECTION */}
            <section className="py-20 bg-gradient-to-b from-emerald-950/20 to-transparent border-y border-emerald-900/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                        {[
                            { number: '500+', label: 'Sessions Conducted' },
                            { number: '200+', label: 'Satisfied Clients' },
                            { number: '15+', label: 'Countries Reached' },
                            { number: '4.9/5', label: 'Client Rating' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="text-4xl md:text-5xl font-light text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    {stat.number}
                                </div>
                                <div className="text-xs uppercase tracking-[0.15em] text-emerald-100/60">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPROACH SECTION */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-8">
                                <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
                                    Our Philosophy
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                Your life is a
                                <br />
                                <span className="text-emerald-400">pattern waiting</span>
                                <br />
                                to be decoded
                            </h2>

                            <div className="space-y-6 text-emerald-100/70 text-lg leading-relaxed font-light">
                                <p>
                                    Every repeating relationship. Every financial block. Every emotional trigger.
                                    They aren't random occurrences—they're <span className="text-emerald-300">patterns with purpose</span>.
                                </p>
                                <p>
                                    Through the integration of tarot, astrology, Akashic records, energy healing,
                                    and psychological frameworks, we decode the invisible architecture of your life.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { label: 'Client Success', value: '85%' },
                                { label: 'Experience', value: '5+ Yrs' },
                                { label: 'Modalities', value: '8+' },
                                { label: 'Return Rate', value: '75%' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-800/20 p-8 hover:border-emerald-700/40 transition-all duration-500"
                                >
                                    <div className="text-4xl font-light text-emerald-400 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                        {item.value}
                                    </div>
                                    <div className="text-sm text-emerald-100/60">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE EVOLUTIONARY JOURNEY (SPIRAL) */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6 block font-medium">Evolutionary Journey</span>
                        <h2 className="text-5xl md:text-7xl font-light text-white mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Circle vs <span className="text-emerald-400 italic">Spiral</span>
                        </h2>
                        <p className="text-xl text-emerald-100/60 max-w-3xl mx-auto font-light leading-relaxed">
                            Most lives are lived in loops. Evolution happens when you break the circle and begin the ascent.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Dynamic Spiral Animation & Video Component */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative bg-emerald-950/30 border border-emerald-800/20 p-8 rounded-2xl backdrop-blur-sm"
                            >
                                <UpwardSpiral />

                                <div className="mt-8 text-center">
                                    <h3 className="text-2xl font-light text-emerald-400 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                        The Upward Ascent
                                    </h3>
                                    <p className="text-sm text-emerald-100/60 font-light max-w-sm mx-auto">
                                        Each turn of the spiral represents a return to similar life themes, but from a higher vibration of awareness.
                                    </p>
                                </div>
                            </motion.div>

                            {/* YouTube Video Explanation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative aspect-video rounded-xl overflow-hidden border border-emerald-800/30 shadow-2xl"
                            >
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/mshnCByV9y0"
                                    title="Levels of Consciousness Explained"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f1410] to-transparent h-12 pointer-events-none" />
                            </motion.div>
                        </div>

                        {/* Comparison & Explanation Content */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="group">
                                    <div className="flex items-start gap-6 p-4 rounded-lg transition-colors hover:bg-white/5">
                                        <div className="w-12 h-12 rounded-full border border-red-500/30 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 bg-red-400 rounded-full animate-ping" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl text-white mb-2 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Life as a Circle</h4>
                                            <p className="text-emerald-100/50 text-sm leading-relaxed">
                                                The "Karmic Loop". Repeating the same relationship dynamics, financial blocks, and emotional triggers.
                                                The script stays the same because the vibration remains unchanged.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="flex items-start gap-6 p-4 rounded-lg transition-colors bg-emerald-950/20 border border-emerald-800/30">
                                        <div className="w-12 h-12 rounded-full border border-emerald-400/50 flex items-center justify-center flex-shrink-0">
                                            <ArrowRight size={20} className="text-emerald-400 -rotate-45" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl text-emerald-400 mb-2 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Life as a Spiral</h4>
                                            <p className="text-emerald-100/70 text-sm leading-relaxed">
                                                Emotional Evolution. You recognize the pattern, employ awareness, and make a different choice.
                                                You break the loop and ascend to a higher level of consciousness.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div className="border-l-2 border-emerald-500/30 pl-8 space-y-6">
                                        <p className="text-lg text-emerald-100/80 italic font-light leading-relaxed">
                                            "You can't solve a problem with the same level of consciousness that created it."
                                        </p>
                                        <p className="text-sm text-emerald-400/60 uppercase tracking-widest font-medium">
                                            — Albert Einstein
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-32 px-6 bg-gradient-to-b from-emerald-950/10 to-transparent">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6 block font-medium">
                            The Journey
                        </span>
                        <h2 className="text-5xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            How It Works
                        </h2>
                        <p className="text-lg text-emerald-100/60 max-w-2xl mx-auto font-light">
                            A straightforward path to transformation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-20 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-emerald-700/30 to-transparent" />

                        {[
                            {
                                num: '01',
                                title: 'Book Your Session',
                                desc: 'Choose from our range of modalities and find a time that works for you.',
                            },
                            {
                                num: '02',
                                title: 'Deep Exploration',
                                desc: 'We uncover patterns and blocks in a safe, professional environment.',
                            },
                            {
                                num: '03',
                                title: 'Integration',
                                desc: 'Receive insights and tools to create lasting transformation.',
                            },
                        ].map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative text-center group"
                            >
                                <div className="mb-8 relative inline-block">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-900/40 to-emerald-950/20 border border-emerald-700/30 flex items-center justify-center group-hover:border-emerald-600/50 transition-all duration-500">
                                        <span className="text-sm font-mono text-emerald-400">{step.num}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    {step.title}
                                </h3>
                                <p className="text-emerald-100/60 leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6 block font-medium">
                            Client Stories
                        </span>
                        <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Transformations
                        </h2>
                    </motion.div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-800/20 p-12 md:p-16"
                            >
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="text-emerald-400 fill-emerald-400" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    "{reviews[currentSlide].text}"
                                </p>

                                <div className="flex items-center justify-between border-t border-emerald-800/20 pt-8">
                                    <div>
                                        <div className="text-lg text-white font-medium mb-1">
                                            {reviews[currentSlide].name}
                                        </div>
                                        <div className="text-sm text-emerald-100/50">
                                            {reviews[currentSlide].location}
                                        </div>
                                    </div>
                                    <div className="text-xs uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-4 py-2">
                                        {reviews[currentSlide].modality}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center items-center gap-6 mt-10">
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)}
                                className="w-12 h-12 border border-emerald-800/30 hover:border-emerald-600/50 flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft size={20} className="text-emerald-400" />
                            </button>

                            <div className="flex gap-2">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'bg-emerald-400 w-10' : 'bg-emerald-800/30 w-1.5'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentSlide((prev) => (prev + 1) % reviews.length)}
                                className="w-12 h-12 border border-emerald-800/30 hover:border-emerald-600/50 flex items-center justify-center transition-colors"
                            >
                                <ChevronRight size={20} className="text-emerald-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSCIOUSNESS SCALE */}
            <section className="py-32 px-6 bg-gradient-to-b from-emerald-950/10 to-transparent">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6 block font-medium">
                            Hawkins Scale
                        </span>
                        <h2 className="text-5xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Map of Consciousness
                        </h2>
                        <p className="text-lg text-emerald-100/60 max-w-2xl mx-auto font-light">
                            Understanding where you are is the first step to transformation
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
                        {/* Scale Image - Fixed/Sticky on left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="hidden lg:block lg:sticky lg:top-24"
                        >
                            <div className="relative group rounded-lg overflow-hidden border border-emerald-900/30 bg-emerald-950/20 shadow-2xl shadow-emerald-900/20">
                                <img
                                    src={levelOfCons}
                                    alt="Hawkins Scale of Consciousness"
                                    className="w-full h-auto object-cover filter brightness-[0.9] contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.95]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />
                                <div className="absolute inset-0 border border-emerald-500/5 group-hover:border-emerald-500/15 transition-colors rounded-lg" />
                            </div>
                            <p className="text-xs text-emerald-100/40 text-center mt-4 font-light tracking-wide">
                                Click on each level to learn more
                            </p>
                        </motion.div>

                        {/* Levels List - Scrollable on right */}
                        <div className="space-y-2 max-w-3xl">
                            {consciousnessLevels.map((level, i) => (
                                <motion.div
                                    key={level.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-10%' }}
                                    transition={{ delay: i * 0.015 }}
                                    onClick={() => setExpandedLevel(expandedLevel === level.name ? null : level.name)}
                                    className="cursor-pointer group"
                                >
                                    <div className={`bg-gradient-to-r from-emerald-950/20 to-transparent border-l-[3px] transition-all duration-300 rounded-r-lg ${expandedLevel === level.name
                                        ? 'border-l-emerald-400 bg-emerald-950/40 shadow-lg shadow-emerald-900/20'
                                        : level.tier === 'peak'
                                            ? 'border-l-emerald-500/50 hover:border-l-emerald-400 hover:bg-emerald-950/20'
                                            : level.tier === 'high'
                                                ? 'border-l-emerald-600/40 hover:border-l-emerald-500 hover:bg-emerald-950/20'
                                                : level.tier === 'threshold'
                                                    ? 'border-l-amber-500/50 hover:border-l-amber-400 hover:bg-amber-950/20'
                                                    : 'border-l-emerald-800/30 hover:border-l-emerald-700 hover:bg-emerald-950/15'
                                        }`}>
                                        <div className="p-5 flex items-center justify-between">
                                            <div className="flex items-center gap-5 flex-1">
                                                <span className="text-xs font-mono text-emerald-400/70 w-16 text-right">
                                                    {level.level}
                                                </span>
                                                <div className="flex-1">
                                                    <span className={`text-xl md:text-2xl font-light block ${level.tier === 'peak' ? 'text-emerald-300' :
                                                        level.tier === 'high' ? 'text-emerald-400' :
                                                            level.tier === 'threshold' ? 'text-amber-400' :
                                                                level.tier === 'mid' ? 'text-emerald-100/80' :
                                                                    'text-emerald-100/60'
                                                        }`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                                        {level.name}
                                                    </span>
                                                    {level.tier && (
                                                        <span className={`text-[10px] uppercase tracking-wider mt-1 block ${level.tier === 'peak' ? 'text-emerald-400/60' :
                                                            level.tier === 'high' ? 'text-emerald-500/60' :
                                                                level.tier === 'threshold' ? 'text-amber-500/60' :
                                                                    level.tier === 'mid' ? 'text-emerald-600/50' :
                                                                        'text-emerald-700/40'
                                                            }`}>
                                                            {level.tier === 'peak' ? 'Enlightened' :
                                                                level.tier === 'high' ? 'Positive Energy' :
                                                                    level.tier === 'threshold' ? 'Critical Point' :
                                                                        level.tier === 'mid' ? 'Constructive' :
                                                                            'Lower Vibration'}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <ChevronDown
                                                size={20}
                                                className={`text-emerald-400/50 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedLevel === level.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </div>

                                        <AnimatePresence>
                                            {expandedLevel === level.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-5 pb-5 pl-24 border-t border-emerald-800/20 pt-4 mt-1">
                                                        <p className="text-emerald-100/70 leading-relaxed font-light">
                                                            {level.desc}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border border-emerald-800/30 p-16 md:p-20"
                    >
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-10" />

                        <h2 className="text-5xl md:text-6xl font-light text-white mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Begin Your
                            <br />
                            <span className="text-emerald-400">Transformation</span>
                        </h2>

                        <p className="text-xl text-emerald-100/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Your patterns hold the key to your freedom. Let's decode them together.
                        </p>

                        <Link to="/booking">
                            <button className="group px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-sm transition-all duration-300 inline-flex items-center gap-3 shadow-xl shadow-emerald-900/50">
                                <span className="text-sm font-medium tracking-wide">Schedule Your Session</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;