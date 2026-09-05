import React, { useState } from 'react';
import { STUDENT_STORIES } from '../data/mockData';
import { StudentStory } from '../types';

export const WallOfFameSection: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<StudentStory | null>(null);

  return (
    <section className="w-full py-16 sm:py-20 bg-white dark:bg-[#041329] relative transition-colors duration-300" id="bang-vang-thanh-tich">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-[#ffb95f] text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px]">military_tech</span>
              <span>Bảng Vàng Thành Tích Xuất Sắc</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-1">
              Gương Mặt Tiêu Biểu Nhận Học Bổng Khủng
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0]">
            <span>Đã có hơn</span>
            <span className="text-amber-600 dark:text-[#ffb95f] font-bold text-base">850+ sinh viên</span>
            <span>nhận học bổng trên 50% trong 2 năm qua</span>
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_STORIES.map((student) => {
            const isGold = student.badgeType === 'gold';
            return (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] transition-all duration-300 hover:shadow-xl dark:hover:bg-[#112036] hover:-translate-y-1.5 hover:border-blue-400 dark:hover:border-[#4cd7f6]/40 shadow-sm flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Top Avatar & Term */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 dark:bg-[#1c2a41] border-2 border-blue-400 dark:border-[#4cd7f6]/30 shadow-md group-hover:border-blue-600 dark:group-hover:border-[#4cd7f6] transition-colors">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt={student.name}
                        src={student.avatar}
                      />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-700 dark:bg-[#ffb95f]/15 dark:text-[#ffb95f] text-[11px] font-bold border border-amber-200 dark:border-[#ffb95f]/25">
                      {student.term}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#4cd7f6] transition-colors">
                    {student.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-[#4cd7f6] font-medium mb-3">{student.previousSchool}</p>

                  {/* University */}
                  <div className="mt-3 p-2.5 rounded-lg bg-white dark:bg-[#010e24] border border-slate-200 dark:border-[#1c2a41]">
                    <span className="block text-[11px] text-slate-500 dark:text-[#8d90a0]">Đại học tiếp nhận</span>
                    <span className="text-xs sm:text-sm text-slate-900 dark:text-white font-bold">{student.targetUniversity}</span>
                  </div>

                  {/* Scholarship Amount Box */}
                  <div
                    className={`mt-2 p-2.5 rounded-lg border ${
                      isGold
                        ? 'bg-amber-50 dark:bg-[#996100]/20 border-amber-200 dark:border-[#ffb95f]/30'
                        : 'bg-cyan-50 dark:bg-[#03b5d3]/15 border-cyan-200 dark:border-[#4cd7f6]/30'
                    }`}
                  >
                    <span className="block text-[10px] text-slate-500 dark:text-[#8d90a0] uppercase font-semibold">
                      Gói học bổng tài trợ
                    </span>
                    <span
                      className={`text-base sm:text-lg font-extrabold ${
                        isGold ? 'text-amber-600 dark:text-[#ffb95f]' : 'text-cyan-700 dark:text-[#4cd7f6]'
                      }`}
                    >
                      {student.scholarshipAmount}
                    </span>
                    <span className="block text-[11px] text-slate-700 dark:text-[#d6e3ff] font-medium">
                      {student.scholarshipDetail}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-[#1c2a41]/60 text-slate-600 dark:text-[#8d90a0] text-xs italic leading-relaxed">
                  “{student.quote}”
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Student Profile Modal Detail */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md p-6 rounded-2xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#4cd7f6]/40 shadow-2xl space-y-4 text-slate-800 dark:text-[#c3c6d7]">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-[#ffb95f]/20 dark:text-[#ffb95f] text-xs font-bold">
                {selectedStudent.term}
              </span>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800 dark:text-[#8d90a0] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1c2a41]"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={selectedStudent.avatar}
                alt={selectedStudent.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 dark:border-[#4cd7f6]"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedStudent.name}</h3>
                <p className="text-xs text-blue-600 dark:text-[#4cd7f6]">{selectedStudent.previousSchool}</p>
                <p className="text-xs text-slate-500 dark:text-[#8d90a0]">Chuyên ngành: {selectedStudent.major}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#010e24] border border-slate-200 dark:border-[#1c2a41] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 dark:text-[#8d90a0]">Đại học trúng tuyển:</span>
                <span className="text-slate-900 dark:text-white font-bold">{selectedStudent.targetUniversity}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 dark:text-[#8d90a0]">Giá trị học bổng:</span>
                <span className="text-amber-600 dark:text-[#ffb95f] font-bold">{selectedStudent.scholarshipAmount}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 dark:text-[#8d90a0]">Điểm GPA THPT:</span>
                <span className="text-blue-600 dark:text-[#4cd7f6] font-bold">{selectedStudent.gpa}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500 dark:text-[#8d90a0]">Điểm SAT / IELTS:</span>
                <span className="text-blue-600 dark:text-[#4cd7f6] font-bold">SAT {selectedStudent.satScore} • IELTS {selectedStudent.ielts}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-[#c3c6d7] italic bg-slate-100 dark:bg-[#112036] p-3 rounded-lg border border-slate-200 dark:border-white/5">
              “{selectedStudent.quote}”
            </p>

            <button
              onClick={() => setSelectedStudent(null)}
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer"
            >
              Đóng Xem Hồ Sơ
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
