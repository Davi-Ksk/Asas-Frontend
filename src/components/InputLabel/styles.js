import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  font-size: 1.6rem;
  font-family: 'Roboto';
  line-height: 100%;
  color: ${({ theme }) => theme.COLORS.LIGTH_400};

  margin-bottom: 8px;
`;