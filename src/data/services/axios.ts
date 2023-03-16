import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/',
});

export const get = <T>(url: string): Promise<AxiosResponse<T>> =>
  axiosInstance.get(url);
