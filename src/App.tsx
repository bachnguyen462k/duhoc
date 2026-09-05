/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { DestinationsSection } from './components/DestinationsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { WallOfFameSection } from './components/WallOfFameSection';
import { CalculatorSection } from './components/CalculatorSection';
import { AccreditationBar } from './components/AccreditationBar';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { ScholarshipsView } from './components/ScholarshipsView';
import { RoadmapView } from './components/RoadmapView';
import { NewsView } from './components/NewsView';
import { ActivePage, Destination, ScholarshipItem } from './types';

function AppContent() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultModalTopic, setConsultModalTopic] = useState('Tư Vấn Học Bổng 1:1');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedDestinationForRoadmap, setSelectedDestinationForRoadmap] = useState<string>('japan');
  const [calculatorCriteria, setCalculatorCriteria] = useState<{
    country: string;
    degree: string;
    scholarship: string;
  } | undefined>(undefined);

  const { isDark } = useTheme();

  // Modal Open Handlers
  const handleOpenConsultModal = (topic = 'Tư Vấn Học Bổng Toàn Phần & Bán Phần 1:1') => {
    setConsultModalTopic(topic);
    setIsConsultModalOpen(true);
  };

  const handleNavigateToCalculator = (criteria?: {
    country: string;
    degree: string;
    scholarship: string;
  }) => {
    if (criteria) {
      setCalculatorCriteria(criteria);
    }
    setActivePage('calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
  };

  const handleViewRoadmapDetail = (destId = 'japan') => {
    setSelectedDestinationForRoadmap(destId);
    setActivePage('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyScholarship = (sch: ScholarshipItem) => {
    setConsultModalTopic(`Nộp đơn xin học bổng: ${sch.title} (${sch.university})`);
    setIsConsultModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      isDark ? 'bg-[#041329] text-[#c3c6d7] selection:bg-[#4cd7f6] selection:text-[#041329]' : 'bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white'
    }`}>
      {/* Universal Fixed Header */}
      <Header
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConsultModal={() => handleOpenConsultModal('Đăng ký tư vấn lộ trình học bổng')}
        onOpenCalculator={() => handleNavigateToCalculator()}
      />

      {/* Main View Router */}
      <main className="w-full">
        {activePage === 'home' && (
          <>
            <HeroSection
              onOpenConsultModal={handleOpenConsultModal}
              onNavigateToCalculator={handleNavigateToCalculator}
              setActivePage={setActivePage}
            />
            <MarqueeTicker />
            <DestinationsSection
              onSelectDestination={handleSelectDestination}
              onViewRoadmapDetail={handleViewRoadmapDetail}
              onViewAll={() => {
                setActivePage('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <RoadmapSection
              onOpenConsultModal={handleOpenConsultModal}
              onViewFullRoadmap={() => handleViewRoadmapDetail('japan')}
            />
            <WallOfFameSection />
            <CalculatorSection
              initialCriteria={calculatorCriteria}
              onBookingSuccess={(data) => {
                console.log('Assessment calculated for:', data.name);
              }}
            />
            <AccreditationBar />
          </>
        )}

        {activePage === 'destinations' && (
          <div className="pt-28">
            <DestinationsSection
              onSelectDestination={handleSelectDestination}
              onViewRoadmapDetail={handleViewRoadmapDetail}
            />
            <AccreditationBar />
          </div>
        )}

        {activePage === 'scholarships' && (
          <ScholarshipsView onApplyScholarship={handleApplyScholarship} />
        )}

        {activePage === 'roadmap' && (
          <RoadmapView
            initialDestinationId={selectedDestinationForRoadmap}
            onOpenConsultModal={handleOpenConsultModal}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateDestinations={() => {
              setActivePage('destinations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'calculator' && (
          <div className="pt-28">
            <CalculatorSection
              initialCriteria={calculatorCriteria}
              onBookingSuccess={(data) => {
                console.log('Assessment completed for:', data.name);
              }}
            />
            <AccreditationBar />
          </div>
        )}

        {activePage === 'news' && (
          <NewsView
            onOpenConsultModal={handleOpenConsultModal}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Global Consultation Modal */}
      <ConsultModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        initialTopic={consultModalTopic}
      />

      {/* Global Destination Detail Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onConsult={(topic) => handleOpenConsultModal(topic)}
        onViewRoadmap={handleViewRoadmapDetail}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
