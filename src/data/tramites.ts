import { getWhatsAppLink } from './activities';

export interface Tramite {
    id: string;
    tag: string;
    title: string;
    description: string;
    items: string[];
    listLabel: string; // "Requisitos", "Beneficios", "Servicios"
    ctaText: string;
    ctaWhatsAppMessage: string;
    icon: 'document' | 'shield' | 'scale';
}

export const tramites: Tramite[] = [
    {
        id: 'salario-familiar',
        tag: 'Gestión',
        title: 'Salario Familiar',
        description:
            'Gestionamos tu asignación. Por favor, acercate a la secretaría con la siguiente documentación en mano:',
        listLabel: 'Requisitos',
        items: [
            'DNI del titular y grupo familiar.',
            'Partidas de nacimiento actualizadas.',
            'Certificado de escolaridad vigente.',
        ],
        ctaText: 'Consultar requisitos por WhatsApp',
        ctaWhatsAppMessage:
            'Hola, quiero consultar los requisitos para el trámite de Salario Familiar y Escolaridad.',
        icon: 'document',
    },
    {
        id: 'seguro-siser',
        tag: 'Cobertura',
        title: 'Seguro SISER',
        description:
            'Accedé a los beneficios exclusivos diseñados para tu tranquilidad y cuidado personal.',
        listLabel: 'Beneficios',
        items: [
            'Cobertura inmediata de sepelio.',
            'Servicio de enfermería incluido.',
            'Préstamo de ortopedia sin cargo.',
        ],
        ctaText: 'Solicitar información',
        ctaWhatsAppMessage:
            'Hola, quiero solicitar información sobre el Seguro SISER.',
        icon: 'shield',
    },
    {
        id: 'caja-jubilaciones',
        tag: 'Asesoramiento',
        title: 'Asesoramiento y Reclamos',
        description:
            'Te acompañamos en cada paso. Te ayudamos a resolver dudas o presentar reclamos ante la Caja de Jubilaciones.',
        listLabel: 'Servicios',
        items: [
            'Revisión de recibos de haberes.',
            'Inicio de expedientes o reclamos.',
            'Seguimiento de trámites en curso.',
        ],
        ctaText: 'Pedir turno para asesoramiento',
        ctaWhatsAppMessage:
            'Hola, quisiera pedir un turno para asesoramiento sobre trámites de Caja de Jubilaciones.',
        icon: 'scale',
    },
];

export { getWhatsAppLink };
