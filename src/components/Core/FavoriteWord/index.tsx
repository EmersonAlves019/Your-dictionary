import React, { useEffect, useState } from 'react';

import { useUserInfos } from '../../../context/UserProvider';
import { useDictionary } from '../../../context/YourDictionaryContext';
import {
  addWordToFavorites,
  getFavoriteWords,
  removeWordFromFavorites,
} from '../../../repository/wordsRepository';
import * as S from './styles';

const FavoriteWord: React.FC = () => {
  const { userSession } = useUserInfos();
  const { wordSelected } = useDictionary();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteWords = getFavoriteWords(userSession);
    setIsFavorite(favoriteWords.includes(wordSelected));
  }, [wordSelected]);

  const toggleFavorite = () => {
    if (isFavorite && wordSelected) {
      removeWordFromFavorites(userSession, wordSelected);
    } else if (wordSelected) {
      addWordToFavorites(userSession, wordSelected);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <S.FavoriteWordContainer>
      {isFavorite ? (
        <S.FavoriteIcon onClick={toggleFavorite} />
      ) : (
        <S.FavoriteIconEmpty onClick={toggleFavorite} />
      )}
    </S.FavoriteWordContainer>
  );
};

export default FavoriteWord;
