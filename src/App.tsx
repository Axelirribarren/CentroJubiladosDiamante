import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import NewsBanner from './components/NewsBanner';
import ActivityCalendar from './components/ActivityCalendar';
import TramitesSection from './components/TramitesSection';
import SectionGrid from './components/SectionGrid';
import ServiciosConsultar from './components/ServiciosConsultar';
import VidaEnElCentro from './components/VidaEnElCentro';
import Footer from './components/Footer';
import { sections, WHATSAPP_HOURS } from './data/activities';

/* ── Nav link data (shorter labels for desktop) ── */
const sectionNavLabels: Record<string, string> = {
    movimiento: 'Movimiento',
    arte: 'Arte y Cultura',
    salud: 'Salud',
    proximamente: 'Próximamente',
};

const navLinks = [
    { id: 'calendario', label: 'Calendario' },
    { id: 'tramites', label: 'Trámites' },
    ...sections.map((s) => ({ id: s.id, label: sectionNavLabels[s.id] || s.title })),
    { id: 'vida', label: 'Galería' },
];

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <div className="min-h-screen bg-bg-principal text-text-principal font-sans">
            {/* ══════════════════ Navigation ══════════════════ */}
            <nav
                className={`sticky top-0 z-40 bg-bg-principal/95 backdrop-blur-lg border-b transition-shadow duration-300 ${scrolled
                    ? 'border-text-principal/8 shadow-[0_1px_12px_rgba(42,44,43,0.06)]'
                    : 'border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-[68px]">
                    {/* Brand */}
                    <a href="#" className="flex items-center gap-2.5 shrink-0 group">
                        <img
                            src="/assets/img/centro1.png"
                            alt="Logo"
                            className="h-10 w-auto object-contain mix-blend-multiply [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
                        />
                        <span className="text-base font-bold text-text-principal tracking-tight hidden sm:inline">
                            Centro de Jubilados
                        </span>
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="text-[13px] font-medium text-text-principal/60 hover:text-text-principal px-3 py-2 rounded-lg hover:bg-text-principal/5 transition-all duration-200 whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a
                        href="#tramites"
                        className="hidden lg:inline-flex items-center gap-2 bg-accent-verde text-bg-principal text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        Contactar
                    </a>

                    {/* Hamburger — mobile / tablet */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-lg hover:bg-text-principal/5 transition-colors"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                    >
                        <span className={`block w-5 h-[2px] bg-text-principal rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-text-principal rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-text-principal rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>

                {/* ── Mobile menu overlay ── */}
                <div
                    className={`lg:hidden fixed inset-0 top-16 bg-bg-principal/98 backdrop-blur-xl transition-all duration-300 z-50 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                >
                    <div className="flex flex-col px-6 pt-6 pb-10 gap-1 max-w-lg mx-auto">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-medium text-text-principal/70 hover:text-text-principal py-3.5 px-4 rounded-xl hover:bg-accent-verde/8 transition-all duration-200 min-h-[48px] flex items-center"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-4 pt-4 border-t border-text-principal/8">
                            <a
                                href="#tramites"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-accent-verde text-bg-principal font-bold text-base py-4 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-sm w-full min-h-[52px]"
                            >
                                Contactar
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ── WhatsApp availability notice ── */}
            <div className="bg-accent-verde/8 border-b border-accent-verde/10">
                <div className="max-w-7xl mx-auto px-5 md:px-8 py-2 flex items-center justify-center gap-2 text-xs md:text-sm text-text-principal/60">
                    <svg className="w-3.5 h-3.5 text-accent-verde shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                        Atención por WhatsApp: <strong className="text-text-principal/75">{WHATSAPP_HOURS}</strong> — Fuera de horario no se atenderán consultas.
                    </span>
                </div>
            </div>

            <Hero />
            <NewsBanner />
            <ActivityCalendar />
            <TramitesSection />

            <main>
                {sections.map((section, index) => (
                    <SectionGrid key={section.id} section={section} index={index} />
                ))}
            </main>

            <ServiciosConsultar />
            <VidaEnElCentro />
            <Footer />
        </div>
    );
}

export default App;
