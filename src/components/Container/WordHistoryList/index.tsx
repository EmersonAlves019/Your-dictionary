import React from 'react';

import WordCard from '../../Core/WordCard';
import * as S from './styles';

interface IWordListProps {
  wordList: any;
}
const WordHistoryList: React.FC<IWordListProps> = ({ wordList }) => {
  return (
    <S.WordListContainer id="infiniteContainer">
      {wordList?.map(({ word }: any) => {
        return <WordCard key={word + Math.random()} word={word} />;
      })}
    </S.WordListContainer>
  );
};

export default WordHistoryList;
