import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import axios from 'axios';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5001/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-[var(--color-primary)] flex items-center justify-center px-6 pt-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-10 rounded-2xl max-w-md w-full border border-white/10"
            >
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[var(--color-secondary)]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[var(--color-secondary)]">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-3xl font-serif font-bold">Admin Login</h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-[var(--color-text-muted)]">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--color-secondary)]"
                            placeholder="Enter username"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-[var(--color-text-muted)]">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[var(--color-secondary)]"
                            placeholder="Enter password"
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                    <button
                        type="submit"
                        style={{ backgroundColor: '#D4AF37', color: '#022C22' }}
                        className="w-full font-bold py-3 rounded-lg hover:bg-white transition-colors"
                    >
                        Access Dashboard
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
