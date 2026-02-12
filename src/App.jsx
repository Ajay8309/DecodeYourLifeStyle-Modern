import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Info from './pages/Info';
import Booking from './pages/Booking';
import Policies from './pages/Policies';
import Blog from './pages/Blog';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/info" element={<PageTransition><Info /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><Booking /></PageTransition>} />
        <Route path="/policies" element={<PageTransition><Policies /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-[var(--color-primary)] min-h-screen text-[var(--color-text)] font-sans">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
