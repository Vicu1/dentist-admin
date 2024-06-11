import { AxiosResponse } from 'axios';

import http from '@/service/index';
import stringifyParams from '@/utils/stringifyParams';

const getData = async (endpoint: string, params: any) => {
  try {
    const paramsString = stringifyParams(params);
    let response: AxiosResponse;
    if(paramsString) {
      response = await http.get(`${endpoint}?${paramsString}`);
    } else {
      response = await http.get(endpoint);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getData;
