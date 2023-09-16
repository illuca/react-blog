import dayjs from 'dayjs';

export const formatDate = (date) => {
  return dayjs(date).format('HH:mm, MMM DD, YYYY')
}
