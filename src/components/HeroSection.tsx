import React, { useState } from 'react';
import { ThreeGlobe } from './ThreeGlobe';
import { ActivePage } from '../types';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onOpenConsultModal: (initialCountry?: string) => void;
  onNavigateToCalculator: (criteria?: { country: string; degree: string; scholarship: string }) => void;
  setActivePage: (page: ActivePage) => void;
}

interface EastAsiaHub {
  id: string;
  name: string;
  fullName: string;
  flag: string;
  shortRole: string;
  salaryRange: string;
  details: string;
  tag: string;
}

const EAST_ASIA_HUBS: EastAsiaHub[] = [
  {
    id: 'japan',
    name: 'Nhật Bản',
    fullName: 'Nhật Bản (Tokyo / Osaka)',
    flag: '🇯🇵',
    shortRole: 'Tokutei & MEXT',
    salaryRange: '38 - 65 Tr/tháng',
    details: 'Tuyển dụng Kỹ năng đặc định 14 ngành nghề, kỹ sư CNTT / cơ khí, học bổng điều dưỡng & báo chí 100%. Xuất cảnh 2-4 tháng.',
    tag: 'Chế Độ Lương Cao'
  },
  {
    id: 'korea',
    name: 'Hàn Quốc',
    fullName: 'Hàn Quốc (Seoul / Busan)',
    flag: '🇰🇷',
    shortRole: 'Visa Kỹ Sư E-7 & D-2',
    salaryRange: '42 - 70 Tr/tháng',
    details: 'Chương trình Visa E-7 kỹ thuật chuyên ngành, đóng tàu, du học TOP 1% đại học Seoul với học bổng chính phủ GKS.',
    tag: 'Đãi Ngộ Tốt'
  },
  {
    id: 'taiwan',
    name: 'Đài Loan',
    fullName: 'Đài Loan (Đài Bắc / Tân Trúc)',
    flag: '🇹🇼',
    shortRole: 'TSMC & Điện Tử',
    salaryRange: '28 - 45 Tr/tháng',
    details: 'Đơn hàng công xưởng điện tử bán dẫn, cơ khí CNC, điều dưỡng viện. Thủ tục nhanh gọn, xuất cảnh thần tốc chỉ từ 3-6 tuần.',
    tag: 'Bay Nhanh 1 Tháng'
  },
  {
    id: 'vietnam',
    name: 'Việt Nam',
    fullName: 'Khởi Hành (HN / ĐN / HCM)',
    flag: '🇻🇳',
    shortRole: 'Đầu Mối Quốc Gia',
    salaryRange: 'Hỗ trợ vay 100%',
    details: 'Trung tâm đào tạo tiếng Nhật - Hàn - Đài chuẩn quốc tế, ký túc xá hiện đại, hỗ trợ hồ sơ vay vốn ngân hàng chính sách 0% lãi suất.',
    tag: 'Đào Tạo & Khởi Hành'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultModal,
  onNavigateToCalculator
}) => {
  const { isDark } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState('japan');
  const [selectedDegree, setSelectedDegree] = useState('tokutei');
  const [selectedScholarship, setSelectedScholarship] = useState('100');

  const currentHub = EAST_ASIA_HUBS.find((h) => h.id === selectedCountry) || EAST_ASIA_HUBS[0];

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigateToCalculator({
      country: selectedCountry,
      degree: selectedDegree,
      scholarship: selectedScholarship
    });
  };

  return (
    <section className="relative w-full min-h-[900px] -mt-[108px] pt-36 pb-16 flex items-center justify-center overflow-hidden transition-colors duration-300 bg-gradient-to-b from-slate-50 via-blue-50/40 to-white dark:from-[#041329] dark:via-[#041329] dark:to-[#041329]">
      {/* Ambient Atmospheric Glows */}
      <div className="absolute top-1/4 -left-48 w-[550px] h-[550px] rounded-full bg-blue-400/10 dark:bg-[#2563eb]/20 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-400/10 dark:bg-[#4cd7f6]/15 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-amber-400/10 dark:bg-[#996100]/15 blur-[130px] pointer-events-none" />

      {/* Interactive 3D Earth Globe WebGL Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <ThreeGlobe focusedCountry={selectedCountry} />
        {/* Scrim Gradient Overlays for high text readability in both Light & Dark modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent dark:from-[#041329] dark:via-[#041329]/80 dark:to-transparent pointer-events-none transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-slate-50/50 dark:from-[#041329] dark:via-transparent dark:to-[#041329]/50 pointer-events-none transition-colors duration-300" />
      </div>

      {/* Hero Content Body */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col justify-between h-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Pillar */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-[#112036]/80 backdrop-blur-md border border-blue-200 dark:border-[#4cd7f6]/30 shadow-sm dark:shadow-[0_0_20px_-2px_rgba(6,182,212,0.3)] w-max transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 dark:bg-[#4cd7f6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-[#4cd7f6]" />
              </span>
              <span className="text-[11px] uppercase tracking-widest text-blue-700 dark:text-[#4cd7f6] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">flight_takeoff</span>
                <span>Tư Vấn Du Học &amp; Xuất Khẩu Lao Động 2025 • Nhật Bản - Hàn Quốc - Đài Loan</span>
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] drop-shadow-sm transition-colors">
              Chắp Cánh Ước Mơ <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 dark:from-white dark:via-[#4cd7f6] dark:to-[#34d399] bg-clip-text text-transparent">
                Du Học &amp; Xuất Khẩu Lao Động
              </span>{' '}
              <br />
              Nhật Bản • Hàn Quốc • Đài Loan
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#c3c6d7] max-w-xl leading-relaxed transition-colors">
              Hệ thống tư vấn &amp; đào tạo ngoại ngữ, tay nghề trọn gói từ{' '}
              <span className="font-bold text-slate-900 dark:text-white">Việt Nam</span>: Kết nối việc làm lương cao{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Nhật Bản</span> (Tokutei Ginou 1 &amp; 2, Kỹ sư),{' '}
              <span className="text-amber-600 dark:text-[#ffb95f] font-bold">Hàn Quốc</span> (Visa Kỹ Sư E-7, EPS),{' '}
              <span className="text-blue-600 dark:text-[#4cd7f6] font-bold">Đài Loan</span> (Công xưởng, Bán dẫn TSMC) cùng các học bổng du học toàn phần danh giá.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenConsultModal()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] text-white font-bold text-[14px] transition-all shadow-[0_4px_16px_rgba(37,99,235,0.35)] dark:shadow-[0_4px_24px_rgba(37,99,235,0.45)] hover:scale-[1.02] cursor-pointer"
                id="hero-consult-btn"
              >
                <span className="material-symbols-outlined text-[18px]">contact_phone</span>
                <span>Tư Vấn Hồ Sơ &amp; Đơn Hàng 1:1</span>
              </button>

              <button
                onClick={() => onNavigateToCalculator()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/90 hover:bg-slate-100 text-slate-800 border border-slate-200 dark:bg-[#112036]/80 dark:hover:bg-[#1c2a41] dark:text-[#4cd7f6] dark:hover:text-white dark:border-[#4cd7f6]/30 backdrop-blur-md transition-all font-semibold text-[14px] shadow-sm dark:shadow-[0_0_16px_rgba(6,182,212,0.15)] cursor-pointer"
                id="hero-calculator-btn"
              >
                <span className="material-symbols-outlined text-[18px]">calculate</span>
                <span>Dự Đoán Tỷ Lệ Đỗ &amp; Chi Phí</span>
              </button>
            </div>

            {/* East Asia Route Focus Indicator */}
            <div className="flex items-center gap-2 sm:gap-3 pt-3 text-slate-500 dark:text-[#8d90a0] text-xs font-medium flex-wrap transition-colors">
              <span className="flex items-center gap-1 text-red-600 dark:text-[#ef4444] font-bold">
                <span>🇻🇳</span> Việt Nam (Khởi hành)
              </span>
              <span className="text-slate-400 dark:text-[#434655]">✈️</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-[#10b981] font-bold">
                <span>🇯🇵</span> Nhật Bản (Tokutei / MEXT)
              </span>
              <span className="text-slate-400 dark:text-[#434655]">✈️</span>
              <span className="flex items-center gap-1 text-amber-600 dark:text-[#f59e0b] font-bold">
                <span>🇰🇷</span> Hàn Quốc (E-7 / GKS)
              </span>
              <span className="text-slate-400 dark:text-[#434655]">✈️</span>
              <span className="flex items-center gap-1 text-cyan-700 dark:text-[#38bdf8] font-bold">
                <span>🇹🇼</span> Đài Loan (TSMC / XKLĐ)
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Flight Corridors & Proof Metrics */}
          <div className="lg:col-span-5 relative flex flex-col gap-3.5 z-10">
            {/* Dedicated "Tuyến Bay Du Học & XKLĐ 2025" Card */}
            <div className="w-full p-4 sm:p-5 rounded-2xl backdrop-blur-2xl transition-all duration-300 bg-white/90 dark:bg-[#0c1b30]/90 border border-slate-200/90 dark:border-[#1c2a41] shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
              {/* Header */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-[#1c2a41]/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-[#2563eb]/20 text-blue-600 dark:text-[#4cd7f6] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">flight_takeoff</span>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>Tuyến Bay Du Học &amp; XKLĐ 2025</span>
                      <span className="inline-flex relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-[#8d90a0]">
                      Chọn quốc gia để xoay quả cầu 3D &amp; xem chi tiết
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-[#2563eb]/25 dark:text-[#4cd7f6] border border-blue-200 dark:border-[#2563eb]/40 shrink-0">
                  Trực Quan 3D
                </span>
              </div>

              {/* 4 Interactive Route Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {EAST_ASIA_HUBS.map((hub) => {
                  const isSelected = selectedCountry === hub.id;
                  return (
                    <button
                      key={hub.id}
                      type="button"
                      onClick={() => setSelectedCountry(hub.id)}
                      className={`px-3 py-2 rounded-xl text-left transition-all cursor-pointer flex items-center gap-2 border ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.35)] dark:bg-[#2563eb] dark:border-[#3b82f6]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 dark:bg-[#010e24]/70 dark:text-[#c3c6d7] dark:hover:bg-[#112036] dark:border-[#1c2a41]'
                      }`}
                      id={`hero-route-tab-${hub.id}`}
                    >
                      <span className="text-base sm:text-lg">{hub.flag}</span>
                      <div className="truncate flex-1">
                        <div className="text-xs font-bold leading-tight truncate">{hub.name}</div>
                        <div className={`text-[10px] leading-tight mt-0.5 truncate ${
                          isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-[#8d90a0]'
                        }`}>
                          {hub.shortRole}
                        </div>
                      </div>
                      {isSelected && (
                        <span className="material-symbols-outlined text-[15px] text-white shrink-0">check_circle</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Corridor Highlighted Summary */}
              {currentHub && (
                <div className="p-3 rounded-xl bg-slate-50/95 dark:bg-[#010e24]/90 border border-slate-200 dark:border-[#1c2a41] text-xs">
                  <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-200/70 dark:border-[#1c2a41]/60">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                      <span>{currentHub.flag}</span>
                      <span>{currentHub.fullName}</span>
                    </div>
                    <span className="font-extrabold text-blue-600 dark:text-[#4cd7f6] text-xs">
                      {currentHub.salaryRange}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-[#a0aec0] leading-relaxed mb-2.5">
                    {currentHub.details}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenConsultModal(currentHub.id)}
                      className="flex-1 py-1.5 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-all shadow-sm cursor-pointer"
                      id="hero-corridor-consult-btn"
                    >
                      <span className="material-symbols-outlined text-[14px]">call</span>
                      <span>Đăng Ký Đơn Hàng {currentHub.name}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigateToCalculator({ country: currentHub.id, degree: 'tokutei', scholarship: '100' })}
                      className="py-1.5 px-2.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-[#1c2a41] dark:hover:bg-[#27354c] text-slate-700 dark:text-[#4cd7f6] font-bold text-[11px] flex items-center gap-1 transition-all cursor-pointer"
                      id="hero-corridor-calc-btn"
                    >
                      <span className="material-symbols-outlined text-[14px]">calculate</span>
                      <span>Dự Đoán Đỗ</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Compact Proof Metrics Row (3 key stats cleanly grouped) */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-3 rounded-xl backdrop-blur-xl bg-white/85 dark:bg-[#112036]/80 border border-slate-200/90 dark:border-white/10 shadow-sm text-center">
                <div className="text-base sm:text-lg font-extrabold text-blue-600 dark:text-[#4cd7f6] leading-tight">35-65 Tr</div>
                <div className="text-[10px] text-slate-500 dark:text-[#8d90a0] leading-tight mt-0.5">Thu nhập/tháng</div>
              </div>
              <div className="p-3 rounded-xl backdrop-blur-xl bg-white/85 dark:bg-[#112036]/80 border border-slate-200/90 dark:border-white/10 shadow-sm text-center">
                <div className="text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400 leading-tight">99.4%</div>
                <div className="text-[10px] text-slate-500 dark:text-[#8d90a0] leading-tight mt-0.5">Đỗ Visa &amp; COE</div>
              </div>
              <div className="p-3 rounded-xl backdrop-blur-xl bg-white/85 dark:bg-[#112036]/80 border border-slate-200/90 dark:border-white/10 shadow-sm text-center">
                <div className="text-base sm:text-lg font-extrabold text-amber-600 dark:text-[#ffb95f] leading-tight">3,500+</div>
                <div className="text-[10px] text-slate-500 dark:text-[#8d90a0] leading-tight mt-0.5">Đã xuất cảnh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Multi-Criteria Filter HUD Bar */}
        <div className="mt-8 sm:mt-10 relative z-20 w-full p-2.5 rounded-xl backdrop-blur-2xl transition-colors duration-300 bg-white/95 border border-slate-200/90 shadow-xl dark:bg-[#1c2a41]/90 dark:border-[#4cd7f6]/20 dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
          <form
            onSubmit={handleQuickSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center"
            id="hero-scholarship-search"
          >
            {/* Criterion 1: Country */}
            <div className="flex flex-col px-3.5 py-2 rounded-lg border transition-all bg-slate-50 border-slate-200 hover:border-blue-400 dark:bg-[#0d1c32] dark:border-[#434655]/40 dark:hover:border-[#4cd7f6]/40">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8d90a0] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-blue-600 dark:text-[#4cd7f6]">flight</span> Thị Trường Đích Đến
              </span>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="mt-1 bg-transparent text-slate-800 dark:text-[#d6e3ff] text-sm font-semibold focus:outline-none cursor-pointer"
              >
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="japan">Nhật Bản (Tokutei Ginou &amp; MEXT)</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="korea">Hàn Quốc (Visa Kỹ Sư E-7 &amp; Du Học SKY)</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="taiwan">Đài Loan (Công Xưởng, Bán Dẫn TSMC)</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="vietnam">Việt Nam (Khởi Hành &amp; Đào Tạo)</option>
              </select>
            </div>

            {/* Criterion 2: Program Type */}
            <div className="flex flex-col px-3.5 py-2 rounded-lg border transition-all bg-slate-50 border-slate-200 hover:border-blue-400 dark:bg-[#0d1c32] dark:border-[#434655]/40 dark:hover:border-[#4cd7f6]/40">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8d90a0] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-blue-600 dark:text-[#4cd7f6]">work</span> Hình Thức Xuất Cảnh
              </span>
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="mt-1 bg-transparent text-slate-800 dark:text-[#d6e3ff] text-sm font-semibold focus:outline-none cursor-pointer"
              >
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="tokutei">XKLĐ Kỹ Năng Đặc Định (Tokutei 1 &amp; 2)</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="engineer">Visa Kỹ Sư Chuyên Ngành (E-7 / IT / Cơ khí)</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="study">Du Học Tiếng &amp; Đại Học (Học Bổng 100%)</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="factory">Công Xưởng Kỹ Thuật (Bay nhanh 1-2 tháng)</option>
              </select>
            </div>

            {/* Criterion 3: Income / Scholarship Goal */}
            <div className="flex flex-col px-3.5 py-2 rounded-lg border transition-all bg-slate-50 border-slate-200 hover:border-blue-400 dark:bg-[#0d1c32] dark:border-[#434655]/40 dark:hover:border-[#4cd7f6]/40">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-[#8d90a0] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-amber-600 dark:text-[#ffb95f]">monetization_on</span> Kỳ Vọng Thu Nhập / Học Bổng
              </span>
              <select
                value={selectedScholarship}
                onChange={(e) => setSelectedScholarship(e.target.value)}
                className="mt-1 bg-transparent text-slate-800 dark:text-[#d6e3ff] text-sm font-semibold focus:outline-none cursor-pointer"
              >
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="100">Thu nhập cao 40 - 65 Triệu/tháng</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="75">Thu nhập 28 - 38 Triệu/tháng</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="50">Học bổng Toàn phần 100% (MEXT / GKS / MOE)</option>
                <option className="bg-white dark:bg-[#1c2a41] text-slate-800 dark:text-white" value="grant">Hỗ trợ nợ phí - Chi phí xuất cảnh thấp</option>
              </select>
            </div>

            {/* CTA Search Button */}
            <button
              type="submit"
              className="h-full min-h-[54px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-[0_4px_16px_rgba(37,99,235,0.35)] dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] dark:shadow-[0_4px_18px_rgba(37,99,235,0.4)] cursor-pointer"
              id="hero-search-submit"
            >
              <span className="material-symbols-outlined text-[20px]">manage_search</span>
              <span>Tìm Đơn Hàng &amp; Lộ Trình</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
