import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../data/mockData';
import { RoadmapStep } from '../types';

interface RoadmapSectionProps {
  onOpenConsultModal: (stepTitle?: string) => void;
  onViewFullRoadmap?: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  onOpenConsultModal,
  onViewFullRoadmap
}) => {
  const [activeStepModal, setActiveStepModal] = useState<RoadmapStep | null>(null);

  return (
    <section className="w-full py-16 sm:py-20 bg-slate-100/70 dark:bg-[#010e24] relative overflow-hidden transition-colors duration-300" id="lo-trinh-tu-van">
      {/* Background Atmosphere Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-400/10 dark:bg-[#2563eb]/10 blur-[180px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-[#03b5d3]/15 dark:text-[#4cd7f6] text-xs uppercase tracking-widest font-bold inline-block mb-3 border border-blue-200 dark:border-[#4cd7f6]/20">
            Chiến Lược Cá Nhân Hóa 1:1
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Quy Trình 5 Bước Chinh Phục Học Bổng Tinh Hoa
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#8d90a0] mt-3 leading-relaxed">
            Phương pháp luận độc quyền từ EduGlobal giúp hơn 4,800 học sinh Việt Nam hiện thực hóa giấc mơ đại học top đầu thế giới với mức chi phí tối ưu nhất.
          </p>
          {onViewFullRoadmap && (
            <div className="mt-4">
              <button
                onClick={onViewFullRoadmap}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Xem Toàn Bộ Lộ Trình Chi Tiết (Màn Hình Riêng)</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          )}
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {ROADMAP_STEPS.map((stepItem) => {
            const isStep3 = stepItem.step === '03';
            return (
              <div
                key={stepItem.step}
                onClick={() => setActiveStepModal(stepItem)}
                className="p-5 rounded-xl bg-white dark:bg-[#0d1c32]/70 backdrop-blur-md border border-slate-200 dark:border-[#1c2a41] shadow-md dark:shadow-lg transition-all hover:shadow-xl dark:hover:bg-[#112036] hover:-translate-y-1.5 hover:border-blue-500/40 dark:hover:border-[#4cd7f6]/40 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Step Number Badge */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-extrabold mb-4 border ${
                      isStep3
                        ? 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-[#996100]/25 dark:text-[#ffb95f] dark:border-[#ffb95f]/30'
                        : 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-[#2563eb]/20 dark:text-[#4cd7f6] dark:border-[#4cd7f6]/30'
                    }`}
                  >
                    {stepItem.step}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-[#4cd7f6] transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-[#8d90a0] leading-relaxed mb-3">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#1c2a41]/60 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                      isStep3 ? 'text-amber-600 dark:text-[#ffb95f]' : 'text-blue-600 dark:text-[#4cd7f6]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">{stepItem.iconName}</span>
                    <span>{stepItem.tag}</span>
                  </span>
                  <span className="material-symbols-outlined text-xs text-slate-400 dark:text-[#8d90a0] group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                    info
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Advisory Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#112036]/60 backdrop-blur-xl border border-slate-200 dark:border-[#1c2a41] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <span className="material-symbols-outlined text-[26px]">support_agent</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Bạn chưa biết năng lực hiện tại phù hợp với bậc học bổng nào?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0]">
                Chuyên gia của EduGlobal sẽ phân tích hồ sơ chi tiết và gửi chiến lược trong vòng 24 giờ làm việc.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
            {onViewFullRoadmap && (
              <button
                onClick={onViewFullRoadmap}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                Xem Màn Hình Lộ Trình Chi Tiết →
              </button>
            )}
            <button
              onClick={() => onOpenConsultModal('Đánh giá năng lực học bổng')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              Đăng Ký Đánh Giá Miễn Phí
            </button>
          </div>
        </div>
      </div>

      {/* Step Detail Modal */}
      {activeStepModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg p-6 rounded-2xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#4cd7f6]/40 shadow-2xl space-y-4 text-slate-800 dark:text-[#c3c6d7]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-[#2563eb]/20 dark:text-[#4cd7f6] text-xs font-bold">
                  Bước {activeStepModal.step}
                </span>
                <span className="text-xs text-slate-500 dark:text-[#8d90a0]">Thời lượng: {activeStepModal.timeline}</span>
              </div>
              <button
                onClick={() => setActiveStepModal(null)}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 dark:text-[#8d90a0] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1c2a41]"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{activeStepModal.title}</h3>
            <p className="text-sm text-slate-600 dark:text-[#c3c6d7] leading-relaxed">{activeStepModal.description}</p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[#4cd7f6]">
                Các Kết Quả &amp; Tài Liệu Bàn Giao (Deliverables):
              </h4>
              <ul className="space-y-2 text-xs">
                {activeStepModal.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 dark:bg-[#010e24] p-2.5 rounded-lg border border-slate-200 dark:border-[#1c2a41] text-slate-700 dark:text-[#d6e3ff]">
                    <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-sm mt-0.5">check_circle</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-200 dark:border-[#1c2a41]">
              {onViewFullRoadmap && (
                <button
                  onClick={() => {
                    setActiveStepModal(null);
                    onViewFullRoadmap();
                  }}
                  className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer transition-all"
                >
                  Mở Màn Hình Chi Tiết →
                </button>
              )}
              <button
                onClick={() => {
                  const step = activeStepModal.title;
                  setActiveStepModal(null);
                  onOpenConsultModal(step);
                }}
                className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold text-center cursor-pointer shadow-sm"
              >
                Đăng Ký Tư Vấn
              </button>
              <button
                onClick={() => setActiveStepModal(null)}
                className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-[#112036] dark:hover:bg-[#1c2a41] dark:text-[#c3c6d7] text-xs font-semibold cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
