import React, { useState } from 'react';
import { DESTINATIONS_DATA } from '../data/mockData';
import { Destination } from '../types';

interface DestinationsSectionProps {
  onSelectDestination?: (dest: Destination) => void;
  onViewRoadmapDetail?: (destId: string) => void;
  onViewAll?: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onViewRoadmapDetail,
  onViewAll
}) => {
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const filteredDestinations = filterRegion === 'all'
    ? DESTINATIONS_DATA
    : DESTINATIONS_DATA.filter((d) => d.region.includes(filterRegion) || d.id === filterRegion);

  return (
    <section className="w-full py-16 sm:py-20 relative bg-slate-50 dark:bg-[#041329] transition-colors duration-300" id="quoc-gia-du-hoc">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-[#4cd7f6] text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
              <span>Thị Trường Du Học &amp; Xuất Khẩu Lao Động Trọng Điểm</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-1">
              Cơ Hội Việc Làm &amp; Học Tập: Nhật Bản • Hàn Quốc • Đài Loan
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-sm text-slate-600 dark:text-[#8d90a0] max-w-md">
              Mỗi thị trường mang đến mức thu nhập thực lĩnh hấp dẫn (35 - 65 triệu/tháng), đơn hàng phong phú, cơ hội chuyển đổi visa dài hạn và học bổng du học bảo trợ.
            </p>
            {onViewAll && (
              <button
                onClick={onViewAll}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#112036] hover:bg-slate-100 dark:hover:bg-[#1c2a41] text-blue-600 dark:text-[#4cd7f6] text-xs font-bold border border-slate-300 dark:border-[#4cd7f6]/30 transition-colors whitespace-nowrap shadow-sm"
              >
                Xem Toàn Bộ Chi Tiết →
              </button>
            )}
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'Tất Cả Thị Trường' },
            { id: 'japan', label: '🇯🇵 Nhật Bản (Tokutei & MEXT)' },
            { id: 'korea', label: '🇰🇷 Hàn Quốc (Kỹ Sư E-7 & SKY)' },
            { id: 'taiwan', label: '🇹🇼 Đài Loan (TSMC & Công Xưởng)' },
            { id: 'Châu Á', label: 'Khu Vực Đông Á' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterRegion(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filterRegion === tab.id
                  ? 'bg-blue-600 text-white shadow-sm dark:bg-[#2563eb] dark:shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 dark:bg-[#0d1c32] dark:text-[#8d90a0] dark:hover:text-white dark:border-[#1c2a41]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => {
            const isHero = dest.id === 'usa';
            return (
              <div
                key={dest.id}
                onClick={() => {
                  if (onViewRoadmapDetail) {
                    onViewRoadmapDetail(dest.id);
                  } else if (onSelectDestination) {
                    onSelectDestination(dest);
                  }
                }}
                className={`${
                  isHero ? 'lg:col-span-2' : ''
                } relative group rounded-2xl overflow-hidden bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-md hover:shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_12px_40px_rgba(6,182,212,0.25)] hover:border-blue-500/50 dark:hover:border-[#4cd7f6]/40 transition-all duration-300 flex flex-col justify-between min-h-[440px] cursor-pointer`}
              >
                {/* Background Image with Hover Scale */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${dest.imageUrl}')` }}
                />

                {/* Ambient Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/30" />

                {/* Top Badges */}
                <div className="relative z-10 p-6 flex justify-between items-start">
                  <div
                    className={`px-3 py-1 rounded-full backdrop-blur-md text-xs font-bold flex items-center gap-1 border ${
                      dest.badgeType === 'gold'
                        ? 'bg-black/60 text-[#ffb95f] border-[#ffb95f]/40'
                        : 'bg-black/60 text-[#4cd7f6] border-[#4cd7f6]/40'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {dest.badgeType === 'gold' ? 'star' : 'verified'}
                    </span>
                    <span>{dest.highlightBadge}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[#d6e3ff] text-xs font-semibold border border-white/20">
                    {dest.tag}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-2 text-[#4cd7f6] text-xs uppercase font-bold tracking-wider">
                    <span className="text-base">{dest.flag}</span>
                    <span>{dest.name}</span>
                  </div>

                  <h3
                    className={`${
                      isHero ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                    } font-bold text-white mt-1.5 mb-2 leading-tight group-hover:text-[#4cd7f6] transition-colors`}
                  >
                    {dest.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#e2e8f0] max-w-xl mb-4 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Highlights Grid */}
                  {isHero ? (
                    <div className="grid grid-cols-3 gap-2 pt-1 mb-4">
                      <div className="p-2.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                        <span className="block text-[11px] text-slate-300">Học bổng tối đa</span>
                        <span className="text-sm sm:text-base text-[#ffb95f] font-bold">{dest.maxScholarship}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                        <span className="block text-[11px] text-slate-300">Ở lại làm việc</span>
                        <span className="text-sm sm:text-base text-[#4cd7f6] font-bold">{dest.postStudyWork}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                        <span className="block text-[11px] text-slate-300">Chi phí TB/Năm</span>
                        <span className="text-sm sm:text-base text-white font-bold">{dest.avgCost}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between pt-1 mb-4 bg-black/60 p-2.5 rounded-lg backdrop-blur-sm border border-white/10">
                      <div>
                        <span className="block text-[11px] text-slate-300">Học bổng</span>
                        <span className="text-sm text-[#ffb95f] font-bold">{dest.maxScholarship}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[11px] text-slate-300">Thời gian / Cơ hội</span>
                        <span className="text-sm text-white font-bold">{dest.postStudyWork}</span>
                      </div>
                    </div>
                  )}

                  {/* Interactive Trigger */}
                  <div className="inline-flex items-center gap-1.5 text-[#4cd7f6] font-bold text-xs group-hover:translate-x-1 transition-all">
                    <span>Xem Lộ Trình Chi Tiết {dest.name.split('(')[0].trim()}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
