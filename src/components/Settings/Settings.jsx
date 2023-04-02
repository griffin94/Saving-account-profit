import React from 'react';
import cs from './settings.module.scss';
import cx from 'classnames';
import { FIELDS, SETTINGS_LABELS } from '../../constans';
import { Textfield } from '..';

const Settings = ({ actions = {}, className, settings = [] }) => {
  return (
    <div className={cx(cs.settings, className)}>
      <h2 className={cx(cs.settings__heading)}>Ustawienia</h2>
      <form className={cx(cs.settings__form)}>
        {Object.entries(SETTINGS_LABELS).map(([key, label]) => (
          <Textfield
            className={cx(cs.settings__textfield)}
            key={key}
            label={label}
            name={`${FIELDS.SETTINGS}.${key}`}
            onChange={actions.handleChange}
            type='number'
            value={settings[key]}
          />
        ))}
      </form>
    </div>
  );
};

export default Settings;
