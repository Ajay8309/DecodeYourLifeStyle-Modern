import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    return (
        <footer className="bg-[#011c16] text-white border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="Decode Your Life" className="h-12 object-contain" />
                        </Link>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                            Bridging the gap between science and spirituality to help you decode your life's patterns and find your true purpose.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-[var(--color-secondary)]">Explore</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                            <li><Link to="/services" className="hover:text-[var(--color-secondary)] transition-colors">Services</Link></li>
                            <li><Link to="/about" className="hover:text-[var(--color-secondary)] transition-colors">The Mentor</Link></li>
                            <li><Link to="/blog" className="hover:text-[var(--color-secondary)] transition-colors">Resources</Link></li>
                            <li><Link to="/booking" className="hover:text-[var(--color-secondary)] transition-colors">Book a Session</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-[var(--color-secondary)]">Legal</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                            <li><Link to="/policies" className="hover:text-[var(--color-secondary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/policies" className="hover:text-[var(--color-secondary)] transition-colors">Terms of Service</Link></li>
                            <li><Link to="/policies" className="hover:text-[var(--color-secondary)] transition-colors">Refund Policy</Link></li>
                            <li><Link to="/info" className="hover:text-[var(--color-secondary)] transition-colors">Client Info</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-[var(--color-secondary)]">Connect</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-[var(--color-secondary)] mt-0.5" />
                                <a href="mailto:decodeyourlife.12@gmail.com" className="hover:text-white transition-colors">
                                    decodeyourlife.12@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Instagram size={18} className="text-[var(--color-secondary)] mt-0.5" />
                                <a href="https://instagram.com/de_codeyourlife" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    @de_codeyourlife
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-[var(--color-secondary)] mt-0.5" />
                                <a href="https://wa.me/917666987712" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    +91 7666987712
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs text-[var(--color-text-muted)]">
                    <p>&copy; {new Date().getFullYear()} Decode Your Life. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
