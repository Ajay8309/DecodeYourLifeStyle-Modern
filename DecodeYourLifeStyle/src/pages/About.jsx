import React from 'react';
import { motion } from 'framer-motion';
import mentorImage from '../assets/mentor.png';
import { Brain, Heart, Zap, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-[#0f1410] pt-20">

            {/* ── Split Hero ── */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden py-32">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 blur-[100px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl -z-10" />
                            <img
                                src={mentorImage}
                                alt="Aashna Ahuja – Psychic Mentor & Spiritual Guide"
                                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5] border border-white/5"
                            />
                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-emerald-500/20 shadow-xl"
                            >
                                <div className="text-emerald-400 font-serif text-2xl font-bold">10+ Years</div>
                                <div className="text-[10px] uppercase tracking-widest text-emerald-100/60">Experience</div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-sm">
                                <Zap size={14} className="text-emerald-400" />
                                <span className="text-xs tracking-[0.2em] text-emerald-300 uppercase">
                                    The Soul Behind DYL
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1]"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                Aashna <br />
                                <span className="text-emerald-400 italic">Ahuja</span>
                            </h1>

                            <div className="w-24 h-px bg-gradient-to-r from-emerald-400 to-transparent mb-8" />

                            <div className="space-y-6 text-xl text-emerald-100/70 font-light leading-relaxed">
                                <p>
                                    <strong className="text-white font-medium">The Corporate Phase:</strong> For years, Aashna held leadership roles at
                                    <span className="text-emerald-400"> Amazon</span>,
                                    <span className="text-emerald-400"> Uber</span>, and
                                    <span className="text-emerald-400"> Zomato</span> — scaling teams and measuring success in KPIs.
                                </p>
                                <p>
                                    <strong className="text-white font-medium">The Transition:</strong> In 2021, she followed a calling to Goa, diving deep into ancient technologies of the self to bridge the gap between material success and spiritual fulfillment.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Philosophy Quote ── */}
            <section className="py-32 relative overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 bg-emerald-950/10" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.blockquote
                            className="text-4xl md:text-6xl font-serif italic text-white leading-tight mb-8"
                        >
                            "Spirituality is not about escaping life, but understanding it deeply."
                        </motion.blockquote>
                        <div className="w-16 h-px bg-emerald-500/40 mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* ── Credibility Bar (Scrolling Marquee) ── */}
            <section className="py-20 overflow-hidden border-b border-white/5">
                <div className="container mx-auto px-6 mb-12 text-center text-xs uppercase tracking-[0.3em] text-emerald-400/60 font-medium">
                    Former leadership at global giants
                </div>
                <div className="relative flex overflow-x-hidden">
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
                        className="flex gap-32 whitespace-nowrap py-4"
                    >
                        {['AMAZON', 'UBER', 'ZOMATO', 'TANASH HOMES', 'AMAZON', 'UBER', 'ZOMATO', 'TANASH HOMES'].map((company, i) => (
                            <span key={i} className="text-4xl md:text-6xl font-serif font-bold text-white/5 select-none tracking-widest">
                                {company}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── The DYL Method ── */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium mb-4 block">Proven Framework</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">
                        The <span className="text-emerald-400 italic">DYL</span> Method
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        { icon: <Brain size={40} />, title: 'Pattern Recognition', desc: 'Identifying the subconscious loops, core beliefs, and karmic cycles that keep you stuck in repetition.' },
                        { icon: <Zap size={40} />, title: 'Consciousness Shift', desc: 'Raising your vibrational frequency on the Hawkins scale — moving from force to power, from fear to love.' },
                        { icon: <Heart size={40} />, title: 'Sustainable Evolution', desc: 'Integrating changes into daily reality so transformation sticks — not a weekend high, but a permanent shift.' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="glass rounded-[2rem] p-10 border border-white/5 hover:border-emerald-500/20 transition-all group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-emerald-500/5 flex items-center justify-center text-emerald-400 mb-8 border border-emerald-500/10 group-hover:bg-emerald-500/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-emerald-100/60 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
