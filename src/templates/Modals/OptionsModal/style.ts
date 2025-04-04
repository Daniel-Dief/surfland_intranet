import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    width: 40%;
    background-color: #FFF;
    border-radius: 15px;
    border: 1px solid #000;
    padding: 1rem 2rem;
`;

export const TitleBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const CloseButton = styled.img`
    border: none;
    background-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    transition: .3s ease-in-out ;

    &:hover {
        transform: rotate(90deg);
    }
`;

export const OptionBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
`