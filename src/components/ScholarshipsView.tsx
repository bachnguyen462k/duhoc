import React, { useState } from 'react';
import { SCHOLARSHIPS_DATA } from '../data/mockData';
import { ScholarshipItem } from '../types';

interface ScholarshipsViewProps {
  onApplyScholarship: (scholarship: ScholarshipItem) => void;
}

export const ScholarshipsView: React.FC<ScholarshipsViewProps> = ({ onApplyScholarship }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredScholarships = SCHOLARSHIPS_DATA.filter((item) => {
    const matchCountry = selectedCountry === 'all' || item.country.toLowerCase().includes(selectedCountry.toLowerCase());
    const matchLevel = selectedLevel === 'all' || item.level.toLowerCase().includes(selectedLevel.toLowerCase());
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCountry && matchLevel && matchSearch;
  });

  return (
    <div className="w-full pt-32 pb-20 bg-[#041329] min-h-screen text-[#c3c6d7]">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffb95f]/15 text-[#ffb95f] text-xs uppercase tracking-widest font-bold mb-3 border border-[#ffb95f]/30">
            <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
            <span>Kho Học Bổng Quốc Tế 2025 - 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Danh Sách Học Bổng Toàn Phần &amp; Bán Phần Đang Mở Đơn
          </h1>
          <p className="text-sm sm:text-base text-[#8d90a0] mt-3">
            Tổng hợp các gói tài trợ học phí từ chính phủ và các trường Đại học Top 100 thế giới được ủy quyền tuyển sinh qua EduGlobal.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="p-4 rounded-xl bg-[#0d1c32] border border-[#1c2a41] mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Search bar */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8d90a0] text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên học bổng, trường..."
              className="w-full bg-[#010e24] pl-10 pr-3 py-2.5 rounded-lg text-white text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6]"
            />
          </div>

          {/* Country filter */}
          <div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-[#010e24] px-3 py-2.5 rounded-lg text-[#d6e3ff] text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6] cursor-pointer"
            >
              <option value="all">Tất cả thị trường (Nhật Bản, Hàn Quốc, Đài Loan)</option>
              <option value="Nhật Bản">Nhật Bản (Tokutei &amp; MEXT)</option>
              <option value="Hàn Quốc">Hàn Quốc (Kỹ Sư E-7 &amp; GKS)</option>
              <option value="Đài Loan">Đài Loan (Công Xưởng &amp; TSMC)</option>
            </select>
          </div>

          {/* Level filter */}
          <div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full bg-[#010e24] px-3 py-2.5 rounded-lg text-[#d6e3ff] text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6] cursor-pointer"
            >
              <option value="all">Tất cả chương trình</option>
              <option value="Xuất Khẩu Lao Động">Xuất Khẩu Lao Động (Tokutei Ginou)</option>
              <option value="Kỹ Sư">Visa Kỹ Sư Chuyên Ngành (E-7)</option>
              <option value="Đại Học">Du Học Đại Học &amp; Thạc Sĩ</option>
              <option value="Vừa Học Vừa Làm">Du Học Vừa Học Vừa Làm</option>
            </select>
          </div>
        </div>

        {/* Scholarships List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((sch) => (
            <div
              key={sch.id}
              className="p-6 rounded-xl bg-[#0d1c32] border border-[#1c2a41] hover:border-[#4cd7f6]/40 hover:bg-[#112036] transition-all flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-[#2563eb]/20 text-[#4cd7f6] text-[11px] font-bold border border-[#4cd7f6]/25">
                    {sch.country}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#ffb95f]/15 text-[#ffb95f] text-[11px] font-bold border border-[#ffb95f]/25">
                    {sch.coverage}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#4cd7f6] transition-colors leading-tight mb-1">
                  {sch.title}
                </h3>
                <p className="text-xs text-[#8d90a0] mb-3">{sch.university}</p>

                <div className="p-3 rounded-lg bg-[#010e24] border border-[#1c2a41] space-y-1.5 mb-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#8d90a0]">Bậc đào tạo:</span>
                    <span className="text-white font-medium">{sch.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8d90a0]">Hạn chót nộp đơn:</span>
                    <span className="text-[#ffb95f] font-bold">{sch.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8d90a0]">Giá trị:</span>
                    <span className="text-[#4cd7f6] font-bold">{sch.value}</span>
                  </div>
                </div>

                <p className="text-xs text-[#c3c6d7] leading-relaxed mb-4">
                  {sch.description}
                </p>

                <div className="space-y-1 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4cd7f6]">
                    Yêu cầu xét tuyển:
                  </span>
                  <ul className="text-xs text-[#8d90a0] space-y-1">
                    {sch.eligibility.map((req, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-emerald-400">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onApplyScholarship(sch)}
                className="w-full py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold transition-all shadow-[0_4px_14px_rgba(37,99,235,0.35)] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Nhận Hướng Dẫn Nộp Đơn</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
