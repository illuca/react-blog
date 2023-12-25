
import axios from 'axios';


export const apiUrl = 'http://localhost:7001/admin'

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