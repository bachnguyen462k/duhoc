import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const achievements = [
    { name: 'Lê Minh Trang', school: 'Cornell University', value: '$82,000/Năm' },
    { name: 'Nguyễn Quốc Huy', school: 'National Taiwan Univ (NTU)', value: 'Học bổng MOE 100%' },
    { name: 'Trần Quốc Bảo', school: 'Seoul National Univ (SNU)', value: 'Học bổng GKS Toàn Phần' },
    { name: 'Phạm Mai Chi', school: 'University of Tokyo', value: 'Học bổng MEXT 100%' },
    { name: 'Nguyễn Phương Thảo', school: 'Univ of Melbourne', value: '$50,000 AUD' },
    { name: 'Đặng Đức Huy', school: 'University of Toronto', value: '$40,000 CAD' }
  ];

  return (
    <section className="w-full bg-slate-100/90 dark:bg-[#010e24] py-3.5 border-y border-slate-200 dark:border-[#1c2a41]/40 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-[#ffb95f] shrink-0 font-bold tracking-wider uppercase">
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
          <span>Thành Tích Mới Nhất 2024 - 2025</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-slate-600 dark:text-[#8d90a0] text-xs sm:text-[13px]">
          {achievements.slice(0, 4).map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 text-slate-800 dark:text-[#d6e3ff]">
              <span className="text-blue-600 dark:text-[#4cd7f6] font-bold">{item.name}</span> - {item.school}{' '}
              <span className="text-amber-600 dark:text-[#ffb95f] font-semibold">({item.value})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
