import React from 'react';
import cx from 'classnames';
import cs from './contributions.module.scss';
import { Item } from './';

const Contributions = ({ contributions = [], changeContribution, removeContribution }) => {
  return (
    <div className={cx(cs.contributions)}>
      <h2 className={cx(cs.contributions__heading)}>Wkłady</h2>
      {contributions.length ? (
        contributions.map((contribution) => (
          <Item
            key={contribution.id}
            changeContribution={changeContribution}
            removeContribution={removeContribution}
            {...contribution}
          />
        ))
      ) : (
        <p className={cx(cs.contributions__paragraph)}>
          Obecnie nie dodałeś jeszcze żadnych wkładów
        </p>
      )}
    </div>
  );
};

export default Contributions;
