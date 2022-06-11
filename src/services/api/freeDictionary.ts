import axios, { AxiosInstance } from 'axios';

export default async function freeDictionary(): Promise<AxiosInstance> {
  return axios.create({
    baseURL: 'https://api.dictionaryapi.dev/api/v2',
  });
}
