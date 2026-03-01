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
    professor?: string;
    benefits?: string[];
    category: 'taller' | 'salud';
}

export interface Section {
    id: string;
    title: string;
    subtitle: string;
    emoji: string;
    bgClass: string;
    activities: Activity[];
}

export interface CalendarEvent {
    activityId: string;
    title: string;
    schedule: string;
    professor?: string;
    emoji: string;
    category: 'taller' | 'salud';
    whatsappMessage: string;
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
        title: 'Movimiento y Bienestar',
        subtitle: 'Gimnasia, yoga y rutinas adaptadas para mantener tu cuerpo activo y cuidar tus articulaciones.',
        emoji: '🌿',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'yoga',
                title: 'Yoga y Despertar Físico',
                description: 'Encontrá tu eje. Respiración, elongación suave y posturas adaptadas.',
                days: 'Lunes y Miércoles',
                schedule: '15:15 hs',
                image: '/assets/img/yoga.png',
                imageAlt: 'Ilustración en acuarela de tres personas mayores practicando yoga',
                whatsappMessage: 'Hola, quiero inscribirme en Yoga',
                emoji: '🧘',
                professor: 'Prof. Laura Méndez',
                benefits: ['Mejora la flexibilidad', 'Reduce el estrés', 'Fortalece el equilibrio'],
                category: 'taller',
            },
            {
                id: 'gimnasia',
                title: 'Gimnasia Vital',
                description: '¡Energía para tu día! Ejercicios con bandas y pesitas livianas.',
                days: 'Lunes y Miércoles',
                schedule: '16:30 hs',
                image: '/assets/img/gimnasia.png',
                imageAlt: 'Ilustración en acuarela de gimnasia guiada',
                whatsappMessage: 'Hola, quiero anotarme en Gimnasia',
                emoji: '💪',
                professor: 'Prof. Jorge Álvarez',
                benefits: ['Fortalece huesos y músculos', 'Gana equilibrio', 'Mejora la agilidad'],
                category: 'taller',
            },
            {
                id: 'kinesiologia',
                title: 'Kinesiología Sensible',
                description: 'Sesiones personalizadas para calmar dolores y mejorar tu postura.',
                days: 'Martes y Jueves',
                schedule: 'Por turnos',
                image: '/assets/img/mano.png',
                imageAlt: 'Ilustración en acuarela de manos cuidadoras',
                whatsappMessage: 'Hola, necesito un turno de Kinesiología',
                emoji: '🤲',
                professor: 'Kin. Claudia Paredes',
                benefits: ['Alivia dolores crónicos', 'Mejora la postura', 'Cuidados personalizados'],
                category: 'salud',
            },
        ],
    },
    {
        id: 'arte',
        title: 'Arte, Cultura y Creatividad',
        subtitle: 'Descubrí tu lado artístico. Talleres de teatro, coro y manualidades para aprender y divertirte.',
        emoji: '🎨',
        bgClass: 'bg-bg-principal',
        activities: [
            {
                id: 'folklore',
                title: 'Folklore y Danza',
                description: 'Bailamos zamba, chacarera y ritmos de la patria.',
                days: 'Miércoles y Viernes',
                schedule: '17:00 hs',
                image: '/assets/img/baile1.png',
                imageAlt: 'Ilustración en acuarela de pareja bailando',
                whatsappMessage: 'Hola, quiero sumarme a las clases de Folklore',
                emoji: '💃',
                professor: 'Prof. María Elena Ríos',
                benefits: ['Alegra el corazón', 'Ejercita el cuerpo', 'Conecta con nuestras raíces'],
                category: 'taller',
            },
            {
                id: 'coro',
                title: 'Coro "Voces Abiertas"',
                description: 'Desde tangos hasta canciones populares. No hace falta experiencia.',
                days: 'Jueves',
                schedule: '10:00 hs',
                image: '/assets/img/canto.png',
                imageAlt: 'Ilustración en acuarela de un hombre mayor cantando feliz',
                whatsappMessage: 'Hola, quisiera unirme al Coro',
                emoji: '🎤',
                professor: 'Dir. Roberto Funes',
                benefits: ['Mejora la respiración', 'Estimula la memoria', 'Fortalece lazos sociales'],
                category: 'taller',
            }
        ],
    },
    {
        id: 'encuentro',
        title: 'Vida Social y Encuentros',
        subtitle: 'El espacio ideal para hacer nuevos amigos, compartir un mate y disfrutar de buenas charlas.',
        emoji: '🌻',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'mateadas',
                title: 'Ronda de Mates y Letras',
                description: 'Nos juntamos a leer cuentos, compartir historias y escucharnos.',
                days: 'Viernes',
                schedule: '16:00 a 18:00 hs',
                image: '/assets/img/lectura.png',
                imageAlt: 'Ilustración en acuarela de tres adultos mayores amigos',
                whatsappMessage: 'Hola, quisiera participar de las rondas de mate',
                emoji: '🧉',
                professor: 'Coord. Ana Gutiérrez',
                benefits: ['Compartir historias', 'Lectura y expresión', 'Compañerismo'],
                category: 'taller',
            }
        ],
    },
];

