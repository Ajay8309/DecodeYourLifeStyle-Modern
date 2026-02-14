// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Card from '../components/Card';
// import heroBg from '../assets/yunchuan-luo-7emiteIwfuk-unsplash.jpg';
// import { Star, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Zap, Heart, Shield } from 'lucide-react';

// /* Consciousness levels with Hawkins scale values and descriptions */
// const consciousnessLevels = [
//     { level: '700+', name: 'Enlightenment', tier: 'peak', desc: 'Pure consciousness. The state of "Is-ness". Complete transcendence of the ego.', icon: '🌟' },
//     { level: '600', name: 'Peace', tier: 'peak', desc: 'Total transcendence. Perfect bliss and suspension of time. Illumination.', icon: '☮️' },
//     { level: '540', name: 'Joy', tier: 'high', desc: 'Love becoming increasingly unconditional. A state of pervasive, unshakable happiness.', icon: '😊' },
//     { level: '500', name: 'Love', tier: 'high', desc: 'A permanent state of benevolence. Forgiveness and nurturing support of life.', icon: '💖' },
//     { level: '400', name: 'Reason', tier: 'mid', desc: 'Rationality, intelligence, and clarity. The level of science and medicine.', icon: '🧠' },
//     { level: '350', name: 'Acceptance', tier: 'mid', desc: 'Realization that one is the source of one\'s own experience. taking responsibility.', icon: '🤝' },
//     { level: '310', name: 'Willingness', tier: 'mid', desc: 'Optimism and openness. Growth becomes rapid and easy.', icon: '🌱' },
//     { level: '250', name: 'Neutrality', tier: 'mid', desc: 'A state of release from judgment. Flexibility and non-attachment to outcomes.', icon: '⚖️' },
//     { level: '200', name: 'Courage', tier: 'threshold', desc: 'The critical turning point. Empowerment and determination to affect change.', icon: '⚡' },
//     { level: '175', name: 'Pride', tier: 'low', desc: 'Demanding and inflated ego. Vulnerable to shame and external validation.', icon: '👑' },
//     { level: '150', name: 'Anger', tier: 'low', desc: 'Frustration and resentment. Can be a catalyst for action or destructive.', icon: '😤' },
//     { level: '125', name: 'Desire', tier: 'low', desc: 'Craving and acquisitiveness. The root of addiction and attachment.', icon: '🎯' },
//     { level: '100', name: 'Fear', tier: 'low', desc: 'Anxiety and worry. Viewing the world as dangerous and threatening.', icon: '😰' },
//     { level: '75', name: 'Grief', tier: 'low', desc: 'Sadness, loss, and despondency. A state of helplessness.', icon: '😢' },
//     { level: '50', name: 'Apathy', tier: 'low', desc: 'Hopelessness and despair. The state of being "stuck" or heavy.', icon: '😶' },
//     { level: '30', name: 'Guilt', tier: 'low', desc: 'Blame and remorse. Used to manipulate and punish oneself and others.', icon: '😔' },
//     { level: '20', name: 'Shame', tier: 'low', desc: 'Humiliation and elimination. The lowest level of energy, bordering on death.', icon: '😞' },
// ];

// const tierColors = {
//     peak: 'text-[#D4AF37]',
//     high: 'text-emerald-400',
//     mid: 'text-sky-400',
//     threshold: 'text-amber-400',
//     low: 'text-[var(--color-text-muted)]',
// };

// const tierGradients = {
//     peak: 'from-[#D4AF37] to-amber-600',
//     high: 'from-emerald-400 to-teal-500',
//     mid: 'from-sky-400 to-blue-500',
//     threshold: 'from-amber-400 to-orange-500',
//     low: 'from-gray-400 to-gray-600',
// };

// const reviews = [
//     {
//         text: '"The guidance was gentle, honest, and surprisingly accurate in ways that mattered. Aashna picked up on things I hadn\'t shared with anyone — it felt like she was reading the blueprint of my life."',
//         name: 'Constanza',
//         location: 'Spain',
//         modality: 'Tarot Guidance',
//         stars: 5,
//         initials: 'C',
//     },
//     {
//         text: '"I finally understood why I kept attracting the same situations and relationships. One session gave me immense clarity. Within weeks, I noticed myself responding differently to old triggers."',
//         name: 'Priya M.',
//         location: 'Mumbai, India',
//         modality: 'Integrated Healing',
//         stars: 5,
//         initials: 'PM',
//     },
//     {
//         text: '"Aashna bridges science and spirituality like no one else. The session was deeply transformative. She explained every insight with logic and precision, yet it felt deeply intuitive at the same time."',
//         name: 'Rahul K.',
//         location: 'Bangalore, India',
//         modality: 'Astrology Reading',
//         stars: 5,
//         initials: 'RK',
//     },
//     {
//         text: '"I was skeptical, but after the Akashic reading, I felt a shift I can\'t explain. Three months later, a career opportunity I\'d chased for years materialized effortlessly. Coincidence? I don\'t think so."',
//         name: 'Ananya S.',
//         location: 'Delhi, India',
//         modality: 'Akashic Records',
//         stars: 5,
//         initials: 'AS',
//     },
//     {
//         text: '"The Reiki session was unlike anything I\'d experienced before. A deep, lasting calm settled in — something I hadn\'t felt in years. I\'ve booked three more sessions since. Life-changing doesn\'t begin to cover it."',
//         name: 'David L.',
//         location: 'London, UK',
//         modality: 'Reiki Healing',
//         stars: 5,
//         initials: 'DL',
//     },
//     {
//         text: '"Her integrated healing session was the most powerful 90 minutes of my life. Patterns I\'d carried for decades — in relationships, finances, self-worth — finally made sense. I left feeling lighter than I have in 20 years."',
//         name: 'Meera J.',
//         location: 'Pune, India',
//         modality: 'Integrated Healing',
//         stars: 5,
//         initials: 'MJ',
//     },
// ];


// const Home = () => {
//     const scrollRef = useRef(null);
//     const heroRef = useRef(null);
//     const { scrollYProgress } = useScroll({ target: scrollRef, offset: ['start start', 'end end'] });
//     const { scrollY } = useScroll();

//     // Parallax effect for hero
//     const heroY = useTransform(scrollY, [0, 500], [0, 150]);
//     const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

//     /* Carousel state */
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);
//     const slidesPerView = 3;

//     /* Expanded Consciousness Level state */
//     const [expandedLevel, setExpandedLevel] = useState(null);

//     /* Floating particles animation state */
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     const toggleLevel = (name) => {
//         if (expandedLevel === name) {
//             setExpandedLevel(null);
//         } else {
//             setExpandedLevel(name);
//         }
//     };

//     useEffect(() => {
//         if (isPaused) return;
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % reviews.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, [isPaused]);

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % reviews.length);
//     const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);

//     const getVisibleReviews = () => {
//         const visible = [];
//         for (let i = 0; i < slidesPerView; i++) {
//             visible.push(reviews[(currentSlide + i) % reviews.length]);
//         }
//         return visible;
//     };

//     return (
//         <div className="min-h-screen bg-[var(--color-primary)] overflow-x-hidden relative">
//             {/* Floating particles background */}
//             <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//                 {[...Array(20)].map((_, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute w-1 h-1 bg-[var(--color-secondary)] rounded-full opacity-20"
//                         style={{
//                             left: `${Math.random() * 100}%`,
//                             top: `${Math.random() * 100}%`,
//                         }}
//                         animate={{
//                             x: [0, (mousePosition.x / 100) * (i % 2 ? 1 : -1)],
//                             y: [0, (mousePosition.y / 100) * (i % 2 ? -1 : 1)],
//                             scale: [1, 1.5, 1],
//                             opacity: [0.2, 0.5, 0.2],
//                         }}
//                         transition={{
//                             duration: 3 + Math.random() * 2,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         }}
//                     />
//                 ))}
//             </div>

//             {/* ═══════════════════════════════════════════
//           1 · HERO - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
//                 {/* Animated background with parallax */}
//                 <motion.div
//                     style={{ y: heroY }}
//                     className="absolute inset-0 z-0 bg-cover bg-center scale-110"
//                 >
//                     <div
//                         className="absolute inset-0"
//                         style={{
//                             backgroundImage: `url(${heroBg})`,
//                             filter: 'brightness(0.4) contrast(1.1)',
//                             backgroundPosition: 'center',
//                             backgroundSize: 'cover'
//                         }}
//                     />
//                 </motion.div>

//                 {/* Gradient overlays for depth */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/20 via-transparent to-[var(--color-primary)] z-0" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-primary)_100%)] z-0" />

//                 {/* Animated accent lines */}
//                 <div className="absolute inset-0 z-0 overflow-hidden">
//                     {[...Array(3)].map((_, i) => (
//                         <motion.div
//                             key={i}
//                             className="absolute h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent"
//                             style={{
//                                 top: `${30 + i * 20}%`,
//                                 left: '-100%',
//                                 right: '-100%',
//                             }}
//                             animate={{
//                                 x: ['0%', '100%'],
//                                 opacity: [0, 0.5, 0],
//                             }}
//                             transition={{
//                                 duration: 8,
//                                 delay: i * 2,
//                                 repeat: Infinity,
//                                 ease: "linear",
//                             }}
//                         />
//                     ))}
//                 </div>

//                 <motion.div
//                     style={{ opacity: heroOpacity }}
//                     className="relative z-10 text-center px-6 max-w-5xl mx-auto"
//                 >
//                     {/* Floating badge */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-[var(--color-secondary)]/20 mb-8 backdrop-blur-xl"
//                     >
//                         <Sparkles size={16} className="text-[var(--color-secondary)]" />
//                         <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
//                             Trusted by 200+ Worldwide
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, delay: 0.4 }}
//                         className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] mb-6"
//                     >
//                         Decode Your Life
//                         <br />
//                         <span className="relative inline-block mt-2">
//                             <span className="text-[var(--color-secondary)]">SCIENCE + SPIRITUALITY</span>
//                             <motion.div
//                                 className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent"
//                                 initial={{ scaleX: 0 }}
//                                 animate={{ scaleX: 1 }}
//                                 transition={{ duration: 1, delay: 1 }}
//                             />
//                         </span>
//                     </motion.h1>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1, delay: 0.8 }}
//                         className="text-2xl md:text-3xl italic font-serif text-white/95 mb-4"
//                     >
//                         "Healing begins where illusion ends"
//                     </motion.p>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 1, delay: 1 }}
//                         className="text-lg md:text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto leading-relaxed"
//                     >
//                         Your Life isn&apos;t Random. It&apos;s Patterned. Decodable. Transformable.
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5, delay: 1.3 }}
//                         className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//                     >
//                         <Link to="/booking">
//                             <motion.button
//                                 whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,175,55,0.5)' }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="group relative px-10 py-4 text-lg font-bold tracking-wide rounded-xl overflow-hidden"
//                             >
//                                 <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-size-200 animate-gradient" />
//                                 <span className="relative text-[var(--color-primary)] flex items-center gap-2">
//                                     Book My Slot
//                                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                                 </span>
//                             </motion.button>
//                         </Link>

