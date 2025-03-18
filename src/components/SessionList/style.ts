import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 3.5rem);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const TableBox = styled.div`
    width: 90%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 1px solid #888;
    border-radius: 5px;
`;

export const Table = styled.table`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-collapse: collapse;
`;

export const Thead = styled.thead`
    td {
        transition: border-left .2s;
        border-left: solid 3px transparent;
        border-right: none;

        &:hover {
            border-left: solid 3px #CCC;
            border-right: none;
        }
    }

    tr:hover {
        background-color: transparent;
    }
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    border-bottom: 1px solid #CCC;
    margin-top: 1rem;
    transition: background-color .3s ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const Td = styled.td`
    padding: .3rem 0 .3rem .75rem;
    width: fit-content;
`;

export const ActionTd = styled(Td)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100%;
`;

export const ActionButton = styled.img`
    margin: auto;
    width: 1.25rem;
    height: 1.25rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    transition: background-color .2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }
`;

export const Text = styled.p`
    margin: 0;
    font-size: 1.1rem;
`;

export const Title = styled.span` //some comentary
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    width: fit-content;
`;

export const Navbox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const NavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    border: none;
    background-color: rgb(0, 0, 0, 0.1);
    padding: .5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 10px;
    transition: background-color .2s ease-in-out;

    &:hover {
        background-color: rgb(0, 0, 0, 0.2);
    }
`;