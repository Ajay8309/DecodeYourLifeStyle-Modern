import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 mt-20 bg-black/20">
            <div className="max-w-[1200px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link to="/" className="text-xl font-serif font-bold tracking-[0.12em] inline-block mb-4">
                            DECODE <span className="text-[var(--color-secondary)]">YOUR LIFE</span>
                        </Link>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                            Science + Spirituality. <br /> Pattern recognition for the modern seeker.
                        </p>
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
                            <a
                                href="https://www.instagram.com/de_codeyourlife/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 group"
                            >
                                <Instagram size={16} className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[var(--color-text-muted)] group-hover:text-white transition-colors">@de_codeyourlife</span>
                            </a>
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
                    <div className="flex items-center gap-4">
                        <Link to="/policies" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors">
                            Policies
                        </Link>
                        <span className="text-white/10">|</span>
                        <p className="text-xs text-[var(--color-text-muted)]">
                            Made with love for seekers, by seekers.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
