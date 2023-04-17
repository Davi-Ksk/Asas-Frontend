import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    background: none;
    border: none;
    
    margin-top: 3.2rem;

    font-family: 'Poppins';
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.LIGHT_300 : theme.COLORS.LIGHT_100};
`;