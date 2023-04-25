import cx from 'classnames';
import cs from './contributions.module.scss';
import { CONTRIBUTIONS_LABELS, FIELDS } from '../../constans';
import { getInputType } from '../../utils';
import { Textfield } from '..';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contributions = ({
  actions = {},
  errors = [],
  contributions = [],
  touched = [],
}) => (
  <Form>
    {contributions.length ? (
      contributions.map((contribution, index) => (
        <div
          className={cx(
            'd-flex',
            'flex-column',
            'align-items-stretch',
            'flex-md-row',
            'align-items-md-start',
            'gap-2',
            index !== 0 && 'mt-5',
            index !== 0 && 'mt-md-3'
          )}
          key={contribution.id}
        >
          {Object.entries(CONTRIBUTIONS_LABELS).map(([key, label]) => (
            <Textfield
              className={cx('flex-grow-1', 'w-100')}
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
          <Button
            className={cx(cs.button)}
            onClick={() => actions.removeContribution(contribution.id)}
            size='md'
            type='button'
            variant='danger'
          >
            X
          </Button>
        </div>
      ))
    ) : (
      <p className={cx('text-center', 'm-0')}>
        Obecnie nie dodano jeszcze żadnych wkładów
      </p>
    )}
  </Form>
);

export default Contributions;
