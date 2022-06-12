import styled from 'styled-components';

export const WordCardContainer = styled.button`
  margin: 4px;
  width: 45%;
  min-width: 45%;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 4px;
  height: 40px;
  color: #1565c0;
  background-color: #fcfdff;
  border: 1px solid #4196f2;
  font-size: 0.9rem;

  &:hover {
    border: 1px solid #1565c0;
    background-color: #eff6ff;
  }

  &:active {
    background-color: #cee5ff;
  }
`;
