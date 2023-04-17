import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  padding: 5.6rem 2.8rem 2.4rem 2.8rem;
  width: 100%;
  height: 10.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};


  > button {
    style: none;
    background-color: transparent;
    border: none;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > svg {
    margin-right: 10.74px;
  }

  > h1 {
    font-family: 'Roboto';
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    line-height: 44px;
  }
`;

export const OrderCount = styled.div`

  position: relative;
  
  > button {
    style: none;
    background-color: transparent;
    border: none;

    > div {
      position: absolute;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 50px;
      width: 100%;
      padding: 0.1rem 0.55rem;

      > a {
        padding: 0;
      }

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }


`;