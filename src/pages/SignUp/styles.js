import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > #logo {
        margin: 0 auto 0;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding-top: 0;
        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        > #logo {
            margin-top: -5.8rem;
            paddign 2rem;
        }

        
    }

`;

export const LoginWrapper = styled.div`

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: clamp(25rem, 100vw, 47.6rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 1.6rem 0 0 1.6rem;

    padding: 6.4rem;

    > h1 {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-bottom: 4.8rem;

        display: none;
    }

    
    @media (min-width: 768px) {
        
        width: 825px;
        height: 100%;
        > h1 {
            display: flex;
        } 
    }


`;

export const Form = styled.form`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    text-align: center;

    > input {
        width: clamp(30rem, 20rem + 15vw, 34rem);
    }

`;

export const InputWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;    
    }
`;

export const InputGrid = styled.div`
@media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 3fr 3fr;
    gap: 1.6rem;
}

`;