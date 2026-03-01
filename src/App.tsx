import Hero from './components/Hero';
import NewsBanner from './components/NewsBanner';
import SectionGrid from './components/SectionGrid';
import StickyCallBar from './components/StickyCallBar';
import Footer from './components/Footer';
import { sections } from './data/activities';

function App() {
  return (
    <div className="min-h-screen bg-bg-principal text-text-principal font-sans">
      {/* Navigation - simple top bar */}
      <nav className="sticky top-0 z-40 bg-bg-principal/90 backdrop-blur-md border-b border-accent-rosa/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-text-principal">
            🌻 Centro de Jubilados
          </span>
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-base font-medium text-text-principal/70 hover:text-accent-verde transition-colors py-2 px-3 rounded-lg hover:bg-accent-verde/10 min-h-[48px] flex items-center"
              >
                {section.emoji} {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <Hero />
      
      {/* News Banner */}
      <NewsBanner />

      {/* Content sections */}
      <main>
        {sections.map((section, index) => (
          <SectionGrid key={section.id} section={section} index={index} />
        ))}
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky call bar */}
      <StickyCallBar />
    </div>
  );
}

export default App;
