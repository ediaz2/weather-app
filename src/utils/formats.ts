/* eslint-disable no-use-before-define */
import dayjs from 'dayjs';

const convertToF = (
  value?: number,
  isConvert?: boolean,
  dec?: number,
): number => {
  if (isConvert) return round(value, dec);
  return round((Number(value) * 9) / 5 + 32, dec);
};

const round = (num?: number, dec = 1): number => {
  if (!num) return 0;
  return Number(num?.toFixed(dec));
};

const fmDate = (date?: Date): string => {
  if (!date) return '';
  return dayjs(date).format('ddd, D MMM');
};

export { convertToF, fmDate, round };
