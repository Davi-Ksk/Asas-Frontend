import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.5rem;

  margin: 0 auto;
  width: 400px;
  height: 95%;

  border-radius: 8px;

  > img {
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    margin-bottom: 2rem;
  }

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;