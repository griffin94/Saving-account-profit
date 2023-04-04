export const FIELDS = {
  CONTRIBUTIONS: 'contributions',
  SETTINGS: 'settings',
};

export const CONTRIBUTION = {
  contribution: '',
  receiptDate: '',
  capitalizationDate: '',
};

export const SETTINGS = {
  accountInterest: 0.08,
  tax: 0.19,
};

export const SETTINGS_LABELS = {
  accountInterest: 'Oprocentowanie konta',
  tax: 'Podatek',
};

export const CONTRIBUTIONS_LABELS = {
  contribution: 'Wkład',
  receiptDate: 'Data wpłaty',
  capitalizationDate: 'Data kapitalizacji',
};

export const ERRORS = {
  REQUIRED: 'Uzupełnij pole',
  MAX: 'Wartość nie może być większa niż ${max}',
  MIN: 'Wartość nie może być mniejsza niż ${min}',
  MIN_DATE: 'Data nie może być wcześniejsza niż ${min}',
};
