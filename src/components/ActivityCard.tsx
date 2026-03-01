import { Activity, getWhatsAppLink } from '../data/activities';

interface ActivityCardProps {
    activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
    return (
        <article className="bg-bg-principal rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(42,44,43,0.06)] border border-accent-rosa/10 flex flex-col card-hover">
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
            <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-text-principal leading-snug">
                    {activity.title}
                </h3>

                {/* Schedule & Professor */}
                <div className="flex flex-col gap-1.5 text-sm md:text-base text-text-principal/70">
                    {(activity.days || activity.schedule) && (
                        <p className="flex items-center gap-2">
                            <span className="text-accent-verde text-base">⏰</span>
                            {activity.days} {activity.schedule}
                        </p>
                    )}
                    {activity.professor && (
                        <p className="flex items-center gap-2">
                            <span className="text-accent-verde text-base">👤</span>
                            {activity.professor}
                        </p>
                    )}
                </div>

                {/* Benefits */}
                {activity.benefits && activity.benefits.length > 0 && (
                    <ul className="flex flex-col gap-1 mt-1">
                        {activity.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm md:text-base text-text-principal/75">
                                <span className="text-accent-verde mt-0.5 shrink-0">✓</span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* WhatsApp CTA */}
                <a
                    href={getWhatsAppLink(activity.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent-verde/15 text-accent-verde text-center text-sm md:text-base font-semibold py-3 px-4 rounded-xl hover:bg-accent-verde/25 btn-press transition-all duration-200 min-h-[48px] flex items-center justify-center gap-2 mt-2"
                >
                    <span>💬</span>
                    Consultar por WhatsApp
                </a>
            </div>
        </article>
    );
}
