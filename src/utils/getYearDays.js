import { isYearLeap } from './';

const getYearDays = (year = new Date().getFullYear()) =>
  isYearLeap(year) ? 366 : 365;

export default getYearDays;
