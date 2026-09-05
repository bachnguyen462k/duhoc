import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Tư Vấn Học Bổng 1:1'
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Mỹ (Hoa Kỳ)');
  const [educationLevel, setEducationLevel] = useState('Đại Học (Bachelor)');
  const [intake, setIntake] = useState('Mùa Thu 2025 (Fall 2025)');
  const [notes, setNotes] = useState('');
  const [consultMethod, setConsultMethod] = useState<'online' | 'offline'>('online');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0d1c32] border border-[#4cd7f6]/40 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#041329] border-b border-[#1c2a41] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#2563eb]/20 border border-[#2563eb]/40 flex items-center justify-center text-[#4cd7f6] shrink-0">
              <span className="material-symbols-outlined text-[20px]">school</span>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">Đăng Ký Tư Vấn Lộ Trình 1:1</h3>
              <p className="text-xs text-[#4cd7f6] line-clamp-1">{initialTopic}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8d90a0] hover:text-white hover:bg-[#1c2a41] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-6 sm:p-8 text-center space-y-4 overflow-y-auto flex-1">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h4 className="text-xl font-bold text-white">Đăng Ký Thành Công!</h4>
            <p className="text-sm text-[#c3c6d7] max-w-md mx-auto leading-relaxed">
              Cảm ơn <span className="text-white font-bold">{fullName}</span>. Chuyên viên cố vấn học thuật của EduGlobal đã tiếp nhận hồ sơ và sẽ gọi điện xác nhận lịch hẹn tư vấn {consultMethod === 'online' ? 'Online (Google Meet)' : 'Trực tiếp tại văn phòng'} qua số điện thoại <span className="text-[#4cd7f6] font-bold">{phone}</span> trong vòng 2 giờ làm việc.
            </p>
            <div className="p-3 bg-[#010e24] rounded-xl border border-[#1c2a41] text-xs text-[#8d90a0]">
              Mã hồ sơ: <span className="text-[#ffb95f] font-mono font-bold">EDG-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-[#2563eb] text-white text-xs sm:text-sm font-bold hover:bg-[#1d4ed8]"
            >
              Hoàn Tất &amp; Đóng
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                  Họ và Tên *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Minh Anh"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#010e24] px-3.5 py-2 rounded-lg text-white text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                  Số Điện Thoại / Zalo *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0912 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#010e24] px-3.5 py-2 rounded-lg text-white text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                  Email Nhận Lộ Trình
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#010e24] px-3.5 py-2 rounded-lg text-white text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                  Quốc Gia Quan Tâm
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-[#010e24] px-3 py-2 rounded-lg text-[#d6e3ff] text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6] cursor-pointer"
                >
                  <option value="Mỹ (Hoa Kỳ)">Mỹ (Hoa Kỳ - Top 50 &amp; Ivy)</option>
                  <option value="Anh Quốc">Anh Quốc (Russell Group)</option>
                  <option value="Úc (Australia)">Úc (Group of Eight)</option>
                  <option value="Canada">Canada (U15 Hàng Đầu)</option>
                  <option value="Châu Âu & Khác">Châu Âu (Đức, Hà Lan) &amp; Singapore</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                  Bậc Học Mục Tiêu
                </label>
                <select
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  className="w-full bg-[#010e24] px-3 py-2 rounded-lg text-[#d6e3ff] text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6] cursor-pointer"
                >
                  <option value="Đại Học (Bachelor)">Đại Học (Cử nhân)</option>
                  <option value="Thạc Sĩ / Tiến Sĩ">Thạc Sĩ &amp; Tiến Sĩ (Master / PhD)</option>
                  <option value="Phổ Thông Nội Trú">Phổ Thông Nội Trú (High School)</option>
                  <option value="Dự Bị Đại Học">Dự Bị Đại Học (Foundation / Transfer)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                  Kỳ Nhập Học Dự Kiến
                </label>
                <select
                  value={intake}
                  onChange={(e) => setIntake(e.target.value)}
                  className="w-full bg-[#010e24] px-3 py-2 rounded-lg text-[#d6e3ff] text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6] cursor-pointer"
                >
                  <option value="Mùa Thu 2025 (Fall 2025)">Mùa Thu 2025 (Tháng 8 - 9/2025)</option>
                  <option value="Mùa Xuân 2026 (Spring 2026)">Mùa Xuân 2026 (Tháng 1 - 2/2026)</option>
                  <option value="Mùa Thu 2026 (Fall 2026)">Mùa Thu 2026</option>
                  <option value="Chưa xác định">Cần tư vấn thời điểm tối ưu</option>
                </select>
              </div>
            </div>

            {/* Consultation Mode */}
            <div className="space-y-1.5 pt-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                Hình Thức Tư Vấn Mong Muốn
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConsultMethod('online')}
                  className={`p-2.5 rounded-lg border text-left flex items-center gap-2.5 transition-all ${
                    consultMethod === 'online'
                      ? 'bg-[#2563eb]/20 border-[#4cd7f6] text-white'
                      : 'bg-[#010e24] border-[#1c2a41] text-[#8d90a0] hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] text-[#4cd7f6]">videocam</span>
                  <div>
                    <div className="text-xs font-bold">Online (Google Meet)</div>
                    <div className="text-[10px] text-[#8d90a0]">Linh hoạt, thuận tiện</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setConsultMethod('offline')}
                  className={`p-2.5 rounded-lg border text-left flex items-center gap-2.5 transition-all ${
                    consultMethod === 'offline'
                      ? 'bg-[#2563eb]/20 border-[#ffb95f] text-white'
                      : 'bg-[#010e24] border-[#1c2a41] text-[#8d90a0] hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] text-[#ffb95f]">apartment</span>
                  <div>
                    <div className="text-xs font-bold">Trực Tiếp Tại Văn Phòng</div>
                    <div className="text-[10px] text-[#8d90a0]">Hà Nội / TP.HCM / Đà Nẵng</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Note */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                Mục Tiêu Hoặc Câu Hỏi Cần Giải Đáp Thêm
              </label>
              <textarea
                rows={2}
                placeholder="Ví dụ: Cần xin học bổng 70% ngành Khoa học Máy tính tại Mỹ, GPA hiện tại 8.6..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#010e24] px-3.5 py-2 rounded-lg text-white text-xs sm:text-sm border border-[#1c2a41] focus:outline-none focus:border-[#4cd7f6] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm transition-all shadow-[0_4px_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isSubmitting ? 'sync' : 'send'}
              </span>
              <span>{isSubmitting ? 'Đang Đăng Ký...' : 'Xác Nhận Đăng Ký Tư Vấn Miễn Phí'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
