import React, { useState } from 'react';
import { ActivePage } from '../types';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      alert(`Cảm ơn bạn! Bản tin tuyển sinh & học bổng 2025 sẽ được gửi tới: ${email}`);
      setEmail('');
      setSubscribed(false);
    }, 400);
  };

  return (
    <footer className="w-full bg-slate-100 dark:bg-[#010e24] text-slate-700 dark:text-[#c3c6d7] pt-16 pb-10 border-t border-slate-200 dark:border-[#1c2a41] transition-colors duration-300">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12">
          {/* Brand & Newsletter Column (Spans 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="EduGlobal Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wo_OD5L7_jJRf9Sa4DAPhLZ9hayjeOCRy7ruVLWOUPxAf9_i02uu-GOxvHhr0UaxzN7XSC2E48RmATcdfd6dLpAAUNW457AaXIRZPpR-OivlVgNvmHyn5mMBQ0fTCp6j07ZlV0OMo2rXNHdrQIaW8YwNMzO2y24mVpvM6vEoqZH7wvvA0PtiBS0wovVec1tDFlbxvoppPr1VemdLF12RVDse0W9ka6vKVSgV58yGDsIbWaygDOndXCUg"
              />
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">EduGlobal</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#8d90a0] pr-4 leading-relaxed">
              Tổ chức tư vấn du học và chiến lược học bổng quốc tế hàng đầu. Kết nối sinh viên từ Việt Nam tới các trường đại học danh tiếng tại Đài Loan, Hàn Quốc, Nhật Bản, Mỹ, Anh, Úc, Canada.
            </p>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[#4cd7f6]">
                Đăng Ký Nhận Bản Tin Học Bổng
              </p>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#8d90a0] text-[18px]">
                    mail
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Nhập email của bạn..."
                    className="w-full bg-white dark:bg-[#0d1c32] pl-10 pr-3 py-2 rounded-lg text-slate-900 dark:text-[#d6e3ff] text-xs sm:text-sm placeholder-slate-400 dark:placeholder-[#8d90a0] border border-slate-300 dark:border-[#1c2a41] focus:outline-none focus:border-blue-500 dark:focus:border-[#4cd7f6]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-[#ffb95f] dark:text-[#041329] dark:hover:bg-[#ffddb8] text-white text-xs sm:text-sm font-bold transition-colors shrink-0 cursor-pointer"
                >
                  {subscribed ? 'Đã Gửi' : 'Gửi'}
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Destinations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Quốc Gia Điểm Đến</h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 dark:text-[#8d90a0]">
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('destinations')}>
                🇹🇼 Du học Đài Loan (Bán dẫn &amp; MOE)
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('destinations')}>
                🇰🇷 Du học Hàn Quốc (SKY &amp; GKS)
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('destinations')}>
                🇯🇵 Du học Nhật Bản (ĐH Hoàng Gia &amp; MEXT)
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('destinations')}>
                🇺🇸 Du học Mỹ (Ivy League &amp; Top 50)
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('destinations')}>
                🇬🇧 Du học Anh (Russell Group)
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('destinations')}>
                🇦🇺 Du học Úc (Group of Eight)
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Dịch Vụ Tư Vấn</h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600 dark:text-[#8d90a0]">
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('roadmap')}>
                Chiến lược &amp; Hoàn thiện Hồ sơ
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('roadmap')}>
                Tư vấn &amp; Xử lý Visa Du học
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('roadmap')}>
                Luyện Phỏng Vấn Chuyên Sâu 1:1
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('scholarships')}>
                Săn Học Bổng Toàn Phần &amp; Bán Phần
              </li>
              <li className="hover:text-blue-600 dark:hover:text-[#4cd7f6] transition-colors cursor-pointer" onClick={() => setActivePage('calculator')}>
                Định Giá Học Lực &amp; Thuật Toán Match
              </li>
            </ul>
          </div>

          {/* Column 4: Offices */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Mạng Lưới Văn Phòng</h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-[#8d90a0]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[16px] shrink-0 mt-0.5">location_on</span>
                <span>Hà Nội: Tòa Capital Tower, Cầu Giấy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[16px] shrink-0 mt-0.5">location_on</span>
                <span>TP. Hồ Chí Minh: Bitexco Tower, Q.1</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[16px] shrink-0 mt-0.5">location_on</span>
                <span>Đài Bắc: Xinyi District, Taipei</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[16px] shrink-0 mt-0.5">location_on</span>
                <span>Seoul: Gangnam-gu, Seoul</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[16px] shrink-0 mt-0.5">location_on</span>
                <span>Tokyo: Shinjuku-ku, Tokyo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-[#1c2a41] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-500 dark:text-[#8d90a0]">
            <span className="text-slate-800 dark:text-[#d6e3ff] font-semibold">Chứng nhận giáo dục quốc tế:</span>
            <span className="px-2 py-0.5 rounded bg-white dark:bg-[#112036] text-blue-600 dark:text-[#4cd7f6] border border-slate-200 dark:border-[#4cd7f6]/20">AIRC Certified</span>
            <span className="px-2 py-0.5 rounded bg-white dark:bg-[#112036] text-blue-600 dark:text-[#4cd7f6] border border-slate-200 dark:border-[#4cd7f6]/20">ICEF Agency Status</span>
            <span className="px-2 py-0.5 rounded bg-white dark:bg-[#112036] text-blue-600 dark:text-[#4cd7f6] border border-slate-200 dark:border-[#4cd7f6]/20">British Council Partner</span>
            <span className="px-2 py-0.5 rounded bg-white dark:bg-[#112036] text-blue-600 dark:text-[#4cd7f6] border border-slate-200 dark:border-[#4cd7f6]/20">PIER Qualified</span>
          </div>
          <div className="text-xs text-slate-500 dark:text-[#8d90a0]">
            © 2025 EduGlobal Education Advisory. Mọi quyền được bảo lưu.
          </div>
        </div>
      </div>
    </footer>
  );
};
