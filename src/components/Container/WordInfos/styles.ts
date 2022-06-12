import styled from 'styled-components';

export const WordInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 80%;
  max-width: 550px;
  max-height: 800px;

  background-color: #1565c0;
  box-shadow: 0 5px 10px 0 #a9a9;

  .MuiPaper-root {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #1565c0;

    width: 90%;
    position: relative;
    color: #fff;
  }

  .MuiTypography-body1 {
    background: #1565c0;
  }

  @media (max-width: 1100px) {
    height: 40%;
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 40%;
    width: 100%;
    max-width: 100%;
  }
`;

export const WordInfosContent = styled.section`
  height: 48px;
  margin: 16px 0;
  p {
    background-color: white;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