//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="px-8 py-4 text-lg font-semibold rounded-xl glass border border-white/10 hover:border-[var(--color-secondary)]/30 transition-all duration-300"
//                             onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
//                         >
//                             Learn More
//                         </motion.button>
//                     </motion.div>

//                     {/* Trust indicators */}
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 1.5 }}
//                         className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-[var(--color-text-muted)]"
//                     >
//                         <div className="flex items-center gap-2">
//                             <Shield size={16} className="text-[var(--color-secondary)]" />
//                             <span>100% Confidential</span>
//                         </div>
//                         <div className="w-px h-4 bg-white/20" />
//                         <div className="flex items-center gap-2">
//                             <Heart size={16} className="text-[var(--color-secondary)]" />
//                             <span>Non-Judgmental Space</span>
//                         </div>
//                         <div className="w-px h-4 bg-white/20" />
//                         <div className="flex items-center gap-2">
//                             <Zap size={16} className="text-[var(--color-secondary)]" />
//                             <span>Instant Booking</span>
//                         </div>
//                     </motion.div>
//                 </motion.div>

//                 {/* Scroll indicator */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1, y: [0, 10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 2 }}
//                     className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
//                 >
//                     <div className="flex flex-col items-center gap-2">
//                         <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">Scroll</span>
//                         <ChevronDown size={32} className="text-[var(--color-secondary)]" />
//                     </div>
//                 </motion.div>
//             </section>

//             {/* ═══════════════════════════════════════════
//           1.5 · STATS COUNTER BAR - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section className="py-16 relative overflow-hidden">
//                 {/* Animated background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
//                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

//                 <div className="container mx-auto px-6 relative z-10">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         {[
//                             { number: '500+', label: 'Sessions Conducted', icon: '✨', color: 'from-amber-400 to-orange-500' },
//                             { number: '200+', label: 'Clients Worldwide', icon: '🌍', color: 'from-emerald-400 to-teal-500' },
//                             { number: '15+', label: 'Countries Reached', icon: '🗺️', color: 'from-sky-400 to-blue-500' },
//                             { number: '4.9★', label: 'Average Rating', icon: '⭐', color: 'from-[#D4AF37] to-amber-600' },
//                         ].map((stat, i) => (
//                             <motion.div
//                                 key={stat.label}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                                 className="text-center relative group"
//                             >
//                                 {/* Glow effect on hover */}
//                                 <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`} />

//                                 <div className="relative">
//                                     <motion.div
//                                         initial={{ scale: 0 }}
//                                         whileInView={{ scale: 1 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
//                                         className="text-4xl mb-2"
//                                     >
//                                         {stat.icon}
//                                     </motion.div>
//                                     <div className={`text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
//                                         {stat.number}
//                                     </div>
//                                     <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
//                                         {stat.label}
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//           1.7 · HOW IT WORKS - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section id="how-it-works" className="py-32 relative">
//                 <div className="container mx-auto px-6">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-20"
//                     >
//                         <motion.span
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4"
//                         >
//                             Simple Process
//                         </motion.span>
//                         <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
//                             How It <span className="text-[var(--color-secondary)]">Works</span>
//                         </h2>
//                         <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
//                             Your transformation journey in three simple steps.
//                         </p>
//                     </motion.div>

//                     <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
//                         {/* Enhanced connecting line */}
//                         <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px">
//                             <div className="relative h-full">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
//                                 <motion.div
//                                     className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] to-transparent"
//                                     initial={{ scaleX: 0 }}
//                                     whileInView={{ scaleX: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 1.5, delay: 0.5 }}
//                                     style={{ transformOrigin: 'left' }}
//                                 />
//                             </div>
//                         </div>

//                         {[
//                             {
//                                 step: '01',
//                                 title: 'Book Your Session',
//                                 desc: 'Choose your modality, complete the payment, and select a convenient time slot through our simple booking system.',
//                                 icon: '📅',
//                                 gradient: 'from-amber-400/20 to-orange-500/20',
//                             },
//                             {
//                                 step: '02',
//                                 title: 'Connect & Explore',
//                                 desc: 'In a safe, non-judgmental space, we explore your patterns, blocks, and the deeper forces at play in your life.',
//                                 icon: '🔮',
//                                 gradient: 'from-purple-400/20 to-pink-500/20',
//                             },
//                             {
//                                 step: '03',
//                                 title: 'Transform & Integrate',
//                                 desc: 'Receive actionable insights and energy work that create lasting shifts. Watch the old patterns dissolve as new ones emerge.',
//                                 icon: '✨',
//                                 gradient: 'from-emerald-400/20 to-teal-500/20',
//                             },
//                         ].map((item, i) => (
//                             <motion.div
//                                 key={item.step}
//                                 initial={{ opacity: 0, y: 50 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.2, duration: 0.6 }}
//                                 className="relative group"
//                             >
//                                 <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

//                                 <div className="relative glass rounded-3xl p-8 border border-white/5 group-hover:border-[var(--color-secondary)]/20 transition-all duration-500 h-full">
//                                     <div className="text-center">
//                                         <div className="relative inline-block mb-6">
//                                             <motion.div
//                                                 whileHover={{ rotate: 360, scale: 1.1 }}
//                                                 transition={{ duration: 0.6 }}
//                                                 className="w-24 h-24 rounded-2xl glass border border-[var(--color-secondary)]/30 flex items-center justify-center text-4xl relative overflow-hidden"
//                                             >
//                                                 <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50`} />
//                                                 <span className="relative z-10">{item.icon}</span>
//                                             </motion.div>
//                                             <motion.span
//                                                 initial={{ scale: 0 }}
//                                                 whileInView={{ scale: 1 }}
//                                                 viewport={{ once: true }}
//                                                 transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
//                                                 className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-amber-600 text-[var(--color-primary)] rounded-xl text-sm font-bold flex items-center justify-center shadow-lg"
//                                             >
//                                                 {item.step}
//                                             </motion.span>
//                                         </div>
//                                         <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
//                                         <p className="text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <div className="section-divider" />

//             {/* ═══════════════════════════════════════════
//           1.8 · WHAT TO EXPECT - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section className="py-32 relative overflow-hidden">
//                 {/* Background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-secondary),transparent_50%)]" />
//                 </div>

//                 <div className="container mx-auto px-6 relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <motion.span
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4"
//                         >
//                             Preparation Guide
//                         </motion.span>
//                         <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
//                             What to <span className="text-[var(--color-secondary)]">Expect</span>
//                         </h2>
//                         <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
//                             Your complete guide to preparing for and getting the most from your session.
//                         </p>
//                     </motion.div>

//                     <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//                         {[
//                             {
//                                 icon: '🧘',
//                                 title: 'Before Your Session',
//                                 gradient: 'from-sky-500/10 to-blue-600/10',
//                                 borderColor: 'border-sky-500/20',
//                                 points: [
//                                     'Set an intention — what do you want clarity on?',
//                                     'Be in a quiet, private space (for online sessions)',
//                                     'Keep a notebook handy for insights',
//                                     'Come with an open mind — no specific outcome expected',
//                                     'Avoid alcohol/heavy meals for 4 hours prior',
//                                 ],
//                             },
//                             {
//                                 icon: '💫',
//                                 title: 'During Your Session',
//                                 gradient: 'from-purple-500/10 to-pink-600/10',
//                                 borderColor: 'border-purple-500/20',
//                                 points: [
//                                     'The session begins with a brief centering exercise',
//                                     'Aashna will use the chosen modality to read your energy',
//                                     'You may share as much or as little as you like',
//                                     'Expect honest, direct insights — not predictions',
//                                     'Sessions typically last 45–90 minutes',
//                                 ],
//                             },
//                             {
//                                 icon: '🌱',
//                                 title: 'After Your Session',
//                                 gradient: 'from-emerald-500/10 to-teal-600/10',
//                                 borderColor: 'border-emerald-500/20',
//                                 points: [
//                                     'Drink plenty of water — energy work can be dehydrating',
//                                     'Journal your insights within 24 hours',
//                                     'You may feel emotional shifts for 2–3 days (this is normal)',
//                                     'Integration takes time — be patient with yourself',
//                                     'Follow any specific guidance given during the session',
//                                 ],
//                             },
//                             {
//                                 icon: '📋',
//                                 title: 'Important Notes',
//                                 gradient: 'from-amber-500/10 to-orange-600/10',
//                                 borderColor: 'border-amber-500/20',
//                                 points: [
//                                     'All sessions are strictly confidential',
//                                     'This is NOT a replacement for medical/psychological care',
//                                     'No diagnoses or medical advice will be given',
//                                     'Results vary — your openness affects outcome',
//                                     'Recordings are not permitted during sessions',
//                                 ],
//                             },
//                         ].map((card, i) => (
//                             <motion.div
//                                 key={card.title}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.15, duration: 0.6 }}
//                                 className="relative group"
//                             >
//                                 <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

//                                 <div className={`relative glass rounded-3xl p-8 border ${card.borderColor} group-hover:border-opacity-40 transition-all duration-500`}>
//                                     <motion.div
//                                         whileHover={{ scale: 1.1, rotate: 5 }}
//                                         className="text-5xl mb-6 inline-block"
//                                     >
//                                         {card.icon}
//                                     </motion.div>
//                                     <h3 className="text-2xl font-serif font-bold mb-6">{card.title}</h3>
//                                     <ul className="space-y-4">
//                                         {card.points.map((point, j) => (
//                                             <motion.li
//                                                 key={j}
//                                                 initial={{ opacity: 0, x: -20 }}
//                                                 whileInView={{ opacity: 1, x: 0 }}
//                                                 viewport={{ once: true }}
//                                                 transition={{ delay: i * 0.15 + j * 0.05 }}
//                                                 className="flex items-start gap-3 text-[var(--color-text-muted)]"
//                                             >
//                                                 <span className="text-[var(--color-secondary)] mt-1 flex-shrink-0 text-lg">✦</span>
//                                                 <span className="leading-relaxed">{point}</span>
//                                             </motion.li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <div className="section-divider" />

