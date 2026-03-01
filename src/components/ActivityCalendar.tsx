import { useState, useMemo } from 'react';
import { getEventsForDate, getWhatsAppLink, CalendarEvent } from '../data/activities';

const DAY_NAMES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const MONTH_NAMES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

/** Returns 0=Mon..6=Sun for a given date (ISO week start) */
function getISODayOfWeek(year: number, month: number, day: number) {
    const d = new Date(year, month, day).getDay(); // 0=Sun..6=Sat
    return d === 0 ? 6 : d - 1; // convert to 0=Mon..6=Sun
}

function formatSelectedDate(date: Date): string {
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const day = dayNames[date.getDay()];
    const num = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    return `${day} ${num} de ${month}`;
}

function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function ActivityCalendar() {
    const today = new Date();
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [selectedDate, setSelectedDate] = useState(today);

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfWeek = getISODayOfWeek(currentYear, currentMonth, 1);

    // Previous month days to fill the grid
    const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

    const calendarCells = useMemo(() => {
        const cells: { day: number; month: number; year: number; isCurrentMonth: boolean }[] = [];

        // Previous month trailing days
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const d = prevMonthDays - i;
            const m = currentMonth === 0 ? 11 : currentMonth - 1;
            const y = currentMonth === 0 ? currentYear - 1 : currentYear;
            cells.push({ day: d, month: m, year: y, isCurrentMonth: false });
        }

        // Current month
        for (let d = 1; d <= daysInMonth; d++) {
            cells.push({ day: d, month: currentMonth, year: currentYear, isCurrentMonth: true });
        }

        // Next month leading days to fill last row
        const remaining = 7 - (cells.length % 7);
        if (remaining < 7) {
            for (let d = 1; d <= remaining; d++) {
                const m = currentMonth === 11 ? 0 : currentMonth + 1;
                const y = currentMonth === 11 ? currentYear + 1 : currentYear;
                cells.push({ day: d, month: m, year: y, isCurrentMonth: false });
            }
        }

        return cells;
    }, [currentYear, currentMonth, daysInMonth, firstDayOfWeek, prevMonthDays]);

    const selectedEvents = useMemo(() => getEventsForDate(selectedDate), [selectedDate]);

    const goToPrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleDayClick = (cell: { day: number; month: number; year: number }) => {
        setSelectedDate(new Date(cell.year, cell.month, cell.day));
        // If navigating to a different month, also update the view
        if (cell.month !== currentMonth || cell.year !== currentYear) {
            setCurrentMonth(cell.month);
            setCurrentYear(cell.year);
        }
    };

    return (
        <section id="calendario" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-bg-principal">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-principal mb-2">
                        Calendario de Actividades
                    </h2>
                    <p className="text-base md:text-lg text-text-principal/60">
                        Elegí un día para ver todas las actividades programadas
                    </p>
                </div>

                {/* Calendar + Sidebar */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Calendar Grid */}
                    <div className="w-full lg:w-[60%] bg-bg-secundario/30 rounded-2xl p-4 md:p-6 border border-accent-rosa/10">
                        {/* Month Navigation */}
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={goToPrevMonth}
                                className="p-2 rounded-lg hover:bg-bg-principal/60 transition-colors text-text-principal/60 hover:text-text-principal min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Mes anterior"
                            >
                                ‹
                            </button>
                            <h3 className="text-lg md:text-xl font-bold text-text-principal">
                                {MONTH_NAMES[currentMonth]} {currentYear}
                            </h3>
                            <button
                                onClick={goToNextMonth}
                                className="p-2 rounded-lg hover:bg-bg-principal/60 transition-colors text-text-principal/60 hover:text-text-principal min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Mes siguiente"
                            >
                                ›
                            </button>
                        </div>

                        {/* Day names header */}
                        <div className="grid grid-cols-7 mb-2">
                            {DAY_NAMES.map((name) => (
                                <div key={name} className="text-center text-xs md:text-sm font-semibold text-text-principal/50 py-2">
                                    {name}
                                </div>
                            ))}
                        </div>

                        {/* Days grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {calendarCells.map((cell, idx) => {
                                const cellDate = new Date(cell.year, cell.month, cell.day);
                                const events = getEventsForDate(cellDate);
                                const isToday = isSameDay(cellDate, today);
                                const isSelected = isSameDay(cellDate, selectedDate);
                                const hasTaller = events.some(e => e.category === 'taller');
                                const hasSalud = events.some(e => e.category === 'salud');

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleDayClick(cell)}
                                        className={`
                                            relative flex flex-col items-center justify-center py-2 md:py-3 rounded-xl transition-all duration-200 min-h-[48px] md:min-h-[56px]
                                            ${!cell.isCurrentMonth ? 'text-text-principal/25' : 'text-text-principal'}
                                            ${isSelected ? 'bg-accent-verde text-bg-principal font-bold shadow-md scale-105' : ''}
                                            ${isToday && !isSelected ? 'ring-2 ring-accent-verde/40 font-semibold' : ''}
                                            ${!isSelected ? 'hover:bg-bg-principal/60' : ''}
                                        `}
                                    >
                                        <span className="text-sm md:text-base">{cell.day}</span>
                                        {/* Activity dots */}
                                        {cell.isCurrentMonth && (hasTaller || hasSalud) && (
                                            <div className="flex gap-1 mt-0.5">
                                                {hasTaller && (
                                                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-bg-principal' : 'bg-accent-verde'}`} />
                                                )}
                                                {hasSalud && (
                                                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-bg-principal' : 'bg-accent-rosa'}`} />
                                                )}
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-text-principal/10">
                            <span className="flex items-center gap-2 text-xs md:text-sm text-text-principal/60">
                                <span className="w-2.5 h-2.5 rounded-full bg-accent-verde inline-block" />
                                Talleres
                            </span>
                            <span className="flex items-center gap-2 text-xs md:text-sm text-text-principal/60">
                                <span className="w-2.5 h-2.5 rounded-full bg-accent-rosa inline-block" />
                                Salud
                            </span>
                        </div>
                    </div>

                    {/* Sidebar — selected day events */}
                    <div className="w-full lg:w-[40%]">
                        <h3 className="text-lg md:text-xl font-bold text-text-principal mb-4 capitalize">
                            {formatSelectedDate(selectedDate)}
                        </h3>

                        {selectedEvents.length === 0 ? (
                            <div className="bg-bg-secundario/30 rounded-2xl p-6 md:p-8 text-center border border-accent-rosa/10">
                                <span className="text-4xl block mb-3">🌿</span>
                                <p className="text-base text-text-principal/60">
                                    No hay actividades programadas para este día.
                                </p>
                                <p className="text-sm text-text-principal/40 mt-1">
                                    Seleccioná un día de lunes a viernes.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {selectedEvents.map((event) => (
                                    <EventCard key={event.activityId} event={event} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function EventCard({ event }: { event: CalendarEvent }) {
    const borderColor = event.category === 'salud' ? 'border-l-accent-rosa bg-accent-rosa/5' : 'border-l-accent-verde bg-bg-secundario/30';

    return (
        <div className={`rounded-xl border border-accent-rosa/10 border-l-4 ${borderColor} p-4 transition-all hover:shadow-md`}>
            <div className="flex items-start gap-3">
                <span className="text-xl md:text-2xl mt-0.5">{event.emoji}</span>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base md:text-lg text-text-principal leading-snug">
                        {event.title}
                    </h4>
                    <div className="flex flex-col gap-0.5 mt-1 text-sm text-text-principal/60">
                        <p className="flex items-center gap-1.5">
                            <span>⏰</span> {event.schedule}
                        </p>
                        {event.professor && (
                            <p className="flex items-center gap-1.5">
                                <span>👤</span> {event.professor}
                            </p>
                        )}
                    </div>
                    <a
                        href={getWhatsAppLink(event.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-verde hover:text-accent-verde/80 transition-colors mt-2"
                    >
                        💬 Consultar
                    </a>
                </div>
            </div>
        </div>
    );
}
