import dayjs from 'dayjs';
import {useLocation} from 'react-router-dom';

export const formatDate = (date) => {
  return dayjs(date).format('HH:mm, MMM DD, YYYY')
}



export function useQuery() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let params = {};

  for (let [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
}