//             {/* ═══════════════════════════════════════════
//           2 · CONSCIOUSNESS SCALE - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section ref={scrollRef} className="py-32 relative overflow-hidden">
//                 {/* Animated background */}
//                 <div className="absolute inset-0">
//                     <motion.div
//                         className="absolute inset-0 opacity-10"
//                         style={{
//                             background: 'radial-gradient(circle at 30% 50%, var(--color-secondary) 0%, transparent 50%)',
//                         }}
//                         animate={{
//                             scale: [1, 1.2, 1],
//                             opacity: [0.05, 0.15, 0.05],
//                         }}
//                         transition={{
//                             duration: 8,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         }}
//                     />
//                 </div>

//                 <div className="container mx-auto px-6 relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-20"
//                     >
//                         <motion.span
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4"
//                         >
//                             Hawkins Scale
//                         </motion.span>
//                         <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
//                             Map of <span className="text-[var(--color-secondary)]">Consciousness</span>
//                         </h2>
//                         <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-4">
//                             Where are you on the scale? Awareness is the first step to transformation.
//                         </p>
//                         <span className="text-sm tracking-widest uppercase opacity-50 block">
//                             (Click to expand each level)
//                         </span>
//                     </motion.div>

//                     <div className="max-w-4xl mx-auto relative">
//                         {/* Enhanced gradient line */}
//                         <div className="absolute left-12 top-0 bottom-0 w-1 rounded-full overflow-hidden">
//                             <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-sky-800/30 to-[var(--color-secondary)]/50" />
//                             <motion.div
//                                 className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
//                                 animate={{
//                                     y: ['-100%', '100%'],
//                                 }}
//                                 transition={{
//                                     duration: 3,
//                                     repeat: Infinity,
//                                     ease: "linear",
//                                 }}
//                             />
//                         </div>

//                         <div className="space-y-3">
//                             {consciousnessLevels.map((item, index) => (
//                                 <motion.div
//                                     key={item.name}
//                                     initial={{ opacity: 0, x: -30 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true, margin: '-10%' }}
//                                     transition={{ duration: 0.5, delay: index * 0.03 }}
//                                     className="pl-12 relative"
//                                 >
//                                     {/* Enhanced dot indicator with pulse */}
//                                     <motion.div
//                                         className={`absolute left-[42px] top-4 z-10 w-5 h-5 rounded-full border-2 transition-all duration-300 ${item.tier === 'peak' ? 'border-[var(--color-secondary)] bg-[var(--color-secondary)] shadow-[0_0_20px_rgba(212,175,55,0.6)]' :
//                                             item.tier === 'high' ? 'border-emerald-400 bg-emerald-400/40 shadow-[0_0_15px_rgba(52,211,153,0.4)]' :
//                                                 item.tier === 'threshold' ? 'border-amber-400 bg-amber-400/40 shadow-[0_0_15px_rgba(251,191,36,0.4)]' :
//                                                     item.tier === 'mid' ? 'border-sky-400 bg-sky-400/30' :
//                                                         'border-white/30 bg-white/10'
//                                             }`}
//                                         animate={item.tier === 'peak' || item.tier === 'threshold' ? {
//                                             scale: [1, 1.2, 1],
//                                             opacity: [1, 0.7, 1],
//                                         } : {}}
//                                         transition={{
//                                             duration: 2,
//                                             repeat: Infinity,
//                                             ease: "easeInOut",
//                                         }}
//                                     />

//                                     <motion.div
//                                         onClick={() => toggleLevel(item.name)}
//                                         whileHover={{ scale: 1.01, x: 5 }}
//                                         className={`cursor-pointer rounded-2xl border transition-all duration-300 p-5 backdrop-blur-sm ${expandedLevel === item.name
//                                             ? 'bg-white/10 border-[var(--color-secondary)]/40 shadow-lg shadow-[var(--color-secondary)]/10'
//                                             : 'border-white/5 hover:border-[var(--color-secondary)]/20 hover:bg-white/5'
//                                             }`}
//                                     >
//                                         <div className="flex items-center justify-between">
//                                             <div className="flex items-center gap-6">
//                                                 <span className="text-2xl">{item.icon}</span>
//                                                 <span className="text-sm font-mono w-14 text-[var(--color-text-muted)]">{item.level}</span>
//                                                 <span className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${tierColors[item.tier]}`}>
//                                                     {item.name}
//                                                 </span>
//                                             </div>
//                                             <motion.div
//                                                 animate={{ rotate: expandedLevel === item.name ? 180 : 0 }}
//                                                 transition={{ duration: 0.3 }}
//                                             >
//                                                 <ChevronDown size={22} className="text-[var(--color-text-muted)]" />
//                                             </motion.div>
//                                         </div>

//                                         <AnimatePresence>
//                                             {expandedLevel === item.name && (
//                                                 <motion.div
//                                                     initial={{ height: 0, opacity: 0 }}
//                                                     animate={{ height: 'auto', opacity: 1 }}
//                                                     exit={{ height: 0, opacity: 0 }}
//                                                     transition={{ duration: 0.3 }}
//                                                     className="overflow-hidden"
//                                                 >
//                                                     <div className={`mt-5 pt-5 border-t border-gradient-to-r ${tierGradients[item.tier]} opacity-20`} />
//                                                     <p className="text-[var(--color-text-muted)] leading-relaxed text-base pl-[104px] mt-3">
//                                                         {item.desc}
//                                                     </p>
//                                                 </motion.div>
//                                             )}
//                                         </AnimatePresence>
//                                     </motion.div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//           3 · PATTERN THEORY - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section className="py-32 relative overflow-hidden">
//                 {/* Animated background */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.05),transparent_50%)]" />

//                 <div className="container mx-auto px-6 relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-20"
//                     >
//                         <motion.span
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4"
//                         >
//                             Understanding Your Journey
//                         </motion.span>
//                         <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
//                             What are <span className="text-[var(--color-secondary)]">Patterns</span>?
//                         </h2>
//                         <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
//                             Are you living in a circle or evolving in a spiral?
//                         </p>
//                     </motion.div>

//                     <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//                         {/* Circle - Enhanced */}
//                         <motion.div
//                             initial={{ opacity: 0, x: -50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8 }}
//                             className="relative group"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-red-950/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

//                             <div className="relative glass rounded-3xl p-12 border border-red-500/20 group-hover:border-red-500/40 transition-all duration-500 overflow-hidden">
//                                 {/* Background pattern */}
//                                 <div className="absolute inset-0 opacity-5">
//                                     {[...Array(5)].map((_, i) => (
//                                         <motion.div
//                                             key={i}
//                                             className="absolute inset-0 border-2 border-dashed border-red-500 rounded-full"
//                                             style={{
//                                                 width: `${100 - i * 15}%`,
//                                                 height: `${100 - i * 15}%`,
//                                                 top: `${i * 7.5}%`,
//                                                 left: `${i * 7.5}%`,
//                                             }}
//                                             animate={{ rotate: 360 }}
//                                             transition={{
//                                                 duration: 20 + i * 5,
//                                                 repeat: Infinity,
//                                                 ease: "linear",
//                                             }}
//                                         />
//                                     ))}
//                                 </div>

//                                 <div className="text-center relative z-10">
//                                     <motion.div
//                                         animate={{ rotate: 360 }}
//                                         transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
//                                         className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-red-500/40 mx-auto mb-8 flex items-center justify-center relative"
//                                     >
//                                         <motion.div
//                                             animate={{
//                                                 scale: [1, 1.2, 1],
//                                                 opacity: [0.5, 1, 0.5],
//                                             }}
//                                             transition={{
//                                                 duration: 2,
//                                                 repeat: Infinity,
//                                                 ease: "easeInOut",
//                                             }}
//                                             className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]"
//                                         />

//                                         {/* Orbit trail */}
//                                         {[...Array(8)].map((_, i) => (
//                                             <motion.div
//                                                 key={i}
//                                                 className="absolute w-2 h-2 bg-red-500/30 rounded-full"
//                                                 style={{
//                                                     top: '50%',
//                                                     left: '50%',
//                                                     marginTop: '-4px',
//                                                     marginLeft: '-4px',
//                                                 }}
//                                                 animate={{
//                                                     rotate: 360,
//                                                     opacity: [0, 0.5, 0],
//                                                 }}
//                                                 transition={{
//                                                     duration: 12,
//                                                     repeat: Infinity,
//                                                     ease: "linear",
//                                                     delay: i * 0.5,
//                                                 }}
//                                             />
//                                         ))}
//                                     </motion.div>

//                                     <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-red-400">Life as a Circle</h3>
//                                     <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
//                                         This is <span className="text-red-400 font-semibold">"stuckness"</span>. Repeating the same relationship dynamics, financial blocks, and emotional triggers. The scenery changes, but the script stays the same. You feel like a victim of circumstance, looping in karma.
//                                     </p>
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Spiral - Enhanced */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8 }}
//                             className="relative group"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/10 to-amber-600/10 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

//                             <div className="relative glass rounded-3xl p-12 border border-[var(--color-secondary)]/30 group-hover:border-[var(--color-secondary)]/50 transition-all duration-500 overflow-hidden">
//                                 {/* Background glow */}
//                                 <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent" />

//                                 <div className="text-center relative z-10">
//                                     {/* Enhanced spiral animation */}
//                                     <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 relative flex items-center justify-center">
//                                         {[...Array(12)].map((_, i) => (
//                                             <motion.div
//                                                 key={i}
//                                                 className="absolute border border-[var(--color-secondary)] rounded-full"
//                                                 style={{
//                                                     width: `${20 + i * 8}%`,
//                                                     height: `${20 + i * 8}%`,
//                                                 }}
//                                                 initial={{ opacity: 0, scale: 0, rotate: 0 }}
//                                                 animate={{
//                                                     opacity: [0, 0.6, 0],
//                                                     scale: [0.3, 1.5, 1.8],
//                                                     rotate: [0, 180, 360],
//                                                     y: [0, -20, -40],
//                                                 }}
//                                                 transition={{
//                                                     duration: 5,
//                                                     delay: i * 0.4,
//                                                     repeat: Infinity,
//                                                     ease: "easeOut",
//                                                 }}
//                                             />
//                                         ))}

