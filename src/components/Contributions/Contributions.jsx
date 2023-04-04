import cx from 'classnames';
import cs from './contributions.module.scss';
import { CONTRIBUTIONS_LABELS, FIELDS } from '../../constans';
import { getInputType } from '../../utils';
import { Textfield } from '..';

const Contributions = ({
  actions = {},
  errors = [],
  className,
  contributions = [],
  touched = [],
}) => {
  return (
    <div className={cx(cs.contributions, className)}>
      <h2 className={cx(cs.contributions__heading)}>Wkłady</h2>
      <ul className={cx(cs.contributions__list)}>
        {contributions.length ? (
          contributions.map((contribution, index) => (
            <li
              key={contribution.id}
              className={cx(cs.contributions__item)}
            >
              {Object.entries(CONTRIBUTIONS_LABELS).map(([key, label]) => (
                <Textfield
                  className={cx(cs.contributions__textfield)}
                  error={touched[index]?.[key] && errors[index]?.[key]}
                  key={key}
                  label={label}
                  name={`${FIELDS.CONTRIBUTIONS}[${index}].${key}`}
                  onBlur={actions.handleBlur}
                  onChange={actions.handleChange}
                  type={getInputType(key)}
                  value={contribution[key]}
                />
              ))}
              <button
                type='button'
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
