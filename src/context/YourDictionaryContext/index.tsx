import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react';

import { getWordInfos } from '../../services/providers/freeDictionaryProvider';
import {
  getWordHistory,
  getWordList,
  saveWord,
} from '../../services/providers/yourDictionaryProvider';
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
  const [wordHistory, setWordHistory] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(200);
  const { userSession } = useUserInfos();

  useEffect(() => {
    (async () => {
      const res = await getWordList(page, size);
      res.success &&
        setWordList(prev => {
          return [...prev, ...res.data];
        });
    })();
  }, [page, size]);

  useEffect(() => {
    (async () => {
      const res = await getWordInfos(wordSelected);
      const wordInfosData = composeWordInfos(res.data);

      setWordInfos(wordInfosData);
    })();
  }, [wordSelected, wordSelected]);

  useEffect(() => {
    (async () => {
      if (userSession) {
        const res = await getWordHistory(userSession);
        const wordExists = wordHistory?.find((w: any) => {
          return w.word === wordSelected;
        });
        if (!wordExists) {
          setWordHistory([...res.data, { word: wordSelected }]);
          saveWord(wordSelected, false, userSession);
        }
      }
    })();
  }, [userSession, wordSelected]);

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
    };
  }, [wordList, wordSelected, wordInfos, wordHistory]);

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
