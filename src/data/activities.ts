export interface Activity {
    id: string;
    title: string;
    description?: string;
    benefits?: string[];
    days?: string;
    schedule?: string;
    image: string;
    imageAlt: string;
    whatsappMessage: string;
    whatsappNumber?: string;
    emoji: string;
    professor?: string;
    contactPhone?: string;
    contactPhoneDisplay?: string;
    category: 'taller' | 'salud';
    isNew?: boolean;
    startDate?: string;
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

export interface ConsultService {
    id: string;
    title: string;
    emoji: string;
    description: string;
}

const WHATSAPP_NUMBER = '543435313437';

export const getWhatsAppLink = (message: string, phone?: string) =>
    `https://wa.me/${phone || WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PHONE_NUMBER = '+543435313437';
export const PHONE_DISPLAY = '343 531-3437';
export const ADDRESS = 'José Hernández 126, Diamante, Entre Ríos';

export const WHATSAPP_HOURS = 'Lunes a Viernes de 7:30 a 12:00 hs';

export const sections: Section[] = [
    {
        id: 'movimiento',
        title: 'Movimiento y Bienestar',
        subtitle: 'Gimnasia, yoga y rutinas adaptadas para mantener tu cuerpo activo y cuidar tus articulaciones.',
        emoji: '',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'yoga',
                title: 'Yoga y Despertar Físico',
                benefits: [
                    'Encontrá tu eje y relajate.',
                    'Respiración y elongación suave.',
                    'Posturas adaptadas para sentirte mejor.'
                ],
                days: 'Lunes y Miércoles',
                schedule: '15:15 hs',
                image: '/assets/img/yoga.png',
                imageAlt: 'Ilustración acuarela de personas practicando yoga',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Yoga. ¿Podrían darme más información?',
                emoji: '🧘',
                professor: 'Lorena Almirón',
                contactPhone: '3416526158',
                contactPhoneDisplay: '341 652-6158',
                category: 'taller',
            },
            {
                id: 'gimnasia',
                title: 'Gimnasia',
                benefits: [
                    '¡Llenate de energía para tu día!',
                    'Ejercicios con bandas y pesitas livianas.',
                    'Ganá fuerza y mejorá tu equilibrio.'
                ],
                days: 'Lunes y Miércoles',
                schedule: '16:30 hs',
                image: '/assets/img/gimnasia.png',
                imageAlt: 'Ilustración acuarela de gimnasia guiada',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Gimnasia. ¿Podrían darme más información?',
                emoji: '💪',
                professor: 'Lorena Almirón',
                contactPhone: '3416526158',
                contactPhoneDisplay: '341 652-6158',
                category: 'taller',
            },
            {
                id: 'stretching',
                title: 'Stretching',
                benefits: [
                    'Elongación suave y consciente.',
                    'Mejorá tu flexibilidad y postura.',
                    'Prevení lesiones y aliviá tensiones.'
                ],
                days: 'Miércoles y Viernes',
                schedule: '9:00 hs',
                image: '/assets/img/skcretching.png',
                imageAlt: 'Ilustración acuarela de stretching y elongación',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Stretching. ¿Podrían darme más información?',
                emoji: '🤸',
                category: 'taller',
            },
            {
                id: 'taichi',
                title: 'Tai Chi Chuan',
                benefits: [
                    'Movimientos suaves y armónicos.',
                    'Cultivá tu equilibrio corporal.',
                    'Encontrá paz y conexión cuerpo-mente.'
                ],
                days: 'Martes 18:00 y Jueves 9:00',
                schedule: '',
                image: '/assets/img/taichi.png',
                imageAlt: 'Ilustración acuarela de práctica de Tai Chi Chuan',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Tai Chi Chuan con Fanny Espinosa. ¿Podrían darme más información?',
                emoji: '☯️',
                professor: 'Fanny Espinosa',
                contactPhone: '+543435313437',
                contactPhoneDisplay: '343 531-3437',
                category: 'taller',
            },
        ],
    },
    {
        id: 'arte',
        title: 'Arte, Cultura y Creatividad',
        subtitle: 'Descubrí tu lado artístico. Talleres de teatro, coro, castañuelas y herramientas digitales.',
        emoji: '',
        bgClass: 'bg-bg-principal',
        activities: [
            {
                id: 'teatro',
                title: 'Teatro',
                benefits: [
                    'Expresión, diversión y creatividad.',
                    'Animate a subir al escenario.',
                    'Explorá nuevos personajes y emociones.'
                ],
                days: 'Martes',
                schedule: '16:30 a 17:30 hs',
                image: '/assets/img/teatro2.png',
                imageAlt: 'Ilustración acuarela de teatro y actuación',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Teatro. ¿Podrían darme más información?',
                emoji: '🎭',
                category: 'taller',
            },
            {
                id: 'coro',
                title: 'Coro e Iniciación',
                benefits: [
                    'Cantamos desde tangos hasta canciones populares.',
                    'No se requiere experiencia previa.',
                    '¡Solo necesitas ganas de cantar y compartir!'
                ],
                days: 'Jueves',
                schedule: '18:00 hs',
                image: '/assets/img/coro2.png',
                imageAlt: 'Ilustración acuarela de personas cantando en coro',
                whatsappMessage: 'Hola, quisiera consultar sobre el Coro e Iniciación. ¿Podrían darme más información?',
                emoji: '🎤',
                category: 'taller',
            },
            {
                id: 'castanuelas',
                title: 'Taller de Castañuelas',
                benefits: [
                    'Aprendé el hermoso arte de las castañuelas.',
                    'Practicá ritmo y técnica.',
                    'Disfrutá en un espacio cálido y divertido.'
                ],
                days: 'Martes',
                schedule: '19:30 hs',
                image: '/assets/img/casta.png',
                imageAlt: 'Ilustración acuarela de castañuelas',
                whatsappMessage: 'Hola, quisiera consultar sobre el Taller de Castañuelas con Marcela Quinteros. ¿Podrían darme más información?',
                whatsappNumber: '5493404415127',
                emoji: '💃',
                professor: 'Marcela Quinteros',
                contactPhone: '+5493404415127',
                contactPhoneDisplay: '3404 41-5127',
                category: 'taller',
                isNew: true,
            },
            {
                id: 'digital',
                title: 'Herramientas Digitales',
                benefits: [
                    'Configurá MiOSER, correo y homebanking.',
                    'Aprendé a usar mejor el celular y compartí en redes.',
                    'Añadimos nuevas habilidades a tu ritmo.'
                ],
                days: 'Miércoles',
                schedule: '17:45 hs',
                image: '/assets/img/digital.png',
                imageAlt: 'Ilustración acuarela de persona usando tecnología',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Herramientas Digitales con Mariana Schunck. ¿Podrían darme más información?',
                whatsappNumber: '543434800316',
                emoji: '📱',
                professor: 'Lic. Mariana Schunck',
                contactPhone: '+543434800316',
                contactPhoneDisplay: '343 480-0316',
                category: 'taller',
            },
        ],
    },
    {
        id: 'salud',
        title: 'Servicios de Salud',
        subtitle: 'Cuidamos de vos. Enfermería y kinesiología con profesionales dedicados a tu bienestar.',
        emoji: '',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'enfermeria',
                title: 'Enfermería',
                benefits: [
                    'Atención profesional de confianza.',
                    'Controles de salud preventivos.',
                    'Seguimiento personalizado de bienestar.'
                ],
                days: 'Lunes 16:00 y Miércoles 9:00',
                schedule: '',
                image: '/assets/img/enfermeria.png',
                imageAlt: 'Ilustración acuarela de atención de enfermería',
                whatsappMessage: 'Hola, quisiera consultar sobre el servicio de Enfermería. ¿Podrían darme más información?',
                emoji: '🏥',
                category: 'salud',
            },
            {
                id: 'kinesiologia',
                title: 'Kinesiología',
                benefits: [
                    'Sesiones personalizadas de fisioterapia.',
                    'Calmá dolores, mejorá tu postura.',
                    'Tratamientos de rehabilitación guiados.'
                ],
                days: 'Lunes, Miércoles y Viernes',
                schedule: '8:30 hs — Solicitar turnos',
                image: '/assets/img/mano.png',
                imageAlt: 'Ilustración acuarela de manos cuidadoras',
                whatsappMessage: 'Hola, quisiera solicitar un turno de Kinesiología. ¿Podrían darme más información?',
                emoji: '🤲',
                category: 'salud',
            },
        ],
    },
    {
        id: 'proximamente',
        title: 'Próximamente',
        subtitle: 'Nuevos talleres que arrancan en la segunda quincena de marzo. ¡No te los pierdas!',
        emoji: '',
        bgClass: 'bg-bg-principal',
        activities: [
            {
                id: 'tejido',
                title: 'Tejido',
                benefits: [
                    'Aprendé desde cero o perfeccioná tus técnicas.',
                    'Creá tus propias prendas y manualidades.',
                    'Disfrutá tejer en un ambiente cálido compartido.'
                ],
                days: 'Martes',
                schedule: '16:00 hs',
                image: '/assets/img/tejido.png',
                imageAlt: 'Ilustración acuarela de tejido artesanal',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Tejido. ¿Podrían darme más información?',
                emoji: '🧶',
                category: 'taller',
                isNew: true,
                startDate: 'Comienza el martes 17 de marzo',
            },
            {
                id: 'ritmos',
                title: 'Ritmos Latinos',
                benefits: [
                    'Movete al compás de la salsa, merengue y cumbia.',
                    'Mejorá tu coordinación y estado físico.',
                    '¡Pura alegría y energía en cada clase!'
                ],
                days: 'Miércoles',
                schedule: '19:30 hs',
                image: '/assets/img/ritmos.png',
                imageAlt: 'Ilustración acuarela de baile latino',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Ritmos Latinos. ¿Podrían darme más información?',
                emoji: '💃',
                category: 'taller',
                isNew: true,
                startDate: 'Comienza el miércoles 18 de marzo',
            },
            {
                id: 'folklore',
                title: 'Folklore',
                benefits: [
                    'Bailamos zamba, chacarera y ritmos patrios.',
                    'Conectá con nuestras raíces y tradiciones.',
                    'Compartí la pasión por nuestra cultura.'
                ],
                days: 'Jueves',
                schedule: '16:30 hs',
                image: '/assets/img/baile1.png',
                imageAlt: 'Ilustración acuarela de pareja bailando folklore',
                whatsappMessage: 'Hola, quisiera consultar sobre el taller de Folklore. ¿Podrían darme más información?',
                emoji: '🪗',
                category: 'taller',
                isNew: true,
                startDate: 'Comienza el jueves 19 de marzo',
            },
        ],
    },
];

export const consultServices: ConsultService[] = [
    { id: 'acompanante', title: 'Acompañante Terapéutico', emoji: '🤝', description: 'Soporte profesional personalizado.' },
    { id: 'nutricionista', title: 'Nutricionista', emoji: '🥗', description: 'Asesoramiento nutricional adaptado.' },
    { id: 'pedicura', title: 'Pedicura', emoji: '✨', description: 'Cuidado profesional de pies.' },
    { id: 'enfermera-part', title: 'Enfermera', emoji: '👩‍⚕️', description: 'Atención de enfermería particular.' },
    { id: 'viajes', title: 'Viajes Grupales', emoji: '🚌', description: 'Excursiones y viajes de recreación.' },
];

// Mapping: día de la semana (0=domingo..6=sábado) → actividades
export const weeklySchedule: Record<number, CalendarEvent[]> = {
    1: [
        { activityId: 'kinesiologia', title: 'Kinesiología', schedule: '8:30 - Turnos', emoji: '🤲', category: 'salud', whatsappMessage: 'Hola, quisiera solicitar un turno de Kinesiología.' },
        { activityId: 'yoga', title: 'Yoga y Despertar Físico', schedule: '15:15 - 16:15', emoji: '🧘', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Yoga.' },
        { activityId: 'enfermeria', title: 'Enfermería', schedule: '16:00', emoji: '🏥', category: 'salud', whatsappMessage: 'Hola, quisiera consultar sobre el servicio de Enfermería.' },
        { activityId: 'gimnasia', title: 'Gimnasia Vital', schedule: '16:30 - 17:30', emoji: '💪', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Gimnasia.' },
    ],
    2: [
        { activityId: 'tejido', title: 'Tejido', schedule: '16:00', emoji: '🧶', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Tejido.' },
        { activityId: 'teatro', title: 'Teatro', schedule: '16:30 - 17:30', emoji: '🎭', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Teatro.' },
        { activityId: 'taichi', title: 'Tai Chi', schedule: '18:00', professor: 'Fanny Espinosa', emoji: '☯️', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Tai Chi.' },
        { activityId: 'castanuelas', title: 'Castañuelas', schedule: '19:30', professor: 'Marcela Quinteros', emoji: '💃', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el Taller de Castañuelas.' },
    ],
    3: [
        { activityId: 'kinesiologia', title: 'Kinesiología', schedule: '8:30 - Turnos', emoji: '🤲', category: 'salud', whatsappMessage: 'Hola, quisiera solicitar un turno de Kinesiología.' },
        { activityId: 'stretching', title: 'Stretching', schedule: '9:00', emoji: '🤸', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Stretching.' },
        { activityId: 'enfermeria', title: 'Enfermería', schedule: '9:00', emoji: '🏥', category: 'salud', whatsappMessage: 'Hola, quisiera consultar sobre el servicio de Enfermería.' },
        { activityId: 'yoga', title: 'Yoga y Despertar Físico', schedule: '15:15 - 16:15', emoji: '🧘', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Yoga.' },
        { activityId: 'gimnasia', title: 'Gimnasia Vital', schedule: '16:30 - 17:30', emoji: '💪', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Gimnasia.' },
        { activityId: 'digital', title: 'Herramientas Digitales', schedule: '17:45', professor: 'Lic. Mariana Schunck', emoji: '📱', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre Herramientas Digitales.' },
        { activityId: 'ritmos', title: 'Ritmos Latinos', schedule: '19:30', emoji: '💃', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Ritmos Latinos.' },
    ],
    4: [
        { activityId: 'taichi', title: 'Tai Chi', schedule: '9:00', professor: 'Fanny Espinosa', emoji: '☯️', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Tai Chi.' },
        { activityId: 'folklore', title: 'Folklore', schedule: '16:30', emoji: '🪗', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Folklore.' },
        { activityId: 'coro', title: 'Coro e Iniciación', schedule: '18:00', emoji: '🎤', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el Coro e Iniciación.' },
    ],
    5: [
        { activityId: 'kinesiologia', title: 'Kinesiología', schedule: '8:30 - Turnos', emoji: '🤲', category: 'salud', whatsappMessage: 'Hola, quisiera solicitar un turno de Kinesiología.' },
        { activityId: 'stretching', title: 'Stretching', schedule: '9:00', emoji: '🤸', category: 'taller', whatsappMessage: 'Hola, quisiera consultar sobre el taller de Stretching.' },
    ],
};

export function getEventsForDate(date: Date): CalendarEvent[] {
    const dayOfWeek = date.getDay();
    return weeklySchedule[dayOfWeek] || [];
}
