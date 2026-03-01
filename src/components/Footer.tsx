import { PHONE_NUMBER, PHONE_DISPLAY, ADDRESS, getWhatsAppLink } from '../data/activities';

/* SVG Icons as inline components */
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-bg-terciario text-text-principal">
            {/* Main content */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                    {/* Column 1 — Logo & Name */}
                    <div className="flex-1 flex flex-col gap-3">
                        <img
                            src="/assets/img/LOGO JUBILADOS.jpg"
                            alt="Logo Centro de Jubilados Diamante"
                            className="h-20 w-auto object-contain mix-blend-multiply [-webkit-mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
                        />
                        <h2 className="text-xl md:text-2xl font-bold text-text-principal leading-snug">
                            Centro de Jubilados y Pensionados Provinciales de Diamante
                        </h2>
                        <p className="text-base text-text-principal/80">
                            Abiertos de Lunes a Viernes.
                        </p>
                    </div>

                    {/* Column 2 — Phone & WhatsApp */}
                    <div className="flex-1 flex flex-col items-center gap-4 bg-bg-principal/40 rounded-2xl p-6 md:p-8 border border-accent-rosa/10 text-center w-full lg:w-auto">
                        <div className="flex items-center gap-3 text-text-principal">
                            <PhoneIcon />
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="text-2xl md:text-3xl font-bold text-text-principal hover:text-accent-verde transition-colors"
                            >
                                {PHONE_DISPLAY}
                            </a>
                        </div>
                        <a
                            href={getWhatsAppLink('Hola, quiero obtener información sobre el Centro de Jubilados de Diamante')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-accent-verde text-bg-principal font-bold text-base md:text-lg py-3.5 px-6 rounded-xl hover:opacity-90 transition-opacity min-h-[48px]"
                        >
                            <ChatIcon />
                            Contactar por WhatsApp
                        </a>
                    </div>

                    {/* Column 3 — Address */}
                    <div className="flex-1 flex items-start gap-3">
                        <span className="text-accent-verde mt-1 shrink-0">
                            <MapPinIcon />
                        </span>
                        <p className="text-base md:text-lg text-text-principal font-medium leading-relaxed">
                            {ADDRESS}
                        </p>
                    </div>
                </div>
            </div>

            {/* Separator + Copyright + Developer credit */}
            <div className="border-t border-text-principal/10">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-text-principal/60">
                    <p>© 2026 Centro de Jubilados Diamante</p>
                    <p>
                        Desarrollado por{' '}
                        <a
                            href="https://github.com/Axelirribarren"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-text-principal/80 hover:text-accent-verde transition-colors underline underline-offset-2"
                        >
                            Axel Irribarren
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
