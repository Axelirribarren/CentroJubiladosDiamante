import { tramites } from '../data/tramites';
import TramiteCard from './TramiteCard';

export default function TramitesSection() {
    return (
        <section
            id="tramites"
            className="relative py-16 md:py-24 px-4 md:px-6 bg-bg-secundario/40 section-wash overflow-hidden"
        >
            {/* Ambient decorations */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-celeste/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent-rosa/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 bg-accent-verde/10 text-accent-verde text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        Servicios y Trámites
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-principal mb-4">
                        Gestiones y Trámites
                    </h2>
                    <p className="text-base md:text-lg text-text-principal/70 max-w-2xl mx-auto leading-relaxed">
                        Asesoramiento y gestión de beneficios para nuestros socios. Te acompañamos en cada paso.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {tramites.map((tramite) => (
                        <TramiteCard key={tramite.id} tramite={tramite} />
                    ))}
                </div>
            </div>
        </section>
    );
}
