import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { CONTRIBUTION, ERRORS, FIELDS, SETTINGS } from '../constans';
import { getProfit } from '../utils';
import { useState, useMemo } from 'react';

const schema = Yup.object().shape({
  [FIELDS.SETTINGS]: Yup.object().shape({
    accountInterest: Yup.number()
      .min(0.01, ERRORS.MIN)
      .max(1, ERRORS.MAX)
      .required(ERRORS.REQUIRED),
    tax: Yup.number()
      .min(0.01, ERRORS.MIN)
      .max(1, ERRORS.MAX)
      .required(ERRORS.REQUIRED),
  }),
  [FIELDS.CONTRIBUTIONS]: Yup.array().of(
    Yup.object().shape({
      contribution: Yup.number()
        .min(0.01, ERRORS.MIN)
        .required(ERRORS.REQUIRED),
      receiptDate: Yup.date().required(ERRORS.REQUIRED),
      capitalizationDate: Yup.date().when(
        'receiptDate',
        ([receiptDate], schema) =>
          receiptDate
            ? schema.min(receiptDate, ERRORS.MIN_DATE).required(ERRORS.REQUIRED)
            : schema.required(ERRORS.REQUIRED)
      ),
    })
  ),
});

const useContributionForm = () => {
  const [profits, setProfits] = useState({ profits: [], totalProfit: 0 });
  const formik = useFormik({
    initialValues: {
      [FIELDS.CONTRIBUTIONS]: [
        {
          ...CONTRIBUTION,
          id: uuidv4(),
        },
      ],
      [FIELDS.SETTINGS]: SETTINGS,
    },
    validationSchema: schema,
    onSubmit: (values) =>
      setProfits(
        getProfit({
          contributions: values.contributions,
          settings: values.settings,
        })
      ),
  });

  const addContribution = () => {
    formik.setValues((values) => ({
      ...values,
      [FIELDS.CONTRIBUTIONS]: [
        ...values[FIELDS.CONTRIBUTIONS],
        {
          ...CONTRIBUTION,
          id: uuidv4(),
        },
      ],
    }));
  };

  const removeContribution = (id) => {
    formik.setValues((values) => ({
      ...values,
      [FIELDS.CONTRIBUTIONS]: [
        ...values[FIELDS.CONTRIBUTIONS].filter(
          (contribution) => contribution.id !== id
        ),
      ],
    }));
  };

  return {
    formik,
    profits,
    addContribution,
    removeContribution,
  };
};

export default useContributionForm;
