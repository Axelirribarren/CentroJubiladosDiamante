import { useState } from 'react';
import Hero from './components/Hero';
import NewsBanner from './components/NewsBanner';
import ActivityCalendar from './components/ActivityCalendar';
import SectionGrid from './components/SectionGrid';

import Footer from './components/Footer';
import { sections } from './data/activities';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-principal text-text-principal font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-bg-principal/90 backdrop-blur-md border-b border-accent-rosa/10 px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-text-principal">
            🌻 Centro de Jubilados
          </span>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="#calendario"
              className="text-sm lg:text-base font-medium text-text-principal/70 hover:text-accent-verde transition-colors py-2 px-3 rounded-lg hover:bg-accent-verde/10 min-h-[44px] flex items-center"
            >
              📅 Calendario
            </a>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm lg:text-base font-medium text-text-principal/70 hover:text-accent-verde transition-colors py-2 px-3 rounded-lg hover:bg-accent-verde/10 min-h-[44px] flex items-center"
              >
                {section.emoji} {section.title}
              </a>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent-verde/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-3 border-t border-accent-rosa/10 pt-3 flex flex-col gap-1 animate-[fadeIn_0.2s_ease-out]">
            <a
              href="#calendario"
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-text-principal/70 hover:text-accent-verde py-3 px-4 rounded-lg hover:bg-accent-verde/10 transition-colors min-h-[48px] flex items-center"
            >
              📅 Calendario
            </a>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-text-principal/70 hover:text-accent-verde py-3 px-4 rounded-lg hover:bg-accent-verde/10 transition-colors min-h-[48px] flex items-center"
              >
                {section.emoji} {section.title}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <Hero />

      {/* News Banner */}
      <NewsBanner />

      {/* Activity Calendar */}
      <ActivityCalendar />

      {/* Activity Sections */}
      <main>
        {sections.map((section, index) => (
          <SectionGrid key={section.id} section={section} index={index} />
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
