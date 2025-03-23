import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { ptBR } from "react-day-picker/locale";
import 'react-day-picker/dist/style.css';

import { CalendarWrapper } from './style';

interface Props {
    selectedDate: Date | undefined
    setSelectedDate: Dispatch<SetStateAction<Date | undefined>>
    availableDates: Date[]
}

export default function SheduleCalendar({ selectedDate, setSelectedDate, availableDates }: Props) {
    const [disabledDates, setDisabledDates] = useState<Date[]>([]);
    
    // Configura o mês alvo (próximo mês)
    const targetMonth = new Date();
    targetMonth.setDate(1);
    targetMonth.setMonth(targetMonth.getMonth() + 1);
    
    useEffect(() => {
        // Cria todas as datas do próximo mês
        const nextMonth = new Date();
        nextMonth.setDate(1);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        
        const year = nextMonth.getFullYear();
        const month = nextMonth.getMonth();
        
        // Último dia do próximo mês
        const lastDay = new Date(year, month + 1, 0).getDate();
        
        // Array com todas as datas do próximo mês
        const allDatesNextMonth: Date[] = [];
        for (let day = 1; day <= lastDay; day++) {
            allDatesNextMonth.push(new Date(year, month, day));
        }
        
        // Função para verificar se uma data está no array availableDates
        const isDateAvailable = (date: Date) => {
            return availableDates.some(availableDate => 
                availableDate.getDate() === date.getDate() &&
                availableDate.getMonth() === date.getMonth() &&
                availableDate.getFullYear() === date.getFullYear()
            );
        };
        
        // Filtra as datas que não estão disponíveis
        const dates = allDatesNextMonth.filter(date => !isDateAvailable(date));
        
        setDisabledDates(dates);
        const tempElement = document.querySelector(".rdp-caption_label");
        if (tempElement) {
            tempElement.innerHTML = tempElement.innerHTML[0].toUpperCase() + tempElement.innerHTML.slice(1);
        }
    }, [selectedDate, availableDates]);

    const handleDayClick = (day: Date | undefined) => {
        setSelectedDate(day);
    };

    return (
        <CalendarWrapper>
            <DayPicker
                mode="single"
                locale={ptBR}
                onDayClick={(day) => handleDayClick(day === selectedDate ? undefined : day)}
                selected={selectedDate}
                startMonth={targetMonth}
                endMonth={targetMonth}
                disabled={disabledDates}
                hideNavigation
            />
        </CalendarWrapper>
    );
}