import freeDictionary from '../api/freeDictionary';
import { IApiResult } from '../http/@types';
import request from '../http/request';

export const getWordInfos = async (word?: string): Promise<IApiResult> => {
  return await request(freeDictionary, `/entries/en/${word}`);
};
