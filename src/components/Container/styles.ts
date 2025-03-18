import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15rem;
    border: 1px solid black;
    width: fit-content;
    padding: 1rem;
    border-radius: 15px;
    min-width: 15rem;
`;

export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
`;

export const Link = styled.a`
    font-size: 1.15rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 0.15rem 1rem;
    background-color: #FFCF00;
    border-radius: 15px;
`;