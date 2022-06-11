import axios, { AxiosInstance } from 'axios';

export default async function yourDictionary(): Promise<AxiosInstance> {
  return axios.create({
    baseURL: `http://localhost:3333`,
  });
}
