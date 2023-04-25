import { getDaysBetweenDates, getYearDays, round } from './';

const getProfit = ({ contributions, settings }) => {
  const { accountInterest, tax } = settings;

  const profits = contributions.reduce(
    (result, { id, contribution, capitalizationDate, receiptDate }) => {
      const contributionWorkingDays =
        getDaysBetweenDates({
          from: receiptDate,
          to: capitalizationDate,
        }) + 1;
      const profit = round(
        ((contribution * accountInterest * contributionWorkingDays) /
          getYearDays()) *
          (1 - tax),
        2
      );

      return [
        ...result,
        {
          id,
          contribution,
          contributionWorkingDays,
          profit,
        },
      ];
    },
    []
  );

  const totalProfit = profits.reduce(
    (result, { profit }) => round(result + profit, 2),
    0
  );

  console.log({
    profits,
    totalProfit,
  });

  return {
    profits,
    totalProfit,
  };
};

export default getProfit;
