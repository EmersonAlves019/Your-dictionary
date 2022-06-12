import styled from 'styled-components';

export const HomePageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 650px;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;
