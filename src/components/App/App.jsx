import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { Contributions, Settings, Navigation } from '..';
import { CONTRIBUTION, FIELDS, SETTINGS } from '../../constans';
import cs from './app.module.scss';
import cx from 'classnames';
import { getProfit } from './../../utils';

const App = () => {
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

  return (
    <div className={cx(cs.app)}>
      <Settings
        className={cx(cs.app__settings)}
        settings={formik.values[FIELDS.SETTINGS]}
        actions={{
          handleChange: formik.handleChange,
        }}
      />
      <Contributions
        actions={{
          handleChange: formik.handleChange,
          removeContribution,
        }}
        contributions={formik.values[FIELDS.CONTRIBUTIONS]}
        className={cx(cs.app__contribution)}
      />
      <Navigation
        actions={{
          addContribution,
          calculateProfit: () =>
            getProfit({
              contributions: formik.values.contributions,
              settings: formik.values.settings,
            }),
        }}
        className={cx(cs.app__navigation)}
      />
    </div>
  );
};

export default App;
