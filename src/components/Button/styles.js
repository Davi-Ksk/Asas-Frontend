import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    
    height: 4.8rem;
    border: 0;
    padding: 1.2rem 1.6rem;
    border-radius: 5px;
    border: none;
    
    font-size: 1.4rem;
    font-family: 'Poppins';
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;