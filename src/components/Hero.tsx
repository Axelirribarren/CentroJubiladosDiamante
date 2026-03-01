import { PHONE_NUMBER, PHONE_DISPLAY, ADDRESS } from '../data/activities';

export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-[85vh] flex flex-col items-center justify-center px-6 py-16 watercolor-bg">
            {/* Decorative watercolor blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-rosa/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-bg-terciario/30 rounded-full blur-[100px] translate-x-1/3 translate-y-1/4 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent-dorado/15 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
                {/* Hero illustration */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-bg-secundario/50 flex items-center justify-center shadow-[0_8px_40px_rgba(132,156,143,0.15)]">
                    <img
                        src="/assets/img/hero_illustration.png"
                        alt="Ilustración de bienvenida al Centro de Jubilados"
                        className="w-full h-full object-cover watercolor-img"
                        onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                                parent.innerHTML = '<span class="text-[80px] md:text-[100px]">🌻</span>';
                            }
                        }}
                    />
                </div>

                {/* Title */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-principal leading-tight tracking-tight">
                        Centro de Jubilados y Pensionados
                        <span className="block text-accent-verde mt-1">Provinciales de Diamante</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-principal/80 font-medium">
                        📍 {ADDRESS}
                    </p>
                    <p className="text-lg md:text-xl text-text-principal/70 italic">
                        Tu segundo hogar.
                    </p>
                </div>

                {/* Main CTA */}
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-3 bg-accent-verde text-bg-principal text-xl md:text-2xl font-bold px-10 py-5 rounded-full shadow-[0_6px_24px_rgba(132,156,143,0.3)] hover:shadow-[0_8px_32px_rgba(132,156,143,0.4)] btn-press hover:scale-[1.02] transition-all duration-300 min-h-[60px]"
                >
                    <span className="text-2xl md:text-3xl">📱</span>
                    Llamar ahora al {PHONE_DISPLAY}
                </a>

                {/* Scroll hint */}
                <div className="mt-8 animate-bounce">
                    <span className="text-text-principal/40 text-lg">▼ Descubrí nuestras actividades</span>
                </div>
            </div>
        </section>
    );
}
