import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Calendar, Upload, QrCode, Clock, Shield } from 'lucide-react';
import qrCodeImg from '../assets/payment-qr.jpeg';

const pricingData = [
    { service: 'Tarot Reading', price: '₹1,500', duration: '30 mins' },
    { service: 'Vedic Astrology', price: '₹2,000', duration: '30 mins' },
    { service: 'Vedic Numerology', price: '₹1,500', duration: '30 mins' },
    { service: 'Akashic Records Reading', price: '₹4,000', duration: '30 mins' },
    { service: 'Reiki Healing & Aura Cleansing', price: '₹2,000', duration: 'Per session' },
    { service: 'General Consultation', price: '₹300', duration: '15 mins' },
    { service: 'General Counseling', price: '₹1,000/hr (Block) / ₹2,000 (Single)', duration: '1 hour' },
    { service: 'Crystal Healing', price: '₹1,500', duration: '1 hour' },
    { service: 'Crystal, Switchwords & Frequency', price: 'From ₹14,000', duration: 'Per session' },
    { service: 'Womb / Entity / Ancestral Healing', price: 'From ₹14,000', duration: 'Per session' },
];

const steps = ['Pay via QR', 'Upload Screenshot', 'Select Time'];

const CALENDLY_URL = 'https://calendly.com/ajaypanaskar8/30min';

