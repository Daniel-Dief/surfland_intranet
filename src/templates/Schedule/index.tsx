import { useState, FormEvent, useRef } from "react";

import Header from "../../components/Header";
import { Container, Form, Confirm } from "./style";
import Select from "../../components/Select";

import SheduleCalendar from "../../components/SheduleCalendar";

export default function Schedule() {
    const [ selectedDate, setSelectedDate ] = useState<Date | undefined>(undefined);
    const waveRef = useRef<HTMLSelectElement>(null);
    const hourRef = useRef<HTMLSelectElement>(null);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log({
            wave: waveRef.current?.value,
            hour: hourRef.current?.value,
            date: selectedDate?.toISOString()
        })
    }

    return(
        <>
            <Header />
            <Container>
                <Form onSubmit={ handleSubmit }>
                    <Select
                        selectRef={ waveRef }
                        options={[
                            { label: "Wave 1", value: "1" },
                            { label: "Wave 2", value: "2" },
                            { label: "Wave 3", value: "3" }
                        ]}
                    />
                    <Select
                        selectRef={ hourRef }
                        options={[
                            { label: "08:00", value: "08:00" },
                            { label: "09:00", value: "09:00" },
                            { label: "10:00", value: "10:00" }
                        ]}
                    />
                    <Confirm>
                        Agendar
                    </Confirm>
                </Form>
                <SheduleCalendar
                    setSelectedDate={ setSelectedDate }
                />
            </Container>
        </>
    )
}