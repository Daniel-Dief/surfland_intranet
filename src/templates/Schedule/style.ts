import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    height: calc(100vh - 3.5rem);
    margin: auto;
`;


export const Form = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
    padding: 2rem 0;
    gap: 5rem;
    border-radius: 10px;
`;

export const Select = styled.select``;

export const Confirm = styled.button`
    border: none;
    background-color: rgb(0, 0, 0, 0.1);
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    padding: .75rem 2rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgb(0, 0, 0, 0.2);
    }
`;