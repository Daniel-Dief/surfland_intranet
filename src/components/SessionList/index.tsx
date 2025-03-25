import { useEffect, useState } from 'react';

import { SmallIcon } from '../../common/styles/images';
import { Container, TableBox, Table, Thead, Tbody, Tr, Td, ActionTd, ActionButton, Title, Text, Navbox, NavButton } from './style';

import { useMySessions } from '../../hooks/useMySessions';
import requestCancelTicket from "../../services/tickets/cancelTicket.service";

import { formatDateDDMMYYYY, formatTimeHHMM, formatDateTimeComplete } from '../../common/utils/formatDateTime';

import trashImg from "../../assets/trash.png"
import previusImg from "../../assets/previus.png";
import nextImg from "../../assets/next.png";
import { toast } from 'react-toastify';

interface TicketsProps {
    TicketId: string,
    Wave: string,
    WaveDate: string,
    WaveTime: string,
    CreatedAt: string,
    Status: string,
}

export default function SessionList() {
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [myTickets, setMyTickets] = useState<TicketsProps[]>([]);
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const data = await useMySessions(page);
            setTotalPages(data.totalPages);
            setMyTickets(data.tickets);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [reload]);

    function handlePrevius() {
        if (page > 1) { setPage(page - 1) };
    }

    function handleNext() {
        if (totalPages > page) { setPage(page + 1) };
    }

    async function handleDelete(ticketId: number) {
        const response = await requestCancelTicket(ticketId)

        toast.warn(response.message + " " + response.ticketId);

        setReload(!reload);
    }

    return (
        <Container>
            <TableBox>
                <Table>
                    <Thead>
                        <Tr>
                            <Td><Title>Indentificador</Title></Td>
                            <Td><Title>Tipo de onda</Title></Td>
                            <Td><Title>Data marcada</Title></Td>
                            <Td><Title>Horário</Title></Td>
                            <Td><Title>Criado em</Title></Td>
                            <Td><Title>Status</Title></Td>
                            <Td><Title>Ações</Title></Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {myTickets.map(ticket => (
                            <Tr key={ticket.TicketId}>
                                <Td><Text>{ticket.TicketId}</Text></Td>
                                <Td><Text>{ticket.Wave}</Text></Td>
                                <Td><Text>{
                                    formatDateDDMMYYYY(
                                        new Date(ticket.WaveDate)
                                    )
                                }</Text></Td>
                                <Td><Text>{
                                    formatTimeHHMM(
                                        new Date(ticket.WaveTime)
                                    )
                                }</Text></Td>
                                <Td><Text>{
                                    formatDateTimeComplete(
                                        new Date(ticket.CreatedAt)
                                    )
                                }</Text></Td>
                                <Td><Text>{ticket.Status}</Text></Td>
                                <ActionTd>
                                    <ActionButton
                                        onClick={() => {
                                            if(ticket.Status == "Ativo") {
                                                handleDelete(
                                                    Number(ticket.TicketId)
                                                )
                                            }}}
                                        src={trashImg}
                                    />
                                </ActionTd>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableBox>
            <Navbox>
                <NavButton onClick={handlePrevius}>
                    <SmallIcon src={ previusImg }/>
                    Anterior
                </NavButton>
                <NavButton onClick={handleNext}>
                    Proxima
                    <SmallIcon src={ nextImg }/>
                </NavButton>
            </Navbox>
        </Container>
    )
}