/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';


const $API_HOST = process.env.REACT_APP_BASE_URL;


export const $AuthHeader = {
  Accept: 'application/json',
};

export const AxiosHost = axios.create({
  baseURL: $API_HOST,
  headers: $AuthHeader,
});
