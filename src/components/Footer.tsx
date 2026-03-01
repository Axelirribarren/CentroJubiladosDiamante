import { PHONE_NUMBER, PHONE_DISPLAY, ADDRESS, getWhatsAppLink } from '../data/activities';

export default function Footer() {
    return (
        <footer className="relative bg-text-principal text-bg-principal px-6 py-16 md:py-20 pb-32 overflow-hidden">
            {/* Decorative top wash */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-rosa via-accent-verde to-accent-celeste opacity-40" />

            {/* Watercolor blobs */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent-verde/10 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-accent-rosa/10 rounded-full blur-[80px] translate-x-1/4 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
                {/* Title */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Centro de Jubilados y Pensionados
                    </h2>
                    <p className="text-xl md:text-2xl text-bg-principal/80 font-medium">
                        Provinciales de Diamante
                    </p>
                </div>

                {/* Contact info */}
                <div className="space-y-6">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">📍</span>
                        <p className="text-lg md:text-xl font-medium">{ADDRESS}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">📱</span>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="text-xl md:text-2xl font-bold text-accent-rosa hover:text-accent-rosa/80 transition-colors underline underline-offset-4"
                        >
                            {PHONE_DISPLAY}
                        </a>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent-verde text-bg-principal text-lg md:text-xl font-bold py-4 px-8 rounded-full btn-press hover:scale-[1.01] transition-all duration-300 min-h-[56px]"
                    >
                        <span className="text-2xl">📞</span>
                        Llamar ahora
                    </a>

                    <a
                        href={getWhatsAppLink('Hola, quiero obtener información sobre el Centro de Jubilados de Diamante')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent-celeste text-text-principal text-lg md:text-xl font-bold py-4 px-8 rounded-full btn-press hover:scale-[1.01] transition-all duration-300 min-h-[56px]"
                    >
                        <span className="text-2xl">💬</span>
                        Hablar por WhatsApp
                    </a>
                </div>

                {/* Divider */}
                <div className="w-24 h-[2px] bg-accent-verde/30 mx-auto" />

                {/* Bottom text */}
                <p className="text-base text-bg-principal/50">
                    © {new Date().getFullYear()} Centro de Jubilados y Pensionados Provinciales de Diamante.
                    <br />
                    Hecho con 💛 para nuestra comunidad.
                </p>
            </div>
        </footer>
    );
}