//                                         <motion.div
//                                             animate={{
//                                                 y: [-15, 15, -15],
//                                                 rotate: [0, 360],
//                                                 scale: [1, 1.2, 1],
//                                             }}
//                                             transition={{
//                                                 duration: 4,
//                                                 repeat: Infinity,
//                                                 ease: 'easeInOut'
//                                             }}
//                                             className="absolute text-5xl z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
//                                         >
//                                             ✨
//                                         </motion.div>

//                                         {/* Ascending particles */}
//                                         {[...Array(6)].map((_, i) => (
//                                             <motion.div
//                                                 key={`particle-${i}`}
//                                                 className="absolute w-1 h-1 bg-[var(--color-secondary)] rounded-full"
//                                                 animate={{
//                                                     y: [0, -100],
//                                                     x: [0, (i % 2 ? 1 : -1) * 30],
//                                                     opacity: [1, 0],
//                                                     scale: [1, 0],
//                                                 }}
//                                                 transition={{
//                                                     duration: 2,
//                                                     delay: i * 0.3,
//                                                     repeat: Infinity,
//                                                     ease: "easeOut",
//                                                 }}
//                                             />
//                                         ))}
//                                     </div>

//                                     <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[var(--color-secondary)]">Life as a Spiral</h3>
//                                     <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
//                                         This is <span className="text-[var(--color-secondary)] font-semibold">Evolution</span>. You revisit the same themes, but from a higher perspective. You employ awareness, make different choices, and break the karmic loop. You aren't just moving; you are <span className="text-white font-semibold">ascending</span>.
//                                     </p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//           4 · TESTIMONIALS CAROUSEL - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section className="py-32 relative overflow-hidden">
//                 {/* Background effects */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

//                 <div className="container mx-auto px-6 relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-20"
//                     >
//                         <motion.span
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4"
//                         >
//                             Success Stories
//                         </motion.span>
//                         <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
//                             Client <span className="text-[var(--color-secondary)]">Transformations</span>
//                         </h2>
//                         <p className="text-xl text-[var(--color-text-muted)]">Real stories. Real shifts. Real results.</p>
//                     </motion.div>

//                     <div
//                         className="relative max-w-7xl mx-auto"
//                         onMouseEnter={() => setIsPaused(true)}
//                         onMouseLeave={() => setIsPaused(false)}
//                     >
//                         {/* Desktop: 3 visible */}
//                         <div className="hidden md:grid grid-cols-3 gap-8">
//                             <AnimatePresence mode="popLayout">
//                                 {getVisibleReviews().map((review, i) => (
//                                     <motion.div
//                                         key={`${review.name}-${currentSlide}-${i}`}
//                                         initial={{ opacity: 0, y: 30, scale: 0.9 }}
//                                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                                         exit={{ opacity: 0, y: -30, scale: 0.9 }}
//                                         transition={{ duration: 0.5, delay: i * 0.1 }}
//                                         className="h-full"
//                                     >
//                                         <div className="glass rounded-3xl p-8 h-full flex flex-col border border-white/5 hover:border-[var(--color-secondary)]/30 transition-all duration-500 group relative overflow-hidden">
//                                             {/* Hover glow effect */}
//                                             <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                                             <div className="relative z-10">
//                                                 {/* Header */}
//                                                 <div className="flex items-center gap-4 mb-6">
//                                                     <motion.div
//                                                         whileHover={{ scale: 1.1, rotate: 5 }}
//                                                         className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-amber-700 flex items-center justify-center text-[var(--color-primary)] font-bold flex-shrink-0 shadow-lg"
//                                                     >
//                                                         {review.initials}
//                                                     </motion.div>
//                                                     <div>
//                                                         <div className="font-serif font-bold text-lg">{review.name}</div>
//                                                         <div className="text-sm text-[var(--color-text-muted)] flex items-center gap-1">
//                                                             <span>📍</span>
//                                                             {review.location}
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 {/* Stars */}
//                                                 <div className="flex gap-1 mb-5">
//                                                     {[...Array(review.stars)].map((_, s) => (
//                                                         <motion.div
//                                                             key={s}
//                                                             initial={{ opacity: 0, scale: 0 }}
//                                                             animate={{ opacity: 1, scale: 1 }}
//                                                             transition={{ delay: i * 0.1 + s * 0.05 }}
//                                                         >
//                                                             <Star size={16} className="text-[var(--color-secondary)] fill-[var(--color-secondary)]" />
//                                                         </motion.div>
//                                                     ))}
//                                                 </div>

//                                                 {/* Quote */}
//                                                 <p className="italic text-[var(--color-text-muted)] leading-relaxed flex-1 text-base mb-6">
//                                                     {review.text}
//                                                 </p>

//                                                 {/* Modality tag */}
//                                                 <div className="pt-5 border-t border-white/10">
//                                                     <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-4 py-2 rounded-full font-bold inline-block">
//                                                         {review.modality}
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </AnimatePresence>
//                         </div>

//                         {/* Mobile: 1 visible */}
//                         <div className="md:hidden">
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={currentSlide}
//                                     initial={{ opacity: 0, x: 100 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     exit={{ opacity: 0, x: -100 }}
//                                     transition={{ duration: 0.4 }}
//                                 >
//                                     <div className="glass rounded-3xl p-8 border border-white/5">
//                                         <div className="flex items-center gap-4 mb-6">
//                                             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-amber-700 flex items-center justify-center text-[var(--color-primary)] font-bold flex-shrink-0">
//                                                 {reviews[currentSlide].initials}
//                                             </div>
//                                             <div>
//                                                 <div className="font-serif font-bold text-lg">{reviews[currentSlide].name}</div>
//                                                 <div className="text-sm text-[var(--color-text-muted)]">📍 {reviews[currentSlide].location}</div>
//                                             </div>
//                                         </div>

//                                         <div className="flex gap-1 mb-5">
//                                             {[...Array(reviews[currentSlide].stars)].map((_, s) => (
//                                                 <Star key={s} size={16} className="text-[var(--color-secondary)] fill-[var(--color-secondary)]" />
//                                             ))}
//                                         </div>

//                                         <p className="italic text-[var(--color-text-muted)] leading-relaxed mb-6">
//                                             {reviews[currentSlide].text}
//                                         </p>

//                                         <div className="pt-5 border-t border-white/10">
//                                             <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-4 py-2 rounded-full font-bold">
//                                                 {reviews[currentSlide].modality}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             </AnimatePresence>
//                         </div>

//                         {/* Enhanced Navigation */}
//                         <div className="flex justify-center items-center gap-6 mt-12">
//                             <motion.button
//                                 onClick={prevSlide}
//                                 whileHover={{ scale: 1.1, backgroundColor: 'rgba(212,175,55,0.1)' }}
//                                 whileTap={{ scale: 0.9 }}
//                                 className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 hover:border-[var(--color-secondary)]/30 transition-all duration-300"
//                             >
//                                 <ChevronLeft size={20} className="text-[var(--color-secondary)]" />
//                             </motion.button>

//                             <div className="flex gap-2">
//                                 {reviews.map((_, i) => (
//                                     <motion.button
//                                         key={i}
//                                         onClick={() => setCurrentSlide(i)}
//                                         whileHover={{ scale: 1.2 }}
//                                         className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide
//                                             ? 'bg-[var(--color-secondary)] w-8 shadow-[0_0_10px_rgba(212,175,55,0.5)]'
//                                             : 'bg-white/20 w-2 hover:bg-white/40'
//                                             }`}
//                                     />
//                                 ))}
//                             </div>

//                             <motion.button
//                                 onClick={nextSlide}
//                                 whileHover={{ scale: 1.1, backgroundColor: 'rgba(212,175,55,0.1)' }}
//                                 whileTap={{ scale: 0.9 }}
//                                 className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 hover:border-[var(--color-secondary)]/30 transition-all duration-300"
//                             >
//                                 <ChevronRight size={20} className="text-[var(--color-secondary)]" />
//                             </motion.button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//           5 · INSTAGRAM FEED - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section className="py-20 overflow-hidden relative">
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

//                 <div className="container mx-auto px-6 mb-12 relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center"
//                     >
//                         <motion.span
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4"
//                         >
//                             Daily Insights
//                         </motion.span>
//                         <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">
//                             Follow the <span className="text-[var(--color-secondary)]">Journey</span>
//                         </h2>
//                         <a
//                             href="https://instagram.com/de_codeyourlife"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 text-[var(--color-secondary)] hover:text-[var(--color-secondary)]/80 transition-colors group"
//                         >
//                             <span className="text-lg">@de_codeyourlife</span>
//                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </motion.div>
//                 </div>

//                 {/* Enhanced scrolling grid */}
//                 <div className="relative">
//                     <motion.div
//                         animate={{ x: ['0%', '-50%'] }}
//                         transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
//                         className="flex gap-6"
//                     >
//                         {[
//                             { emoji: '✨', title: 'Consciousness', text: 'Your level of awareness determines your reality. Rise above 200 on the Hawkins scale.', gradient: 'from-amber-800/80 to-orange-950/90' },
//                             { emoji: '🌙', title: 'Tarot Insights', text: 'The cards don\'t predict — they mirror. What patterns are your cards reflecting right now?', gradient: 'from-indigo-900/90 to-violet-950/90' },
//                             { emoji: '🔮', title: 'Akashic Records', text: 'Every soul has a blueprint. Your Akashic Records hold the map to karmic contracts & purpose.', gradient: 'from-purple-900/80 to-fuchsia-950/90' },
//                             { emoji: '☀️', title: 'Astrology', text: 'You are not your Sun sign. Your chart is a cosmic DNA — unique, complex, and deeply revealing.', gradient: 'from-amber-900/80 to-yellow-950/90' },
//                             { emoji: '💫', title: 'Client Wins', text: '"After one session, a 15-year pattern broke." — Real transformation, real people.', gradient: 'from-emerald-900/80 to-teal-950/90' },
//                             { emoji: '🧘', title: 'Reiki Energy', text: 'Energy doesn\'t lie. Reiki goes where words can\'t — to the root of what\'s really blocked.', gradient: 'from-sky-900/80 to-cyan-950/90' },
//                             { emoji: '💎', title: 'Crystal Guidance', text: 'Each crystal carries a frequency. Learn which ones align with your current healing journey.', gradient: 'from-rose-900/80 to-pink-950/90' },
//                             { emoji: '🌿', title: 'Healing Codes', text: 'Ancient numerical sequences that reprogram cellular memory. Science meets the sacred.', gradient: 'from-emerald-800/80 to-green-950/90' },
//                             { emoji: '⭐', title: 'Transformations', text: 'From stuck to spiral. From circle to expansion. This is what breaking patterns looks like.', gradient: 'from-amber-700/80 to-orange-950/90' },
//                         ].flatMap((post, idx) => [post, post].map((p, dup) => ({ ...p, _key: `${idx}-${dup}` })))
//                             .map((post) => (
//                                 <motion.div
//                                     key={post._key}
//                                     whileHover={{ scale: 1.05, y: -5 }}
//                                     className={`flex-shrink-0 w-64 h-80 md:w-72 md:h-96 rounded-3xl bg-gradient-to-br ${post.gradient} relative overflow-hidden group cursor-pointer border border-white/10 hover:border-[var(--color-secondary)]/40 transition-all duration-500 shadow-xl`}
//                                 >
//                                     {/* Content */}
//                                     <div className="absolute inset-0 p-8 flex flex-col justify-between">
//                                         <div>
//                                             <motion.span
//                                                 whileHover={{ scale: 1.2, rotate: 10 }}
//                                                 className="text-5xl block mb-4 drop-shadow-lg"
//                                             >
//                                                 {post.emoji}
//                                             </motion.span>
//                                             <h4 className="text-base font-bold uppercase tracking-[0.15em] text-white mb-3 drop-shadow-md">
//                                                 {post.title}
//                                             </h4>
//                                         </div>
//                                         <p className="text-sm text-white/80 leading-relaxed line-clamp-4 drop-shadow-sm">
//                                             {post.text}
//                                         </p>
//                                     </div>

