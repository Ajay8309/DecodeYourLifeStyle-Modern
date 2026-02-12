import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CalendarX, Clock, Eye } from 'lucide-react';

const policyItems = [
    {
        icon: <CalendarX size={32} />,
        title: 'Cancellation Policy',
        content: '100% cancellation and full refund is available up to 15 days before the scheduled session. No refunds will be issued within 15 days of the session date.',
    },
    {
        icon: <Clock size={32} />,
        title: 'Rescheduling',
        content: 'Rescheduling requests must be made at least 72 hours in advance of the scheduled session. Requests made within 72 hours will be handled on a case-by-case basis but are not guaranteed.',
    },
    {
        icon: <CalendarX size={32} />,
        title: 'No-Show Policy',
        content: 'Missing a scheduled session without prior notice results in 100% loss of the session fee. Please communicate any changes as early as possible.',
    },
    {
        icon: <Eye size={32} />,
        title: 'Privacy & Confidentiality',
        content: 'All session content and personal data are treated with strict confidentiality. We adhere to GDPR-compliant standards for data storage and protection. Session recordings, if any, are shared only with the client and deleted upon request.',
    },
];

const Policies = () => {
    return (
        <div className="min-h-screen bg-[var(--color-primary)] pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <ShieldCheck size={48} className="mx-auto text-[var(--color-secondary)] mb-6" />
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Policies</h1>
                    <p className="text-lg text-[var(--color-text-muted)]">
                        Full transparency. Clear terms. No surprises.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {policyItems.map((policy, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-2xl p-8 md:p-10"
                        >
                            <div className="flex items-start gap-6">
                                <div className="text-[var(--color-secondary)] flex-shrink-0 mt-1">{policy.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold mb-3">{policy.title}</h3>
                                    <p className="text-[var(--color-text-muted)] leading-relaxed">{policy.content}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16 text-sm text-[var(--color-text-muted)]">
                    For any questions regarding our policies, reach out to us at{' '}
                    <span className="text-[var(--color-secondary)]">contact@decodeyourlife.in</span>
                </div>
            </div>
        </div>
    );
};

export default Policies;
