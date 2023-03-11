import React from 'react';
import { Textfield } from '../';
import { INVESTMENTS_LABELS } from '../../constans';
import cx from 'classnames';
import cs from './item.module.scss';

const Item = ({ changeContribution, removeContribution, id, ...props }) => (
  <div className={cx(cs.item)}>
    {Object.entries(INVESTMENTS_LABELS).map(([key, label]) => (
      <Textfield
        key={key}
        name={key}
        value={props[key]}
        label={label}
        onChange={() => changeContribution(id)}
      />
    ))}
    <button
      className={cx(cs.item__button)}
      onClick={() => removeContribution(id)}
    >
      X
    </button>
  </div>
);

export default Item;
