import { Activity, getWhatsAppLink } from '../data/activities';

interface ActivityCardProps {
    activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
    return (
        <article className="card-hover bg-bg-principal rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(42,44,43,0.06)] border border-accent-rosa/10 flex flex-col">
            {/* Image area */}
            <div className="relative h-48 md:h-52 bg-bg-secundario/30 overflow-hidden flex items-center justify-center">
                <img
                    src={activity.image}
                    alt={activity.imageAlt}
                    className="w-full h-full object-cover watercolor-img"
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
                {/* Subtle gradient overlay for text readability below */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-bg-principal/60 to-transparent pointer-events-none" />
            </div>

            {/* Content area */}
            <div className="flex flex-col flex-1 p-6 md:p-8 gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-text-principal leading-snug">
                    {activity.emoji} {activity.title}
                </h3>

                {activity.description && (
                    <p className="text-base md:text-lg text-text-principal/80 leading-relaxed">
                        {activity.description}
                    </p>
                )}

                {/* Schedule info */}
                {(activity.days || activity.schedule) && (
                    <div className="flex flex-col gap-2 bg-bg-secundario/40 rounded-2xl p-4">
                        {activity.days && (
                            <p className="text-base md:text-lg text-text-principal font-medium flex items-center gap-2">
                                <span className="text-xl">📅</span> {activity.days}
                            </p>
                        )}
                        {activity.schedule && (
                            <p className="text-base md:text-lg text-text-principal font-medium flex items-center gap-2">
                                <span className="text-xl">🕐</span> {activity.schedule}
                            </p>
                        )}
                    </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* WhatsApp CTA Button */}
                <a
                    href={getWhatsAppLink(activity.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent-verde text-bg-principal text-center text-lg md:text-xl font-bold py-4 px-6 rounded-full shadow-[0_4px_16px_rgba(132,156,143,0.25)] hover:shadow-[0_6px_24px_rgba(132,156,143,0.35)] btn-press hover:scale-[1.01] transition-all duration-300 min-h-[56px] flex items-center justify-center gap-3"
                >
                    <span className="text-2xl">💬</span>
                    Consultar por WhatsApp
                </a>
            </div>
        </article>
    );
}
