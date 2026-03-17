import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { painters } from '../data/painters';
import { ArrowLeft, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';

export default function PainterDetail() {
  const { id } = useParams<{ id: string }>();
  const painter = painters.find(p => p.id === id);

  if (!painter) {
    return <Navigate to="/painter" replace />;
  }

  return (
    <div className="pt-32 pb-24 bg-[#fdfbf7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/painter" 
            className="inline-flex items-center gap-2 text-stone-500 hover:text-rose-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} /> 返回畫家列表
          </Link>
        </motion.div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl sticky top-32">
              <img 
                src={painter.avatar} 
                alt={painter.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-8 tracking-tight">
              {painter.name}
            </h1>
            
            <div className="prose prose-lg text-stone-600 leading-relaxed mb-12">
              <p>{painter.fullBio}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              {painter.education.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-stone-900 mb-6">
                    <BookOpen size={20} className="text-rose-500" /> 學歷背景
                  </h3>
                  <ul className="space-y-4">
                    {painter.education.map((edu, idx) => (
                      <li key={idx} className="text-stone-600 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2 shrink-0" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {painter.experience.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-stone-900 mb-6">
                    <Briefcase size={20} className="text-rose-500" /> 現職與經歷
                  </h3>
                  <ul className="space-y-4">
                    {painter.experience.map((exp, idx) => (
                      <li key={idx} className="text-stone-600 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2 shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        {painter.artworks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-12 border-b border-stone-200 pb-6">
              <h2 className="text-3xl font-bold text-stone-900">藝術作品</h2>
              <span className="text-stone-500 font-medium">{painter.artworks.length} 件作品</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {painter.artworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-100"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{artwork.title}</h3>
                    {artwork.collected ? (
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-medium">
                        <CheckCircle2 size={16} /> 本作品已被收藏
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-rose-400 text-sm font-medium">
                        開放收藏中
                      </span>
                    )}
                  </div>
                  
                  {/* Mobile always visible badge */}
                  {artwork.collected && (
                    <div className="absolute top-4 right-4 md:hidden bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <CheckCircle2 size={14} /> 已收藏
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
