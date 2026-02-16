import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import { Star, ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import UpwardSpiral from '../components/UpwardSpiral';

/* Consciousness levels with Hawkins scale values */
const consciousnessLevels = [
    { level: '700+', name: 'Enlightenment', tier: 'peak' },
    { level: '600', name: 'Peace', tier: 'peak' },
    { level: '540', name: 'Joy', tier: 'high' },
    { level: '500', name: 'Love', tier: 'high' },
    { level: '400', name: 'Reason', tier: 'mid' },
    { level: '350', name: 'Acceptance', tier: 'mid' },
    { level: '310', name: 'Willingness', tier: 'mid' },
    { level: '250', name: 'Neutrality', tier: 'mid' },
    { level: '200', name: 'Courage', tier: 'threshold' },
    { level: '175', name: 'Pride', tier: 'low' },
    { level: '150', name: 'Anger', tier: 'low' },
    { level: '125', name: 'Desire', tier: 'low' },
    { level: '100', name: 'Fear', tier: 'low' },
    { level: '75', name: 'Grief', tier: 'low' },
    { level: '50', name: 'Apathy', tier: 'low' },
    { level: '30', name: 'Guilt', tier: 'low' },
    { level: '20', name: 'Shame', tier: 'low' },
];

const tierColors = {
    peak: 'text-[#D4AF37]',
    high: 'text-emerald-400',
    mid: 'text-sky-400',
    threshold: 'text-amber-400',
    low: 'text-[var(--color-text-muted)]',
};

const reviews = [
    {
        text: '"The guidance was gentle, honest, and surprisingly accurate in ways that mattered. Aashna picked up on things I hadn\'t shared with anyone — it felt like she was reading the blueprint of my life."',
        name: 'Constanza',
        location: 'Spain',
        modality: 'Tarot Guidance',
        stars: 5,
        initials: 'C',
    },
    {
        text: '"I finally understood why I kept attracting the same situations and relationships. One session gave me immense clarity. Within weeks, I noticed myself responding differently to old triggers."',
        name: 'Priya M.',
        location: 'Mumbai, India',
        modality: 'Integrated Healing',
        stars: 5,
        initials: 'PM',
    },
    {
        text: '"Aashna bridges science and spirituality like no one else. The session was deeply transformative. She explained every insight with logic and precision, yet it felt deeply intuitive at the same time."',
        name: 'Rahul K.',
        location: 'Bangalore, India',
        modality: 'Astrology Reading',
        stars: 5,
        initials: 'RK',
    },
    {
        text: '"I was skeptical, but after the Akashic reading, I felt a shift I can\'t explain. Three months later, a career opportunity I\'d chased for years materialized effortlessly. Coincidence? I don\'t think so."',
        name: 'Ananya S.',
        location: 'Delhi, India',
        modality: 'Akashic Records',
        stars: 5,
        initials: 'AS',
    },
    {
        text: '"The Reiki session was unlike anything I\'d experienced before. A deep, lasting calm settled in — something I hadn\'t felt in years. I\'ve booked three more sessions since. Life-changing doesn\'t begin to cover it."',
        name: 'David L.',
        location: 'London, UK',
        modality: 'Reiki Healing',
        stars: 5,
        initials: 'DL',
    },
    {
        text: '"Her integrated healing session was the most powerful 90 minutes of my life. Patterns I\'d carried for decades — in relationships, finances, self-worth — finally made sense. I left feeling lighter than I have in 20 years."',
        name: 'Meera J.',
        location: 'Pune, India',
        modality: 'Integrated Healing',
        stars: 5,
        initials: 'MJ',
    },
];

const Home = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start start', 'end end'] });

    /* Carousel state */
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slidesPerView = 3; // shows 3 at a time on desktop (1 on mobile via CSS)

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % reviews.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);

    /* Get visible slides wrapping around */
    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < slidesPerView; i++) {
            visible.push(reviews[(currentSlide + i) % reviews.length]);
        }
        return visible;
    };

    return (
        <div className="min-h-screen bg-[var(--color-primary)] overflow-x-hidden">

            {/* ═══════════════════════════════════════════
          1 · HERO
      ═══════════════════════════════════════════ */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center scale-110"
                    style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.45)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary)] z-0" />

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="uppercase tracking-[0.3em] text-sm text-[var(--color-secondary)] mb-6"
                    >
                        No marketing gimmick · Full transparency · Only care &amp; healing
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8"
                    >
                        Decode Your Life <br />
                        <span className="text-[var(--color-secondary)]">SCIENCE + SPIRITUALITY</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg md:text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto tracking-wide"
                    >
                        Your Life isn&apos;t Random. It&apos;s Patterned. Decodable. Transformable.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        <Link to="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{ backgroundColor: '#D4AF37', color: '#022C22' }}
                                className="px-10 py-4 text-lg font-bold tracking-wide rounded-lg transition-all duration-300"
                            >
                                Book My Slot
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-secondary)]"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
          1.5 · STATS COUNTER BAR
      ═══════════════════════════════════════════ */}
            <section className="py-12 bg-black/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: '500+', label: 'Sessions Conducted' },
                            { number: '200+', label: 'Clients Worldwide' },
                            { number: '15+', label: 'Countries Reached' },
                            { number: '4.9★', label: 'Average Rating' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-secondary)] mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          1.7 · HOW IT WORKS
      ═══════════════════════════════════════════ */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            How It <span className="text-[var(--color-secondary)]">Works</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Your transformation journey in three simple steps.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
                        {/* Connecting line (desktop) */}
                        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent" />

                        {[
                            {
                                step: '01',
                                title: 'Book Your Session',
                                desc: 'Choose your modality, complete the payment, and select a convenient time slot through our simple booking system.',
                                icon: '📅',
                            },
                            {
                                step: '02',
                                title: 'Connect & Explore',
                                desc: 'In a safe, non-judgmental space, we explore your patterns, blocks, and the deeper forces at play in your life.',
                                icon: '🔮',
                            },
                            {
                                step: '03',
                                title: 'Transform & Integrate',
                                desc: 'Receive actionable insights and energy work that create lasting shifts. Watch the old patterns dissolve as new ones emerge.',
                                icon: '✨',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full glass border border-[var(--color-secondary)]/30 flex items-center justify-center text-3xl relative">
                                    {item.icon}
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-xs font-bold flex items-center justify-center">
                                        {item.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* ═══════════════════════════════════════════
          2 · CONSCIOUSNESS SCALE
      ═══════════════════════════════════════════ */}
            <section ref={scrollRef} className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Map of <span className="text-[var(--color-secondary)]">Consciousness</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Where are you on the scale? Awareness is the first step to transformation.
                        </p>
                    </motion.div>

                    <div className="max-w-2xl mx-auto relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-t from-red-900/40 via-sky-800/40 to-[var(--color-secondary)]/60 rounded-full" />

                        <div className="space-y-1">
                            {consciousnessLevels.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-5%' }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    className="flex items-center gap-6 pl-4 group"
                                >
                                    <div className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-150 ${item.tier === 'peak' ? 'border-[var(--color-secondary)] bg-[var(--color-secondary)]' :
                                        item.tier === 'high' ? 'border-emerald-400 bg-emerald-400/30' :
                                            item.tier === 'threshold' ? 'border-amber-400 bg-amber-400/30' :
                                                item.tier === 'mid' ? 'border-sky-400 bg-sky-400/20' :
                                                    'border-white/20 bg-white/5'
                                        }`} />

                                    <span className="text-sm font-mono w-12 text-[var(--color-text-muted)]">{item.level}</span>

                                    <span className={`text-lg md:text-xl font-serif font-bold transition-colors duration-300 ${tierColors[item.tier]} group-hover:text-[var(--color-secondary)]`}>
                                        {item.name}
                                    </span>

                                    {item.name === 'Courage' && (
                                        <span className="text-xs bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full uppercase tracking-widest">
                                            Threshold
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          3 · PATTERN THEORY  (Circle vs. Spiral)
      ═══════════════════════════════════════════ */}
            <section className="py-24 bg-black/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            What are <span className="text-[var(--color-secondary)]">Patterns</span>?
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            How to identify them? How to break them?
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                        {/* Circle */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center glass rounded-2xl p-10"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-dashed border-white/20 mx-auto mb-8 flex items-center justify-center"
                            >
                                <div className="w-3 h-3 bg-white/40 rounded-full" />
                            </motion.div>
                            <h3 className="text-3xl font-serif font-bold mb-4">Life as a Circle</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">
                                Stuck in core beliefs &amp; karma. Repeating the same relationship dynamics,
                                financial blocks, and emotional triggers. The scenery changes, but the script stays the same.
                            </p>
                        </motion.div>

                        {/* Spiral (3D UpwardSpiral Component) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center glass rounded-2xl p-10 border-[var(--color-secondary)]/20"
                        >
                            <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 relative flex items-center justify-center">
                                <UpwardSpiral />
                            </div>
                            <h3 className="text-3xl font-serif font-bold mb-4 text-[var(--color-secondary)]">Life as a Spiral</h3>
                            <p className="text-[var(--color-text-muted)] leading-relaxed">
                                Higher awareness, maturity, and easier decision-making.
                                You revisit the same themes but from an elevated perspective — with growth, not repetition.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          4 · TESTIMONIALS CAROUSEL
      ═══════════════════════════════════════════ */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Client <span className="text-[var(--color-secondary)]">Transformations</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)]">Real stories. Real shifts.</p>
                    </motion.div>

                    <div
                        className="relative max-w-5xl mx-auto"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Desktop: 3 visible */}
                        <div className="hidden md:grid grid-cols-3 gap-6">
                            <AnimatePresence mode="popLayout">
                                {getVisibleReviews().map((review, i) => (
                                    <motion.div
                                        key={`${review.name}-${currentSlide}-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="h-full"
                                    >
                                        <div className="glass rounded-2xl p-8 h-full flex flex-col border border-white/5 hover:border-[var(--color-secondary)]/20 transition-all duration-500">
                                            {/* Header: Avatar + Info */}
                                            <div className="flex items-center gap-4 mb-5">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-amber-700 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm flex-shrink-0">
                                                    {review.initials}
                                                </div>
                                                <div>
                                                    <div className="font-serif font-bold text-base">{review.name}</div>
                                                    <div className="text-xs text-[var(--color-text-muted)]">{review.location}</div>
                                                </div>
                                            </div>

                                            {/* Stars */}
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(review.stars)].map((_, s) => (
                                                    <Star key={s} size={14} className="text-[var(--color-secondary)] fill-[var(--color-secondary)]" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <p className="italic text-[var(--color-text-muted)] leading-relaxed text-sm flex-1">
                                                {review.text}
                                            </p>

                                            {/* Modality tag */}
                                            <div className="mt-5 pt-4 border-t border-white/5">
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-3 py-1.5 rounded-full font-bold">
                                                    {review.modality}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Mobile: 1 visible */}
                        <div className="md:hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="glass rounded-2xl p-8 border border-white/5">
                                        {/* Header: Avatar + Info */}
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-amber-700 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm flex-shrink-0">
                                                {reviews[currentSlide].initials}
                                            </div>
                                            <div>
                                                <div className="font-serif font-bold text-base">{reviews[currentSlide].name}</div>
                                                <div className="text-xs text-[var(--color-text-muted)]">{reviews[currentSlide].location}</div>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(reviews[currentSlide].stars)].map((_, s) => (
                                                <Star key={s} size={14} className="text-[var(--color-secondary)] fill-[var(--color-secondary)]" />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="italic text-[var(--color-text-muted)] leading-relaxed text-sm">
                                            {reviews[currentSlide].text}
                                        </p>

                                        {/* Modality tag */}
                                        <div className="mt-5 pt-4 border-t border-white/5">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-3 py-1.5 rounded-full font-bold">
                                                {reviews[currentSlide].modality}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <div className="flex gap-2">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide
                                            ? 'bg-[var(--color-secondary)] w-6'
                                            : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          5 · INSTAGRAM FEED
      ═══════════════════════════════════════════ */}
            <section className="py-16 overflow-hidden">
                <div className="container mx-auto px-6 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                            Follow the <span className="text-[var(--color-secondary)]">Journey</span>
                        </h2>
                        <a
                            href="https://instagram.com/decodeyourlifestyle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-secondary)] text-sm hover:underline"
                        >
                            @decodeyourlifestyle
                        </a>
                    </motion.div>
                </div>

                {/* Scrolling Instagram Grid */}
                <div className="relative">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="flex gap-4"
                    >
                        {[
                            { emoji: '✨', title: 'Consciousness', text: 'Your level of awareness determines your reality. Rise above 200 on the Hawkins scale.', gradient: 'from-amber-800/60 to-orange-950' },
                            { emoji: '🌙', title: 'Tarot Insights', text: 'The cards don\'t predict — they mirror. What patterns are your cards reflecting right now?', gradient: 'from-indigo-900/80 to-violet-950' },
                            { emoji: '🔮', title: 'Akashic Records', text: 'Every soul has a blueprint. Your Akashic Records hold the map to karmic contracts & purpose.', gradient: 'from-purple-900/70 to-fuchsia-950' },
                            { emoji: '☀️', title: 'Astrology', text: 'You are not your Sun sign. Your chart is a cosmic DNA — unique, complex, and deeply revealing.', gradient: 'from-amber-900/70 to-yellow-950' },
                            { emoji: '💫', title: 'Client Wins', text: '"After one session, a 15-year pattern broke." — Real transformation, real people.', gradient: 'from-emerald-900/70 to-teal-950' },
                            { emoji: '🧘', title: 'Reiki Energy', text: 'Energy doesn\'t lie. Reiki goes where words can\'t — to the root of what\'s really blocked.', gradient: 'from-sky-900/70 to-cyan-950' },
                            { emoji: '💎', title: 'Crystal Guidance', text: 'Each crystal carries a frequency. Learn which ones align with your current healing journey.', gradient: 'from-rose-900/70 to-pink-950' },
                            { emoji: '🌿', title: 'Healing Codes', text: 'Ancient numerical sequences that reprogram cellular memory. Science meets the sacred.', gradient: 'from-emerald-800/70 to-green-950' },
                            { emoji: '⭐', title: 'Transformations', text: 'From stuck to spiral. From circle to expansion. This is what breaking patterns looks like.', gradient: 'from-amber-700/60 to-orange-950' },
                        ].flatMap((post, idx) => [post, post].map((p, dup) => ({ ...p, _key: `${idx}-${dup}` })))
                            .map((post) => (
                                <div
                                    key={post._key}
                                    className={`flex-shrink-0 w-52 h-64 md:w-60 md:h-72 rounded-2xl bg-gradient-to-br ${post.gradient} relative overflow-hidden group cursor-pointer border border-white/5 hover:border-[var(--color-secondary)]/30 transition-all duration-500`}
                                >
                                    {/* Content — always visible */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                        <div>
                                            <span className="text-3xl block mb-3">{post.emoji}</span>
                                            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-2">{post.title}</h4>
                                        </div>
                                        <p className="text-xs text-white/70 leading-relaxed line-clamp-4">{post.text}</p>
                                    </div>

                                    {/* Hover overlay with IG icon */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="2" y="2" width="20" height="20" rx="5" />
                                            <circle cx="12" cy="12" r="5" />
                                            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          6 · CTA BANNER
      ═══════════════════════════════════════════ */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="glass rounded-3xl p-12 md:p-20 border border-[var(--color-secondary)]/10">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            Ready to Decode <span className="text-[var(--color-secondary)]">Your</span> Life?
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto mb-10">
                            Spirituality is not about escaping life, but understanding it deeply.
                        </p>
                        <Link to="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{ backgroundColor: '#D4AF37', color: '#022C22' }}
                                className="px-10 py-4 text-lg font-bold tracking-wide rounded-lg inline-flex items-center gap-3"
                            >
                                Book My Slot <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;