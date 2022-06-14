import styled from 'styled-components';

export const WordListContainer = styled.section`
  display: flex;
  margin: 20px 10px;

  width: 96%;
  height: 96%;

  max-height: 680px;

  overflow: auto;

  .infinite-scroll-component {
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;

    gap: 10px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #a9a9a9;
    border-radius: 20px;
  }
`;
