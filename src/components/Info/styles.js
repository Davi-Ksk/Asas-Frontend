import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > span {
    display: flex;

    font-size: 1.6rem;
    font-family: 'Roboto';
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGTH_400};
  
    margin-bottom: 8px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  

  margin-bottom: 3.2rem;
  border-radius: 8px;

  height: 4.8rem;
  width: 100%;

  padding: 1.6rem 1.4rem;
  
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;


  // &:hover {
  //     border-line-color: ${({ theme }) => theme.COLORS.LIGHT_400 };
  //     border-width: 0.5px;
  //     border-style: solid;
  //     border-radius: 8px;
  // }
`;