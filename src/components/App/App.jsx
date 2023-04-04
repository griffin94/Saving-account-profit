import cs from './app.module.scss';
import cx from 'classnames';
import { Contributions, Settings, Navigation } from '..';
import { FIELDS } from '../../constans';
import { useContributionForm } from '../../hooks';

const App = () => {
  const { formik, addContribution, removeContribution } = useContributionForm();
  return (
    <form className={cx(cs.app)}>
      <Settings
        actions={{
          handleBlur: formik.handleBlur,
          handleChange: formik.handleChange,
        }}
        className={cx(cs.app__settings)}
        errors={formik.errors?.[FIELDS.SETTINGS]}
        touched={formik.touched?.[FIELDS.SETTINGS]}
        settings={formik.values[FIELDS.SETTINGS]}
      />
      <Contributions
        actions={{
          handleBlur: formik.handleBlur,
          handleChange: formik.handleChange,
          removeContribution,
        }}
        className={cx(cs.app__contribution)}
        contributions={formik.values[FIELDS.CONTRIBUTIONS]}
        errors={formik.errors?.[FIELDS.CONTRIBUTIONS]}
        touched={formik.touched?.[FIELDS.CONTRIBUTIONS]}
      />
      <Navigation
        actions={{
          addContribution,
          calculateProfit: formik.handleSubmit,
        }}
        className={cx(cs.app__navigation)}
      />
    </form>
  );
};

export default App;
