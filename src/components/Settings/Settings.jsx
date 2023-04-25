import Form from 'react-bootstrap/Form';
import cx from 'classnames';
import { FIELDS, SETTINGS_LABELS } from '../../constans';
import { getInputType } from '../../utils';
import { Textfield } from '..';

const Settings = ({
  actions = {},
  errors = {},
  settings = [],
  touched = {},
}) => (
  <Form
    className={cx(
      'd-flex',
      'flex-column',
      'align-items-stretch',
      'flex-md-row',
      'align-items-md-start',
      'gap-2'
    )}
  >
    {Object.entries(SETTINGS_LABELS).map(([key, label]) => (
      <Textfield
        className={cx('flex-grow-1')}
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
  </Form>
);

export default Settings;
