import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import axios from 'axios';

const AdminDashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin');
            return;
        }
        fetchPosts();
    }, [navigate]);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/posts');
            setPosts(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`http://localhost:5001/api/posts/${id}`, {
                    headers: { Authorization: token }
                });
                setPosts(posts.filter(post => post._id !== id));
            } catch (error) {
                console.error("Error deleting post:", error);
                alert("Failed to delete post");
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin');
    };

    return (
        <div className="min-h-screen bg-[var(--color-primary)] pt-32 px-8 pb-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-serif font-bold">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/admin/article/new')}
                            style={{ backgroundColor: '#D4AF37', color: '#022C22' }}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors cursor-pointer"
                        >
                            <Plus size={20} /> New Article
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 px-6 py-3 rounded-lg font-bold hover:bg-red-500/20 transition-colors"
                        >
                            <LogOut size={20} /> Logout
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20">Loading articles...</div>
                ) : (
                    <div className="grid gap-6">
                        {posts.map(post => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass p-6 rounded-xl border border-white/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800">
                                        {post.image && <img src={post.image} alt={post.title} className="w-full h-full object-cover" />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                                        <div className="flex gap-4 text-sm text-[var(--color-text-muted)]">
                                            <span>{post.category}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Link to={`/admin/article/${post._id}`}>
                                        <button className="p-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors">
                                            <Edit size={20} />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post._id)}
                                        className="p-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}

                        {posts.length === 0 && (
                            <div className="text-center py-20 text-[var(--color-text-muted)] glass rounded-xl border-dashed border-2 border-white/10">
                                <p>No articles found. Create your first one!</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
