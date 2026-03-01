import { PHONE_NUMBER, PHONE_DISPLAY } from '../data/activities';

export default function StickyCallBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-bg-principal/95 backdrop-blur-md border-t border-accent-rosa/15 shadow-[0_-4px_20px_rgba(42,44,43,0.08)] sticky-bar">
            <div className="max-w-xl mx-auto flex items-center justify-center gap-4">
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex-1 flex items-center justify-center gap-3 bg-accent-verde text-bg-principal text-lg md:text-xl font-bold py-4 px-6 rounded-full btn-press hover:scale-[1.01] transition-all duration-300 min-h-[56px] shadow-[0_4px_16px_rgba(132,156,143,0.25)]"
                >
                    <span className="text-2xl">📞</span>
                    Llamar al {PHONE_DISPLAY}
                </a>
            </div>
        </div>
    );
}
