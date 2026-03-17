import { motion } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fdfbf7]/90 backdrop-blur-md z-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-rose-500 text-white p-2 rounded-xl">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-wider text-stone-900">讓愛飛翔</span>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {isHome ? (
                <>
                  <a href="#origin" className="text-sm font-medium text-stone-600 hover:text-rose-600 transition-colors">活動起源</a>
                </>
              ) : (
                <Link to="/" className="text-sm font-medium text-stone-600 hover:text-rose-600 transition-colors">回到首頁</Link>
              )}
              <Link to="/painter" className="text-sm font-medium text-stone-600 hover:text-rose-600 transition-colors">參與畫家</Link>
              <Link to="/#join" className="px-5 py-2.5 bg-rose-600 text-white text-sm font-medium rounded-full hover:bg-rose-700 transition-colors shadow-sm shadow-rose-600/20">
                參與計畫
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-stone-100 px-4 pt-2 pb-6 space-y-4 shadow-lg"
          >
            {isHome ? (
              <>
                <a href="#origin" className="block text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>活動起源</a>
              </>
            ) : (
              <Link to="/" className="block text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>回到首頁</Link>
            )}
            <Link to="/painter" className="block text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>參與畫家</Link>
            <Link to="/#join" className="block text-base font-medium text-rose-600" onClick={() => setIsMenuOpen(false)}>參與計畫</Link>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-rose-500" fill="currentColor" />
            <span className="text-lg font-bold text-stone-900">讓愛飛翔</span>
          </div>
          <p className="text-stone-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} 25-26年度社服計畫. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/painter" className="text-stone-400 hover:text-rose-600 transition-colors">參與畫家</Link>
            <a href="#" className="text-stone-400 hover:text-rose-600 transition-colors">聯絡我們</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
