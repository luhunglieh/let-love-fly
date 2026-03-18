import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { painters } from '../data/painters';
import { ArrowLeft, BookOpen, Briefcase, CheckCircle2, Palette, Image, Sun, Loader2 } from 'lucide-react';
import { fetchArtworkStatuses } from '../services/gasService';

export default function PainterDetail() {
  const { id } = useParams<{ id: string }>();
  const painter = painters.find(p => p.id === id);
  const [artworks, setArtworks] = useState(painter?.artworks || []);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const [rawGasData, setRawGasData] = useState<any[]>([]);
  const [gasError, setGasError] = useState<string | null>(null);

  useEffect(() => {
    if (!painter) return;

    const loadStatus = async () => {
      setIsLoadingStatus(true);
      setGasError(null);
      try {
        const statuses = await fetchArtworkStatuses();
        setRawGasData(statuses);
        
        if (statuses.length > 0) {
          setArtworks(prevArtworks => 
            prevArtworks.map(art => {
              const status = statuses.find(s => s.id === art.id);
              return status ? { ...art, collected: status.collected } : art;
            })
          );
        } else {
          setGasError('未取得資料，請確認 GAS URL 是否正確或是否有權限。');
        }
      } catch (err: any) {
        setGasError(err.message || '抓取資料時發生錯誤');
      } finally {
        setIsLoadingStatus(false);
      }
    };

    loadStatus();
  }, [id, painter]);

  if (!painter) {
    return <Navigate to="/painter" replace />;
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/painter" 
            className="inline-flex items-center gap-2 text-blue-900/60 hover:text-blue-700 transition-colors font-medium"
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
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl sticky top-32 group cursor-pointer">
              <a href="#artworks" className="block w-full h-full relative">
                <img 
                  src={painter.detailImage.startsWith('http') ? painter.detailImage : `${import.meta.env.BASE_URL}${painter.detailImage}`} 
                  alt={painter.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-blue-950 px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    查看作品
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-950 mb-12 tracking-tight">
              {painter.name}
            </h1>
            
            {/* Education & Experience Grid */}
            <div className="grid sm:grid-cols-2 gap-12 mb-12">
              {painter.education.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-blue-950 mb-6">
                    <BookOpen size={20} className="text-blue-700" /> 學歷背景
                  </h3>
                  <ul className="space-y-4">
                    {painter.education.map((edu, idx) => (
                      <li key={idx} className="text-blue-900/70 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {painter.experience.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-blue-950 mb-6">
                    <Briefcase size={20} className="text-blue-700" /> 現職與經歷
                  </h3>
                  <ul className="space-y-4">
                    {painter.experience.map((exp, idx) => (
                      <li key={idx} className="text-blue-900/70 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="prose prose-lg text-blue-900/70 leading-relaxed mb-12 max-w-none">
              <p>{painter.fullBio}</p>
            </div>

            {/* Philosophy Section */}
            {painter.philosophy && (
              <div className="mb-12">
                <h3 className="flex items-center gap-2 text-xl font-bold text-blue-950 mb-6 border-b border-blue-100 pb-4">
                  <Palette size={22} className="text-blue-700" /> 藝術理念與創作風格
                </h3>
                <p className="text-blue-900/80 leading-relaxed text-lg italic">
                  「{painter.philosophy}」
                </p>
              </div>
            )}

            {/* Exhibitions Section */}
            {painter.exhibitions && painter.exhibitions.length > 0 && (
              <div className="mb-12">
                <h3 className="flex items-center gap-2 text-xl font-bold text-blue-950 mb-6 border-b border-blue-100 pb-4">
                  <Image size={22} className="text-blue-700" /> 展覽經歷
                </h3>
                <ul className="space-y-4">
                  {painter.exhibitions.map((exh, idx) => (
                    <li key={idx} className="text-blue-900/70 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0" />
                      <span>{exh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Charity Section */}
            {painter.charity && (
              <div className="mb-12 bg-blue-50/30 p-8 rounded-3xl border border-blue-100/50">
                <h3 className="flex items-center gap-2 text-xl font-bold text-blue-950 mb-6">
                  <Sun size={22} className="text-blue-700" /> 扶輪背景與公益參與
                </h3>
                <p className="text-blue-900/80 leading-relaxed">
                  {painter.charity}
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Gallery Section */}
        {painter.artworks.length > 0 && (
          <motion.div
            id="artworks"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-32"
          >
            <div className="flex items-center justify-between mb-12 border-b border-blue-100 pb-6">
              <h2 className="text-3xl font-bold text-blue-950">藝術作品</h2>
              <span className="text-blue-900/50 font-medium">{painter.artworks.length} 件作品</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-blue-50"
                >
                  <div className="aspect-square overflow-hidden mb-4">
                    <img 
                      src={artwork.image.startsWith('http') ? artwork.image : `${import.meta.env.BASE_URL}${artwork.image}`} 
                      alt={artwork.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-blue-950 text-xl font-bold">{artwork.title}</h3>
                      {isLoadingStatus ? (
                        <span className="flex items-center gap-1.5 text-blue-400 text-xs font-bold px-2.5 py-1 bg-blue-50/50 rounded-full animate-pulse">
                          <Loader2 size={14} className="animate-spin" /> 確認中
                        </span>
                      ) : artwork.collected ? (
                        <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold px-2.5 py-1 bg-emerald-50 rounded-full">
                          <CheckCircle2 size={14} /> 已收藏
                        </span>
                      ) : (
                        <span className="text-blue-600 text-xs font-bold px-2.5 py-1 bg-blue-50 rounded-full">
                          開放收藏
                        </span>
                      )}
                    </div>
                    {artwork.description && (
                      <p className="text-blue-900/70 text-sm leading-relaxed mb-4">
                        {artwork.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {/* Debug Section */}
        {import.meta.env.DEV && (
          <div className="mt-24 p-8 bg-gray-50 rounded-3xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Loader2 size={20} className={isLoadingStatus ? 'animate-spin' : ''} />
              GAS 回傳狀態 (Debug)
            </h3>
            {gasError && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm">
                <strong>Error:</strong> {gasError}
                <p className="mt-2 text-xs opacity-80">提示：如果看到 CORS 錯誤，請確保 GAS 腳本已部署為「網頁應用程式」且存取權限設為「任何人」。</p>
              </div>
            )}
            {rawGasData.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {rawGasData.map(data => (
                  <div key={data.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">ID: {data.id}</div>
                    <div className={`text-sm font-bold ${data.collected ? 'text-emerald-600' : 'text-blue-600'}`}>
                      {data.collected ? '已收藏' : '未收藏'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                {isLoadingStatus ? '正在載入實時資料...' : '尚未取得資料或資料格式不正確'}
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
