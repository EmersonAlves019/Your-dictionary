import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IWordInfos {
  phonetic: string | null;
  word: string | null;
  audio: string | null;
  definition: string | null;
  example: string | null;
  synonyms: string[] | null;
}
export interface IYourDictionaryContext {
  wordList: string[] | null;
  setWordList: Dispatch<SetStateAction<string[]>>;
  wordSelected: string | null | undefined;
  setWordSelected: Dispatch<SetStateAction<string>>;
  wordInfos: IWordInfos | null | undefined;
  setWordInfos: Dispatch<SetStateAction<IWordInfos | null | undefined>>;
  wordHistory: string[] | null;
  setWordHistory: Dispatch<SetStateAction<string[]>>;
  setPage: Dispatch<SetStateAction<number>>;
  favoriteWords: string[] | null;
  setFavoriteWords: Dispatch<SetStateAction<string[]>>;
}

export interface IHookProvider {
  children: ReactNode;
}
