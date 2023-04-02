import React, { useId } from 'react';
import cx from 'classnames';
import cs from './textfield.module.scss';

const Textfield = ({
  className,
  label,
  name,
  onChange,
  type = 'text',
  value,
}) => {
  const id = useId();
  return (
    <div className={cx(cs.textfield, className)}>
      <label
        htmlFor={id}
        className={cx(cs.textfield__label)}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={cx(cs.textfield__input)}
      />
    </div>
  );
};

export default Textfield;
