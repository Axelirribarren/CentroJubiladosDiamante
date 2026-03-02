import { Tramite } from '../data/tramites';
import { getWhatsAppLink } from '../data/activities';

interface TramiteCardProps {
    tramite: Tramite;
}

/* ── SVG Icon Components ── */
function DocumentIcon() {
    return (
        <svg className="w-7 h-7 text-accent-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg className="w-7 h-7 text-accent-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
    );
}

function ScaleIcon() {
    return (
        <svg className="w-7 h-7 text-accent-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z" />
        </svg>
    );
}

function WhatsAppIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

const iconMap = {
    document: DocumentIcon,
    shield: ShieldIcon,
    scale: ScaleIcon,
};

function CheckIcon() {
    return (
        <svg className="w-4 h-4 text-accent-verde shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    );
}

export default function TramiteCard({ tramite }: TramiteCardProps) {
    const IconComponent = iconMap[tramite.icon];

    return (
        <article className="group bg-bg-principal/80 backdrop-blur-sm rounded-2xl border border-accent-verde/15 shadow-[0_2px_16px_rgba(42,44,43,0.05)] flex flex-col overflow-hidden card-hover h-full">
            {/* Header area */}
            <div className="p-5 md:p-6 pb-0 flex items-start justify-between">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-verde/10 group-hover:bg-accent-verde/15 transition-colors shrink-0">
                    <IconComponent />
                </div>
                {/* Tag */}
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-text-principal/50 bg-bg-secundario/60 px-3 py-1.5 rounded-full border border-accent-celeste/15">
                    {tramite.tag}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 md:p-6 pt-4 gap-3">
                <h3 className="text-lg md:text-xl font-bold text-text-principal leading-snug">
                    {tramite.title}
                </h3>

                <p className="text-sm md:text-base text-text-principal/65 leading-relaxed">
                    {tramite.description}
                </p>

                {/* Items list */}
                <ul className="flex flex-col gap-2 mt-1">
                    {tramite.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-text-principal/75">
                            <CheckIcon />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Spacer */}
                <div className="flex-1" />

                {/* WhatsApp CTA */}
                <a
                    href={getWhatsAppLink(tramite.ctaWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent-verde text-bg-principal text-center text-sm md:text-base font-bold py-3.5 px-4 rounded-xl hover:opacity-90 btn-press transition-all duration-200 min-h-[48px] flex items-center justify-center gap-2.5 mt-3 shadow-sm hover:shadow-md"
                >
                    <WhatsAppIcon />
                    Solicitar Información
                </a>
            </div>
        </article>
    );
}
