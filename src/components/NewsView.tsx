import React, { useState, useMemo } from 'react';
import { NEWS_ARTICLES } from '../data/mockData';
import { NewsArticle } from '../types';
import { useTheme } from '../context/ThemeContext';

interface NewsViewProps {
  onOpenConsultModal?: (topic: string) => void;
  onNavigateHome?: () => void;
}

export const NewsView: React.FC<NewsViewProps> = ({ onOpenConsultModal, onNavigateHome }) => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Tất Cả Bài Viết', icon: 'apps' },
    { id: 'XKLĐ Kỹ Năng Nhật Bản', label: 'XKLĐ & Tokutei Nhật', icon: 'work' },
    { id: 'Kỹ Sư & Lao Động Hàn Quốc', label: 'Kỹ Sư E-7 Hàn Quốc', icon: 'engineering' },
    { id: 'Du Học & Việc Làm Đài Loan', label: 'Du Học & Việc Làm Đài Loan', icon: 'school' },
    { id: 'Cẩm Nang & Pháp Lý', label: 'Cẩm Nang & Pháp Lý', icon: 'gavel' }
  ];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.tags?.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSelectArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShareArticle = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleConsultClick = (topic?: string) => {
    const finalTopic = topic || (selectedArticle ? `Tư vấn chương trình: ${selectedArticle.title}` : 'Tư vấn xuất cảnh & học bổng');
    if (onOpenConsultModal) {
      onOpenConsultModal(finalTopic);
    }
  };

  // 1. DETAIL VIEW MODE
  if (selectedArticle) {
    const relatedArticles = NEWS_ARTICLES.filter(
      (a) => a.id !== selectedArticle.id && (a.category === selectedArticle.category || activeCategory === 'all')
    ).slice(0, 3);

    return (
      <div className={`w-full pt-28 pb-20 transition-colors duration-300 ${
        isDark ? 'bg-[#041329] text-[#c3c6d7]' : 'bg-[#f8fafc] text-slate-800'
      }`}>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb & Navigation Bar */}
          <div className="flex items-center justify-between gap-4 py-4 mb-6 border-b border-white/10">
            <button
              onClick={handleBackToList}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                isDark
                  ? 'bg-[#0d1c32] hover:bg-[#132644] text-[#4cd7f6] border border-[#1c2a41]'
                  : 'bg-white hover:bg-slate-100 text-blue-600 border border-slate-200 shadow-sm'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Quay Lại Danh Sách Tin Tức</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShareArticle}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isDark
                    ? 'bg-[#0d1c32] hover:bg-[#132644] text-slate-300 border border-[#1c2a41]'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
                }`}
                title="Sao chép liên kết"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
                <span>{copiedNotification ? 'Đã sao chép!' : 'Chia sẻ'}</span>
              </button>

              <button
                onClick={() => handleConsultClick()}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">support_agent</span>
                <span>Tư Vấn Miễn Phí</span>
              </button>
            </div>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-blue-500/20 text-[#4cd7f6] border border-blue-500/30">
                {selectedArticle.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                {selectedArticle.date}
              </span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                {selectedArticle.readTime}
              </span>
            </div>

            <h1 className={`text-2xl sm:text-4xl font-extrabold leading-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {selectedArticle.title}
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed font-medium p-4 rounded-xl mb-6 ${
              isDark ? 'bg-[#0d1c32] text-cyan-200 border-l-4 border-cyan-400' : 'bg-blue-50 text-blue-900 border-l-4 border-blue-600'
            }`}>
              {selectedArticle.summary}
            </p>

            {/* Author Attribution */}
            {selectedArticle.author && (
              <div className={`flex items-center gap-3.5 p-3.5 rounded-xl ${
                isDark ? 'bg-[#091830] border border-white/5' : 'bg-slate-100 border border-slate-200'
              }`}>
                <img
                  src={selectedArticle.author.avatar}
                  alt={selectedArticle.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/40"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {selectedArticle.author.name}
                    </span>
                    <span className="material-symbols-outlined text-blue-400 text-[16px]">verified</span>
                  </div>
                  <p className="text-xs text-slate-400">{selectedArticle.author.role}</p>
                </div>
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/10 aspect-video max-h-[460px]">
            <img
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Metrics Dashboard Bar */}
          {selectedArticle.keyStats && selectedArticle.keyStats.length > 0 && (
            <div className="mb-10">
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                Thông Số Nhanh Về Chương Trình
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedArticle.keyStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      isDark
                        ? 'bg-[#0d1c32] border-[#1c2a41] hover:border-cyan-500/30'
                        : 'bg-white border-slate-200 shadow-sm hover:border-blue-300'
                    }`}
                  >
                    <span className="block text-xs text-slate-400 mb-1">{stat.label}</span>
                    <span className={`text-sm sm:text-base font-extrabold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Article Content Sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed">
            {selectedArticle.sections && selectedArticle.sections.length > 0 ? (
              selectedArticle.sections.map((sec, idx) => (
                <section
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                    isDark
                      ? 'bg-[#0d1c32]/60 border-[#1c2a41]'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <h2 className={`text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 ${
                    isDark ? 'text-cyan-300' : 'text-blue-700'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>{sec.heading}</span>
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className={`mb-3.5 last:mb-0 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {p}
                    </p>
                  ))}

                  {sec.calloutBox && (
                    <div className={`mt-5 p-4 rounded-xl border flex items-start gap-3 ${
                      isDark
                        ? 'bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border-cyan-500/30 text-cyan-100'
                        : 'bg-amber-50 border-amber-200 text-amber-900'
                    }`}>
                      <span className="material-symbols-outlined text-amber-400 shrink-0 text-[20px] mt-0.5">
                        lightbulb
                      </span>
                      <p className="text-xs sm:text-sm font-semibold">{sec.calloutBox}</p>
                    </div>
                  )}

                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {sec.bulletPoints.map((item, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <span className="material-symbols-outlined text-emerald-400 text-[18px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))
            ) : (
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#0d1c32] border-[#1c2a41]' : 'bg-white border-slate-200'}`}>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {selectedArticle.summary}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Để nhận đầy đủ danh sách điều kiện ứng tuyển, hợp đồng mẫu và lịch phỏng vấn tuyển dụng trực tiếp cùng nghiệp đoàn, quý học sinh và người lao động vui lòng liên hệ trực tiếp với chuyên viên tư vấn của EduGlobal.
                </p>
              </div>
            )}
          </div>

          {/* Tags Cloud */}
          {selectedArticle.tags && selectedArticle.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">tag</span>
                Thẻ từ khóa:
              </span>
              {selectedArticle.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    isDark ? 'bg-[#0d1c32] text-slate-300 border border-white/5' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Interactive Consultation Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider mb-2">
                  Đồng Hành 1:1 Cùng EduGlobal
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-2">
                  Cần Hướng Dẫn Hồ Sơ Cho Chương Trình Này?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Đội ngũ cố vấn viên pháp lý và chuyên gia nghiệp đoàn của EduGlobal sẽ thẩm định bằng cấp, sức khỏe và xây dựng lộ trình bay nhanh nhất trong 24 giờ.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => handleConsultClick()}
                  className="px-6 py-3.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-black text-sm shadow-xl transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">edit_document</span>
                  <span>Đăng Ký Thẩm Định 1:1</span>
                </button>
                <a
                  href="tel:19006868"
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>1900 6868</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Bài Viết Cùng Chủ Đề
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Cập nhật xu hướng và cơ hội xuất cảnh mới nhất</p>
                </div>
                <button
                  onClick={handleBackToList}
                  className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Xem tất cả</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => handleSelectArticle(rel)}
                    className={`rounded-2xl overflow-hidden border cursor-pointer group transition-all flex flex-col justify-between ${
                      isDark
                        ? 'bg-[#0d1c32] border-[#1c2a41] hover:border-cyan-500/50'
                        : 'bg-white border-slate-200 shadow-sm hover:border-blue-400'
                    }`}
                  >
                    <div>
                      <div className="h-40 overflow-hidden relative">
                        <img
                          src={rel.imageUrl}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/70 text-[10px] font-bold text-cyan-300 backdrop-blur-sm">
                          {rel.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <span className="text-[11px] text-slate-400 block mb-1">{rel.date}</span>
                        <h4 className={`text-sm font-bold line-clamp-2 mb-2 group-hover:text-cyan-400 transition-colors ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {rel.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {rel.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <span className="text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Đọc tiếp</span>
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. ARTICLE LIST VIEW MODE
  return (
    <div className={`w-full pt-28 pb-20 transition-colors duration-300 min-h-screen ${
      isDark ? 'bg-[#041329] text-[#c3c6d7]' : 'bg-[#f8fafc] text-slate-800'
    }`}>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-extrabold mb-3 border ${
            isDark ? 'bg-blue-600/20 text-[#4cd7f6] border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-200'
          }`}>
            <span className="material-symbols-outlined text-[16px]">newspaper</span>
            <span>Trung Tâm Thông Tin &amp; Cẩm Nang</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-black mb-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Chính Sách Tuyển Sinh, Visa &amp; XKLĐ Đông Á Mới Nhất
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Thông tin chính thống từ Bộ Tư pháp, Nghiệp đoàn và Bộ Giáo dục Nhật Bản, Hàn Quốc, Đài Loan cùng kinh nghiệm thực chiến từ chuyên gia EduGlobal.
          </p>
        </div>

        {/* Search Bar & Filter */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className={`relative flex items-center rounded-2xl border transition-all shadow-lg ${
            isDark ? 'bg-[#0d1c32] border-[#1c2a41] focus-within:border-cyan-400' : 'bg-white border-slate-200 focus-within:border-blue-500'
          }`}>
            <span className="material-symbols-outlined text-slate-400 ml-4 text-[20px]">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết, chính sách visa (Tokutei, E-7, Bán dẫn TSMC, MEXT)..."
              className={`w-full py-3.5 pl-3 pr-4 bg-transparent outline-none text-sm ${
                isDark ? 'text-white placeholder-slate-500' : 'text-slate-800 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mr-3 text-slate-400 hover:text-white"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : isDark
                    ? 'bg-[#0d1c32] text-slate-400 hover:text-white border border-[#1c2a41] hover:border-slate-600'
                    : 'bg-white text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Results Count */}
        {searchQuery && (
          <div className="text-center text-xs text-slate-400 mb-6">
            Tìm thấy <span className="font-bold text-cyan-400">{filteredArticles.length}</span> bài viết phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => handleSelectArticle(article)}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 shadow-lg flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-[#0d1c32] border-[#1c2a41] hover:border-[#4cd7f6]/50 hover:shadow-cyan-950/40'
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#010e24]/85 backdrop-blur-sm text-[11px] font-bold text-[#4cd7f6] border border-white/10">
                      {article.category}
                    </span>
                    {article.readTime && (
                      <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[10px] font-semibold text-slate-300">
                        {article.readTime}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2.5">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">calendar_today</span>
                        {article.date}
                      </span>
                      {article.author && (
                        <>
                          <span>•</span>
                          <span className="truncate max-w-[140px] font-medium">{article.author.name}</span>
                        </>
                      )}
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold transition-colors leading-snug mb-3 group-hover:text-cyan-400 line-clamp-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {article.title}
                    </h3>

                    <p className={`text-xs line-clamp-3 leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-white/5 flex items-center justify-between mt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
                    <span>Xem Chi Tiết Bài Viết</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                  <span className="material-symbols-outlined text-slate-500 text-[18px] group-hover:text-cyan-400 transition-colors">
                    menu_book
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={`p-12 text-center rounded-2xl border ${
            isDark ? 'bg-[#0d1c32] border-[#1c2a41]' : 'bg-white border-slate-200'
          }`}>
            <span className="material-symbols-outlined text-5xl text-slate-500 mb-3">
              search_off
            </span>
            <h3 className="text-lg font-bold text-white mb-1">Không tìm thấy bài viết phù hợp</h3>
            <p className="text-xs text-slate-400 mb-4">
              Vui lòng thử tìm với từ khóa khác hoặc xóa bộ lọc để xem tất cả bài viết.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Xem Tất Cả Bài Viết
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
