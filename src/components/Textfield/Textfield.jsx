import Form from 'react-bootstrap/Form';
import { useId } from 'react';
import cx from 'classnames';

const Textfield = ({ className, error, label, ...props }) => {
  const id = useId();
  return (
    <Form.Group
      className={cx(className)}
      controlId={id}
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        isInvalid={error}
        {...props}
      />
      <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Textfield;
