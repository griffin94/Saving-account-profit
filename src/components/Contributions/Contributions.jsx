import React from 'react';
import cx from 'classnames';
import cs from './contributions.module.scss';
import { CONTRIBUTIONS_LABELS, FIELDS } from '../../constans';
import { Textfield } from '..';

const Contributions = ({ actions = {}, className, contributions = [] }) => {
  return (
    <div className={cx(cs.contributions, className)}>
      <h2 className={cx(cs.contributions__heading)}>Wkłady</h2>
      <ul className={cx(cs.contributions__list)}>
        {contributions.length ? (
          contributions.map((contribution, index) => (
            <li
              key={index}
              className={cx(cs.contributions__item)}
            >
              {Object.entries(CONTRIBUTIONS_LABELS).map(([key, label]) => (
                <Textfield
                  className={cx(cs.contributions__textfield)}
                  key={key}
                  label={label}
                  name={`${FIELDS.CONTRIBUTIONS}[${index}].${key}`}
                  onChange={actions.handleChange}
                  type={key.toLowerCase().includes('date') ? 'date' : 'number'}
                  value={contribution[key]}
                />
              ))}
              <button
                className={cx(cs.contributions__button)}
                onClick={() => actions.removeContribution(contribution.id)}
              >
                X
              </button>
            </li>
          ))
        ) : (
          <p className={cx(cs.contributions__paragraph)}>
            Obecnie nie dodałeś jeszcze żadnych wkładów
          </p>
        )}
      </ul>
    </div>
  );
};

export default Contributions;
