import { useState } from 'react';

interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    quote?: string;
    author?: string;
    authorAge?: string;
}

const galleryImages: GalleryImage[] = [
    {
        id: 'vida-1',
        src: '/assets/img/vida/vida-1.jpeg',
        alt: 'Momentos compartidos en el Centro de Jubilados',
        quote: '"Las caminatas al aire libre nos llenan de energía. Es nuestro momento favorito para charlar, reírnos y mantener el cuerpo activo juntas."',
        author: 'Actividades Recreativas',
        authorAge: 'Parque',
    },
    {
        id: 'vida-2',
        src: '/assets/img/vida/vida-2.jpeg',
        alt: 'Actividades grupales en el Centro',
        quote: '"Recorrer los senderos de nuestro hermoso Pre-Delta en grupo es una paz total. Respiramos aire puro y disfrutamos de los paisajes de nuestra tierra."',
        author: 'Excursiones',
        authorAge: 'Parque Nacional Pre-Delta',
    },
    {
        id: 'vida-3',
        src: '/assets/img/vida/vida-3.jpeg',
        alt: 'Encuentros y talleres en nuestro centro',
        quote: '"Organizar estas escapadas juntos nos da muchísima vida. Cada viaje es una aventura nueva llena de mates, fotos y anécdotas para contar."',
        author: 'Excursiones',
        authorAge: 'Viajes',
    },
    {
        id: 'vida-4',
        src: '/assets/img/vida/vida-4.jpg',
        alt: 'Celebraciones en el Centro de Jubilados',
    },
    {
        id: 'vida-5',
        src: '/assets/img/vida/vida-5.jpg',
        alt: 'Nuestros socios disfrutando',
    },
    {
        id: 'vida-6',
        src: '/assets/img/vida/vida-6.jpg',
        alt: 'Vida cotidiana en el Centro',
    },
];

function QuoteIcon() {
    return (
        <svg className="w-8 h-8 text-accent-dorado/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017Zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0Z" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );
}

function ChevronLeftIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    );
}

export default function VidaEnElCentro() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goNext = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
        }
    };

    const goPrev = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex(
                (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
            );
        }
    };

    // Split: first 3 have quotes (featured), rest are small grid
    const featured = galleryImages.slice(0, 3);
    const extras = galleryImages.slice(3);

    return (
        <>
            <section
                id="vida"
                className="relative py-16 md:py-24 px-4 md:px-6 bg-bg-principal overflow-hidden"
            >
                {/* Ambient decorations */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-dorado/8 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent-rosa/8 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
                
                {/* Logo Watermark */}
                <div className="absolute top-10 right-10 opacity-[0.03] rotate-12 pointer-events-none z-0">
                    <img 
                        src="/assets/img/centro1.png" 
                        alt="" 
                        className="w-[300px] md:w-[450px] mix-blend-multiply grayscale"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-2 bg-accent-dorado/10 text-accent-dorado text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>
                            Nuestra Comunidad
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-principal mb-4">
                            Vida en el Centro
                        </h2>
                        <p className="text-base md:text-lg text-text-principal/70 max-w-2xl mx-auto leading-relaxed">
                            Más que talleres, aquí cultivamos amistades y momentos inolvidables. Nuestra comunidad es el corazón que late en cada sonrisa compartida.
                        </p>
                    </div>

                    {/* Featured images with quotes — 3 columns on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                        {featured.map((img, index) => (
                            <div key={img.id} className="group flex flex-col">
                                {/* Image container */}
                                <div
                                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-[0_2px_16px_rgba(42,44,43,0.08)] border border-accent-rosa/10"
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.classList.add('bg-bg-secundario/50', 'flex', 'items-center', 'justify-center');
                                                parent.innerHTML = `<div class="text-center p-6"><svg class="w-12 h-12 text-accent-verde/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V5.25A2.25 2.25 0 0 0 20.25 3H3.75a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg><p class="text-xs text-text-principal/40">Próximamente</p></div>`;
                                            }
                                        }}
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-text-principal/0 group-hover:bg-text-principal/10 transition-colors duration-300 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-bg-principal/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                            <svg className="w-5 h-5 text-text-principal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote below image */}
                                {img.quote && (
                                    <div className="mt-4 pl-1">
                                        <QuoteIcon />
                                        <blockquote className="mt-2 text-sm md:text-base text-text-principal/75 italic leading-relaxed">
                                            {img.quote}
                                        </blockquote>
                                        {img.author && (
                                            <p className="mt-2 text-sm font-semibold text-accent-verde">
                                                — {img.author}, {img.authorAge}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Extra images — smaller tile grid */}
                    {extras.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {extras.map((img, i) => (
                                <div
                                    key={img.id}
                                    className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(42,44,43,0.06)] border border-accent-rosa/10"
                                    onClick={() => openLightbox(featured.length + i)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.classList.add('bg-bg-secundario/50', 'flex', 'items-center', 'justify-center');
                                                parent.innerHTML = `<div class="text-center p-4"><svg class="w-10 h-10 text-accent-verde/30 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V5.25A2.25 2.25 0 0 0 20.25 3H3.75a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg><p class="text-[11px] text-text-principal/40">Próximamente</p></div>`;
                                            }
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-text-principal/0 group-hover:bg-text-principal/10 transition-colors duration-300" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── Lightbox Modal ── */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-text-principal/85 backdrop-blur-md p-4 animate-[fadeIn_0.2s_ease-out]"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 md:top-6 md:right-6 text-bg-principal/80 hover:text-bg-principal transition-colors z-10 p-2"
                        aria-label="Cerrar imagen"
                    >
                        <CloseIcon />
                    </button>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-2 md:left-6 text-bg-principal/70 hover:text-bg-principal transition-colors z-10 p-2 rounded-full hover:bg-bg-principal/10"
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeftIcon />
                    </button>

                    {/* Image */}
                    <img
                        src={galleryImages[lightboxIndex].src}
                        alt={galleryImages[lightboxIndex].alt}
                        className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-2 md:right-6 text-bg-principal/70 hover:text-bg-principal transition-colors z-10 p-2 rounded-full hover:bg-bg-principal/10"
                        aria-label="Imagen siguiente"
                    >
                        <ChevronRightIcon />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-bg-principal/60 text-sm font-medium">
                        {lightboxIndex + 1} / {galleryImages.length}
                    </div>
                </div>
            )}
        </>
    );
}
