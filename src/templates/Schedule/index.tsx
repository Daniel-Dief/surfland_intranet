import { useState, FormEvent, useRef, useEffect } from "react";

import Header from "../../components/Header";
import { Container, Form, Confirm } from "./style";
import Select from "../../components/Select";

import SheduleCalendar from "../../components/SheduleCalendar";
import requestAvailabilityDates, { responseProps as responsePropsDates } from "../../services/availability/availabilityDates.service";
import requestAvailabilityWaves, { responseProps as responsePropsWaves } from "../../services/availability/availabilityWaves.service";
import requestAvailabilitySchedules from "../../services/availability/availabilitySchedules.service";

import requestScheduleSession from "../../services/availability/scheduleSession.service";
import { toast } from "react-toastify";

export default function Schedule() {
    const [ selectedDate, setSelectedDate ] = useState<Date | undefined>(undefined);
    const [ waves, setWaves ] = useState<responsePropsWaves[] | null>(null);
    const [ schedules, setSchedules ] = useState<string[]>([]);
    const [ dates, setDates ] = useState<responsePropsDates[]>([]);
    const [ formOk, setFormOk ] = useState<boolean>(false);

    const hourRef = useRef<HTMLSelectElement>(null);
    const waveRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if(waves === null) {
            requestAvailabilityWaves()
                .then(setWaves)
        }
        handleChange();
    }, [selectedDate])

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const waveId = Number(waveRef.current?.value);
        const waveTime = hourRef.current?.value;
        const waveDate = selectedDate?.toISOString()

        if(!waveId || !waveTime || !waveDate) return;

        const response = await requestScheduleSession(
            waveId,  
            waveTime,
            waveDate
        );

        if(!response.ticketId) {
            toast.error(response.message);
        } else {
            toast.success(response.message + " - Ticket: " + response.ticketId);
        }
    }

    function handleSchedulesReload() {
        const waveId = waveRef.current?.value;

        if(!waveId) return;

        setSchedules([]);
        setDates([]);
        setSelectedDate(undefined);
        requestAvailabilitySchedules(Number(waveId))
            .then(setSchedules)
    }

    function handleDatesReload() {
        const waveId = waveRef.current?.value;
        const schedule = hourRef.current?.value;

        if(!waveId || !schedule) return;

        requestAvailabilityDates(Number(waveId), schedule)
            .then(setDates)
    }

    function handleChange() {
        if(
            waveRef.current?.value &&
            waveRef.current?.value != "Selecione uma sessão" &&
            hourRef.current?.value &&
            hourRef.current?.value != "Selecione um horário" &&
            selectedDate
        ) {
            setFormOk(true);
        } else {
            setFormOk(false);
        }
    }

    return(
        <>
            <Header />
            <Container>
                <Form onSubmit={ handleSubmit } onChange={ handleChange }>
                    <Select
                        title="Selecione uma sessão"
                        onChange={ handleSchedulesReload }
                        selectRef={ waveRef }
                        options={
                            waves === null ? [] :
                            waves.map(wave => ({
                                label: wave.Name,
                                value: wave.WaveId.toString()
                            }))
                        }
                    />
                    <Select
                        title="Selecione um horário"
                        onChange={ handleDatesReload }
                        selectRef={ hourRef }
                        options={schedules.map(schedule => ({
                            label: schedule,
                            value: schedule
                        }))}
                    />
                    <Confirm
                        disabled={ !formOk }
                    >
                        Agendar
                    </Confirm>
                </Form>
                <SheduleCalendar
                    selectedDate={ selectedDate }
                    setSelectedDate={ setSelectedDate }
                    availableDates={ dates.map(date => new Date(date.WaveDate)) }
                />
            </Container>
        </>
    )
}