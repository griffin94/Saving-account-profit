import { Contributions, Settings, Navigation, Profits } from '..';
import { FIELDS } from '../../constans';
import { useContributionForm } from '../../hooks';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

const App = () => {
  const { formik, profits, addContribution, removeContribution } =
    useContributionForm();
  return (
    <Container>
      <Accordion
        defaultActiveKey={['0']}
        alwaysOpen
      >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Ustawienia</Accordion.Header>
          <Accordion.Body>
            <Settings
              actions={{
                handleBlur: formik.handleBlur,
                handleChange: formik.handleChange,
              }}
              errors={formik.errors?.[FIELDS.SETTINGS]}
              settings={formik.values[FIELDS.SETTINGS]}
              touched={formik.touched?.[FIELDS.SETTINGS]}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Wkłady</Accordion.Header>
          <Accordion.Body>
            <Contributions
              actions={{
                handleBlur: formik.handleBlur,
                handleChange: formik.handleChange,
                removeContribution,
              }}
              contributions={formik.values[FIELDS.CONTRIBUTIONS]}
              errors={formik.errors?.[FIELDS.CONTRIBUTIONS]}
              touched={formik.touched?.[FIELDS.CONTRIBUTIONS]}
            />
            <Navigation
              actions={{
                addContribution,
                calculateProfit: formik.handleSubmit,
              }}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>Zyski</Accordion.Header>
          <Accordion.Body>
            <Profits profits={profits} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default App;
