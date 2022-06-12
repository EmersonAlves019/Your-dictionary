import { getFromStorage, setToStorage } from '../shared/functions/storage';

export const getWordHistory = (userId: string) => {
  return getFromStorage(`user_${userId}_history`) || [];
};

export const addWordToHistory = (userId: string, word: string) => {
  const history = getWordHistory(userId);
  if (!history.includes(word)) {
    const newHistory = [...history, word];
    setToStorage(`user_${userId}_history`, newHistory);
    return newHistory;
  }
  return history;
};

export const getFavoriteWords = (userId: string) => {
  return getFromStorage(`user_${userId}_favorites`) || [];
};

export const addWordToFavorites = (userId: string, word: string) => {
  const favorites = getFavoriteWords(userId);
  if (!favorites.includes(word)) {
    const newFavorites = [...favorites, word];
    setToStorage(`user_${userId}_favorites`, newFavorites);
    return newFavorites;
  }
  return favorites;
};

export const removeWordFromFavorites = (userId: string, word: string) => {
  const favorites = getFavoriteWords(userId);
  const newFavorites = favorites.filter((w: string) => {
    return w !== word;
  });
  setToStorage(`user_${userId}_favorites`, newFavorites);
};