//                                     {/* Enhanced hover overlay */}
//                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm">
//                                         <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
//                                             <svg className="w-12 h-12 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                                                 <rect x="2" y="2" width="20" height="20" rx="5" />
//                                                 <circle cx="12" cy="12" r="5" />
//                                                 <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                     </motion.div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//           6 · CTA BANNER - ENHANCED
//       ═══════════════════════════════════════════ */}
//             <section className="py-32 relative overflow-hidden">
//                 {/* Animated background */}
//                 <div className="absolute inset-0">
//                     <motion.div
//                         className="absolute inset-0 opacity-20"
//                         style={{
//                             background: 'radial-gradient(circle at 50% 50%, var(--color-secondary) 0%, transparent 70%)',
//                         }}
//                         animate={{
//                             scale: [1, 1.2, 1],
//                             opacity: [0.1, 0.3, 0.1],
//                         }}
//                         transition={{
//                             duration: 5,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         }}
//                     />
//                 </div>

//                 <div className="container mx-auto px-6 text-center relative z-10">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="relative"
//                     >
//                         {/* Glow effect */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/20 to-amber-600/20 rounded-3xl blur-3xl" />

//                         <div className="relative glass rounded-3xl p-16 md:p-24 border border-[var(--color-secondary)]/20 overflow-hidden">
//                             {/* Background pattern */}
//                             <div className="absolute inset-0 opacity-5">
//                                 {[...Array(20)].map((_, i) => (
//                                     <motion.div
//                                         key={i}
//                                         className="absolute w-1 h-1 bg-[var(--color-secondary)] rounded-full"
//                                         style={{
//                                             left: `${Math.random() * 100}%`,
//                                             top: `${Math.random() * 100}%`,
//                                         }}
//                                         animate={{
//                                             scale: [0, 1.5, 0],
//                                             opacity: [0, 1, 0],
//                                         }}
//                                         transition={{
//                                             duration: 2,
//                                             delay: i * 0.1,
//                                             repeat: Infinity,
//                                         }}
//                                     />
//                                 ))}
//                             </div>

//                             <div className="relative z-10">
//                                 <motion.div
//                                     initial={{ scale: 0 }}
//                                     whileInView={{ scale: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ type: "spring", stiffness: 200 }}
//                                     className="text-6xl mb-6"
//                                 >
//                                     ✨
//                                 </motion.div>

//                                 <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
//                                     Ready to Decode <br className="hidden md:block" />
//                                     <span className="text-[var(--color-secondary)]">Your</span> Life?
//                                 </h2>

//                                 <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
//                                     Spirituality is not about escaping life, <br className="hidden md:block" />
//                                     but <span className="text-white font-semibold">understanding it deeply</span>.
//                                 </p>

//                                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                                     <Link to="/booking">
//                                         <motion.button
//                                             whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(212,175,55,0.6)' }}
//                                             whileTap={{ scale: 0.95 }}
//                                             className="group relative px-12 py-5 text-xl font-bold tracking-wide rounded-xl overflow-hidden"
//                                         >
//                                             <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-size-200 animate-gradient" />
//                                             <span className="relative text-[var(--color-primary)] flex items-center gap-3">
//                                                 Book My Slot
//                                                 <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
//                                             </span>
//                                         </motion.button>
//                                     </Link>

//                                     <motion.p
//                                         initial={{ opacity: 0 }}
//                                         whileInView={{ opacity: 1 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: 0.3 }}
//                                         className="text-sm text-[var(--color-text-muted)]"
//                                     >
//                                         <span className="text-[var(--color-secondary)]">✓</span> No credit card required
//                                     </motion.p>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Add required CSS for gradient animation */}
//             <style jsx>{`
//                 @keyframes gradient {
//                     0% { background-position: 0% 50%; }
//                     50% { background-position: 100% 50%; }
//                     100% { background-position: 0% 50%; }
//                 }
//                 .animate-gradient {
//                     background-size: 200% 200%;
//                     animation: gradient 3s ease infinite;
//                 }
//                 .bg-size-200 {
//                     background-size: 200% 200%;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Home;



// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import heroBg from '../assets/yunchuan-luo-7emiteIwfuk-unsplash.jpg';
// import { Star, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Heart, Shield, Zap } from 'lucide-react';

// /* Balanced Design: Modern + Warm + Engaging
//    Keeps visual interest while being professional
//    Not too minimal, not too busy - just right
// */

// const consciousnessLevels = [
//     { level: '700+', name: 'Enlightenment', tier: 'peak', desc: 'Pure consciousness. The state of "Is-ness". Complete transcendence of the ego.', icon: '🌟' },
//     { level: '600', name: 'Peace', tier: 'peak', desc: 'Total transcendence. Perfect bliss and suspension of time. Illumination.', icon: '☮️' },
//     { level: '540', name: 'Joy', tier: 'high', desc: 'Love becoming increasingly unconditional. A state of pervasive, unshakable happiness.', icon: '😊' },
//     { level: '500', name: 'Love', tier: 'high', desc: 'A permanent state of benevolence. Forgiveness and nurturing support of life.', icon: '💖' },
//     { level: '400', name: 'Reason', tier: 'mid', desc: 'Rationality, intelligence, and clarity. The level of science and medicine.', icon: '🧠' },
//     { level: '350', name: 'Acceptance', tier: 'mid', desc: 'Realization that one is the source of one\'s own experience. taking responsibility.', icon: '🤝' },
//     { level: '310', name: 'Willingness', tier: 'mid', desc: 'Optimism and openness. Growth becomes rapid and easy.', icon: '🌱' },
//     { level: '250', name: 'Neutrality', tier: 'mid', desc: 'A state of release from judgment. Flexibility and non-attachment to outcomes.', icon: '⚖️' },
//     { level: '200', name: 'Courage', tier: 'threshold', desc: 'The critical turning point. Empowerment and determination to affect change.', icon: '⚡' },
//     { level: '175', name: 'Pride', tier: 'low', desc: 'Demanding and inflated ego. Vulnerable to shame and external validation.', icon: '👑' },
//     { level: '150', name: 'Anger', tier: 'low', desc: 'Frustration and resentment. Can be a catalyst for action or destructive.', icon: '😤' },
//     { level: '125', name: 'Desire', tier: 'low', desc: 'Craving and acquisitiveness. The root of addiction and attachment.', icon: '🎯' },
//     { level: '100', name: 'Fear', tier: 'low', desc: 'Anxiety and worry. Viewing the world as dangerous and threatening.', icon: '😰' },
//     { level: '75', name: 'Grief', tier: 'low', desc: 'Sadness, loss, and despondency. A state of helplessness.', icon: '😢' },
//     { level: '50', name: 'Apathy', tier: 'low', desc: 'Hopelessness and despair. The state of being "stuck" or heavy.', icon: '😶' },
//     { level: '30', name: 'Guilt', tier: 'low', desc: 'Blame and remorse. Used to manipulate and punish oneself and others.', icon: '😔' },
//     { level: '20', name: 'Shame', tier: 'low', desc: 'Humiliation and elimination. The lowest level of energy, bordering on death.', icon: '😞' },
// ];

// const reviews = [
//     {
//         text: '"The guidance was gentle, honest, and surprisingly accurate in ways that mattered. Aashna picked up on things I hadn\'t shared with anyone — it felt like she was reading the blueprint of my life."',
//         name: 'Constanza',
//         location: 'Spain',
//         modality: 'Tarot Guidance',
//         stars: 5,
//         initials: 'C',
//     },
//     {
//         text: '"I finally understood why I kept attracting the same situations and relationships. One session gave me immense clarity. Within weeks, I noticed myself responding differently to old triggers."',
//         name: 'Priya M.',
//         location: 'Mumbai, India',
//         modality: 'Integrated Healing',
//         stars: 5,
//         initials: 'PM',
//     },
//     {
//         text: '"Aashna bridges science and spirituality like no one else. The session was deeply transformative. She explained every insight with logic and precision, yet it felt deeply intuitive at the same time."',
//         name: 'Rahul K.',
//         location: 'Bangalore, India',
//         modality: 'Astrology Reading',
//         stars: 5,
//         initials: 'RK',
//     },
//     {
//         text: '"I was skeptical, but after the Akashic reading, I felt a shift I can\'t explain. Three months later, a career opportunity I\'d chased for years materialized effortlessly. Coincidence? I don\'t think so."',
//         name: 'Ananya S.',
//         location: 'Delhi, India',
//         modality: 'Akashic Records',
//         stars: 5,
//         initials: 'AS',
//     },
//     {
//         text: '"The Reiki session was unlike anything I\'d experienced before. A deep, lasting calm settled in — something I hadn\'t felt in years. I\'ve booked three more sessions since. Life-changing doesn\'t begin to cover it."',
//         name: 'David L.',
//         location: 'London, UK',
//         modality: 'Reiki Healing',
//         stars: 5,
//         initials: 'DL',
//     },
// ];

