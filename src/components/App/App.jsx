import React, { useState } from 'react';
import { Contributions, Settings, Navigation } from '..';
import {
  INVESTMENTS_INITIAL_STATE,
  INVESTMENTS_NEW_CONTRIBUTION,
  SETTINGS_INITIAL_STATE,
} from '../../constans';
import cs from './app.module.scss';
import cx from 'classnames';
import { generateID } from '../../helpers';

const App = () => {
  const [settings, setSettings] = useState(SETTINGS_INITIAL_STATE);
  const [investments, setInvestments] = useState(INVESTMENTS_INITIAL_STATE);

  const calculateProfit = () => {};

  const addContribution = () =>
    setInvestments((prevState) => [
      ...prevState,
      {
        ...INVESTMENTS_NEW_CONTRIBUTION,
        id: generateID(prevState),
      },
    ]);

  const changeSettings = (e) =>
    setSettings((prevState) => ({
      ...prevState,
      [e.target.name]: parseFloat(e.target.value),
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
      <Navigation
        className={cx(cs.app__navigation)}
        addContribution={addContribution}
        calculateProfit={calculateProfit}
      />
    </div>
  );
};

export default App;