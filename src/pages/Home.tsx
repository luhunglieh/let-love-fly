import { motion } from 'motion/react';
import { Heart, Activity, Users, MapPin, ArrowRight, Calendar, Info, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-64 pb-20 lg:pt-80 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent" />
          <img
            src={`${import.meta.env.BASE_URL}images/banner.png`}
            alt="讓愛飛翔"
            className="w-full h-full object-cover object-top opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="font-bold tracking-tight mb-8 leading-tight">
                <span className="text-5xl lg:text-8xl text-blue-950 block mb-4">讓愛飛翔</span>
                <span className="text-2xl lg:text-4xl text-stone-500 block mb-2">用生命影響生命</span>
                <span className="text-2xl lg:text-4xl text-stone-500 block">讓善循環繼續延續</span>
              </h1>
              {/* Removed paragraph for cleaner visual */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#auction-info"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#auction-info')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  義賣資訊 <ArrowRight size={18} />
                </a>
                <a
                  href="#origin"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#origin')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  了解計畫
                </a>
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
              <div className="absolute -bottom-8 -right-8 bg-blue-50 p-8 rounded-3xl hidden md:block border border-blue-100">
                <Activity className="w-12 h-12 text-blue-600 mb-4" />
                <p className="text-2xl font-bold text-blue-950">行動醫療</p>
                <p className="text-blue-900/70">深入偏鄉角落</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-800 uppercase mb-3">活動起源</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-6">從一個人的發願，<br />到一群人的實踐。</h3>
              <div className="space-y-6 text-blue-900/80 text-lg leading-relaxed">
                <p>
                  偏鄉地區長期面臨醫療資源匱乏的困境，交通不便更是長者與病患就醫的最大阻礙。我們看見了這份需求，決定化被動為主動。
                </p>
                <p>
                  透過推動「行動醫療」與「在宅醫療」，我們將醫療資源直接送到需要的鄉親家中。這不僅僅是醫療服務的延伸，更是傳遞溫暖與關懷的橋樑。
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-700">
                      <Users size={16} />
                    </div>
                    <span className="font-medium text-blue-950">凝聚眾人力量，捲起袖子同心協力</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-700">
                      <MapPin size={16} />
                    </div>
                    <span className="font-medium text-blue-950">改善在地鄉親就醫不便的問題</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Heart className="w-16 h-16 text-rose-600 mx-auto mb-8" fill="currentColor" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              用生命影響生命<br />
              傳遞正能量燃起希望
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed">
              從一個人的夢想到一群人的行動和付出。我們相信，每一個微小的善意都能引發巨大的改變。讓充滿愛與感動的故事，值得與眾人分享，並散播出去！
            </p>
          </motion.div>
        </div>
      </section>

      {/* Charity Auction Section */}
      <section id="auction-info" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-sm font-bold tracking-widest text-blue-800 uppercase mb-3">義賣資訊</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">讓愛飛翔・字畫義賣聯展資訊</h3>
            </div>
            <Link to="/painter" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 mb-2">
              <Users size={20} />
              參與畫家清單
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Exhibition Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">展覽地點</h4>
              <div className="space-y-3 text-stone-600">
                <p className="font-semibold text-stone-800">政大公企中心 2樓 流光展廳</p>
                <p>台北市大安區金華街187號</p>
                <div className="pt-4 border-t border-stone-50">
                  <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold">
                    <Calendar size={18} />
                    <span>展覽時間</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-stone-800">🔹 8月8日 (五) 14:00</p>
                      <p className="text-sm">開幕暨活動開展記者會</p>
                    </div>
                    <div>
                      <p className="font-medium text-stone-800">🔹 8月9日 (六) 10:00–16:30</p>
                      <p className="text-sm">10:30｜蘇一仲 導覽分享</p>
                      <p className="text-sm">14:00｜白文亮 導覽分享</p>
                    </div>
                    <div>
                      <p className="font-medium text-stone-800">🔹 8月10日 (日) 10:00–16:30</p>
                      <p className="text-sm">自由參觀與義賣</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rules of Operation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-6">
                <Info size={24} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">作業辦法</h4>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>義賣所得全數捐助<span className="font-bold text-stone-800">【南迴基金會】</span>支持偏鄉醫療。</p>
                <p>將由【南迴基金會】開立可供所得稅扣抵之公益捐款收據。</p>
                <div className="mt-8 p-4 bg-zinc-50 rounded-2xl text-sm">
                  <p className="mb-2">📌 義買、義捐者請於展覽結束前完成匯款</p>
                  <p>📌 藝術家作品將自 8月10日起陸續寄送給您</p>
                </div>
              </div>
            </motion.div>

            {/* Payment Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <CreditCard size={24} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">匯款說明</h4>
              <div className="space-y-4 p-6 bg-amber-50/50 rounded-3xl border border-amber-100/50 text-stone-700">
                <div>
                  <label className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1 block">銀行資訊</label>
                  <p className="font-medium">臺灣銀行 中山分行 (代碼 004)</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1 block">帳號</label>
                  <p className="font-mono text-lg font-bold">02000-1157143</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1 block">戶名</label>
                  <p className="font-bold text-stone-900">台北市忠美扶輪社 李文嬌</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block 1: YT film and text */}
      <section id="persistence" className="py-24 bg-white overflow-hidden border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                id="foundation-logo-block-1"
                src={`${import.meta.env.BASE_URL}images/sl-01.jpg`} 
                alt="South-Link Medical Foundation Logo" 
                className="h-12 w-auto mb-8 opacity-90"
              />
              <h2 className="text-sm font-bold tracking-widest text-blue-800 uppercase mb-3 text-left">南迴模式｜醫師的堅持</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-8">這一切 , 來自一位醫師的堅持 —</h3>
              <div className="space-y-6 text-blue-900/80 text-lg leading-relaxed">
                <p>
                  2002 年，徐超斌醫師回到台灣東南角，親眼見到家鄉醫療資源匱乏的現實。他深信 : 即使生活在偏鄉，也應擁有和城市居民一樣的醫療權利。因此，他放下城市資源，回到南迴， 扎根偏鄉，帶領一群有愛與使命感的醫護人員，守護這片被遺忘的土地。
                </p>
                <p>
                  南迴基金會不只治療身體的病痛，更期望帶來心理的安定與社會的支持，實踐「全人 照護」的醫療精神。即使南迴醫院的夢想仍在路上，基金會依舊一步一步前行，因為我們相信 —
                </p>
                <p className="font-bold text-blue-900 text-xl italic mt-8 border-l-4 border-blue-600 pl-6">
                  「愛，不是我們要去的方向，而是我們出發的地方。」
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-stone-100 ring-1 ring-stone-200">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wNfzQSJIPDk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block 2: Text and 4 images */}
      <section id="intention" className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-800 uppercase mb-3 text-left">醫師的初衷</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-8">徐超斌(超人)醫師不變的初衷 —</h3>
              <div className="space-y-6 text-blue-900/80 text-lg leading-relaxed">
                <p className="font-bold text-xl text-blue-900 italic">親愛的朋友，平安 !</p>
                <p>
                  23 年前，我回到東海岸南迴公路邊的醫療荒漠服務，發現鄉親能擁有的醫療照護和 27 年前我離開部落時的情況並沒有多大的轉變，於是我暗暗發誓終其一生都要盡我所能地實現醫療照護的公平與正義，從此我的生活就在改善南迴公路醫療生態的奔忙中度過。
                </p>
                <p>
                  為了替被冷落遺忘許久的南迴偏鄉居民發聲，2011 年年底，我發起了籌建南迴醫院的願景，獲得了廣大群眾的迴響，經歷多年的努力，醫療財團法人南迴基金會終於在 2018 年年底獲准設立，這是全臺灣第一個沒有宗教或財團背景，完全是集結社會大眾愛心成立的醫療財團法人。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src={`${import.meta.env.BASE_URL}images/sl-11.jpg`}
                  alt="Mission image 1"
                  className="rounded-2xl w-full h-64 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/sl-15.jpg`}
                  alt="Mission image 2"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={`${import.meta.env.BASE_URL}images/sl-16.jpg`}
                  alt="Mission image 3"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/sl-17.jpg`}
                  alt="Mission image 4"
                  className="rounded-2xl w-full h-64 object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
