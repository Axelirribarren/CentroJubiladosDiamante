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
export const PHONE_DISPLAY = '343 5 313437';
export const ADDRESS = 'José Hernández 126, Diamante, Entre Ríos';

export const sections: Section[] = [
    {
        id: 'tramites',
        title: 'Trámites y Servicios de Salud',
        subtitle: 'Lo que necesitás resolver, con atención cercana y sin complicaciones.',
        emoji: '🏥',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'enfermeria',
                title: 'Enfermería',
                description: 'Control de presión, curaciones y orientación en salud.',
                days: 'Lunes a Viernes',
                schedule: '8:00 a 12:00 hs',
                image: '/assets/img/card_enfermeria.png',
                imageAlt: 'Ilustración en acuarela de enfermería con atención cálida',
                whatsappMessage: 'Hola, quiero consultar por el servicio de Enfermería',
                emoji: '💉',
            },
            {
                id: 'kinesiologia',
                title: 'Kinesiología',
                description: 'Rehabilitación y ejercicios terapéuticos personalizados.',
                days: 'Martes y Jueves',
                schedule: '9:00 a 12:00 hs',
                image: '/assets/img/card_kinesiologia.png',
                imageAlt: 'Ilustración en acuarela de sesión de kinesiología',
                whatsappMessage: 'Hola, quiero consultar por el servicio de Kinesiología',
                emoji: '🦴',
            },
            {
                id: 'salario',
                title: 'Salario Familiar',
                description: 'Asesoramiento y gestión de trámites de salario familiar.',
                image: '/assets/img/card_salario.png',
                imageAlt: 'Ilustración en acuarela de documentos y trámites',
                whatsappMessage: 'Hola, quiero consultar por trámites de Salario Familiar',
                emoji: '📋',
            },
            {
                id: 'caja',
                title: 'Caja de Jubilaciones',
                description: 'Consultas sobre jubilaciones y pensiones provinciales.',
                image: '/assets/img/card_caja.png',
                imageAlt: 'Ilustración en acuarela sobre gestión de jubilaciones',
                whatsappMessage: 'Hola, quiero consultar sobre la Caja de Jubilaciones',
                emoji: '🏛️',
            },
        ],
    },
    {
        id: 'movimiento',
        title: 'Movimiento y Bienestar',
        subtitle: 'Actividades para cuidar el cuerpo con alegría y compañía.',
        emoji: '🧘',
        bgClass: 'bg-bg-principal',
        activities: [
            {
                id: 'yoga',
                title: 'Clases de Yoga',
                days: 'Lunes y Miércoles',
                schedule: '15:15 a 16:15 hs',
                image: '/assets/img/card_yoga.png',
                imageAlt: 'Ilustración en acuarela de persona mayor haciendo yoga',
                whatsappMessage: 'Hola, quiero consultar por las clases de Yoga',
                emoji: '🧘',
            },
            {
                id: 'gimnasia',
                title: 'Gimnasia para Adultos',
                days: 'Lunes y Miércoles',
                schedule: '16:30 a 17:30 hs',
                image: '/assets/img/card_gimnasia.png',
                imageAlt: 'Ilustración en acuarela de persona mayor haciendo gimnasia con banda elástica',
                whatsappMessage: 'Hola, quiero consultar por las clases de Gimnasia',
                emoji: '🤸',
            },
            {
                id: 'stretching',
                title: 'Stretching',
                description: 'Estiramiento suave para mejorar la flexibilidad.',
                days: 'Martes y Jueves',
                schedule: '10:00 a 11:00 hs',
                image: '/assets/img/card_stretching.png',
                imageAlt: 'Ilustración en acuarela de persona haciendo stretching',
                whatsappMessage: 'Hola, quiero consultar por las clases de Stretching',
                emoji: '🙆',
            },
            {
                id: 'taichi',
                title: 'Tai Chi',
                description: 'Movimiento meditativo para equilibrio y serenidad.',
                days: 'Viernes',
                schedule: '9:00 a 10:00 hs',
                image: '/assets/img/card_taichi.png',
                imageAlt: 'Ilustración en acuarela de persona practicando Tai Chi',
                whatsappMessage: 'Hola, quiero consultar por las clases de Tai Chi',
                emoji: '☯️',
            },
        ],
    },
    {
        id: 'arte',
        title: 'Arte y Expresión',
        subtitle: 'Espacios creativos para disfrutar, aprender y compartir.',
        emoji: '🎭',
        bgClass: 'bg-bg-secundario/40',
        activities: [
            {
                id: 'teatro',
                title: 'Teatro',
                description: 'Expresión dramática y juegos teatrales en grupo.',
                days: 'Miércoles',
                schedule: '15:00 a 17:00 hs',
                image: '/assets/img/card_teatro.png',
                imageAlt: 'Ilustración en acuarela de personas haciendo teatro',
                whatsappMessage: 'Hola, quiero consultar por el taller de Teatro',
                emoji: '🎭',
            },
            {
                id: 'coro',
                title: 'Coro',
                description: 'Cantar juntos, desde tangos hasta folclore.',
                days: 'Jueves',
                schedule: '10:00 a 12:00 hs',
                image: '/assets/img/card_coro.png',
                imageAlt: 'Ilustración en acuarela de grupo coral cantando',
                whatsappMessage: 'Hola, quiero consultar por el Coro',
                emoji: '🎵',
            },
            {
                id: 'castanuelas',
                title: 'Castañuelas',
                description: 'Aprendé a tocar este instrumento tradicional español.',
                days: 'Martes',
                schedule: '15:00 a 16:00 hs',
                image: '/assets/img/card_castanuelas.png',
                imageAlt: 'Ilustración en acuarela de manos tocando castañuelas',
                whatsappMessage: 'Hola, quiero consultar por las clases de Castañuelas',
                emoji: '💃',
            },
            {
                id: 'tejido',
                title: 'Tejido',
                description: 'Tejido a mano: crochet, dos agujas y más.',
                days: 'Lunes',
                schedule: '14:00 a 16:00 hs',
                image: '/assets/img/card_tejido.png',
                imageAlt: 'Ilustración en acuarela de manos tejiendo con lana',
                whatsappMessage: 'Hola, quiero consultar por el taller de Tejido',
                emoji: '🧶',
            },
            {
                id: 'ritmos',
                title: 'Ritmos Latinos',
                description: 'Movete al ritmo de cumbia, salsa y más.',
                days: 'Viernes',
                schedule: '16:00 a 17:00 hs',
                image: '/assets/img/card_ritmos.png',
                imageAlt: 'Ilustración en acuarela de parejas bailando ritmos latinos',
                whatsappMessage: 'Hola, quiero consultar por las clases de Ritmos Latinos',
                emoji: '💃',
            },
            {
                id: 'folklore',
                title: 'Folklore',
                description: 'Chacarera, zamba y danzas tradicionales argentinas.',
                days: 'Miércoles',
                schedule: '17:00 a 18:30 hs',
                image: '/assets/img/card_folklore.png',
                imageAlt: 'Ilustración en acuarela de pareja bailando folklore',
                whatsappMessage: 'Hola, quiero consultar por las clases de Folklore',
                emoji: '🎶',
            },
        ],
    },
    {
        id: 'consultas',
        title: 'Consultas Especiales',
        subtitle: 'Servicios profesionales pensados para tu bienestar integral.',
        emoji: '⭐',
        bgClass: 'bg-bg-principal',
        activities: [
            {
                id: 'nutricionista',
                title: 'Nutricionista',
                description: 'Planificación alimentaria adaptada a tus necesidades.',
                days: 'Jueves',
                schedule: '9:00 a 12:00 hs',
                image: '/assets/img/card_nutricionista.png',
                imageAlt: 'Ilustración en acuarela de consulta con nutricionista',
                whatsappMessage: 'Hola, quiero consultar por el servicio de Nutricionista',
                emoji: '🥗',
            },
            {
                id: 'pedicura',
                title: 'Pedicura',
                description: 'Cuidado profesional de pies, con turno previo.',
                days: 'Martes',
                schedule: '9:00 a 13:00 hs',
                image: '/assets/img/card_pedicura.png',
                imageAlt: 'Ilustración en acuarela de cuidado de pies',
                whatsappMessage: 'Hola, quiero consultar por el servicio de Pedicura',
                emoji: '🦶',
            },
            {
                id: 'viajes',
                title: 'Viajes Grupales',
                description: 'Salidas recreativas y paseos en grupo organizados.',
                image: '/assets/img/card_viajes.png',
                imageAlt: 'Ilustración en acuarela de grupo de viaje en autobús',
                whatsappMessage: 'Hola, quiero consultar por los Viajes Grupales',
                emoji: '🚌',
            },
        ],
    },
];
