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

interface ConfirmProps {
    disabled: boolean;
}

export const Confirm = styled.button<ConfirmProps>`
    color: ${props => props.disabled ? 'rgb(0, 0, 0, 0.5)' : 'black'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    border: none;
    background-color: ${props => props.disabled ? 'rgb(0, 0, 0, 0.2)' : '#FFCF00'};
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    padding: .75rem 2rem;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${props => props.disabled ? 'rgb(0, 0, 0, 0.2)' : 'rgb(255, 207, 0, 0.5)'};
    }
`;