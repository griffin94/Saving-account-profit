import React from 'react';
import cs from './settings.module.scss';
import cx from 'classnames';
import { SETTINGS_LABELS } from '../../constans';
import { Textfield } from '..';

const Settings = ({ settings = [], changeSettings }) => {
  return (
    <div className={cx(cs.settings)}>
      <h2 className={cx(cs.settings__heading)}>Ustawienia</h2>
      <form className={cx(cs.settings__form)}>
        {Object.entries(settings).map(([key, value]) => (
          <Textfield
            name={key}
            value={value}
            label={SETTINGS_LABELS[key]}
            onChange={changeSettings}
          />
        ))}
      </form>
    </div>
  );
};

export default Settings;
