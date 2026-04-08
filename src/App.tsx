import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Instagram, 
  MapPin, 
  Share2, 
  ChevronDown, 
  TrendingUp, 
  Video, 
  PenTool, 
  BarChart3, 
  Award, 
  ExternalLink,
  MessageCircle,
  Briefcase,
  X
} from 'lucide-react';

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleShare = async () => {
    const shareData = {
      title: 'Portofolio - Habib Zaenal Mustofa',
      text: 'Lihat portofolio profesional Habib Zaenal Mustofa (Digital Marketing, Content Creator, E-commerce Specialist).',
      url: window.location.href
    };
    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link portofolio berhasil disalin!');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 selection:bg-brand-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-xl tracking-tight"
          >
            HZM<span className="text-brand-500">.</span>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
          >
            <Share2 className="w-4 h-4" />
            <span>Bagikan</span>
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Madiun, Jawa Timur
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, saya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Habib Zaenal Mustofa
              </span>
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
              {['Digital Marketing', 'Content Creator', 'E-commerce Specialist'].map((role, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-dark-800 border border-white/5 text-slate-300 font-medium">
                  {role}
                </span>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 rounded-full bg-white text-dark-900 font-semibold hover:bg-slate-200 transition-colors"
              >
                Lihat Karya Saya
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-colors"
              >
                Hubungi Saya
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce p-4 cursor-pointer hover:text-brand-500 transition-colors"
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.button>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-24 bg-dark-900 relative px-6 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center lg:text-left"
          >
            <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm mb-3 block">Ringkasan Eksekutif</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Profil</h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Text Content - 7 columns */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeInUp} className="p-8 md:p-10 rounded-3xl bg-dark-800/40 border border-white/5 backdrop-blur-md shadow-2xl">
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Seorang lulusan Teknik Industri yang berfokus pada <strong className="text-white font-semibold">Digital Marketing, Content Creation, dan E-commerce Operations</strong>, dengan pengalaman dalam mengelola live streaming serta pembuatan konten visual untuk meningkatkan engagement dan konversi penjualan.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Memiliki kemampuan analitis dalam membaca performa konten berbasis data serta keterampilan kreatif dalam desain grafis dan video editing. Didukung pemahaman Quality Control dan sistem manajemen mutu (ISO), sehingga terbiasa bekerja secara detail, terstruktur, dan berorientasi pada hasil.
                </p>
              </motion.div>
            </motion.div>

            {/* Skills Grid - 5 columns */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {[
                { icon: TrendingUp, label: 'Digital Marketing', desc: 'Strategi & Eksekusi' },
                { icon: Video, label: 'Content Creation', desc: 'Video & Visual' },
                { icon: BarChart3, label: 'Data Analytics', desc: 'Performa Konten' },
                { icon: PenTool, label: 'Graphic Design', desc: 'Aset Kreatif' },
                { icon: Award, label: 'QC & ISO', desc: 'Manajemen Mutu' },
                { icon: Briefcase, label: 'E-commerce Ops', desc: 'Live & Konversi' },
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="p-5 rounded-2xl bg-gradient-to-br from-dark-800/80 to-dark-900/80 border border-white/5 hover:border-brand-500/30 hover:shadow-[0_0_30px_rgba(var(--brand-500),0.15)] transition-all duration-300 group"
                >
                  <skill.icon className="w-7 h-7 text-brand-400 mb-3 group-hover:scale-110 group-hover:text-brand-300 transition-all duration-300" />
                  <h3 className="font-semibold text-slate-200 mb-1">{skill.label}</h3>
                  <p className="text-xs text-slate-500">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Karya & Pengalaman</h2>
            <p className="text-slate-400 text-lg max-w-2xl">Beberapa proyek dan inisiatif yang pernah saya kerjakan untuk meningkatkan konversi dan brand awareness.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Live Streaming Strategy',
                category: 'E-commerce',
                image: 'https://picsum.photos/seed/live/600/400',
                desc: 'Mengelola dan mengoptimalkan sesi live streaming untuk meningkatkan interaksi audiens dan konversi penjualan secara real-time.',
                details: 'Mengelola dan mengoptimalkan performa live streaming e-commerce dengan strategi interaktif dan pendekatan soft selling untuk meningkatkan engagement serta konversi penjualan secara real-time.',
                contentImage: '/src/gambar-live.png',
                // videoUrl: '/video-live-streaming.mp4', // Hapus tanda // di depan jika Anda sudah mengunggah video
                // embedHtml: '<iframe src="https://www.tiktok.com/embed/v2/..." ...></iframe>' // Atau gunakan embed TikTok/YouTube
              },
              {
                title: 'Creative Video & Social Media Campaign',
                category: 'Content Creation',
                image: 'https://picsum.photos/seed/video/600/400',
                desc: 'Produksi video kreatif dan kampanye media sosial yang menarik untuk membangun brand awareness.',
                details: 'Merancang dan memproduksi konten digital berbasis strategi kreatif untuk memperkuat identitas brand serta mengoptimalkan performa kampanye di berbagai platform media sosial.',
                videoUrls: ['/src/video-karya-1.mp4', '/src/video-karya-2.mp4'],
              },
              {
                title: 'Performance Analytics',
                category: 'Digital Marketing',
                image: 'https://picsum.photos/seed/analytics/600/400',
                desc: 'Menganalisis data performa konten dan kampanye iklan untuk merumuskan strategi pemasaran digital yang lebih efektif.',
                details: 'Jelaskan bagaimana Anda menggunakan data untuk mengambil keputusan:\n\n- Tools yang Anda kuasai (Google Analytics, Meta Ads Manager, TikTok Seller Center)\n- Contoh kasus di mana analisis Anda berhasil menghemat budget iklan atau meningkatkan ROI.',
                contentImage: '/src/performance-analytics.png',
                // videoUrl: '/video-analytics.mp4',
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProject(item)}
                className="group relative rounded-3xl overflow-hidden bg-dark-800 border border-white/5 cursor-pointer hover:border-brand-500/50 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="px-6 py-3 rounded-full bg-brand-500 text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      Lihat Detail <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-dark-800 border border-white/10 rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/80 to-dark-900" />
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-brand-500 text-white rounded-full backdrop-blur-md transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Scrollable Content */}
              <div className="relative z-10 p-6 sm:p-10 pt-12 sm:pt-16 overflow-y-auto custom-scrollbar flex-1">
                <span className="text-sm font-bold uppercase tracking-wider text-brand-400 mb-3 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  {selectedProject.title}
                </h3>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-slate-300 leading-relaxed mb-8 whitespace-pre-line">
                    {selectedProject.details}
                  </p>
                </div>

                {/* Render Content Image if provided */}
                {selectedProject.contentImage && (
                  <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={selectedProject.contentImage} 
                      alt="Detail Karya" 
                      className="w-full h-auto object-contain bg-dark-900"
                    />
                  </div>
                )}

                {/* Render Multiple Videos if provided */}
                {selectedProject.videoUrls && selectedProject.videoUrls.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                    {selectedProject.videoUrls.map((url: string, idx: number) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-black w-full max-w-[360px] aspect-[9/16] shadow-2xl relative">
                        <video 
                          src={url} 
                          controls 
                          className="absolute inset-0 w-full h-full object-contain"
                        >
                          Browser Anda tidak mendukung tag video.
                        </video>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render Single Video MP4 if provided */}
                {selectedProject.videoUrl && !selectedProject.videoUrls && (
                  <div className="mt-8 flex justify-center">
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black w-full max-w-[360px] aspect-[9/16] shadow-2xl relative">
                      <video 
                        src={selectedProject.videoUrl} 
                        controls 
                        className="absolute inset-0 w-full h-full object-contain"
                      >
                        Browser Anda tidak mendukung tag video.
                      </video>
                    </div>
                  </div>
                )}

                {/* Render Embed HTML (TikTok/YouTube) if provided */}
                {selectedProject.embedHtml && (
                  <div 
                    className="mt-8 rounded-2xl overflow-hidden border border-white/10 flex justify-center bg-dark-900 p-4"
                    dangerouslySetInnerHTML={{ __html: selectedProject.embedHtml }}
                  />
                )}

                {/* Placeholder if no video/embed/image is provided */}
                {!selectedProject.videoUrl && !selectedProject.videoUrls && !selectedProject.embedHtml && !selectedProject.contentImage && (
                  <div className="mt-8 p-8 bg-dark-900/50 rounded-2xl border border-white/5 border-dashed text-center">
                    <Video className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                    <p className="text-slate-400 text-sm">
                      Area ini bisa Anda isi dengan gambar tambahan, video hasil editing Anda (MP4), atau link embed dari TikTok/YouTube.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-dark-800/50 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">Mari Berkolaborasi!</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Tertarik untuk bekerja sama atau memiliki pertanyaan lebih lanjut? Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Email */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=habibzainal161@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-dark-900 border border-white/5 hover:border-brand-500 hover:bg-brand-500/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all">
                  <Mail className="w-6 h-6 text-slate-300 group-hover:text-brand-400" />
                </div>
                <span className="font-medium text-sm">Email</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/6285706514201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-dark-900 border border-white/5 hover:border-green-500 hover:bg-green-500/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-green-500/20 transition-all">
                  <WhatsAppIcon className="w-6 h-6 text-slate-300 group-hover:text-green-400" />
                </div>
                <span className="font-medium text-sm">WhatsApp</span>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/habibzm_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-dark-900 border border-white/5 hover:border-accent-500 hover:bg-accent-500/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all">
                  <Instagram className="w-6 h-6 text-slate-300 group-hover:text-accent-400" />
                </div>
                <span className="font-medium text-sm">Instagram</span>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@habibzm13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-dark-900 border border-white/5 hover:border-white hover:bg-white/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  <TikTokIcon className="w-6 h-6 text-slate-300 group-hover:text-white" />
                </div>
                <span className="font-medium text-sm">TikTok</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Habib Zaenal Mustofa. All rights reserved.</p>
      </footer>
    </div>
  );
}
