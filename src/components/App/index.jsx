import React, { useState } from 'react';
import { Contributions, Settings, Navigation } from '..';
import {
  INVESTMENTS_INITIAL_STATE,
  INVESTMENTS_NEW_CONTRIBUTION,
  SETTINGS_INITIAL_STATE,
} from '../../constans';
import cs from './app.module.scss';
import cx from 'classnames';

const App = () => {
  const [settings, setSettings] = useState(SETTINGS_INITIAL_STATE);
  const [investments, setInvestments] = useState(INVESTMENTS_NEW_CONTRIBUTION);

  const calculate = () => {};

  const changeSettings = (e) =>
    setSettings((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <div className={cx(cs.app)}>
      <Settings
        settings={settings}
        changeSettings={changeSettings}
        className={cx(cs.app__settings)}
      />
      <Contributions
        investments={investments}
        className={cx(cs.app__contribution)}
      />
      <Navigation className={cx(cs.app__navigation)} />
    </div>
  );
};

export default App;
