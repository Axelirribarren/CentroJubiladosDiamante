import { PHONE_NUMBER, PHONE_DISPLAY, ADDRESS, getWhatsAppLink, WHATSAPP_HOURS } from '../data/activities';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

    return (
        <footer className="relative overflow-hidden">

            {/* ── Watercolor divider ── */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-rosa/40 to-transparent" />

            {/* ── Main Footer Body ── */}
            <div className="relative bg-bg-terciario/60 backdrop-blur-sm">

                {/* Ambient blobs */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-verde/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent-rosa/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">

                        {/* ── Col 1 — Brand Identity ── */}
                        <div className="md:col-span-4 flex flex-col items-center md:items-start gap-5">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/assets/img/centro1.png"
                                    alt="Logo Centro de Jubilados Diamante"
                                    className="h-20 w-auto object-contain mix-blend-multiply [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-text-principal leading-tight">
                                        Centro de Jubilados
                                    </h3>
                                    <p className="text-sm font-medium text-accent-verde">
                                        Diamante, Entre&nbsp;Ríos
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-text-principal/60 leading-relaxed text-center md:text-left max-w-xs">
                                Tu segundo hogar. Un espacio de encuentro, bienestar y acompañamiento para quienes construyeron nuestra comunidad.
                            </p>

                            {/* Social proof / welcoming badge */}
                            <div className="flex items-center gap-2 bg-bg-principal/50 rounded-full px-4 py-2 border border-accent-verde/15 shadow-sm">
                                <span className="text-lg">🌻</span>
                                <span className="text-xs font-semibold text-text-principal/70 tracking-wide uppercase">
                                    Desde 1985 junto a vos
                                </span>
                            </div>
                        </div>

                        {/* ── Col 2 — Contacto & Horarios ── */}
                        <div className="md:col-span-4 flex flex-col gap-5">
                            <h4 className="text-xs font-bold text-accent-verde uppercase tracking-[0.15em]">
                                Contacto
                            </h4>

                            {/* Phone */}
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="group flex items-center gap-3 text-text-principal hover:text-accent-verde transition-colors"
                            >
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-verde/10 group-hover:bg-accent-verde/20 transition-colors shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="text-base font-bold block">{PHONE_DISPLAY}</span>
                                    <span className="text-xs text-text-principal/50">Llamar al teléfono fijo</span>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={getWhatsAppLink('Hola, quiero obtener información sobre el Centro de Jubilados de Diamante')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 text-text-principal hover:text-accent-verde transition-colors"
                            >
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-verde/10 group-hover:bg-accent-verde/20 transition-colors shrink-0">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="text-base font-bold block">WhatsApp Directo</span>
                                    <span className="text-xs text-text-principal/50">Respuesta rápida</span>
                                </div>
                            </a>

                            {/* Horarios card */}
                            <div className="bg-bg-principal/40 rounded-2xl p-4 border border-accent-dorado/15 mt-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-4 h-4 text-accent-dorado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span className="text-xs font-bold text-text-principal/70 uppercase tracking-wider">Horarios de Atención</span>
                                </div>
                                <p className="text-sm text-text-principal/70 leading-relaxed">
                                    <strong className="text-text-principal/80">Presencial:</strong> Lunes y Viernes por la mañana
                                </p>
                                <p className="text-sm text-text-principal/70 leading-relaxed mt-1">
                                    <strong className="text-text-principal/80">WhatsApp:</strong> {WHATSAPP_HOURS}
                                </p>
                                <p className="text-xs text-accent-rosa/80 italic mt-2">
                                    Fuera de horario no se atenderán consultas.
                                </p>
                            </div>
                        </div>

                        {/* ── Col 3 — Ubicación & Mapa ── */}
                        <div className="md:col-span-4 flex flex-col gap-5">
                            <h4 className="text-xs font-bold text-accent-verde uppercase tracking-[0.15em]">
                                Ubicación Central
                            </h4>

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-verde/10 shrink-0 mt-0.5">
                                    <svg className="w-5 h-5 text-accent-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-base font-semibold text-text-principal leading-snug">
                                        {ADDRESS}
                                    </p>
                                    <p className="text-xs text-text-principal/50 mt-0.5">Argentina</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-bg-principal/60 shadow-sm group relative bg-bg-principal/30">
                                <div className="absolute inset-0 flex items-center justify-center -z-10">
                                    <span className="text-text-principal/30 text-xs">Cargando mapa…</span>
                                </div>
                                <iframe
                                    title="Ubicación del Centro de Jubilados Diamante"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.05260126781!2d-60.64098968482488!3d-32.068213981192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b3d0cf3b0b5e9b%3A0xb1b6c8b7f8c8c8c8!2sJos%C3%A9%20Hern%C3%A1ndez%20126%2C%20Diamante%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1709400000000!5m2!1ses-419!2sar"
                                    className="w-full h-full border-0 grayscale-[30%] opacity-80 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Directions CTA */}
                            <a
                                href={googleMapsDirectionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-verde hover:text-text-principal transition-colors group"
                            >
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                Cómo llegar con Google Maps
                            </a>
                        </div>
                    </div>

                    {/* ── Quick‑action CTA bar ── */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-text-principal/15 text-text-principal font-bold text-sm py-3 px-6 rounded-full hover:bg-text-principal/5 transition-all min-h-[48px]"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            Llamar al Teléfono Fijo
                        </a>
                        <a
                            href={getWhatsAppLink('Hola, quiero obtener información sobre el Centro de Jubilados de Diamante')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-verde text-bg-principal font-bold text-sm py-3 px-6 rounded-full hover:opacity-90 transition-all min-h-[48px] shadow-md hover:shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp Directo
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar — Copyright & Credits ── */}
            <div className="bg-text-principal">
                <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                    <p className="text-bg-principal/50">
                        © {currentYear} Centro de Jubilados y Pensionados de Diamante. Todos los derechos reservados.
                    </p>
                    <p className="text-bg-principal/40">
                        Desarrollado con{' '}
                        <span className="text-accent-rosa">♥</span>
                        {' '}por{' '}
                        <a
                            href="https://github.com/Axelirribarren"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-bg-principal/60 hover:text-accent-verde transition-colors"
                        >
                            Axel Irribarren
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}