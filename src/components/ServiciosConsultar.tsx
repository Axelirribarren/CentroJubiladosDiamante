import { consultServices, getWhatsAppLink, WHATSAPP_HOURS } from '../data/activities';

export default function ServiciosConsultar() {
    return (
        <section
            id="consultar"
            className="relative py-12 md:py-16 px-4 md:px-6 bg-bg-principal overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent-dorado/8 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-principal mb-3">
                        Consultá por disponibilidad
                    </h2>
                    <p className="text-sm md:text-base text-text-principal/60 max-w-xl mx-auto">
                        Estos servicios se coordinan según disponibilidad. Contactanos para más información.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-8">
                    {consultServices.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center text-center bg-bg-principal/80 border border-accent-verde/10 rounded-xl p-4 md:p-5 card-hover"
                        >
                            <span className="text-2xl md:text-3xl mb-2">{service.emoji}</span>
                            <h3 className="text-sm md:text-base font-semibold text-text-principal leading-tight mb-1">
                                {service.title}
                            </h3>
                            <p className="text-[11px] md:text-xs text-text-principal/50 leading-snug">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA + availability notice */}
                <div className="flex flex-col items-center gap-3">
                    <a
                        href={getWhatsAppLink('Hola, quisiera consultar por disponibilidad de servicios. ¿Podrían darme más información?')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-accent-verde text-bg-principal font-bold text-sm md:text-base py-3.5 px-8 rounded-full hover:opacity-90 btn-press transition-all shadow-sm hover:shadow-md min-h-[48px]"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Consultar disponibilidad
                    </a>

                    {/* WhatsApp availability notice */}
                    <div className="flex items-center gap-2 text-xs md:text-sm text-text-principal/45 bg-bg-secundario/40 px-4 py-2 rounded-full border border-accent-celeste/10">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>
                            WhatsApp disponible: <strong className="text-text-principal/60">{WHATSAPP_HOURS}</strong>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
