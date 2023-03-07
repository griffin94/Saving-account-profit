import React from 'react';
import cx from 'classnames';
import cs from './contributions.module.scss';
import { Item } from './';

const Contributions = ({ investments = [] }) => {
  return (
    <div className={cx(cs.contributions)}>
      <h2 className={cx(cs.contributions__heading)}>Wkłady</h2>
      {investments.length ? (
        investments.map((investment) => <Item {...investment} />)
      ) : (
        <p className={cx(cs.contributions__paragraph)}>Obecnie nie dodałeś jeszcze żadnych wkładów</p>
      )}
    </div>
  );
};

export default Contributions;
