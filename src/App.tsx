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

/* ── Nav link data ── */
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
        if (menuOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [menuOpen]);

    return (
        <div className="min-h-screen bg-bg-principal text-text-principal font-sans overflow-x-hidden">

            {/* ═══════ MOBILE MENU OVERLAY ═══════ */}
            {menuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-[9999] flex flex-col animate-[fadeIn_0.2s_ease-out]"
                    style={{
                        backgroundColor: '#F9F6F0',
                        touchAction: 'none',
                        overscrollBehavior: 'contain',
                    }}
                    onTouchMove={(e) => {
                        // Allow scroll only inside the links container
                        const linksContainer = document.getElementById('mobile-menu-links');
                        if (linksContainer && linksContainer.contains(e.target as Node)) return;
                        e.preventDefault();
                    }}
                >
                    {/* ── Top bar ── */}
                    <div className="flex items-center justify-between px-5 h-16 shrink-0 border-b border-accent-verde/15">
                        <a href="#" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
                            <img src="/assets/img/centro1.png" alt="Logo" className="h-9 w-auto object-contain" />
                            <span className="text-sm font-bold text-text-principal tracking-tight">
                                Centro de Jubilados
                            </span>
                        </a>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center w-10 h-10 rounded-xl bg-text-principal/5 hover:bg-text-principal/10 transition-colors"
                            aria-label="Cerrar menú"
                        >
                            <svg className="w-5 h-5 text-text-principal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* ── Links ── */}
                    <div id="mobile-menu-links" className="flex-1 overflow-y-auto overscroll-contain px-5 pt-6 pb-10" style={{ touchAction: 'pan-y' }}>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-principal/40 px-4 mb-3">
                            Navegación
                        </p>
                        <div className="flex flex-col gap-0.5 max-w-lg mx-auto">
                            {navLinks.map((link, i) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="group flex items-center gap-3 text-lg font-semibold text-text-principal py-3.5 px-4 rounded-xl hover:bg-accent-verde/8 active:bg-accent-verde/15 transition-colors"
                                    style={{ animationDelay: `${i * 30}ms` }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-verde/40 group-hover:bg-accent-verde transition-colors shrink-0" />
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-5 mx-4 h-px bg-gradient-to-r from-transparent via-accent-verde/20 to-transparent" />

                        {/* CTA */}
                        <div className="max-w-lg mx-auto">
                            <a
                                href="#tramites"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2.5 bg-accent-verde text-bg-principal font-bold text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all w-full min-h-[52px]"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                Contactar
                            </a>
                        </div>

                        {/* Footer info */}
                        <p className="text-center text-xs text-text-principal/30 mt-8">
                            Centro de Jubilados y Pensionados de Diamante
                        </p>
                    </div>
                </div>
            )}

            {/* ═══════ NAVBAR ═══════ */}
            <nav
                className={`sticky top-0 z-50 bg-bg-principal/95 backdrop-blur-lg border-b transition-shadow duration-300 ${scrolled
                    ? 'border-text-principal/8 shadow-[0_1px_12px_rgba(42,44,43,0.06)]'
                    : 'border-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-[68px]">
                    {/* Brand */}
                    <a href="#" className="flex items-center gap-2 shrink-0 group">
                        <img
                            src="/assets/img/centro1.png"
                            alt="Logo"
                            className="h-9 sm:h-10 w-auto object-contain mix-blend-multiply [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
                        />
                        <span className="text-sm sm:text-base font-bold text-text-principal tracking-tight">
                             Centro de Jubilados<br className="sm:hidden" /> 
                        </span>
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="text-[13px] xl:text-[14px] font-medium text-text-principal/60 hover:text-text-principal px-3 py-2 rounded-lg hover:bg-text-principal/5 transition-all duration-200 whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA + Mobile Hamburger */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#tramites"
                            className="hidden lg:inline-flex items-center gap-2 bg-accent-verde text-bg-principal text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            Contactar
                        </a>

                        {/* Hamburger button */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-lg hover:bg-text-principal/5 transition-colors"
                            aria-label="Abrir menú"
                        >
                            <span className="block w-6 h-[2.5px] bg-text-principal rounded-full" />
                            <span className="block w-6 h-[2.5px] bg-text-principal rounded-full" />
                            <span className="block w-6 h-[2.5px] bg-text-principal rounded-full" />
                        </button>
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
