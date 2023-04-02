const MILISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

const getDaysBetweenDates = ({ from, to }) => {
  const date1 = new Date(from).getTime();
  const date2 = new Date(to).getTime();
  const result = (date2 - date1) / MILISECONDS_IN_DAY;
  return result;
};

export default getDaysBetweenDates;
