import React, { useState } from 'react';
import { ActivePage } from '../types';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenConsultModal: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenConsultModal,
  onOpenCalculator
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  const navItems: { id: ActivePage; label: string; icon: string }[] = [
    { id: 'home', label: 'Trang Chủ', icon: 'home' },
    { id: 'destinations', label: 'Thị Trường Du Học & XKLĐ', icon: 'flight_takeoff' },
    { id: 'scholarships', label: 'Học Bổng & Việc Làm', icon: 'workspace_premium' },
    { id: 'roadmap', label: 'Lộ Trình Đào Tạo 1:1', icon: 'timeline' },
    { id: 'calculator', label: 'Dự Đoán Tỷ Lệ Đỗ & Chi Phí', icon: 'calculate' },
    { id: 'news', label: 'Tin Tức & Cẩm Nang', icon: 'newspaper' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#041329]/95 backdrop-blur-xl border-b border-slate-200 dark:border-[#1c2a41]/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-colors duration-300">
      {/* Upper Tier: Brand Logo & Top Actions Bar */}
      <div className="h-16 w-full px-4 sm:px-6 max-w-[1280px] mx-auto flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => setActivePage('home')}
          className="flex items-center gap-3 shrink-0 text-left focus:outline-none group cursor-pointer"
          id="header-logo-btn"
        >
          <img
            alt="EduGlobal Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wo_OD5L7_jJRf9Sa4DAPhLZ9hayjeOCRy7ruVLWOUPxAf9_i02uu-GOxvHhr0UaxzN7XSC2E48RmATcdfd6dLpAAUNW457AaXIRZPpR-OivlVgNvmHyn5mMBQ0fTCp6j07ZlV0OMo2rXNHdrQIaW8YwNMzO2y24mVpvM6vEoqZH7wvvA0PtiBS0wovVec1tDFlbxvoppPr1VemdLF12RVDse0W9ka6vKVSgV58yGDsIbWaygDOndXCUg"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#d6e3ff] tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
              EduGlobal
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 dark:text-[#4cd7f6] tracking-wider uppercase leading-none hidden sm:inline">
              TƯ VẤN DU HỌC &amp; XKLĐ NHẬT - HÀN - ĐÀI
            </span>
          </div>
        </button>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Theme Toggle Button (Light / Dark Mode) */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all cursor-pointer bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700 dark:bg-[#0d1c32] dark:hover:bg-[#1c2a41] dark:border-[#1c2a41] dark:text-[#ffb95f]"
            title={isDark ? 'Chuyển sang Giao diện Sáng (Light Mode)' : 'Chuyển sang Giao diện Tối (Dark Mode)'}
            aria-label="Toggle dark/light theme"
            id="theme-toggle-btn"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Hotline */}
          <a
            href="tel:19006868"
            className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-[#c3c6d7] dark:hover:text-[#4cd7f6] dark:hover:bg-[#112036]/60 transition-colors"
            id="hotline-btn"
          >
            <span className="material-symbols-outlined text-blue-600 dark:text-[#4cd7f6] text-[20px]">support_agent</span>
            <div className="text-left">
              <span className="block text-[10px] font-medium leading-none text-slate-500 dark:text-[#8d90a0]">Hotline 24/7</span>
              <span className="text-[13px] text-slate-900 dark:text-[#d6e3ff] font-bold leading-tight">1900 6868</span>
            </div>
          </a>

          {/* Quick Calculator Button */}
          <button
            onClick={onOpenCalculator}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 dark:bg-[#1c2a41] dark:text-[#4cd7f6] dark:hover:bg-[#27354c] dark:hover:text-[#acedff] dark:border-[#4cd7f6]/20 transition-all text-[13px] font-semibold shadow-sm cursor-pointer whitespace-nowrap"
            id="quick-calc-btn"
          >
            <span className="material-symbols-outlined text-[17px]">calculate</span>
            <span>Dự Đoán Tỷ Lệ Đỗ</span>
          </button>

          {/* Consultation CTA */}
          <button
            onClick={onOpenConsultModal}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white dark:bg-[#2563eb] dark:hover:bg-[#1d4ed8] text-[13px] font-bold transition-all shadow-[0_2px_10px_rgba(37,99,235,0.3)] dark:shadow-[0_4px_16px_rgba(37,99,235,0.4)] cursor-pointer whitespace-nowrap"
            id="register-consultation-btn"
          >
            <span className="material-symbols-outlined text-[16px]">contact_phone</span>
            <span>Đăng Ký Tư Vấn 1:1</span>
          </button>

          {/* User Profile Avatar Icon */}
          <div
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 dark:bg-[#2563eb]/30 dark:border-[#4cd7f6]/40 dark:text-[#b4c5ff] dark:hover:text-white flex items-center justify-center shrink-0 cursor-pointer transition-colors"
            title="Tài khoản học viên / người lao động"
            id="user-profile-badge"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 dark:text-[#d6e3ff] hover:text-slate-900 dark:hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Lower Tier: Dedicated Full-Width Navigation Menu Bar (Text is strictly on 1 line) */}
      <div className="w-full border-t border-slate-200/80 dark:border-[#1c2a41]/80 bg-slate-50/90 dark:bg-[#020d1c]/90 backdrop-blur-md">
        <div className="h-11 w-full px-4 sm:px-6 max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          {/* Main Desktop & Tablet Navigation Menu - strictly 1 line, horizontal flex */}
          <nav
            className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 w-full lg:w-auto"
            id="main-desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_2px_8px_rgba(37,99,235,0.35)] dark:bg-[#2563eb] dark:shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-200/60 dark:text-[#c3c6d7] dark:hover:text-white dark:hover:bg-[#112036]'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <span className="material-symbols-outlined text-[16px] shrink-0 opacity-90">{item.icon}</span>
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Status / Fast Announcement Tag */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-[#8d90a0] shrink-0 whitespace-nowrap pl-4 border-l border-slate-200 dark:border-[#1c2a41]">
            <span className="inline-flex relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-700 dark:text-[#d6e3ff] font-semibold">Tuyển sinh 2025:</span>
            <span className="text-blue-600 dark:text-[#4cd7f6] font-bold">Nhật Bản • Hàn Quốc • Đài Loan</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#0a192f]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-[#1c2a41] px-4 py-4 space-y-2 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-blue-600 text-white dark:bg-[#2563eb]'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-[#c3c6d7] dark:hover:bg-[#112036]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-[#1c2a41] flex flex-col gap-2">
            <button
              onClick={toggleTheme}
              className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-[#1c2a41] bg-slate-100 dark:bg-[#0d1c32] text-slate-800 dark:text-[#ffb95f] text-[13px] font-bold text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
              <span>{isDark ? 'Đổi sang Chế độ Sáng' : 'Đổi sang Chế độ Tối'}</span>
            </button>

            <a
              href="tel:19006868"
              className="flex items-center gap-2 py-2 text-blue-600 dark:text-[#4cd7f6] text-[13px] font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>Hotline 24/7: 1900 6868</span>
            </a>
            <button
              onClick={() => {
                onOpenCalculator();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-blue-50 dark:bg-[#1c2a41] text-blue-700 dark:text-[#4cd7f6] text-[13px] font-bold text-center flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Dự Đoán Tỷ Lệ Đỗ &amp; Chi Phí</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
