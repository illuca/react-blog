import {apiUrl} from '../services/services';
import axios from 'axios';

export default async function request(
  url = '',
  options = {},
) {
  const { headers: headersParams = {}, config = {}, ...rest } = options;

  return axios(apiUrl + url, {
    method: 'GET',
    ...rest
  });
}