import React, { useState, useEffect } from 'react';
import { COUNTRY_ROADMAPS_DATA } from '../data/roadmapData';
import { ROADMAP_STEPS, MENTORS_DATA } from '../data/mockData';
import { Mentor, CountryRoadmapData } from '../types';

interface RoadmapViewProps {
  initialDestinationId?: string;
  onOpenConsultModal: (topic?: string) => void;
  onNavigateHome?: () => void;
  onNavigateDestinations?: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  initialDestinationId = 'japan',
  onOpenConsultModal,
  onNavigateHome,
  onNavigateDestinations
}) => {
  // Main view mode: by country/market OR by the 5-step methodology
  const [viewMode, setViewMode] = useState<'country' | 'methodology'>('country');
  const [selectedCountryId, setSelectedCountryId] = useState<string>(initialDestinationId);
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Sync when initialDestinationId changes
  useEffect(() => {
    if (initialDestinationId) {
      setSelectedCountryId(initialDestinationId);
      setActivePhaseIndex(0);
      setViewMode('country');
    }
  }, [initialDestinationId]);

  const currentCountry: CountryRoadmapData =
    COUNTRY_ROADMAPS_DATA.find((c) => c.id === selectedCountryId) || COUNTRY_ROADMAPS_DATA[0];

  const handleDownloadRoadmap = () => {
    setDownloadSuccess(`Đã tải tài liệu Lộ trình ${currentCountry.countryName} thành công!`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="w-full pt-28 pb-20 bg-slate-50 dark:bg-[#041329] min-h-screen text-slate-800 dark:text-[#c3c6d7] transition-colors duration-300">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Top Breadcrumbs & Back Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-[#1c2a41]">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-600 dark:text-[#8d90a0] dark:hover:text-[#4cd7f6] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">home</span>
              <span>Trang Chủ</span>
            </button>
            <span className="text-slate-400 dark:text-[#55657e]">/</span>
            {onNavigateDestinations && (
              <>
                <button
                  onClick={onNavigateDestinations}
                  className="text-slate-600 hover:text-blue-600 dark:text-[#8d90a0] dark:hover:text-[#4cd7f6] transition-colors cursor-pointer"
                >
                  Thị Trường
                </button>
                <span className="text-slate-400 dark:text-[#55657e]">/</span>
              </>
            )}
            <span className="text-blue-600 dark:text-[#4cd7f6] font-semibold">
              Màn Hình Xem Lộ Trình Chi Tiết
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-[#4cd7f6] transition-all cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Quay Lại Trang Chủ</span>
            </button>
          </div>
        </div>

        {/* Hero Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-[#03b5d3]/15 dark:text-[#4cd7f6] text-xs uppercase tracking-widest font-bold mb-3 border border-blue-200 dark:border-[#4cd7f6]/30">
            <span className="material-symbols-outlined text-[16px]">route</span>
            <span>Màn Hình Chi Tiết Từng Giai Đoạn 1:1</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Lộ Trình Đào Tạo, Pháp Lý &amp; Xuất Cảnh Chi Tiết
          </h1>
          <p className="text-xs sm:text-sm sm:text-base text-slate-600 dark:text-[#8d90a0] mt-3 leading-relaxed">
            Xem toàn bộ các giai đoạn từ thẩm định hồ sơ, đào tạo ngôn ngữ cấp tốc, phỏng vấn đơn hàng, cấp mã visa COE đến đón tại sân bay và ổn định công việc.
          </p>
        </div>

        {/* View Mode Switcher: By Country vs By EduGlobal 5 Steps */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-sm">
            <button
              onClick={() => setViewMode('country')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === 'country'
                  ? 'bg-blue-600 text-white shadow-md dark:bg-[#2563eb] dark:shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-slate-600 hover:text-slate-900 dark:text-[#8d90a0] dark:hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
              <span>Lộ Trình Theo Quốc Gia / Thị Trường</span>
            </button>
            <button
              onClick={() => setViewMode('methodology')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === 'methodology'
                  ? 'bg-blue-600 text-white shadow-md dark:bg-[#2563eb] dark:shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-slate-600 hover:text-slate-900 dark:text-[#8d90a0] dark:hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">psychology</span>
              <span>Quy Trình Chuẩn 5 Bước EduGlobal</span>
            </button>
          </div>
        </div>

        {/* TAB 1: COUNTRY DETAILED ROADMAP */}
        {viewMode === 'country' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Country Selector Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 scrollbar-none">
              {COUNTRY_ROADMAPS_DATA.map((country) => {
                const isSelected = country.id === currentCountry.id;
                return (
                  <button
                    key={country.id}
                    onClick={() => {
                      setSelectedCountryId(country.id);
                      setActivePhaseIndex(0);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                      isSelected
                        ? 'bg-white dark:bg-[#0d1c32] text-blue-600 dark:text-[#4cd7f6] border-blue-600 dark:border-[#4cd7f6] shadow-md dark:shadow-[0_0_15px_rgba(76,215,246,0.25)]'
                        : 'bg-white/80 dark:bg-[#0d1c32]/60 text-slate-600 dark:text-[#8d90a0] border-slate-200 dark:border-[#1c2a41] hover:text-slate-900 dark:hover:text-white hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span>{country.countryName.split('(')[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Country Active Banner Card */}
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-20 transition-all duration-700"
                style={{ backgroundImage: `url('${currentCountry.bannerImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60 dark:from-[#0d1c32] dark:via-[#0d1c32]/95 dark:to-[#0d1c32]/70" />

              <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-3xl">{currentCountry.flag}</span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-[#2563eb]/30 dark:text-[#4cd7f6] text-xs font-bold border border-blue-200 dark:border-[#4cd7f6]/30">
                      {currentCountry.heroBadge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    Lộ Trình Đào Tạo &amp; Xuất Cảnh: {currentCountry.countryName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#c3c6d7] leading-relaxed">
                    {currentCountry.tagline}
                  </p>
                </div>

                {/* Quick 3 Key Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0">
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-100/90 dark:bg-[#010e24]/90 border border-slate-200 dark:border-[#1c2a41] text-center">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-[#8d90a0] font-semibold uppercase">
                      Thời gian
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-[#4cd7f6] mt-0.5 block">
                      {currentCountry.avgTimeline}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-100/90 dark:bg-[#010e24]/90 border border-slate-200 dark:border-[#1c2a41] text-center">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-[#8d90a0] font-semibold uppercase">
                      Thu Nhập / Bổng
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-amber-600 dark:text-[#ffb95f] mt-0.5 block">
                      {currentCountry.avgIncomeOrScholarship}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-100/90 dark:bg-[#010e24]/90 border border-slate-200 dark:border-[#1c2a41] text-center">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-[#8d90a0] font-semibold uppercase">
                      Tỷ Lệ Đỗ Visa
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                      {currentCountry.visaSuccessRate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Toolbar on Country Header */}
              <div className="relative z-10 px-6 sm:px-8 py-3.5 bg-slate-100/80 dark:bg-[#010e24]/60 border-t border-slate-200 dark:border-[#1c2a41] flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-600 dark:text-[#8d90a0] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-emerald-500">verified</span>
                  <span>Cam kết chuẩn pháp lý theo Bộ LĐ-TB&amp;XH &amp; Cục Quản lý Xuất Nhập Cảnh</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadRoadmap}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#112036] hover:bg-slate-200 dark:hover:bg-[#1c2a41] border border-slate-300 dark:border-[#1c2a41] text-slate-700 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Tải PDF Lộ Trình</span>
                  </button>
                  <button
                    onClick={() => onOpenConsultModal(`Tư vấn lộ trình chi tiết: ${currentCountry.countryName}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">support_agent</span>
                    <span>Đăng Ký Tư Vấn 1:1</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Notification alert on download */}
            {downloadSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fadeIn">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>{downloadSuccess} Bản tổng hợp các giai đoạn đã được tạo sẵn sàng.</span>
              </div>
            )}

            {/* Primary Program Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6]">category</span>
                <span>Các Chương Trình Tuyển Dụng &amp; Du Học Trọng Điểm</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentCountry.primaryPrograms.map((prog, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-sm hover:border-blue-500/40 dark:hover:border-[#4cd7f6]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-700 dark:bg-[#2563eb]/20 dark:text-[#4cd7f6]">
                          {prog.type}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-[#8d90a0]">Ưu tiên tuyển sinh</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                        {prog.name}
                      </h4>
                      <p className="text-xs text-amber-600 dark:text-[#ffb95f] font-semibold mb-2">
                        ⭐ {prog.highlight}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-[#8d90a0] leading-relaxed">
                        <strong className="text-slate-700 dark:text-slate-300">Yêu cầu:</strong> {prog.requirement}
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenConsultModal(`Chương trình ${prog.name} (${currentCountry.countryName})`)}
                      className="mt-4 w-full py-2 rounded-lg bg-slate-100 dark:bg-[#010e24] hover:bg-blue-600 hover:text-white dark:hover:bg-[#2563eb] text-slate-700 dark:text-[#4cd7f6] text-xs font-bold border border-slate-200 dark:border-[#1c2a41] transition-all"
                    >
                      Ứng Tuyển Chương Trình Này →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-PHASE INTERACTIVE DETAILED PIPELINE */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6]">linear_scale</span>
                    <span>Chi Tiết 5 Giai Đoạn Từ Việt Nam Đến {currentCountry.countryName.split('(')[0].trim()}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0] mt-1">
                    Bấm vào từng giai đoạn bên dưới để xem danh sách nhiệm vụ, giấy tờ cần chuẩn bị và cam kết từ EduGlobal.
                  </p>
                </div>
              </div>

              {/* Phase Step Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {currentCountry.phases.map((phase, idx) => {
                  const isActive = idx === activePhaseIndex;
                  return (
                    <button
                      key={phase.phaseNumber}
                      onClick={() => setActivePhaseIndex(idx)}
                      className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between min-h-[95px] ${
                        isActive
                          ? 'bg-blue-600 text-white dark:bg-[#2563eb] border-blue-600 dark:border-[#4cd7f6] shadow-lg dark:shadow-[0_0_15px_rgba(76,215,246,0.3)]'
                          : 'bg-white dark:bg-[#0d1c32] text-slate-700 dark:text-[#c3c6d7] border-slate-200 dark:border-[#1c2a41] hover:border-blue-400 dark:hover:border-[#4cd7f6]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-black uppercase tracking-wider ${
                            isActive ? 'text-white' : 'text-blue-600 dark:text-[#4cd7f6]'
                          }`}
                        >
                          Giai Đoạn {phase.phaseNumber}
                        </span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-100 dark:bg-[#010e24] text-slate-500 dark:text-[#8d90a0]'
                          }`}
                        >
                          {phase.duration}
                        </span>
                      </div>
                      <div
                        className={`text-xs font-bold line-clamp-2 mt-2 ${
                          isActive ? 'text-white' : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {phase.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Phase Detail Deep Dive Card */}
              {(() => {
                const phase = currentCountry.phases[activePhaseIndex];
                if (!phase) return null;
                return (
                  <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#4cd7f6]/40 shadow-xl space-y-6">
                    {/* Phase Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-[#1c2a41]">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white dark:bg-[#2563eb] flex items-center justify-center font-extrabold text-sm">
                            {phase.phaseNumber}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-[#ffb95f]">
                            {phase.badge}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-[#8d90a0]">• Thời lượng: {phase.duration}</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {phase.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => onOpenConsultModal(`Tư vấn Giai đoạn ${phase.phaseNumber}: ${phase.title} (${currentCountry.countryName})`)}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                      >
                        Nhận Kế Hoạch Giai Đoạn Này →
                      </button>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#d6e3ff] leading-relaxed bg-slate-50 dark:bg-[#010e24] p-4 rounded-xl border border-slate-200 dark:border-[#1c2a41]">
                      {phase.summary}
                    </p>

                    {/* 3 Action Pillars */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Column 1: Tasks */}
                      <div className="space-y-3 p-4 rounded-xl bg-slate-50/80 dark:bg-[#010e24]/60 border border-slate-200 dark:border-[#1c2a41]">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[#4cd7f6] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">checklist</span>
                          <span>Nhiệm Vụ Học Viên Cần Thực Hiện</span>
                        </h5>
                        <ul className="space-y-2 text-xs text-slate-700 dark:text-[#c3c6d7]">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-emerald-500 text-[16px] shrink-0 mt-0.5">
                                check_circle
                              </span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Documents */}
                      <div className="space-y-3 p-4 rounded-xl bg-slate-50/80 dark:bg-[#010e24]/60 border border-slate-200 dark:border-[#1c2a41]">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-[#ffb95f] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">description</span>
                          <span>Hồ Sơ Giấy Tờ Cần Chuẩn Bị</span>
                        </h5>
                        <ul className="space-y-2 text-xs text-slate-700 dark:text-[#c3c6d7]">
                          {phase.documentsNeeded.map((doc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-amber-500 text-[16px] shrink-0 mt-0.5">
                                folder_open
                              </span>
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: EduGlobal Support */}
                      <div className="space-y-3 p-4 rounded-xl bg-slate-50/80 dark:bg-[#010e24]/60 border border-slate-200 dark:border-[#1c2a41]">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-[#a855f7] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">handshake</span>
                          <span>Đồng Hành Từ EduGlobal</span>
                        </h5>
                        <ul className="space-y-2 text-xs text-slate-700 dark:text-[#c3c6d7]">
                          {phase.eduglobalSupport.map((sup, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-purple-500 text-[16px] shrink-0 mt-0.5">
                                verified_user
                              </span>
                              <span>{sup}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Milestone Callout */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-[#010e24] dark:to-[#091830] border border-blue-200 dark:border-[#2563eb]/40 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-blue-600 dark:text-[#4cd7f6] uppercase">
                            Cột Mốc Hoàn Thành Giai Đoạn {phase.phaseNumber}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {phase.milestone}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {activePhaseIndex > 0 && (
                          <button
                            onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
                            className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] text-xs font-semibold hover:bg-slate-100 text-slate-700 dark:text-slate-300 transition-colors"
                          >
                            ← Giai Đoạn Trước
                          </button>
                        )}
                        {activePhaseIndex < currentCountry.phases.length - 1 && (
                          <button
                            onClick={() => setActivePhaseIndex((prev) => Math.min(currentCountry.phases.length - 1, prev + 1))}
                            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                          >
                            Giai Đoạn Kế Tiếp →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Transparent Cost Breakdown & Financial Aid */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-[#1c2a41]">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-500">payments</span>
                    <span>Chi Phí Minh Bạch &amp; Chính Sách Hỗ Trợ Tài Chính</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-[#8d90a0] mt-1">
                    Cam kết không phát sinh bất kỳ khoản phí ngoài hợp đồng, hỗ trợ thủ tục vay vốn ngân hàng 100%.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-700/50 shrink-0">
                  ✓ Hỗ trợ nợ phí 0% lãi suất
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {currentCountry.costBreakdown.map((cost, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#010e24] border border-slate-200 dark:border-[#1c2a41] flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {cost.item}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-[#8d90a0]">
                        {cost.note}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-[#1c2a41] text-right">
                      <span className="text-xs sm:text-sm font-bold text-amber-600 dark:text-[#ffb95f]">
                        {cost.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular In-Demand Jobs & Majors */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6]">work</span>
                <span>Danh Mục Ngành Nghề Đang Tuyển Dụng Lương Cao Tại {currentCountry.countryName.split('(')[0].trim()}</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {currentCountry.jobOrMajors.map((job, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#010e24] text-xs font-semibold text-slate-700 dark:text-[#d6e3ff] border border-slate-200 dark:border-[#1c2a41] hover:border-blue-500/40 transition-colors"
                  >
                    💼 {job}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            {currentCountry.faq && currentCountry.faq.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6]">help</span>
                  <span>Giải Đáp Thắc Mắc Thường Gặp ({currentCountry.countryName.split('(')[0].trim()})</span>
                </h3>
                <div className="space-y-3">
                  {currentCountry.faq.map((faqItem, idx) => {
                    const isOpen = expandedFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl bg-slate-50 dark:bg-[#010e24] border border-slate-200 dark:border-[#1c2a41] overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setExpandedFaqIndex(isOpen ? null : idx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-blue-600 dark:text-[#4cd7f6]">Q:</span>
                            <span>{faqItem.question}</span>
                          </span>
                          <span className={`material-symbols-outlined text-[18px] transition-transform ${isOpen ? 'rotate-180 text-blue-600 dark:text-[#4cd7f6]' : 'text-slate-400'}`}>
                            expand_more
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 dark:text-[#c3c6d7] leading-relaxed border-t border-slate-200 dark:border-[#1c2a41]/60 pt-3">
                            {faqItem.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: EDUGLOBAL 5-STEP PROCESS & MENTORS */}
        {viewMode === 'methodology' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-[#03b5d3]/15 dark:text-[#4cd7f6] text-xs uppercase tracking-widest font-bold inline-block mb-3 border border-blue-200 dark:border-[#4cd7f6]/20">
                Phương Pháp Luận Độc Quyền
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                5 Bước Chinh Phục Học Bổng &amp; Việc Làm Toàn Cầu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0] mt-2">
                Hơn 4,800 học viên đã được cố vấn trực tiếp 1:1 và xuất cảnh thành công với mức thu nhập vượt mong đợi.
              </p>
            </div>

            {/* 5-Step Deep Dive Cards */}
            <div className="space-y-6">
              {ROADMAP_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] hover:border-blue-500/40 dark:hover:border-[#4cd7f6]/40 transition-all shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 dark:bg-[#2563eb]/20 dark:text-[#4cd7f6] border border-blue-200 dark:border-[#4cd7f6]/30 flex items-center justify-center text-2xl font-extrabold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-amber-600 dark:text-[#ffb95f] font-bold uppercase tracking-wider">{step.tag}</span>
                        <span className="text-xs text-slate-500 dark:text-[#8d90a0]">• Thời lượng: {step.timeline}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-[#c3c6d7] max-w-2xl leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        {step.deliverables.map((d, i) => (
                          <span key={i} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-[#010e24] text-xs text-slate-700 dark:text-[#b4c5ff] border border-slate-200 dark:border-[#1c2a41]">
                            ✓ {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenConsultModal(`Tư vấn bước: ${step.title}`)}
                    className="shrink-0 px-5 py-2.5 rounded-lg bg-blue-50 dark:bg-[#112036] hover:bg-blue-600 hover:text-white dark:hover:bg-[#2563eb] text-blue-600 dark:text-[#4cd7f6] border border-blue-200 dark:border-[#4cd7f6]/30 text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer"
                  >
                    Nhận Lộ Trình Bước {step.step} →
                  </button>
                </div>
              ))}
            </div>

            {/* Mentors Showcase */}
            <div className="mt-14">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs text-amber-600 dark:text-[#ffb95f] uppercase tracking-widest font-bold">
                  Đội Ngũ Chuyên Gia Cố Vấn
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  Đội Ngũ Mentor Cựu Du Học Sinh &amp; Chuyên Gia Pháp Lý
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENTORS_DATA.map((mentor: Mentor) => (
                  <div
                    key={mentor.id}
                    className="p-6 rounded-xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] hover:border-blue-500/40 dark:hover:border-[#4cd7f6]/40 transition-all shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500 dark:border-[#4cd7f6]/40 shadow-lg">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white text-center">{mentor.name}</h4>
                      <p className="text-xs text-blue-600 dark:text-[#4cd7f6] text-center font-medium mb-1">{mentor.role}</p>
                      <p className="text-xs text-amber-600 dark:text-[#ffb95f] text-center mb-3">{mentor.university}</p>

                      <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#010e24] border border-slate-200 dark:border-[#1c2a41] text-xs text-slate-600 dark:text-[#8d90a0] mb-3 space-y-1">
                        <div><strong className="text-slate-900 dark:text-[#d6e3ff]">Chuyên môn:</strong> {mentor.expertise.join(', ')}</div>
                        <div><strong className="text-slate-900 dark:text-[#d6e3ff]">Thành tích:</strong> {mentor.scholarshipGranted}</div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-[#c3c6d7] italic leading-relaxed text-center">
                        “{mentor.bio}”
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenConsultModal(`Đặt lịch 1:1 với Mentor ${mentor.name}`)}
                      className="mt-4 w-full py-2 rounded-lg bg-blue-50 dark:bg-[#2563eb]/20 hover:bg-blue-600 hover:text-white dark:hover:bg-[#2563eb] text-blue-600 dark:text-[#4cd7f6] border border-blue-200 dark:border-[#4cd7f6]/30 text-xs font-bold transition-all text-center cursor-pointer"
                    >
                      Đặt Lịch Cố Vấn 1:1
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Global Bottom CTA for Roadmap Screen */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-[#0d1c32] dark:to-[#0a2540] border border-blue-500/40 dark:border-[#4cd7f6]/40 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Bạn Cần Xây Dựng Lộ Trình Riêng Phù Hợp Với Hoàn Cảnh Của Mình?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 dark:text-[#c3c6d7] leading-relaxed">
              Để lại thông tin, chuyên gia trưởng bộ phận thị trường Nhật Bản / Hàn Quốc / Đài Loan của EduGlobal sẽ gọi lại tư vấn chi tiết hoàn toàn miễn phí trong vòng 15 phút.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenConsultModal(`Đăng ký tư vấn lộ trình cá nhân hóa (${currentCountry.countryName})`)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Đặt Lịch Tư Vấn 1:1 Ngay
            </button>
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
            >
              Về Trang Chủ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
