import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface CalculatorSectionProps {
  initialCriteria?: { country: string; degree: string; scholarship: string };
  onBookingSuccess?: (data: { name: string; phone: string; score: number }) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  initialCriteria,
  onBookingSuccess
}) => {
  const [gpa, setGpa] = useState('8.0');
  const [ielts, setIelts] = useState('7.0');
  const [destination, setDestination] = useState(
    initialCriteria?.country === 'uk' ? 'Anh' :
    initialCriteria?.country === 'aus' ? 'Úc' :
    initialCriteria?.country === 'can' ? 'Canada' :
    initialCriteria?.country === 'taiwan' ? 'Đài Loan' :
    initialCriteria?.country === 'korea' ? 'Hàn Quốc' :
    initialCriteria?.country === 'japan' ? 'Nhật Bản' :
    initialCriteria?.country === 'eu' ? 'Châu Âu & Khác' : 'Mỹ'
  );
  const [budget, setBudget] = useState('350-600tr');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const [resultScore, setResultScore] = useState(88);
  const [resultTier, setResultTier] = useState('Hồ Sơ Hạng Ưu');
  const [resultMessage, setResultMessage] = useState('');
  const [suggestedSchools, setSuggestedSchools] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const calculateOdds = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      let score = 70;
      if (gpa === '9.0') score += 18;
      else if (gpa === '8.0') score += 12;
      else if (gpa === '7.0') score += 6;
      else score += 2;

      if (ielts === '8.0') score += 10;
      else if (ielts === '7.0') score += 6;
      else if (ielts === '6.5') score += 2;
      else score -= 8;

      if (budget === 'trên 900tr') score += 4;
      if (score > 98) score = 96;
      if (score < 45) score = 48;

      setResultScore(score);

      if (score >= 85) {
        setResultTier('Hồ Sơ Hạng Ưu (Top 5% Ứng Viên)');
        setResultMessage(
          `Cơ hội đạt học bổng 70% - 100% học phí tại các trường Top 50 ${destination} rất cao!`
        );
        setSuggestedSchools(
          destination === 'Mỹ'
            ? ['Cornell University', 'NYU', 'Boston University']
            : destination === 'Anh'
            ? ['Imperial College', 'Univ. of Manchester', 'Edinburgh']
            : destination === 'Đài Loan'
            ? ['Đại học Quốc gia Đài Loan (NTU)', 'ĐH Thanh Hoa (NTHU)']
            : destination === 'Hàn Quốc'
            ? ['Seoul National University', 'KAIST', 'Korea Univ']
            : destination === 'Nhật Bản'
            ? ['University of Tokyo', 'Kyoto University', 'Waseda']
            : ['Univ. of Melbourne', 'Univ. of Sydney', 'UNSW']
        );
      } else if (score >= 70) {
        setResultTier('Hồ Sơ Tiềm Năng (Mục Tiêu Học Bổng 30-50%)');
        setResultMessage(
          `Hồ sơ đạt chuẩn xét duyệt học bổng bán phần 30% - 50% tại các đại học uy tín của ${destination}.`
        );
        setSuggestedSchools(
          destination === 'Đài Loan'
            ? ['ĐH Giao Thông Dương Minh (NYCU)', 'ĐH Thành Công (NCKU)']
            : destination === 'Hàn Quốc'
            ? ['Yonsei University', 'Sungkyunkwan Univ']
            : destination === 'Nhật Bản'
            ? ['Tokyo Tech', 'Tohoku University']
            : ['Monash University', 'Univ. of Queensland', 'Deakin University']
        );
      } else {
        setResultTier('Cần Xây Dựng Thêm Hoạt Động & Chuẩn Hóa Điểm');
        setResultMessage(
          `Bạn nên tham gia khóa tăng tốc bài luận hoặc nâng điểm IELTS lên 6.5+ để mở khóa học bổng tốt hơn.`
        );
        setSuggestedSchools(['RMIT Vietnam Pathway', 'Kaplan Higher Education', 'Navitas Pathway']);
      }

      setIsCalculated(true);
      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  const handleSendZalo = () => {
    setSubmittedSuccess(true);
    if (onBookingSuccess) {
      onBookingSuccess({ name: name || 'Khách hàng', phone: phone || 'Chưa cung cấp', score: resultScore });
    }
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-slate-50 dark:bg-[#041329] relative transition-colors duration-300" id="cong-cu-du-doan">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Context Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-[#03b5d3]/15 dark:text-[#4cd7f6] text-xs uppercase tracking-widest font-bold inline-block mb-3 border border-blue-200 dark:border-[#4cd7f6]/20">
                Thuật Toán Độc Quyền EduGlobal
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Dự Đoán Tỷ Lệ Đỗ Học Bổng Ngay Sau 30 Giây
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-[#8d90a0] leading-relaxed">
              Dựa trên cơ sở dữ liệu đối sánh hơn 10,000 hồ sơ du học sinh Việt Nam đã xuất cảnh thành công trong 10 năm qua tại Mỹ, Anh, Úc, Canada, Đài Loan, Hàn Quốc &amp; Nhật Bản.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-[#d6e3ff]">
                  Đo lường năng lực cạnh tranh với các ứng viên cùng phân khúc điểm số
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-[#d6e3ff]">
                  Gợi ý danh sách 5 trường đại học phù hợp nhất với ngân sách gia đình
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-[#d6e3ff]">
                  Cố vấn chuyên gia gọi điện tư vấn phân tích 1-1 miễn phí
                </span>
              </div>
            </div>

            {/* Trust Badge Row */}
            <div className="p-4 rounded-xl bg-white dark:bg-[#0d1c32] border border-slate-200 dark:border-[#1c2a41] shadow-sm flex items-center gap-4">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-9 h-9 rounded-full bg-blue-600 border-2 border-white dark:border-[#041329] flex items-center justify-center text-white font-bold text-[10px]">
                  VN
                </div>
                <div className="w-9 h-9 rounded-full bg-cyan-600 border-2 border-white dark:border-[#041329] flex items-center justify-center text-white font-bold text-[10px]">
                  TW
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-500 border-2 border-white dark:border-[#041329] flex items-center justify-center text-white font-bold text-[10px]">
                  KR
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-600 border-2 border-white dark:border-[#041329] flex items-center justify-center text-white font-bold text-[10px]">
                  JP
                </div>
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-900 dark:text-white">100% Bảo Mật Thông Tin</span>
                <span className="text-xs text-slate-500 dark:text-[#8d90a0]">Dữ liệu chỉ phục vụ đánh giá năng lực học thuật</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Assessment Form Widget */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#112036]/80 backdrop-blur-2xl border border-slate-200 dark:border-[#1c2a41] shadow-xl">
            <form className="space-y-4" onSubmit={calculateOdds} id="scholarship-calculator-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* GPA Field */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8d90a0]">
                    Điểm Trung Bình (GPA Hiện Tại)
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#8d90a0] text-[18px]">
                      grade
                    </span>
                    <select
                      value={gpa}
                      onChange={(e) => setGpa(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0d1c32] pl-10 pr-3 py-2.5 rounded-lg text-slate-800 dark:text-[#d6e3ff] text-xs sm:text-sm font-semibold border border-slate-300 dark:border-[#1c2a41] focus:outline-none focus:border-blue-500 dark:focus:border-[#4cd7f6] cursor-pointer"
                      id="calc-gpa"
                      required
                    >
                      <option value="9.0">Xuất Sắc (GPA 9.0 - 10.0 / 4.0 Scale: 3.8+)</option>
                      <option value="8.0">Giỏi (GPA 8.0 - 8.9 / 4.0 Scale: 3.5 - 3.7)</option>
                      <option value="7.0">Khá (GPA 7.0 - 7.9 / 4.0 Scale: 3.0 - 3.4)</option>
                      <option value="6.5">Trung Bình Khá (GPA 6.5 - 6.9)</option>
                    </select>
                  </div>
                </div>

                {/* English Proficiency */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8d90a0]">
                    Trình Độ Ngoại Ngữ
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#8d90a0] text-[18px]">
                      translate
                    </span>
                    <select
                      value={ielts}
                      onChange={(e) => setIelts(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0d1c32] pl-10 pr-3 py-2.5 rounded-lg text-slate-800 dark:text-[#d6e3ff] text-xs sm:text-sm font-semibold border border-slate-300 dark:border-[#1c2a41] focus:outline-none focus:border-blue-500 dark:focus:border-[#4cd7f6] cursor-pointer"
                      id="calc-ielts"
                      required
                    >
                      <option value="8.0">IELTS 8.0+ / TOEFL 105+ / Topik 5-6 / JLPT N1</option>
                      <option value="7.0">IELTS 7.0 - 7.5 / TOEFL 95 - 104 / Topik 4 / JLPT N2</option>
                      <option value="6.5">IELTS 6.0 - 6.5 / TOEFL 79 - 94 / Topik 3 / JLPT N3</option>
                      <option value="none">Chưa thi chứng chỉ / Đang ôn luyện</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Target Destination */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8d90a0]">
                    Quốc Gia Mục Tiêu Ưu Tiên
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#8d90a0] text-[18px]">
                      flight
                    </span>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0d1c32] pl-10 pr-3 py-2.5 rounded-lg text-slate-800 dark:text-[#d6e3ff] text-xs sm:text-sm font-semibold border border-slate-300 dark:border-[#1c2a41] focus:outline-none focus:border-blue-500 dark:focus:border-[#4cd7f6] cursor-pointer"
                      id="calc-destination"
                      required
                    >
                      <option value="Đài Loan">🇹🇼 Du Học Đài Loan (Bán dẫn &amp; Kỹ thuật)</option>
                      <option value="Hàn Quốc">🇰🇷 Du Học Hàn Quốc (SKY &amp; GKS Toàn Phần)</option>
                      <option value="Nhật Bản">🇯🇵 Du Học Nhật Bản (ĐH Hoàng Gia &amp; MEXT)</option>
                      <option value="Mỹ">🇺🇸 Du Học Mỹ (USA - Ivy &amp; Top 50)</option>
                      <option value="Úc">🇦🇺 Du Học Úc (Australia - Go8)</option>
                      <option value="Anh">🇬🇧 Du Học Anh Quốc (UK - Russell Group)</option>
                      <option value="Canada">🇨🇦 Du Học Canada (U15 &amp; PGWP)</option>
                      <option value="Châu Âu & Khác">🇪🇺 Châu Âu &amp; Singapore</option>
                    </select>
                  </div>
                </div>

                {/* Annual Budget Expectation */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8d90a0]">
                    Ngân Sách Gia Đình (Mỗi Năm)
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#8d90a0] text-[18px]">
                      payments
                    </span>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0d1c32] pl-10 pr-3 py-2.5 rounded-lg text-slate-800 dark:text-[#d6e3ff] text-xs sm:text-sm font-semibold border border-slate-300 dark:border-[#1c2a41] focus:outline-none focus:border-blue-500 dark:focus:border-[#4cd7f6] cursor-pointer"
                      id="calc-budget"
                      required
                    >
                      <option value="dưới 350tr">Dưới 350 Triệu VNĐ (Cần học bổng 70-100%)</option>
                      <option value="350-600tr">350 Triệu - 600 Triệu VNĐ (Cần học bổng 30-50%)</option>
                      <option value="600-900tr">600 Triệu - 900 Triệu VNĐ</option>
                      <option value="trên 900tr">Trên 900 Triệu VNĐ (Ngân sách linh hoạt)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Student Profile Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8d90a0]">
                    Họ và Tên Học Sinh / Phụ Huynh
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#8d90a0] text-[18px]">
                      person
                    </span>
                    <input
                      type="text"
                      id="calc-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full bg-slate-50 dark:bg-[#0d1c32] pl-10 pr-3 py-2.5 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#8d90a0]/60 text-xs sm:text-sm border border-slate-300 dark:border-[#1c2a41] focus:outline-none focus:border-blue-500 dark:focus:border-[#4cd7f6]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8d90a0]">
                    Số Điện Thoại Nhận Báo Cáo (Zalo)
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#8d90a0] text-[18px]">
                      phone
                    </span>
                    <input
                      type="tel"
                      id="calc-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="090x xxx xxx"
                      required
                      className="w-full bg-slate-50 dark:bg-[#0d1c32] pl-10 pr-3 py-2.5 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#8d90a0]/60 text-xs sm:text-sm border border-slate-300 dark:border-[#1c2a41] focus:outline-none focus:border-blue-500 dark:focus:border-[#4cd7f6]"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Assessment Output Box */}
              {isCalculated && (
                <div
                  className="p-4 rounded-xl bg-slate-50 dark:bg-[#010e24] border border-blue-400/50 dark:border-[#4cd7f6]/40 flex flex-col gap-3 transition-all animate-fadeIn"
                  id="calculator-result-box"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* SVG Gauge */}
                      <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-slate-200 dark:text-[#1c2a41]"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                          />
                          <path
                            className="text-blue-600 dark:text-[#4cd7f6]"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeDasharray={`${resultScore}, 100`}
                            strokeLinecap="round"
                            strokeWidth="3.5"
                          />
                        </svg>
                        <span className="absolute text-base font-extrabold text-slate-900 dark:text-white">
                          {resultScore}%
                        </span>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-[#4cd7f6]">
                          Xác Suất Học Bổng Ước Tính
                        </span>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-white font-medium">
                          {resultMessage}
                        </p>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded bg-amber-100 text-amber-800 border border-amber-300 dark:bg-[#ffb95f]/20 dark:text-[#ffb95f] dark:border-[#ffb95f]/30 text-xs font-bold whitespace-nowrap">
                      {resultTier}
                    </span>
                  </div>

                  {/* Suggested Schools */}
                  <div className="pt-2 border-t border-slate-200 dark:border-[#1c2a41] flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] text-slate-500 dark:text-[#8d90a0]">Trường gợi ý:</span>
                    {suggestedSchools.map((sch, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-[#112036] text-[11px] text-slate-700 dark:text-[#b4c5ff] font-medium">
                        {sch}
                      </span>
                    ))}
                  </div>

                  {/* Send report to Zalo Action */}
                  <button
                    type="button"
                    onClick={handleSendZalo}
                    disabled={submittedSuccess}
                    className={`w-full py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      submittedSuccess
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-[#4cd7f6]/20 dark:text-[#4cd7f6] dark:hover:bg-[#4cd7f6]/30 border border-blue-300 dark:border-[#4cd7f6]/40'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {submittedSuccess ? 'task_alt' : 'send'}
                    </span>
                    <span>
                      {submittedSuccess
                        ? 'Đã gửi lộ trình chi tiết vào Zalo thành công!'
                        : 'Gửi Lộ Trình 1:1 Chi Tiết Về Số Zalo Này'}
                    </span>
                  </button>
                </div>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] text-white font-bold text-sm transition-all shadow-md dark:shadow-[0_4px_24px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                id="calc-submit-btn"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isSubmitting ? 'sync' : 'analytics'}
                </span>
                <span>
                  {isSubmitting ? 'Đang Chạy Thuật Toán Định Giá...' : 'Phân Tích Ngay & Gửi Lộ Trình 1:1 Qua Zalo'}
                </span>
              </button>

              <p className="text-center text-[11px] text-slate-500 dark:text-[#8d90a0]">
                EduGlobal cam kết bảo mật 100% dữ liệu liên hệ. Bạn sẽ nhận được báo cáo trong 15 phút.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
