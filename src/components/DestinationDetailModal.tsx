import React from 'react';
import { Destination } from '../types';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onConsult: (countryName: string) => void;
  onViewRoadmap?: (countryId: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onConsult,
  onViewRoadmap
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="w-full max-w-3xl my-8 rounded-2xl bg-[#0d1c32] border border-[#4cd7f6]/40 shadow-2xl overflow-hidden text-[#c3c6d7]">
        {/* Banner with Background Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32] via-[#0d1c32]/60 to-black/40" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Floating Badges & Title */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{destination.flag}</span>
              <span className="px-3 py-1 rounded-full bg-[#2563eb]/70 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                {destination.highlightBadge}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#ffb95f]/20 text-[#ffb95f] text-xs font-bold border border-[#ffb95f]/30">
                {destination.tag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{destination.title}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview text */}
          <p className="text-sm sm:text-base text-[#d6e3ff] leading-relaxed">
            {destination.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#010e24] border border-[#1c2a41]">
              <span className="block text-[11px] text-[#8d90a0] uppercase font-bold">Học bổng tối đa</span>
              <span className="text-base sm:text-lg font-bold text-[#ffb95f]">{destination.maxScholarship}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#010e24] border border-[#1c2a41]">
              <span className="block text-[11px] text-[#8d90a0] uppercase font-bold">Visa ở lại làm việc</span>
              <span className="text-base sm:text-lg font-bold text-[#4cd7f6]">{destination.postStudyWork}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#010e24] border border-[#1c2a41]">
              <span className="block text-[11px] text-[#8d90a0] uppercase font-bold">Học phí &amp; Chi phí TB</span>
              <span className="text-base sm:text-lg font-bold text-white">{destination.avgCost}</span>
            </div>
          </div>

          {/* Top Universities */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4cd7f6]">account_balance</span>
              <span>Các Trường Đại Học Đối Tác Hàng Đầu</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.topUniversities.map((uni, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#010e24] border border-[#1c2a41] flex items-center justify-between">
                  <div className="text-xs sm:text-sm font-bold text-white">{uni}</div>
                  <span className="px-2 py-0.5 rounded bg-[#2563eb]/20 text-[#4cd7f6] text-[11px] font-bold border border-[#4cd7f6]/20">
                    Top 100
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb95f]">verified_user</span>
              <span>Đặc Quyền &amp; Chính Sách Du Học</span>
            </h3>
            <div className="p-4 rounded-xl bg-[#010e24] border border-[#1c2a41] space-y-2 text-xs sm:text-sm">
              {destination.keyBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 pb-2 border-b border-[#1c2a41]/60 last:border-0 last:pb-0">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0">check_circle</span>
                  <span className="text-[#d6e3ff] leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Majors */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4cd7f6]">menu_book</span>
              <span>Ngành Học Xu Hướng &amp; Định Cư Cao</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.popularMajors.map((major, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-[#010e24] text-xs text-[#b4c5ff] border border-[#1c2a41]">
                  ✦ {major}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#041329] border-t border-[#1c2a41] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg bg-[#112036] hover:bg-[#1c2a41] text-[#c3c6d7] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Đóng
          </button>
          <div className="flex items-center gap-2">
            {onViewRoadmap && (
              <button
                onClick={() => {
                  const id = destination.id;
                  onClose();
                  onViewRoadmap(id);
                }}
                className="px-4 py-2.5 rounded-lg bg-[#010e24] hover:bg-[#112036] text-[#4cd7f6] border border-[#4cd7f6]/40 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Xem Lộ Trình Chi Tiết (Màn Hình Riêng)</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </button>
            )}
            <button
              onClick={() => {
                const country = destination.name;
                onClose();
                onConsult(`Du học ${country}`);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-bold transition-all shadow-[0_4px_16px_rgba(37,99,235,0.4)] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Đăng Ký Tư Vấn 1:1</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
