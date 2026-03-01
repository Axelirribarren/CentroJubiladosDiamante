import { Section } from '../data/activities';
import ActivityCard from './ActivityCard';

interface SectionGridProps {
    section: Section;
    index: number;
}

export default function SectionGrid({ section, index }: SectionGridProps) {
    return (
        <section
            id={section.id}
            className={`relative py-12 md:py-16 lg:py-20 px-4 md:px-6 ${section.bgClass} section-wash`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Watercolor decorations */}
            {index % 2 === 0 && (
                <>
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-celeste/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-accent-rosa/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />
                </>
            )}
            {index % 2 !== 0 && (
                <>
                    <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-bg-terciario/15 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-accent-dorado/10 rounded-full blur-[80px] translate-x-1/4 translate-y-1/3 pointer-events-none" />
                </>
            )}

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-8 md:mb-12">
                    {section.emoji && (
                        <span className="text-3xl md:text-4xl mb-3 block">{section.emoji}</span>
                    )}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-principal mb-3">
                        {section.title}
                    </h2>
                    <p className="text-base md:text-lg text-text-principal/70 max-w-2xl mx-auto">
                        {section.subtitle}
                    </p>
                </div>

                {/* Cards grid — Mobile First: 1 col → 2 cols → 3 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {section.activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </div>
        </section>
    );
}
