import { Dispatch, SetStateAction, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { ptBR } from "react-day-picker/locale";
import 'react-day-picker/dist/style.css';

import { CalendarWrapper } from './style';

interface Props {
    setSelectedDate : Dispatch<SetStateAction<Date | undefined>>
}

export default function SheduleCalendar( { setSelectedDate } : Props ) {
    const targetMonth = new Date();
    targetMonth.setDate(1);
    targetMonth.setMonth(targetMonth.getMonth() + 1);

    const handleDayClick = (day: Date) => {
        setSelectedDate(day);
    };

    useEffect(() => {
        const tempElement = document.querySelector(".rdp-caption_label");
        if(tempElement) {
            tempElement.innerHTML = tempElement.innerHTML[0].toUpperCase() + tempElement.innerHTML.slice(1);
        }
    }, [])

    return (
        <CalendarWrapper>
            <DayPicker
                mode="single"
                locale={ptBR}
                onDayClick={handleDayClick}
                startMonth={targetMonth}
                endMonth={targetMonth}
                hideNavigation
            />
        </CalendarWrapper>
    );
}