const isYearLeap = (year = new Date().getFullYear()) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 == 0;

export default isYearLeap;
