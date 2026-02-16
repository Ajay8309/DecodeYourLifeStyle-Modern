import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'The Mentor', path: '/about' },
        { name: 'Client Info', path: '/info' },
        { name: 'Booking', path: '/booking' },
        { name: 'Policies', path: '/policies' },
    ];

    const services = [
        'Tarot Guidance',
        'Astrology Reading',
        'Akashic Records',
        'Numerology',
        'Reiki Healing',
        'Integrated Healing',
    ];

    return (
        <footer className="border-t border-white/10 mt-20 bg-black/20">
            <div className="max-w-[1200px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link to="/" className="text-xl font-serif font-bold tracking-[0.12em] inline-block mb-4">
                            DECODE <span className="text-[var(--color-secondary)]">YOUR LIFE</span>
                        </Link>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                            Science + Spirituality. Pattern recognition for the modern seeker.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/decodeyourlifestyle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)]/40 transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://youtube.com/@decodeyourlifestyle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)]/40 transition-all duration-300"
                            >
                                <Youtube size={18} />
                            </a>
                            <a
                                href="mailto:contact@decodeyourlife.in"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)]/40 transition-all duration-300"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-6 font-bold">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-6 font-bold">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-6 font-bold">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail size={16} className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[var(--color-text-muted)]">contact@decodeyourlife.in</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[var(--color-text-muted)]">Goa, India</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone size={16} className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[var(--color-text-muted)]">WhatsApp Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-[var(--color-text-muted)]">
                        &copy; {new Date().getFullYear()} Decode Your Life. All rights reserved.
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                        Made with ✨ for seekers, by seekers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
