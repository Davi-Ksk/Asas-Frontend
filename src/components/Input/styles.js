import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900 };
    color: ${({ theme }) => theme.COLORS.LIGHT_500 };

    margin-bottom: 3.2rem;
    border-radius: 8px;

    > input {
        height: 4.8rem;
        width: 100%;

        padding: 1.6rem 1.4rem;
        
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500 };
        }

            &:focus {
                border-line-color: ${({ theme }) => theme.COLORS.LIGHT_100 };
                border-width: 2px;
                border-style: solid;
                border-radius: 8px;
            }

    }
    
    > svg {
        margin-left: 1.6rem;
    }

    `;