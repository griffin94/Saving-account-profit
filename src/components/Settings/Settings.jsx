import cs from './settings.module.scss';
import cx from 'classnames';
import { FIELDS, SETTINGS_LABELS } from '../../constans';
import { getInputType } from '../../utils';
import { Textfield } from '..';

const Settings = ({
  actions = {},
  errors = {},
  className,
  settings = [],
  touched = {},
}) => {
  return (
    <div className={cx(cs.settings, className)}>
      <h2 className={cx(cs.settings__heading)}>Ustawienia</h2>
      <div className={cx(cs.settings__form)}>
        {Object.entries(SETTINGS_LABELS).map(([key, label]) => (
          <Textfield
            className={cx(cs.settings__textfield)}
            error={touched[key] && errors[key]}
            key={key}
            label={label}
            name={`${FIELDS.SETTINGS}.${key}`}
            onBlur={actions.handleBlur}
            onChange={actions.handleChange}
            type={getInputType(key)}
            value={settings[key]}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
