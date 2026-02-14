import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const leftLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'The Mentor', path: '/about' },
    ];

    const rightLinks = [
        { name: 'Client Info', path: '/info' },
        { name: 'Resources', path: '/blog' },
        { name: 'Policies', path: '/policies' },
    ];

    const linkClass = (path) =>
        `text-xs uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${location.pathname === path
            ? 'text-[var(--color-secondary)]'
            : 'text-white/70 hover:text-white'
        }`;

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-[1400px] mx-auto px-6">
                    {/* Desktop Layout — 3-column grid */}
                    <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                        {/* Left Links */}
                        <div className="flex items-center gap-8">
                            {leftLinks.map((link) => (
                                <Link key={link.name} to={link.path} className={linkClass(link.path)}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Center Logo */}
                        <Link to="/" className="flex items-center justify-center">
                            <img src={logo} alt="Decode Your Life" className="h-12 md:h-14 object-contain" />
                        </Link>

                        {/* Right Links + CTA */}
                        <div className="flex items-center justify-end gap-8">
                            {rightLinks.map((link) => (
                                <Link key={link.name} to={link.path} className={linkClass(link.path)}>
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/booking">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ backgroundColor: '#D4AF37', color: '#022C22' }}
                                    className="px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-md ml-2"
                                >
                                    Book Now
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden justify-between items-center">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="text-white">
                            <Menu size={24} />
                        </button>

                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Decode Your Life" className="h-10 object-contain" />
                        </Link>

                        <Link to="/booking">
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D4AF37' }}>Book</span>
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-[var(--color-primary)] flex flex-col justify-center items-center gap-8"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-white"
                        >
                            <X size={28} />
                        </button>

                        <Link to="/services" className="text-sm font-medium text-white/80 hover:text-[var(--color-secondary)] transition-colors uppercase tracking-widest">
                            Services
                        </Link>
                        <Link to="/about" className="text-sm font-medium text-white/80 hover:text-[var(--color-secondary)] transition-colors uppercase tracking-widest">
                            About
                        </Link>
                        <Link to="/blog" className="text-sm font-medium text-white/80 hover:text-[var(--color-secondary)] transition-colors uppercase tracking-widest">
                            Resources
                        </Link>
                        <Link to="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-6 py-2 rounded text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-secondary)]/90 transition-colors"
                            >
                                Book Now
                            </motion.button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
