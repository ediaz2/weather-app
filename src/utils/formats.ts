import dayjs from 'dayjs';

const round = (num?: number, dec = 2): number | string => {
  if (!num) return '';
  return Number(num?.toFixed(dec));
};

const fmDate = (date?: Date): string => {
  if (!date) return '';
  return dayjs(date).format('ddd, d MMM');
};

export { fmDate, round };
