import React, {useState} from 'react'
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    CircularProgress,
    Container,
    Grid
  } from '@material-ui/core';
  import { Formik, Form } from 'formik';
import axios from 'axios'

import ContactInfo from './Steps/ContactInfo';
import Areas from './Steps/Areas';
import Address from './Steps/Address';
import Password from './Steps/Password';
import Completed from './Steps/Completed';

import useStyles from './styles';

import checkoutFormModel from './FormModel/checkoutFormModel'
import validationSchema from './FormModel/validationSchema'
import formInitialValues from './FormModel/formInitialValues'

const steps = ['CONTACT INFO', 'AREAS', 'ADDRESS', 'PASSWORD', 'COMPLETED']
const { formId, formField } = checkoutFormModel; 

function _renderStepContent(step) {
    switch (step) {
        case 0:
            return <ContactInfo formField={formField} />;
        case 1:
            return <Areas formField={formField} />;
        case 2:
            return <Address formField={formField} />;
        case 3:
            return <Password formField={formField} />;
        default:
            return <Completed />;
    }
}

export default function RegForm() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validationSchema[activeStep]
    const isLastStep = activeStep === steps.length - 2;

    function _header(activeStep) {
      switch (activeStep){
        case 0: 
          return (<Typography component="h1" variant="h6" align="left">
          STEP 1: Contact Info
        </Typography>);
        case 1: 
          return (<Typography component="h1" variant="h6" align="left">
          STEP 2: Ares
        </Typography>);
        case 2: 
          return (<Typography component="h1" variant="h6" align="left">
          STEP 3: Address
          </Typography>);
        case 3: 
          return (<Typography component="h1" variant="h6" align="left">
          STEP 4: Password
        </Typography>);
        default:
          return (<Typography component="h1" variant="h6" align="left">
          
        </Typography>);
      }
    }

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function _submitForm(values, action) {
      const user = {
        salutation: values.salutation,
        firstName: values.firstName,
        secondName: values.secondName,
        lastName: values.lastName,
        company: values.company,
        title: values.title,
        email: values.email,
        phone: values.phone,
        fax: values.fax,
        mobile: values.mobile,
        Finance: values.Finance,
        Operations: values.Finance,
        IT: values.IT,
        Sales: values.Sales,
        Administrative: values.Administrative,
        Legal: values.Legal,
        Marketing: values.Marketing,
        comments: values.comments,
        country: values.country,
        officeName: values.officeName,
        address: values.address,
        postalCode: values.postalCode,
        city: values.city,
        state: values.state,
        password: values.password,
      }
      console.log(user);
      
      try {
          axios
            .post('http://localhost:4000/users/add',
            {
              salutation: values.salutation,
              firstName: values.firstName,
              secondName: values.secondName,
              lastName: values.lastName,
              company: values.company,
              title: values.title,
              email: values.email,
              phone: values.phone,
              fax: values.fax,
              mobile: values.mobile,
              Finance: values.Finance,
              Operations: values.Finance,
              IT: values.IT,
              Sales: values.Sales,
              Administrative: values.Administrative,
              Legal: values.Legal,
              Marketing: values.Marketing,
              comments: values.comments,
              country: values.country,
              officeName: values.officeName,
              address: values.address,
              postalCode: values.postalCode,
              city: values.city,
              state: values.state,
              password: values.password,
            })
            .then((res) => console.log(res.data));
      } catch {
    console.log('Failed to create an accaunt')
      }
        await _sleep(1000);
        action.setSubmitting(false);

        setActiveStep(activeStep + 1);
    }

    function _handleSubmit(values, actions) {
        if (isLastStep) {
          _submitForm(values, actions);
        } else {
          setActiveStep(activeStep + 1);
          actions.setTouched({});
          actions.setSubmitting(false);
        }
      }

    function _handleBack() {
        setActiveStep(activeStep - 1);
    }

    return (
        <React.Fragment>
            <Container style={{paddingTop: '50px' }}>
              <Typography component="h1" variant="h4" align="left">
                New User Registration
              </Typography>
              {_header(activeStep)}
              <Grid container spacing={3} style={{paddingTop: '30px'}}>
                <Grid item xs={3} className='stepper'>
                  <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
                    {steps.map(label => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>
                <Grid item xs={9}>
                  <React.Fragment>
                      <Formik
                        initialValues={formInitialValues}
                        validationSchema={currentValidationSchema}
                        onSubmit={_handleSubmit}
                      >
                        {({ isSubmitting }) => (
                          <Form id={formId}>
                            {_renderStepContent(activeStep)}

                            <div className={classes.buttons}>
                              {activeStep !== 0 && (
                                <Button onClick={_handleBack} className={classes.button}>
                                  Back
                                </Button>
                              )}
                              <div className={classes.wrapper}>
                                <Button
                                  disabled={isSubmitting}
                                  type="submit"
                                  variant="contained"
                                  color="primary"
                                  className={classes.button} 
                                >
                                  {isLastStep  ? 'Register' : 'Next'}
                                </Button>
                                {isSubmitting && (
                                  <CircularProgress
                                    size={24}
                                    className={classes.buttonProgress}
                                  />
                                )}
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                  </React.Fragment>
                </Grid>
              </Grid>
      </Container>
    </React.Fragment>
    )
}