// Mapping: día de la semana (0=domingo..6=sábado) → actividades
// Se usa para el calendario interactivo
export const weeklySchedule: Record<number, CalendarEvent[]> = {
    1: [ // Lunes
        { activityId: 'yoga', title: 'Yoga y Despertar Físico', schedule: '15:15 - 16:15', professor: 'Prof. Laura Méndez', emoji: '🧘', category: 'taller', whatsappMessage: 'Hola, quiero inscribirme en Yoga' },
        { activityId: 'gimnasia', title: 'Gimnasia Vital', schedule: '16:30 - 17:30', professor: 'Prof. Jorge Álvarez', emoji: '💪', category: 'taller', whatsappMessage: 'Hola, quiero anotarme en Gimnasia' },
    ],
    2: [ // Martes
        { activityId: 'kinesiologia', title: 'Kinesiología Sensible', schedule: '8:30 - 12:00', professor: 'Kin. Claudia Paredes', emoji: '🤲', category: 'salud', whatsappMessage: 'Hola, necesito un turno de Kinesiología' },
    ],
    3: [ // Miércoles
        { activityId: 'yoga', title: 'Yoga y Despertar Físico', schedule: '15:15 - 16:15', professor: 'Prof. Laura Méndez', emoji: '🧘', category: 'taller', whatsappMessage: 'Hola, quiero inscribirme en Yoga' },
        { activityId: 'gimnasia', title: 'Gimnasia Vital', schedule: '16:30 - 17:30', professor: 'Prof. Jorge Álvarez', emoji: '💪', category: 'taller', whatsappMessage: 'Hola, quiero anotarme en Gimnasia' },
        { activityId: 'folklore', title: 'Folklore y Danza', schedule: '17:00 - 18:00', professor: 'Prof. María Elena Ríos', emoji: '💃', category: 'taller', whatsappMessage: 'Hola, quiero sumarme a las clases de Folklore' },
    ],
    4: [ // Jueves
        { activityId: 'kinesiologia', title: 'Kinesiología Sensible', schedule: '8:30 - 12:00', professor: 'Kin. Claudia Paredes', emoji: '🤲', category: 'salud', whatsappMessage: 'Hola, necesito un turno de Kinesiología' },
        { activityId: 'coro', title: 'Coro "Voces Abiertas"', schedule: '10:00 - 11:30', professor: 'Dir. Roberto Funes', emoji: '🎤', category: 'taller', whatsappMessage: 'Hola, quisiera unirme al Coro' },
    ],
    5: [ // Viernes
        { activityId: 'folklore', title: 'Folklore y Danza', schedule: '17:00 - 18:00', professor: 'Prof. María Elena Ríos', emoji: '💃', category: 'taller', whatsappMessage: 'Hola, quiero sumarme a las clases de Folklore' },
        { activityId: 'mateadas', title: 'Ronda de Mates y Letras', schedule: '16:00 - 18:00', professor: 'Coord. Ana Gutiérrez', emoji: '🧉', category: 'taller', whatsappMessage: 'Hola, quisiera participar de las rondas de mate' },
    ],
};

/**
 * Devuelve las actividades programadas para una fecha específica.
 * Sábados y domingos no tienen actividades.
 */
export function getEventsForDate(date: Date): CalendarEvent[] {
    const dayOfWeek = date.getDay(); // 0=Dom, 1=Lun, ..., 6=Sáb
    return weeklySchedule[dayOfWeek] || [];
}
