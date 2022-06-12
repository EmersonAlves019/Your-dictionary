import styled from 'styled-components';

export const WordListContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;

  width: 100%;
  height: 100%;

  max-height: 680px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background: #a9a9a9;
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;
