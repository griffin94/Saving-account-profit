export const SETTINGS_INITIAL_STATE = {
  accountInterest: 0.08,
  tax: 0.19,
};

export const SETTINGS_LABELS = {
  accountInterest: 'Oprocentowanie konta',
  tax: 'Podatek',
};

export const DAYS_IN_YEAR = ((year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 == 0 ? 366 : 365)(new Date().getFullYear());