// const Home = () => {
//     const { scrollY } = useScroll();
//     const heroY = useTransform(scrollY, [0, 600], [0, 200]);
//     const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [expandedLevel, setExpandedLevel] = useState(null);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % reviews.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="min-h-screen bg-[var(--color-primary)] overflow-x-hidden">

//             {/* ═══════════════════════════════════════════
//                 HERO - REFINED & BALANCED
//             ═══════════════════════════════════════════ */}
//             <section className="relative h-screen flex items-center justify-center overflow-hidden">
//                 <motion.div 
//                     style={{ y: heroY }}
//                     className="absolute inset-0 z-0"
//                 >
//                     <div 
//                         className="absolute inset-0 bg-cover bg-center"
//                         style={{ 
//                             backgroundImage: `url(${heroBg})`,
//                             filter: 'brightness(0.45) contrast(1.05)',
//                         }}
//                     />
//                 </motion.div>

//                 <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/40 via-transparent to-[var(--color-primary)] z-0" />

//                 <motion.div 
//                     style={{ opacity: heroOpacity }}
//                     className="relative z-10 text-center px-6 max-w-5xl mx-auto"
//                 >
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--color-secondary)]/30 backdrop-blur-md mb-6"
//                     >
//                         <Sparkles size={14} className="text-[var(--color-secondary)]" />
//                         <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
//                             Science · Spirituality · Transformation
//                         </span>
//                     </motion.div>

//                     <motion.h1
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, delay: 0.4 }}
//                         className="text-6xl md:text-8xl font-serif font-bold leading-[1.05] mb-6"
//                     >
//                         Decode Your Life
//                     </motion.h1>

//                     <motion.div
//                         initial={{ opacity: 0, scaleX: 0 }}
//                         animate={{ opacity: 1, scaleX: 1 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                         className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6"
//                     />

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 1 }}
//                         className="text-2xl md:text-3xl italic font-serif text-white/95 mb-4"
//                     >
//                         "Healing begins where illusion ends"
//                     </motion.p>

//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 1.2 }}
//                         className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto"
//                     >
//                         Your life isn't random. It's patterned, decodable, and transformable.
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1.4 }}
//                         className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
//                     >
//                         <Link to="/booking">
//                             <motion.button
//                                 whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(212,175,55,0.5)' }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="px-10 py-4 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-lg font-semibold flex items-center gap-2"
//                             >
//                                 Book Your Session
//                                 <ArrowRight size={20} />
//                             </motion.button>
//                         </Link>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.8, delay: 1.6 }}
//                         className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/60"
//                     >
//                         <div className="flex items-center gap-2">
//                             <Shield size={14} />
//                             <span>100% Confidential</span>
//                         </div>
//                         <div className="w-px h-4 bg-white/20" />
//                         <div className="flex items-center gap-2">
//                             <Heart size={14} />
//                             <span>Non-Judgmental</span>
//                         </div>
//                         <div className="w-px h-4 bg-white/20" />
//                         <div className="flex items-center gap-2">
//                             <Zap size={14} />
//                             <span>Instant Booking</span>
//                         </div>
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1, y: [0, 8, 0] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 2 }}
//                     className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-secondary)]"
//                 >
//                     <ChevronDown size={28} />
//                 </motion.div>
//             </section>

//             {/* ═══════════════════════════════════════════
//                 STATS BAR - ENHANCED
//             ═══════════════════════════════════════════ */}
//             <section className="py-16 bg-gradient-to-r from-black/30 via-black/20 to-black/30 border-y border-white/5">
//                 <div className="container mx-auto px-6">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                         {[
//                             { number: '500+', label: 'Sessions Conducted', icon: '✨' },
//                             { number: '200+', label: 'Clients Worldwide', icon: '🌍' },
//                             { number: '15+', label: 'Countries Reached', icon: '🗺️' },
//                             { number: '4.9★', label: 'Average Rating', icon: '⭐' },
//                         ].map((stat, i) => (
//                             <motion.div
//                                 key={stat.label}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.1 }}
//                                 className="text-center group"
//                             >
//                                 <div className="text-3xl mb-2">{stat.icon}</div>
//                                 <div className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-secondary)] mb-2">
//                                     {stat.number}
//                                 </div>
//                                 <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
//                                     {stat.label}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//                 PHILOSOPHY - WHY WE'RE DIFFERENT
//             ═══════════════════════════════════════════ */}
//             <section className="py-24 px-6">
//                 <div className="container mx-auto max-w-6xl">
//                     <div className="grid md:grid-cols-2 gap-16 items-center">
//                         <motion.div
//                             initial={{ opacity: 0, x: -30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
//                                 Our Approach
//                             </span>
//                             <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
//                                 Your life isn't random.
//                                 <br />
//                                 <span className="text-[var(--color-secondary)]">It's patterned.</span>
//                             </h2>
//                             <div className="space-y-4 text-[var(--color-text-muted)] text-lg leading-relaxed">
//                                 <p>
//                                     Every repeating relationship. Every financial block. Every emotional trigger. 
//                                     They aren't accidents—they're <span className="text-white font-medium">codes</span>.
//                                 </p>
//                                 <p>
//                                     We decode them through a synthesis of ancient wisdom and modern understanding—tarot, 
//                                     astrology, Akashic records, energy healing, and psychology.
//                                 </p>
//                                 <p className="text-white font-medium">
//                                     The work isn't to escape your life. It's to understand it so deeply that you can transform it.
//                                 </p>
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, x: 30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             className="grid grid-cols-2 gap-6"
//                         >
//                             {[
//                                 { label: 'Success Rate', value: '85%', desc: 'Clients see shifts' },
//                                 { label: 'Experience', value: '5+ Yrs', desc: 'Professional practice' },
//                                 { label: 'Modalities', value: '8+', desc: 'Integrated tools' },
//                                 { label: 'Return Rate', value: '75%', desc: 'Book again' },
//                             ].map((item, i) => (
//                                 <motion.div
//                                     key={item.label}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: i * 0.1 }}
//                                     className="glass rounded-2xl p-6 border border-white/5 hover:border-[var(--color-secondary)]/30 transition-all duration-300"
//                                 >
//                                     <div className="text-3xl font-serif font-bold text-[var(--color-secondary)] mb-1">
//                                         {item.value}
//                                     </div>
//                                     <div className="text-sm font-medium text-white mb-1">
//                                         {item.label}
//                                     </div>
//                                     <div className="text-xs text-[var(--color-text-muted)]">
//                                         {item.desc}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//                 CIRCLE VS SPIRAL - VISUAL STORYTELLING
//             ═══════════════════════════════════════════ */}
//             <section className="py-24 px-6 bg-black/20">
//                 <div className="container mx-auto max-w-6xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
//                             Understanding Patterns
//                         </span>
//                         <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
//                             Circle or <span className="text-[var(--color-secondary)]">Spiral</span>?
//                         </h2>
//                         <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
//                             One keeps you stuck. The other sets you free.
//                         </p>
//                     </motion.div>

//                     <div className="grid md:grid-cols-2 gap-10">
//                         {/* Circle */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="glass rounded-3xl p-10 border border-white/5 hover:border-red-500/20 transition-all duration-500 group"
//                         >
//                             <div className="flex justify-center mb-8">
//                                 <div className="relative w-40 h-40">
//                                     <motion.div
//                                         animate={{ rotate: 360 }}
//                                         transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
//                                         className="absolute inset-0 rounded-full border-2 border-dashed border-red-500/40"
//                                     />
//                                     <motion.div
//                                         animate={{ scale: [1, 1.2, 1] }}
//                                         transition={{ duration: 2, repeat: Infinity }}
//                                         className="absolute inset-0 flex items-center justify-center"
//                                     >
//                                         <div className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_15px_rgba(248,113,113,0.6)]" />
//                                     </motion.div>
//                                 </div>
//                             </div>

//                             <h3 className="text-2xl font-serif font-bold mb-4 text-center">Life as a Circle</h3>
//                             <p className="text-[var(--color-text-muted)] text-center leading-relaxed">
//                                 Repeating the same relationship dynamics, financial blocks, and emotional triggers. 
//                                 The scenery changes, but the script stays identical. <span className="text-red-400">Stuckness.</span>
//                             </p>
//                         </motion.div>

//                         {/* Spiral */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 0.2 }}
//                             className="glass rounded-3xl p-10 border border-[var(--color-secondary)]/30 hover:border-[var(--color-secondary)]/50 transition-all duration-500"
//                         >
//                             <div className="flex justify-center mb-8">
//                                 <div className="relative w-40 h-40">
//                                     {[...Array(6)].map((_, i) => (
//                                         <motion.div
//                                             key={i}
//                                             className="absolute inset-0 border border-[var(--color-secondary)] rounded-full"
//                                             initial={{ opacity: 0, scale: 0 }}
//                                             animate={{
//                                                 opacity: [0, 0.5, 0],
//                                                 scale: [0.5, 1.5],
//                                                 y: [0, -30],
//                                             }}
//                                             transition={{
//                                                 duration: 3,
//                                                 delay: i * 0.5,
//                                                 repeat: Infinity,
//                                             }}
//                                         />
//                                     ))}
//                                     <motion.div
//                                         animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
//                                         transition={{ duration: 4, repeat: Infinity }}
//                                         className="absolute inset-0 flex items-center justify-center text-3xl"
//                                     >
//                                         ✨
//                                     </motion.div>
//                                 </div>
//                             </div>

//                             <h3 className="text-2xl font-serif font-bold mb-4 text-center text-[var(--color-secondary)]">
//                                 Life as a Spiral
//                             </h3>
//                             <p className="text-[var(--color-text-muted)] text-center leading-relaxed">
//                                 You revisit the same themes, but from a higher perspective. You make different choices 
//                                 and break the loop. You're not just moving—you're <span className="text-[var(--color-secondary)] font-semibold">ascending</span>.
//                             </p>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//                 HOW IT WORKS
//             ═══════════════════════════════════════════ */}
//             <section className="py-24 px-6">
//                 <div className="container mx-auto max-w-5xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
//                             Simple Process
//                         </span>
//                         <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
//                             How It <span className="text-[var(--color-secondary)]">Works</span>
//                         </h2>
//                         <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
//                             Your transformation journey in three clear steps.
//                         </p>
//                     </motion.div>

//                     <div className="grid md:grid-cols-3 gap-8 relative">
//                         <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent" />

