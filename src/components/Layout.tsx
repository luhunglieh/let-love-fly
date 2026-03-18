import { motion } from 'motion/react';
import { Heart, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-blue-950 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {isHome ? (
              <a href="#" className="flex items-center" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="讓愛飛翔" 
                  className="h-12 w-auto"
                />
              </a>
            ) : (
              <Link to="/" className="flex items-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="讓愛飛翔" 
                  className="h-12 w-auto"
                />
              </Link>
            )}
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {isHome ? (
                <>
                  <a 
                    href="#origin" 
                    className="text-base font-semibold text-stone-800 hover:text-stone-600 transition-colors"
                    onClick={(e) => handleNavClick(e, '#origin')}
                  >
                    活動起源
                  </a>
                  <a 
                    href="#auction-info" 
                    className="text-base font-semibold text-stone-800 hover:text-stone-600 transition-colors"
                    onClick={(e) => handleNavClick(e, '#auction-info')}
                  >
                    義賣資訊
                  </a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-base font-semibold text-stone-800 hover:text-stone-600 transition-colors">回到首頁</Link>
                  <Link to="/#auction-info" className="text-base font-semibold text-stone-800 hover:text-stone-600 transition-colors">義賣資訊</Link>
                </>
              )}
              <Link 
                to="/painter" 
                className="px-6 py-2.5 bg-blue-900 text-white rounded-full text-base font-semibold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
              >
                參與畫家
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-blue-900"
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
                <a 
                  href="#origin" 
                  className="block text-lg font-semibold text-stone-800" 
                  onClick={(e) => handleNavClick(e, '#origin')}
                >
                  活動起源
                </a>
                <a 
                  href="#auction-info" 
                  className="block text-lg font-semibold text-stone-800" 
                  onClick={(e) => handleNavClick(e, '#auction-info')}
                >
                  義賣資訊
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="block text-lg font-semibold text-stone-800" onClick={() => setIsMenuOpen(false)}>回到首頁</Link>
                <Link to="/#auction-info" className="block text-lg font-semibold text-stone-800" onClick={() => setIsMenuOpen(false)}>義賣資訊</Link>
              </>
            )}
            <Link to="/painter" className="block text-lg font-semibold text-blue-900" onClick={() => setIsMenuOpen(false)}>參與畫家</Link>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="flex flex-wrap items-center gap-6">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="讓愛飛翔" 
                className="h-12 w-auto"
              />
              <img 
                src={`${import.meta.env.BASE_URL}images/org.jpg`} 
                alt="忠美扶輪社" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">聯絡時間</h4>
                <p className="text-stone-800 text-sm leading-relaxed">
                  週一至週五<br />
                  早上 10 點至下午 4 點
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">聯絡方式</h4>
                <div className="text-stone-800 text-sm space-y-2">
                  <p>歡迎電洽社辦公室 <a href="tel:02-2581-2561" className="text-stone-900 hover:text-stone-700 font-medium">02-2581-2561</a></p>
                  <p>或郵寄 <span className="text-stone-900 font-medium">chungmei186@gmail.com</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-stone-800 text-sm text-center md:text-left space-y-1">
              <p>25-26年度社服計畫 2026忠美扶輪社 © 版權所有</p>
              <p className="text-stone-500 text-xs">端詳互動資訊技術建置</p>
            </div>
            <div className="flex gap-8">
              <Link to="/painter" className="text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors">參與畫家</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
