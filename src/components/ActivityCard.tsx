import { Activity, getWhatsAppLink } from '../data/activities';

interface ActivityCardProps {
    activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
    return (
        <article className="relative bg-bg-principal rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(42,44,43,0.06)] border border-accent-rosa/10 flex flex-col card-hover">

            {/* "Nuevo" badge */}
            {activity.isNew && (
                <div className="absolute top-3 right-3 z-10 bg-accent-verde text-bg-principal text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Nuevo
                </div>
            )}

            {/* Image with soft edges */}
            <div className="relative h-44 md:h-48 bg-bg-secundario/30 overflow-hidden flex items-center justify-center">
                <img
                    src={activity.image}
                    alt={activity.imageAlt}
                    className="w-full h-full object-cover [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
                    loading="lazy"
                    onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            parent.innerHTML = `<span class="text-[72px] select-none">${activity.emoji}</span>`;
                        }
                    }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 md:p-6 gap-4">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-text-principal leading-snug">
                    {activity.title}
                </h3>

                {/* Benefits as Checkpoints (Increased legibility) */}
                {activity.benefits && activity.benefits.length > 0 ? (
                    <ul className="flex flex-col gap-2.5">
                        {activity.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-base md:text-[17px] text-text-principal/80 leading-snug">
                                <svg className="w-5 h-5 text-accent-verde shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                ) : activity.description ? (
                    <p className="text-base md:text-[17px] text-text-principal/80 leading-snug">
                        {activity.description}
                    </p>
                ) : null}

                {/* Schedule & Info (Highlighted box shape for emphasis) */}
                <div className="flex flex-col gap-2 text-[15px] md:text-base font-medium text-text-principal/80 bg-accent-verde/5 p-3.5 rounded-xl border border-accent-verde/10 mt-1">
                    {activity.startDate && (
                        <div className="flex items-center gap-2 text-accent-dorado font-bold mb-1">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            {activity.startDate}
                        </div>
                    )}
                    {(activity.days || activity.schedule) && (
                        <p className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-verde shrink-0" />
                            <span>{activity.days} <strong className="text-text-principal">{activity.schedule}</strong></span>
                        </p>
                    )}
                    {activity.professor && (
                        <p className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-verde shrink-0" />
                            Prof: <strong className="text-text-principal">{activity.professor}</strong>
                        </p>
                    )}
                    {activity.contactPhoneDisplay && (
                        <a href={`tel:${activity.contactPhone}`} className="flex items-center gap-2.5 hover:text-accent-verde transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-verde shrink-0" />
                            Tel: <strong className="text-text-principal">{activity.contactPhoneDisplay}</strong>
                        </a>
                    )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* WhatsApp CTA (Icon + Solicitar Información only) */}
                <a
                    href={getWhatsAppLink(activity.whatsappMessage, activity.whatsappNumber)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent-verde/15 text-accent-verde text-center text-base md:text-lg font-bold py-3.5 px-4 rounded-xl hover:bg-accent-verde/25 btn-press transition-all duration-200 flex items-center justify-center gap-2 mt-2 shadow-sm"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Solicitar Información
                </a>
            </div>
        </article>
    );
}
