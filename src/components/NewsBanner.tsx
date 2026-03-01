export default function NewsBanner() {
    return (
        <section className="w-full bg-bg-terciario py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
                    <span className="text-4xl md:text-5xl hidden md:inline-block">🌿</span>
                    <div>
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-text-principal m-0">
                                ¡Iniciamos el 02 de Marzo!
                            </h2>
                        </div>
                        <p className="text-text-principal/80 text-lg max-w-3xl">
                            Renovamos nuestras propuestas. Descubrí los talleres de movimiento, arte y salud que preparamos para el ciclo 2026.
                        </p>
                    </div>
                </div>
                
                <a
                    href="#movimiento"
                    className="inline-block bg-bg-principal border border-text-principal/10 text-text-principal font-bold text-lg px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 whitespace-nowrap min-h-[48px] flex items-center justify-center w-full md:w-auto"
                >
                    Ver Cronograma de Talleres
                </a>
                
            </div>
        </section>
    );
}
