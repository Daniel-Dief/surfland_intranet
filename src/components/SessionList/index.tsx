import { useState } from 'react';

import { SmallIcon } from '../../common/styles/images';
import { Container, TableBox, Table, Thead, Tbody, Tr, Td, ActionTd, ActionButton, Title, Text, Navbox, NavButton } from './style';

import { useMySessions } from '../../hooks/useMySessions';

import trashImg from "../../assets/trash.png";
import previusImg from "../../assets/previus.png";
import nextImg from "../../assets/next.png";
import requestMyWaves from '../../services/waves/myWaves.service';

export default function SessionList() {
    const [page, setPage] = useState<number>(1);

    requestMyWaves();

    function handlePrevius() {
        if (page > 1) { setPage(page - 1) };
    }

    function handleNext() {
        //responseJson.totalPages > page
        if (true) { setPage(page + 1) };
    }

    function handleDelete(id: number) {
        console.log('Delete: ' + id)
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