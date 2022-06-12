import React from 'react';

import WordCard from '../../Core/WordCard';
import * as S from './styles';

interface IWordListProps {
  wordList: string[] | null;
}
const WordList: React.FC<IWordListProps> = ({ wordList }) => {
  return (
    <S.WordListContainer id="infiniteContainer">
      {wordList?.map(word => {
        return <WordCard key={word + Math.random()} word={word} />;
      })}
    </S.WordListContainer>
  );
};

export default WordList;
