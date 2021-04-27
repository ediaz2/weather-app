import dayjs from 'dayjs';

const round = (num: number | null): number | string => {
  if (!num) return '';
  return Number(num?.toFixed(1));
};

const fmDate = (date: string): string => dayjs(date).format('ddd, d MMM');

export { fmDate, round };