const CalendlyEmbed = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (containerRef.current && window.Calendly) {
                containerRef.current.innerHTML = '';
                window.Calendly.initInlineWidget({
                    url: CALENDLY_URL + '?hide_gdpr_banner=1&background_color=1a1a2e&text_color=e0e0e0&primary_color=d4af37',
                    parentElement: containerRef.current,
                });
            }
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            ref={containerRef}
            className="rounded-xl overflow-hidden"
            style={{ minWidth: '320px', height: '660px' }}
        />
    );
};
const Booking = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
        else setIsSuccess(true);
    };
    const prevStep = () => { if (currentStep > 0) setCurrentStep(prev => prev - 1); };

    return (
        <div className="min-h-screen bg-[var(--color-primary)] pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
                        Book <span className="text-[var(--color-secondary)]">Your Session</span>
                    </h1>
                    <p className="text-lg text-[var(--color-text-muted)]">
                        Transparent pricing. No hidden fees. Only care &amp; healing.
                    </p>
                </motion.div>

                {/* ── Pricing Table ── */}
                <section className="max-w-3xl mx-auto mb-24">
                    <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                        Fee <span className="text-[var(--color-secondary)]">Structure</span>
                    </h2>

                    <div className="glass rounded-2xl overflow-hidden overflow-x-auto">
                        <div className="min-w-[600px]">
                            {/* Header Row */}
                            <div className="grid grid-cols-[2fr_1fr_1fr] px-6 py-4 border-b border-white/10 text-sm uppercase tracking-widest text-[var(--color-secondary)] bg-white/5">
                                <span>Service</span>
                                <span className="text-center">Duration</span>
                                <span className="text-right">Fee</span>
                            </div>

                            {/* Data Rows */}
                            {pricingData.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setSelectedService(item)}
                                    className={`grid grid-cols-[2fr_1fr_1fr] px-6 py-5 border-b border-white/5 cursor-pointer transition-all duration-300 hover:bg-white/5 ${selectedService?.service === item.service
                                        ? 'bg-[var(--color-secondary)]/20 border-l-4 border-l-[var(--color-secondary)]'
                                        : 'border-l-4 border-l-transparent'
                                        }`}
                                >
                                    <span className={`font-medium transition-colors ${selectedService?.service === item.service ? 'text-[var(--color-secondary)] font-bold' : 'text-white'}`}>
                                        {item.service}
                                    </span>
                                    <span className="text-center text-[var(--color-text-muted)] flex items-center justify-center gap-2">
                                        <Clock size={14} /> {item.duration}
                                    </span>
                                    <span className="text-right font-serif font-bold text-lg text-[var(--color-secondary)]">{item.price}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-[var(--color-text-muted)] text-xs mt-4">
                        Click a service above to begin booking.
                    </p>
                </section>

                {/* ── Booking Wizard ── */}
                {selectedService && !isSuccess && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-2xl font-serif font-bold mb-8 text-center">
                            Booking: <span className="text-[var(--color-secondary)]">{selectedService.service}</span>
                        </h2>

                        {/* Progress */}
                        <div className="flex justify-between items-center mb-12 relative">
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 -z-10" />
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 bg-[var(--color-primary)] px-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-sm font-bold transition-all ${index <= currentStep
                                        ? 'bg-[var(--color-secondary)] border-[var(--color-secondary)] text-[var(--color-primary)]'
                                        : 'border-white/20 text-white/40'
                                        }`}>
                                        {index < currentStep ? <Check size={16} /> : index + 1}
                                    </div>
                                    <span className={`text-xs tracking-widest uppercase ${index <= currentStep ? 'text-[var(--color-secondary)]' : 'text-white/40'
                                        }`}>{step}</span>
                                </div>
                            ))}
                        </div>

                        {/* Step Content */}
                        <div className="glass p-10 rounded-3xl min-h-[300px]">
                            <AnimatePresence mode="wait">
                                {/* Step 1: QR Code */}
                                {currentStep === 0 && (
                                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                                        <QrCode size={48} className="mx-auto text-[var(--color-secondary)] mb-6" />
                                        <h3 className="text-2xl font-serif mb-2">Pay via QR Code</h3>
                                        <p className="text-[var(--color-text-muted)] mb-8">
                                            Scan the QR code below to pay <span className="text-[var(--color-secondary)] font-bold">{selectedService.price}</span> to
                                            <br /><strong className="text-white">HDFC Bank — Aashna Ahuja</strong>
                                        </p>
                                        <div className="w-64 h-64 bg-white rounded-xl mx-auto flex items-center justify-center overflow-hidden shadow-lg">
                                            <img src={qrCodeImg} alt="Payment QR Code" className="w-full h-full object-cover" />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Upload Screenshot */}
                                {currentStep === 1 && (
                                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                                        <Upload size={48} className="mx-auto text-[var(--color-secondary)] mb-6" />
                                        <h3 className="text-2xl font-serif mb-4">Upload Transaction Screenshot</h3>
                                        <p className="text-[var(--color-text-muted)] mb-8">Upload proof of payment to confirm your booking.</p>
                                        <label className="block glass border-2 border-dashed border-[var(--color-secondary)]/30 rounded-xl p-12 cursor-pointer hover:border-[var(--color-secondary)] transition-colors">
                                            <input type="file" className="hidden" accept="image/*" />
                                            <p className="text-[var(--color-text-muted)]">Click or drag to upload</p>
                                        </label>
                                    </motion.div>
                                )}

                                {/* Step 3: Calendly */}
                                {currentStep === 2 && (
                                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
                                        <Calendar size={48} className="mx-auto text-[var(--color-secondary)] mb-6" />
                                        <h3 className="text-2xl font-serif mb-4">Select Your Time Slot</h3>
                                        <p className="text-[var(--color-text-muted)] mb-6">Choose a time that works for you.</p>
                                        <CalendlyEmbed />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Nav */}
                            <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
                                <button
                                    onClick={prevStep}
                                    className={`text-sm uppercase tracking-widest text-[var(--color-text-muted)] hover:text-white transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
                                >
                                    ← Back
                                </button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={nextStep}
                                    className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-8 py-3 font-bold rounded-lg text-sm"
                                >
                                    {currentStep === steps.length - 1 ? 'Confirm Booking' : 'Next Step →'}
                                </motion.button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[var(--color-text-muted)]">
                            <Shield size={12} /> All transactions are secure and confidential.
                        </div>
                    </motion.section>
                )}

                {/* ── Success ── */}
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-xl mx-auto text-center glass p-16 rounded-3xl"
                    >
                        <div className="w-20 h-20 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-8">
                            <Check size={40} />
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-4">Booking Submitted!</h2>
                        <p className="text-[var(--color-text-muted)] mb-8">
                            Your booking for <strong className="text-white">{selectedService?.service}</strong> has been submitted.
                            Aashna will confirm your time slot shortly via email.
                        </p>
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-[var(--color-secondary)] text-[var(--color-primary)] px-8 py-3 font-bold rounded-lg"
                            >
                                Return Home
                            </motion.button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Booking;
