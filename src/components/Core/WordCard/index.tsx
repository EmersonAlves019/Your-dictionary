import React from 'react';

import { useDictionary } from '../../../context/YourDictionaryContext';
import * as S from './styles';

interface IWordCardProps {
  word: string;
}

const WordCard: React.FC<IWordCardProps> = ({ word }: IWordCardProps) => {
  const { setWordSelected } = useDictionary();
  return (
    <S.WordCardContainer
      type="button"
      onClick={() => {
        setWordSelected(word);
      }}
    >
      {word.toUpperCase()}
    </S.WordCardContainer>
  );
};

export default WordCard;
