import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > svg {
    margin-right: 10.74px;
    height: 50px;
    width: 50px;
    stroke: ${({ theme }) => theme.COLORS.LIGHT_100};
    fill: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    line-height: 44px;
    font-weight: 500;
  }
`;

