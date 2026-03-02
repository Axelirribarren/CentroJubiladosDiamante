import { PHONE_NUMBER, ADDRESS } from '../data/activities';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-bg-principal px-6 py-16 md:py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Columna Izquierda (Texto) */}
                <div className="flex flex-col gap-8 text-center md:text-left relative z-10 order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl border-hidden lg:text-6xl font-bold text-text-principal leading-tight tracking-tight">
                        Centro de Jubilados y Pensionados de <span className="block text-accent-verde"> Diamante</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-text-principal/80 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
                        Tu segundo hogar. Un espacio dedicado a honrar la experiencia, brindarte asistencia en tus trámites y cultivar nuevas amistades. Te esperamos en {ADDRESS}.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <a
                            href="#tramites"
                            className="bg-accent-verde text-bg-principal text-lg font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-[1.02] min-h-[48px] flex items-center justify-center w-full sm:w-auto"
                        >
                            Explorar Servicios
                        </a>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="bg-transparent border-2 border-text-principal/20 text-text-principal text-lg font-bold px-8 py-4 rounded-full hover:bg-text-principal/5 transition-all min-h-[48px] flex items-center justify-center w-full sm:w-auto"
                        >
                            Contactarnos
                        </a>
                    </div>
                </div>

                {/* Columna Derecha (Imagen Acuarela) */}
                <div className="relative z-10 flex justify-center md:justify-end order-1 md:order-2">
                    {/* Decorative blobs for the image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[500px] max-h-[500px] bg-bg-terciario/50 rounded-full blur-[80px] -z-10" />
                    
                    <img
                        src="/assets/img/centro.png"
                        alt="Ilustración de adultos mayores compartiendo"
                        className="w-full max-w-[500px] h-auto object-contain mix-blend-multiply filter contrast-[1.1] saturate-[1.1] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)] relative z-10"
                    />
                </div>
            </div>
            
            {/* Ambient Background Decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-rosa/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bg-secundario/40 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />
        </section>
    );
}