//                         {[
//                             {
//                                 num: '01',
//                                 icon: '📅',
//                                 title: 'Book Your Session',
//                                 desc: 'Choose your modality and time slot through our simple booking system.',
//                             },
//                             {
//                                 num: '02',
//                                 icon: '🔮',
//                                 title: 'Connect & Explore',
//                                 desc: 'We explore your patterns and blocks in a safe, non-judgmental space.',
//                             },
//                             {
//                                 num: '03',
//                                 icon: '✨',
//                                 title: 'Transform',
//                                 desc: 'Receive insights and energy work that create lasting shifts in your life.',
//                             },
//                         ].map((step, i) => (
//                             <motion.div
//                                 key={step.num}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.15 }}
//                                 className="text-center relative"
//                             >
//                                 <div className="relative inline-block mb-6">
//                                     <div className="w-20 h-20 rounded-2xl glass border border-[var(--color-secondary)]/20 flex items-center justify-center text-3xl relative">
//                                         {step.icon}
//                                     </div>
//                                     <span className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-xs font-bold flex items-center justify-center">
//                                         {step.num}
//                                     </span>
//                                 </div>
//                                 <h3 className="text-xl font-serif font-bold mb-3">{step.title}</h3>
//                                 <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">{step.desc}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//                 TESTIMONIALS CAROUSEL
//             ═══════════════════════════════════════════ */}
//             <section className="py-24 px-6 bg-black/20">
//                 <div className="container mx-auto max-w-5xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
//                             Success Stories
//                         </span>
//                         <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
//                             Client <span className="text-[var(--color-secondary)]">Transformations</span>
//                         </h2>
//                         <p className="text-lg text-[var(--color-text-muted)]">Real stories. Real shifts.</p>
//                     </motion.div>

//                     <div className="relative">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={currentSlide}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="glass rounded-3xl p-10 md:p-12 border border-white/5"
//                             >
//                                 <div className="flex items-center gap-4 mb-6">
//                                     <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-amber-700 flex items-center justify-center text-[var(--color-primary)] font-bold text-lg">
//                                         {reviews[currentSlide].initials}
//                                     </div>
//                                     <div>
//                                         <div className="font-serif font-bold text-lg">{reviews[currentSlide].name}</div>
//                                         <div className="text-sm text-[var(--color-text-muted)]">📍 {reviews[currentSlide].location}</div>
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-1 mb-6">
//                                     {[...Array(5)].map((_, i) => (
//                                         <Star key={i} size={16} className="text-[var(--color-secondary)] fill-[var(--color-secondary)]" />
//                                     ))}
//                                 </div>

//                                 <p className="text-lg md:text-xl italic text-white/90 leading-relaxed mb-6">
//                                     {reviews[currentSlide].text}
//                                 </p>

//                                 <span className="inline-block px-4 py-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs uppercase tracking-wider rounded-full">
//                                     {reviews[currentSlide].modality}
//                                 </span>
//                             </motion.div>
//                         </AnimatePresence>

//                         <div className="flex justify-center items-center gap-4 mt-8">
//                             <button
//                                 onClick={() => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)}
//                                 className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[var(--color-secondary)]/30 transition-all"
//                             >
//                                 <ChevronLeft size={18} />
//                             </button>
//                             <div className="flex gap-2">
//                                 {reviews.map((_, i) => (
//                                     <button
//                                         key={i}
//                                         onClick={() => setCurrentSlide(i)}
//                                         className={`h-2 rounded-full transition-all duration-300 ${
//                                             i === currentSlide ? 'bg-[var(--color-secondary)] w-8' : 'bg-white/20 w-2'
//                                         }`}
//                                     />
//                                 ))}
//                             </div>
//                             <button
//                                 onClick={() => setCurrentSlide((prev) => (prev + 1) % reviews.length)}
//                                 className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[var(--color-secondary)]/30 transition-all"
//                             >
//                                 <ChevronRight size={18} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//                 CONSCIOUSNESS SCALE
//             ═══════════════════════════════════════════ */}
//             <section className="py-24 px-6">
//                 <div className="container mx-auto max-w-4xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
//                             Hawkins Scale
//                         </span>
//                         <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
//                             Map of <span className="text-[var(--color-secondary)]">Consciousness</span>
//                         </h2>
//                         <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
//                             Where are you on the scale? Awareness is the first step to transformation.
//                         </p>
//                     </motion.div>

//                     <div className="space-y-3">
//                         {consciousnessLevels.map((level, i) => (
//                             <motion.div
//                                 key={level.name}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true, margin: '-10%' }}
//                                 transition={{ delay: i * 0.03 }}
//                                 onClick={() => setExpandedLevel(expandedLevel === level.name ? null : level.name)}
//                                 className="cursor-pointer"
//                             >
//                                 <div className={`rounded-xl p-5 border transition-all duration-300 ${
//                                     expandedLevel === level.name 
//                                         ? 'border-[var(--color-secondary)]/40 bg-white/5' 
//                                         : 'border-white/5 hover:border-[var(--color-secondary)]/20 hover:bg-white/[0.02]'
//                                 }`}>
//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-4">
//                                             <span className="text-2xl">{level.icon}</span>
//                                             <span className="text-sm font-mono text-[var(--color-text-muted)] w-12">{level.level}</span>
//                                             <span className={`text-xl font-serif font-bold ${
//                                                 level.tier === 'peak' ? 'text-[var(--color-secondary)]' :
//                                                 level.tier === 'high' ? 'text-emerald-400' :
//                                                 level.tier === 'threshold' ? 'text-amber-400' :
//                                                 level.tier === 'mid' ? 'text-sky-400' : 'text-white/60'
//                                             }`}>
//                                                 {level.name}
//                                             </span>
//                                         </div>
//                                         <motion.div
//                                             animate={{ rotate: expandedLevel === level.name ? 180 : 0 }}
//                                             transition={{ duration: 0.3 }}
//                                         >
//                                             <ChevronDown size={20} className="text-[var(--color-text-muted)]" />
//                                         </motion.div>
//                                     </div>

//                                     <AnimatePresence>
//                                         {expandedLevel === level.name && (
//                                             <motion.div
//                                                 initial={{ height: 0, opacity: 0 }}
//                                                 animate={{ height: 'auto', opacity: 1 }}
//                                                 exit={{ height: 0, opacity: 0 }}
//                                                 transition={{ duration: 0.3 }}
//                                                 className="overflow-hidden"
//                                             >
//                                                 <p className="text-[var(--color-text-muted)] leading-relaxed pt-4 pl-20">
//                                                     {level.desc}
//                                                 </p>
//                                             </motion.div>
//                                         )}
//                                     </AnimatePresence>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ═══════════════════════════════════════════
//                 FINAL CTA
//             ═══════════════════════════════════════════ */}
//             <section className="py-24 px-6 bg-gradient-to-b from-black/20 to-black/40">
//                 <div className="container mx-auto max-w-4xl text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="glass rounded-3xl p-12 md:p-16 border border-[var(--color-secondary)]/20"
//                     >
//                         <div className="text-5xl mb-6">✨</div>
//                         <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
//                             Ready to Decode <span className="text-[var(--color-secondary)]">Your</span> Life?
//                         </h2>
//                         <p className="text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
//                             Spirituality isn't about escaping life. It's about understanding it deeply enough to transform it.
//                         </p>

//                         <Link to="/booking">
//                             <motion.button
//                                 whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(212,175,55,0.5)' }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="px-12 py-5 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-lg font-semibold inline-flex items-center gap-3"
//                             >
//                                 Book My Session
//                                 <ArrowRight size={20} />
//                             </motion.button>
//                         </Link>
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/yunchuan-luo-7emiteIwfuk-unsplash.jpg';
import { Star, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Heart, Shield, Zap } from 'lucide-react';

/* Balanced Design: Modern + Warm + Engaging
   Keeps visual interest while being professional
   Not too minimal, not too busy - just right
*/

