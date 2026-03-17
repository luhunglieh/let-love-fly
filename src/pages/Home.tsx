import { motion } from 'motion/react';
import { Heart, Activity, Users, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
            alt="Medical care background" 
            className="w-full h-full object-cover opacity-[0.03]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold tracking-wider mb-6">
                25-26年度社服計畫
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.15] mb-8 tracking-tight">
                用生命影響生命<br/>
                <span className="text-rose-600">讓善循環繼續延續</span>
              </h1>
              <p className="text-lg lg:text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl">
                以「行動醫療」模式發展「在宅醫療」，改善在地鄉親就醫不便的問題。充滿愛與感動的故事，值得與眾人分享，並散播出去！
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#origin" className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors">
                  了解計畫 <ArrowRight size={18} />
                </a>
                <Link to="/painter" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors">
                  參與畫家
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                  alt="Medical professional helping patient" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-rose-50 p-8 rounded-3xl hidden md:block border border-rose-100">
                <Activity className="w-12 h-12 text-rose-500 mb-4" />
                <p className="text-2xl font-bold text-stone-900">行動醫療</p>
                <p className="text-stone-600">深入偏鄉角落</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-rose-600 uppercase mb-3">活動起源</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">從一個人的發願，<br/>到一群人的實踐。</h3>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  偏鄉地區長期面臨醫療資源匱乏的困境，交通不便更是長者與病患就醫的最大阻礙。我們看見了這份需求，決定化被動為主動。
                </p>
                <p>
                  透過推動「行動醫療」與「在宅醫療」，我們將醫療資源直接送到需要的鄉親家中。這不僅僅是醫療服務的延伸，更是傳遞溫暖與關懷的橋樑。
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-rose-100 p-1 rounded-full text-rose-600">
                      <Users size={16} />
                    </div>
                    <span className="font-medium text-stone-800">凝聚眾人力量，捲起袖子同心協力</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-rose-100 p-1 rounded-full text-rose-600">
                      <MapPin size={16} />
                    </div>
                    <span className="font-medium text-stone-800">改善在地鄉親就醫不便的問題</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-8" fill="currentColor" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              用生命影響生命<br/>
              傳遞正能量燃起希望
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed">
              從一個人的夢想到一群人的行動和付出。我們相信，每一個微小的善意都能引發巨大的改變。讓充滿愛與感動的故事，值得與眾人分享，並散播出去！
            </p>
          </motion.div>
        </div>
      </section>

      {/* Action Section */}
      <section id="action" className="py-24 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-rose-600 uppercase mb-3">南迴模式</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">始於南迴，終於環島</h3>
            <p className="text-lg text-stone-600">
              讓「南迴模式」成為偏鄉的醫療典範，複製在台灣所有不被看見的偏鄉。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "建立典範",
                desc: "在南迴地區建立完善的在宅醫療與行動醫療標準作業流程。",
                icon: Activity
              },
              {
                title: "複製經驗",
                desc: "將成功的南迴經驗，推廣至台灣其他醫療資源匱乏的偏鄉地區。",
                icon: Users
              },
              {
                title: "環島守護",
                desc: "最終目標是讓全台灣每一個角落的鄉親，都能享有平等的醫療照護。",
                icon: MapPin
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-6">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h4>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
