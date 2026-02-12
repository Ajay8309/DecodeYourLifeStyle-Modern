import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Sparkles, Brain, Waves, Eye } from 'lucide-react';

const articles = [
    {
        id: 1,
        category: 'Consciousness',
        title: 'Understanding the Hawkins Scale: Where Do You Stand?',
        excerpt: 'Dr. David Hawkins mapped human consciousness from Shame (20) to Enlightenment (700+). Learn how this map can reveal why you feel stuck — and the exact threshold you need to cross to break free.',
        readTime: '6 min',
        icon: <Brain size={24} />,
        gradient: 'from-amber-900/40 to-orange-900/20',
    },
    {
        id: 2,
        category: 'Patterns',
        title: 'Why You Keep Attracting the Same Relationships',
        excerpt: 'Repetitive relationship dynamics aren\'t coincidence — they\'re coded patterns from your subconscious. Discover how karmic loops work, why "the one" keeps showing up in different faces, and how to finally rewrite the script.',
        readTime: '8 min',
        icon: <Waves size={24} />,
        gradient: 'from-emerald-900/40 to-teal-900/20',
    },
    {
        id: 3,
        category: 'Healing',
        title: 'Reiki vs. Traditional Therapy: What Science Says',
        excerpt: 'Energy healing operates on a different layer than talk therapy. We break down the neuroscience behind Reiki, how it affects the autonomic nervous system, and when each modality is most effective.',
        readTime: '7 min',
        icon: <Sparkles size={24} />,
        gradient: 'from-purple-900/40 to-indigo-900/20',
    },
    {
        id: 4,
        category: 'Akashic Records',
        title: 'What Are Akashic Records? A Practical Guide',
        excerpt: 'Think of the Akashic Records as the "cloud storage" of your soul — every lifetime, lesson, and karmic contract stored in one energetic field. Here\'s how a reading works and what you can expect to learn.',
        readTime: '5 min',
        icon: <Eye size={24} />,
        gradient: 'from-sky-900/40 to-blue-900/20',
    },
    {
        id: 5,
        category: 'Spirituality',
        title: 'The Corporate-to-Spiritual Pipeline: Why High Achievers Are Waking Up',
        excerpt: 'From corner offices to meditation retreats — why successful professionals are the fastest-growing demographic seeking spiritual guidance. The pattern of "is this all there is?" explained.',
        readTime: '9 min',
        icon: <Brain size={24} />,
        gradient: 'from-rose-900/40 to-pink-900/20',
    },
    {
        id: 6,
        category: 'Energy',
        title: 'Your Home Has an Energy Blueprint: Intro to Vastu',
        excerpt: 'Just like your body has chakras, your living space has energy centers. Learn how Vastu assessment identifies blocks in your home environment — and simple shifts that can change the energy dramatically.',
        readTime: '6 min',
        icon: <Waves size={24} />,
        gradient: 'from-amber-900/40 to-yellow-900/20',
    },
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-[var(--color-primary)] pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-6"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                        Resources & <span className="text-[var(--color-secondary)]">Insights</span>
                    </h1>
                    <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Deep dives into consciousness, healing modalities, and the patterns that shape your reality.
                    </p>
                </motion.div>

                {/* Category pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {['All', 'Consciousness', 'Patterns', 'Healing', 'Spirituality', 'Energy'].map((cat) => (
                        <button
                            key={cat}
                            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${cat === 'All'
                                ? 'bg-[var(--color-secondary)] text-[var(--color-primary)]'
                                : 'glass text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)]/40'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Featured Article */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className={`glass rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-secondary)]/30 transition-all duration-500 shimmer-hover`}>
                        <div className="md:flex">
                            <div className={`md:w-2/5 bg-gradient-to-br ${articles[0].gradient} p-12 flex items-center justify-center min-h-[250px]`}>
                                <div className="text-center">
                                    <BookOpen className="mx-auto text-[var(--color-secondary)] mb-4" size={64} />
                                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary)]">Featured</span>
                                </div>
                            </div>
                            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-3">{articles[0].category}</span>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">{articles[0].title}</h2>
                                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{articles[0].excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-2">
                                        <Clock size={14} /> {articles[0].readTime} read
                                    </span>
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        className="text-[var(--color-secondary)] font-bold text-sm flex items-center gap-2 cursor-pointer"
                                    >
                                        Read Article <ArrowRight size={16} />
                                    </motion.span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.slice(1).map((article, i) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--color-secondary)]/30 transition-all duration-500 shimmer-hover group cursor-pointer"
                        >
                            {/* Gradient Header */}
                            <div className={`bg-gradient-to-br ${article.gradient} p-8 flex items-center justify-center h-48`}>
                                <div className="text-[var(--color-secondary)] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                    {article.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-2 block">{article.category}</span>
                                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-[var(--color-secondary)] transition-colors">{article.title}</h3>
                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-2">
                                        <Clock size={12} /> {article.readTime}
                                    </span>
                                    <span className="text-[var(--color-secondary)] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 glass rounded-2xl p-10 md:p-16 text-center border border-[var(--color-secondary)]/10"
                >
                    <h3 className="text-3xl font-serif font-bold mb-4">
                        Get Weekly <span className="text-[var(--color-secondary)]">Insights</span>
                    </h3>
                    <p className="text-[var(--color-text-muted)] max-w-lg mx-auto mb-8">
                        Join 1,000+ seekers receiving consciousness insights, pattern-breaking tools, and exclusive content every Thursday.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-secondary)]/50 transition-colors"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-3 font-bold rounded-lg text-sm uppercase tracking-wider whitespace-nowrap"
                        >
                            Subscribe
                        </motion.button>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] mt-4">No spam. Unsubscribe anytime.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;
