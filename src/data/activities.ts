export interface Activity {
    id: string;
    title: string;
    description?: string;
    days?: string;
    schedule?: string;
    image: string;
    imageAlt: string;
    whatsappMessage: string;
    emoji: string;
}

export interface Section {
    id: string;
    title: string;
    subtitle: string;
    emoji: string;
    bgClass: string;
    activities: Activity[];
}

const WHATSAPP_NUMBER = '5493416526158';

export const getWhatsAppLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PHONE_NUMBER = '+543435313437';
export const PHONE_DISPLAY = '343 531-3437';
export const ADDRESS = 'José Hernández 126, Diamante, Entre Ríos';

export const sections: Section[] = [
    {
        id: 'movimiento',
        title: 'Cuerpo y Vitalidad',
        subtitle: 'Actividades amorosas para despertar tu energía y cuidar tus articulaciones.',
        emoji: '🌿',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'yoga',
                title: 'Yoga y Despertar Físico',
                description: 'Encontrá tu eje. Respiración, elongación suave y posturas adaptadas. Un mimo para recuperar flexibilidad y encontrar calma.',
                days: 'Lunes y Miércoles',
                schedule: '15:15 hs',
                image: '/assets/img/yoga.png',
                imageAlt: 'Ilustración en acuarela de tres personas mayores practicando yoga',
                whatsappMessage: 'Hola, quiero inscribirme en Yoga',
                emoji: '',
            },
            {
                id: 'gimnasia',
                title: 'Gimnasia Vital',
                description: '¡Energía para tu día! Ejercicios con bandas y pesitas livianas para fortalecer tus huesos, ganar mucho equilibrio y sentirte ágil nuevamente.',
                days: 'Lunes y Miércoles',
                schedule: '16:30 hs',
                image: '/assets/img/gimnasia.png',
                imageAlt: 'Ilustración en acuarela de gimnasia guiada',
                whatsappMessage: 'Hola, quiero anotarme en Gimnasia',
                emoji: '',
            },
            {
                id: 'kinesiologia',
                title: 'Kinesiología Sensible',
                description: 'Manos que curan. Sesiones personalizadas y enfocadas en calmar dolores crónicos, mejorar tu postura y enseñarte cuidados diarios.',
                days: 'Martes y Jueves',
                schedule: 'Por turnos',
                image: '/assets/img/mano.png',
                imageAlt: 'Ilustración en acuarela de manos cuidadoras',
                whatsappMessage: 'Hola, necesito un turno de Kinesiología',
                emoji: '',
            },
        ],
    },
    {
        id: 'arte',
        title: 'Expresión y Alma',
        subtitle: 'Animate a soltar la voz y el cuerpo. El arte no tiene edad, solo requiere ganas de disfrutar.',
        emoji: '🎨',
        bgClass: 'bg-bg-principal',
        activities: [
            {
                id: 'folklore',
                title: 'Folklore y Danza',
                description: 'Nuestras raíces en movimiento. Bailamos zamba, chacarera y ritmos de la patria. Una fiesta que alegra el corazón y llena el alma.',
                days: 'Miércoles y Viernes',
                schedule: '17:00 hs',
                image: '/assets/img/baile1.png',
                imageAlt: 'Ilustración en acuarela de pareja bailando',
                whatsappMessage: 'Hola, quiero sumarme a las clases de Folklore',
                emoji: '',
            },
            {
                id: 'coro',
                title: 'Coro "Voces Abiertas"',
                description: 'Cantamos lo que somos. Desde tangos nostalgiosos hasta canciones populares inolvidables. No hace falta experiencia previa.',
                days: 'Jueves',
                schedule: '10:00 hs',
                image: '/assets/img/canto.png',
                imageAlt: 'Ilustración en acuarela de un hombre mayor cantando feliz',
                whatsappMessage: 'Hola, quisiera unirme al Coro',
                emoji: '',
            }
        ],
    },
    {
        id: 'encuentro',
        title: 'Lazos y Comunidad',
        subtitle: 'Porque el mejor remedio contra cualquier mal es una buena charla acompañada de un matecito caliente.',
        emoji: '🌻',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'mateadas',
                title: 'Ronda de Mates y Letras',
                description: 'Nos juntamos a leer cuentos, compartir nuestras historias de vida, planear nuestro próximo viaje y escucharnos con atención.',
                days: 'Viernes',
                schedule: '16:00 a 18:00 hs',
                image: '/assets/img/lectura.png',
                imageAlt: 'Ilustración en acuarela de tres adultos mayores amigos',
                whatsappMessage: 'Hola, quisiera participar de las rondas de mate',
                emoji: '',
            }
        ],
    },
];