const consciousnessLevels = [
    { level: '700+', name: 'Enlightenment', tier: 'peak', desc: 'Pure consciousness. The state of "Is-ness". Complete transcendence of the ego.', icon: '🌟' },
    { level: '600', name: 'Peace', tier: 'peak', desc: 'Total transcendence. Perfect bliss and suspension of time. Illumination.', icon: '☮️' },
    { level: '540', name: 'Joy', tier: 'high', desc: 'Love becoming increasingly unconditional. A state of pervasive, unshakable happiness.', icon: '😊' },
    { level: '500', name: 'Love', tier: 'high', desc: 'A permanent state of benevolence. Forgiveness and nurturing support of life.', icon: '💖' },
    { level: '400', name: 'Reason', tier: 'mid', desc: 'Rationality, intelligence, and clarity. The level of science and medicine.', icon: '🧠' },
    { level: '350', name: 'Acceptance', tier: 'mid', desc: 'Realization that one is the source of one\'s own experience. taking responsibility.', icon: '🤝' },
    { level: '310', name: 'Willingness', tier: 'mid', desc: 'Optimism and openness. Growth becomes rapid and easy.', icon: '🌱' },
    { level: '250', name: 'Neutrality', tier: 'mid', desc: 'A state of release from judgment. Flexibility and non-attachment to outcomes.', icon: '⚖️' },
    { level: '200', name: 'Courage', tier: 'threshold', desc: 'The critical turning point. Empowerment and determination to affect change.', icon: '⚡' },
    { level: '175', name: 'Pride', tier: 'low', desc: 'Demanding and inflated ego. Vulnerable to shame and external validation.', icon: '👑' },
    { level: '150', name: 'Anger', tier: 'low', desc: 'Frustration and resentment. Can be a catalyst for action or destructive.', icon: '😤' },
    { level: '125', name: 'Desire', tier: 'low', desc: 'Craving and acquisitiveness. The root of addiction and attachment.', icon: '🎯' },
    { level: '100', name: 'Fear', tier: 'low', desc: 'Anxiety and worry. Viewing the world as dangerous and threatening.', icon: '😰' },
    { level: '75', name: 'Grief', tier: 'low', desc: 'Sadness, loss, and despondency. A state of helplessness.', icon: '😢' },
    { level: '50', name: 'Apathy', tier: 'low', desc: 'Hopelessness and despair. The state of being "stuck" or heavy.', icon: '😶' },
    { level: '30', name: 'Guilt', tier: 'low', desc: 'Blame and remorse. Used to manipulate and punish oneself and others.', icon: '😔' },
    { level: '20', name: 'Shame', tier: 'low', desc: 'Humiliation and elimination. The lowest level of energy, bordering on death.', icon: '😞' },
];

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
];

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 600], [0, 200]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedLevel, setExpandedLevel] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--color-primary)] overflow-x-hidden">

            {/* ═══════════════════════════════════════════
                HERO - REFINED & BALANCED
            ═══════════════════════════════════════════ */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: heroY }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroBg})`,
                            filter: 'brightness(0.45) contrast(1.05)',
                        }}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/40 via-transparent to-[var(--color-primary)] z-0" />

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--color-secondary)]/30 backdrop-blur-md mb-6"
                    >
                        <Sparkles size={14} className="text-[var(--color-secondary)]" />
                        <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                            Science · Spirituality · Transformation
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-6xl md:text-8xl font-serif font-bold leading-[1.05] mb-6"
                    >
                        Decode Your Life
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-2xl md:text-3xl italic font-serif text-white/95 mb-4"
                    >
                        "Healing begins where illusion ends"
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto"
                    >
                        Your life isn't random. It's patterned, decodable, and transformable.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                    >
                        <Link to="/booking">
                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(212,175,55,0.5)' }}
                                whileTap={{ scale: 0.97 }}
                                className="px-10 py-4 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-lg font-semibold flex items-center gap-2"
                            >
                                Book Your Session
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/60"
                    >
                        <div className="flex items-center gap-2">
                            <Shield size={14} />
                            <span>100% Confidential</span>
                        </div>
                        <div className="w-px h-4 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <Heart size={14} />
                            <span>Non-Judgmental</span>
                        </div>
                        <div className="w-px h-4 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <Zap size={14} />
                            <span>Instant Booking</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-secondary)]"
                >
                    <ChevronDown size={28} />
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                STATS BAR - ENHANCED
            ═══════════════════════════════════════════ */}
            <section className="py-16 bg-gradient-to-r from-black/30 via-black/20 to-black/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: '500+', label: 'Sessions Conducted', icon: '✨' },
                            { number: '200+', label: 'Clients Worldwide', icon: '🌍' },
                            { number: '15+', label: 'Countries Reached', icon: '🗺️' },
                            { number: '4.9★', label: 'Average Rating', icon: '⭐' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-secondary)] mb-2">
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
                PHILOSOPHY - WHY WE'RE DIFFERENT
            ═══════════════════════════════════════════ */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
                                Our Approach
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
                                Your life isn't random.
                                <br />
                                <span className="text-[var(--color-secondary)]">It's patterned.</span>
                            </h2>
                            <div className="space-y-4 text-[var(--color-text-muted)] text-lg leading-relaxed">
                                <p>
                                    Every repeating relationship. Every financial block. Every emotional trigger.
                                    They aren't accidents—they're <span className="text-white font-medium">codes</span>.
                                </p>
                                <p>
                                    We decode them through a synthesis of ancient wisdom and modern understanding—tarot,
                                    astrology, Akashic records, energy healing, and psychology.
                                </p>
                                <p className="text-white font-medium">
                                    The work isn't to escape your life. It's to understand it so deeply that you can transform it.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { label: 'Success Rate', value: '85%', desc: 'Clients see shifts' },
                                { label: 'Experience', value: '5+ Yrs', desc: 'Professional practice' },
                                { label: 'Modalities', value: '8+', desc: 'Integrated tools' },
                                { label: 'Return Rate', value: '75%', desc: 'Book again' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass rounded-2xl p-6 border border-white/5 hover:border-[var(--color-secondary)]/30 transition-all duration-300"
                                >
                                    <div className="text-3xl font-serif font-bold text-[var(--color-secondary)] mb-1">
                                        {item.value}
                                    </div>
                                    <div className="text-sm font-medium text-white mb-1">
                                        {item.label}
                                    </div>
                                    <div className="text-xs text-[var(--color-text-muted)]">
                                        {item.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CIRCLE VS SPIRAL - VISUAL STORYTELLING
            ═══════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-black/20">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
                            Understanding Patterns
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Circle or <span className="text-[var(--color-secondary)]">Spiral</span>?
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            One keeps you stuck. The other sets you free.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Circle */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl p-10 border border-white/5 hover:border-red-500/20 transition-all duration-500 group"
                        >
                            <div className="flex justify-center mb-8">
                                <div className="relative w-40 h-40">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                        className="absolute inset-0 rounded-full border-2 border-dashed border-red-500/40"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_15px_rgba(248,113,113,0.6)]" />
                                    </motion.div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4 text-center">Life as a Circle</h3>
                            <p className="text-[var(--color-text-muted)] text-center leading-relaxed">
                                Repeating the same relationship dynamics, financial blocks, and emotional triggers.
                                The scenery changes, but the script stays identical. <span className="text-red-400">Stuckness.</span>
                            </p>
                        </motion.div>

                        {/* Spiral */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass rounded-3xl p-10 border border-[var(--color-secondary)]/30 hover:border-[var(--color-secondary)]/50 transition-all duration-500"
                        >
                            <div className="flex justify-center mb-8">
                                <div className="relative w-40 h-40">
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute inset-0 border border-[var(--color-secondary)] rounded-full"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 0.5, 0],
                                                scale: [0.5, 1.5],
                                                y: [0, -30],
                                            }}
                                            transition={{
                                                duration: 3,
                                                delay: i * 0.5,
                                                repeat: Infinity,
                                            }}
                                        />
                                    ))}
                                    <motion.div
                                        animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute inset-0 flex items-center justify-center text-3xl"
                                    >
                                        ✨
                                    </motion.div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4 text-center text-[var(--color-secondary)]">
                                Life as a Spiral
                            </h3>
                            <p className="text-[var(--color-text-muted)] text-center leading-relaxed">
                                You revisit the same themes, but from a higher perspective. You make different choices
                                and break the loop. You're not just moving—you're <span className="text-[var(--color-secondary)] font-semibold">ascending</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                HOW IT WORKS
            ═══════════════════════════════════════════ */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
                            Simple Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            How It <span className="text-[var(--color-secondary)]">Works</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Your transformation journey in three clear steps.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent" />

                        {[
                            {
                                num: '01',
                                icon: '📅',
                                title: 'Book Your Session',
                                desc: 'Choose your modality and time slot through our simple booking system.',
                            },
                            {
                                num: '02',
                                icon: '🔮',
                                title: 'Connect & Explore',
                                desc: 'We explore your patterns and blocks in a safe, non-judgmental space.',
                            },
                            {
                                num: '03',
                                icon: '✨',
                                title: 'Transform',
                                desc: 'Receive insights and energy work that create lasting shifts in your life.',
                            },
                        ].map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center relative"
                            >
                                <div className="relative inline-block mb-6">
                                    <div className="w-20 h-20 rounded-2xl glass border border-[var(--color-secondary)]/20 flex items-center justify-center text-3xl relative">
                                        {step.icon}
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-xs font-bold flex items-center justify-center">
                                        {step.num}
                                    </span>
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-3">{step.title}</h3>
                                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                TESTIMONIALS CAROUSEL
            ═══════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-black/20">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
                            Success Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Client <span className="text-[var(--color-secondary)]">Transformations</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)]">Real stories. Real shifts.</p>
                    </motion.div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="glass rounded-3xl p-10 md:p-12 border border-white/5"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-amber-700 flex items-center justify-center text-[var(--color-primary)] font-bold text-lg">
                                        {reviews[currentSlide].initials}
                                    </div>
                                    <div>
                                        <div className="font-serif font-bold text-lg">{reviews[currentSlide].name}</div>
                                        <div className="text-sm text-[var(--color-text-muted)]">📍 {reviews[currentSlide].location}</div>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-[var(--color-secondary)] fill-[var(--color-secondary)]" />
                                    ))}
                                </div>

                                <p className="text-lg md:text-xl italic text-white/90 leading-relaxed mb-6">
                                    {reviews[currentSlide].text}
                                </p>

                                <span className="inline-block px-4 py-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs uppercase tracking-wider rounded-full">
                                    {reviews[currentSlide].modality}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[var(--color-secondary)]/30 transition-all"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <div className="flex gap-2">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[var(--color-secondary)] w-8' : 'bg-white/20 w-2'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentSlide((prev) => (prev + 1) % reviews.length)}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[var(--color-secondary)]/30 transition-all"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CONSCIOUSNESS SCALE
            ═══════════════════════════════════════════ */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-4 block">
                            Hawkins Scale
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Map of <span className="text-[var(--color-secondary)]">Consciousness</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                            Where are you on the scale? Awareness is the first step to transformation.
                        </p>
                    </motion.div>

                    <div className="space-y-3">
                        {consciousnessLevels.map((level, i) => (
                            <motion.div
                                key={level.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10%' }}
                                transition={{ delay: i * 0.03 }}
                                onClick={() => setExpandedLevel(expandedLevel === level.name ? null : level.name)}
                                className="cursor-pointer"
                            >
                                <div className={`rounded-xl p-5 border transition-all duration-300 ${expandedLevel === level.name
                                        ? 'border-[var(--color-secondary)]/40 bg-white/5'
                                        : 'border-white/5 hover:border-[var(--color-secondary)]/20 hover:bg-white/[0.02]'
                                    }`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">{level.icon}</span>
                                            <span className="text-sm font-mono text-[var(--color-text-muted)] w-12">{level.level}</span>
                                            <span className={`text-xl font-serif font-bold ${level.tier === 'peak' ? 'text-[var(--color-secondary)]' :
                                                    level.tier === 'high' ? 'text-emerald-400' :
                                                        level.tier === 'threshold' ? 'text-amber-400' :
                                                            level.tier === 'mid' ? 'text-sky-400' : 'text-white/60'
                                                }`}>
                                                {level.name}
                                            </span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: expandedLevel === level.name ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={20} className="text-[var(--color-text-muted)]" />
                                        </motion.div>
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
                                                <p className="text-[var(--color-text-muted)] leading-relaxed pt-4 pl-20">
                                                    {level.desc}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                FINAL CTA
            ═══════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-gradient-to-b from-black/20 to-black/40">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12 md:p-16 border border-[var(--color-secondary)]/20"
                    >
                        <div className="text-5xl mb-6">✨</div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Ready to Decode <span className="text-[var(--color-secondary)]">Your</span> Life?
                        </h2>
                        <p className="text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
                            Spirituality isn't about escaping life. It's about understanding it deeply enough to transform it.
                        </p>

                        <Link to="/booking">
                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(212,175,55,0.5)' }}
                                whileTap={{ scale: 0.97 }}
                                className="px-12 py-5 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-lg font-semibold inline-flex items-center gap-3"
                            >
                                Book My Session
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;