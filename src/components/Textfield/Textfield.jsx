import React, { useId } from 'react';
import cx from 'classnames';
import cs from './textfield.module.scss';

const Textfield = ({
  className,
  error,
  label,
  name,
  onBlur,
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
        onBlur={onBlur}
        onChange={onChange}
        className={cx(cs.textfield__input)}
      />
      {error ? <span className={cx(cs.textfield__error)}>{error}</span> : null}
    </div>
  );
};

export default Textfield;
