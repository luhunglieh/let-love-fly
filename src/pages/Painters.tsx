import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { painters } from '../data/painters';
import { ArrowRight, Palette } from 'lucide-react';

export default function Painters() {
  return (
    <div className="pt-32 pb-24 bg-[#fdfbf7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mx-auto mb-6">
              <Palette size={32} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
              參與畫家
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              這些充滿熱情的藝術家們，透過畫筆將生活中的點滴轉化為動人的藝術作品，期望透過藝術傳遞正能量，共同響應「讓愛飛翔」計畫。
            </p>
          </motion.div>
        </div>

        {/* Painters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painters.map((painter, index) => (
            <motion.div
              key={painter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={painter.avatar} 
                  alt={painter.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link 
                    to={`/painter/${painter.id}`}
                    className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    查看完整介紹 <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{painter.name}</h3>
                <p className="text-stone-600 leading-relaxed flex-1">
                  {painter.shortBio}
                </p>
                
                <div className="mt-8 pt-6 border-t border-stone-100">
                  <Link 
                    to={`/painter/${painter.id}`}
                    className="inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700 transition-colors"
                  >
                    探索作品 <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
