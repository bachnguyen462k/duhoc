import React from 'react';

export const AccreditationBar: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white dark:bg-[#041329] border-t border-slate-200 dark:border-[#1c2a41]/40 transition-colors duration-300">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center text-center">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#0d1c32]/60 border border-slate-200 dark:border-[#1c2a41]/50 hover:border-blue-400 dark:hover:border-[#4cd7f6]/30 transition-colors shadow-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-[#4cd7f6]">12+ Năm</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0]">Kinh nghiệm chuyên sâu</span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#0d1c32]/60 border border-slate-200 dark:border-[#1c2a41]/50 hover:border-amber-400 dark:hover:border-[#ffb95f]/30 transition-colors shadow-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-[#ffb95f]">4,800+</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0]">Học sinh đã xuất cảnh</span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#0d1c32]/60 border border-slate-200 dark:border-[#1c2a41]/50 hover:border-indigo-400 dark:hover:border-[#b4c5ff]/30 transition-colors shadow-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">100%</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0]">Chứng chỉ Cố vấn ICEF &amp; PIER</span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#0d1c32]/60 border border-slate-200 dark:border-[#1c2a41]/50 hover:border-cyan-400 dark:hover:border-[#4cd7f6]/30 transition-colors shadow-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-[#4cd7f6]">24/7</span>
            <span className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0]">Hỗ trợ sinh viên tại nước sở tại</span>
          </div>
        </div>
      </div>
    </section>
  );
};
