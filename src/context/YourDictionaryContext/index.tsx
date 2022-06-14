import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react';

import { addWordToHistory } from '../../repository/wordsRepository';
import { getWordInfos } from '../../services/providers/freeDictionaryProvider';
import { getWordList } from '../../services/providers/yourDictionaryProvider';
import composeWordInfos from '../../shared/functions/composeWordInfos';
import { useUserInfos } from '../UserProvider';
import { IHookProvider, IWordInfos, IYourDictionaryContext } from './@types';

export const YourDictionaryContext = createContext(
  {} as IYourDictionaryContext,
);

const YourDictionaryProvider: React.FC<IHookProvider> = ({
  children,
}): React.ReactElement => {
  const [wordList, setWordList] = useState<string[]>([]);
  const [wordSelected, setWordSelected] = useState<string>('Hello');
  const [wordInfos, setWordInfos] = useState<IWordInfos | null | undefined>();
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);
  const [wordHistory, setWordHistory] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(100);
  const { userSession } = useUserInfos();

  useEffect(() => {
    (async () => {
      const res = await getWordList(page, size);
      res.success &&
        setWordList(prev => {
          return [...prev, ...res.data];
        });
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      if (userSession) {
        const res = await getWordInfos(wordSelected);
        const wordInfosData = composeWordInfos(res.data);

        setWordInfos(wordInfosData);
      }
    })();
  }, [wordSelected, userSession]);

  useEffect(() => {
    if (userSession) {
      const newHistory = addWordToHistory(userSession, wordSelected);
      console.log(newHistory);
      setWordHistory(newHistory);
    }
  }, [wordSelected, userSession]);

  const value = useMemo(() => {
    return {
      wordList,
      setWordList,
      wordSelected,
      setWordSelected,
      wordInfos,
      setWordInfos,
      wordHistory,
      setWordHistory,
      setPage,
      favoriteWords,
      setFavoriteWords,
    };
  }, [wordList, wordSelected, wordInfos, wordHistory, favoriteWords]);

  return (
    <YourDictionaryContext.Provider value={value}>
      {children}
    </YourDictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  return useContext(YourDictionaryContext);
};

export default YourDictionaryProvider;
