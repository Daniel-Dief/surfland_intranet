import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    transition: 0.3s;
    gap: 0.5rem;
    font-size: 1.25rem;
    padding: 0.5rem;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const Text = styled.p`
    margin: 0;
    padding: 0;
`