import React from 'react'
import { InputField } from '../FormFields';
import { Grid } from '@material-ui/core';

export default function ContactInfo(props) {
    const {
        formField: {
            salutation,
            firstName,
            secondName,
            lastName, 
            company,
            title,
            email,
            confirmEmail,
            phone,
            fax,
            mobile,
        }
      } = props;

    return (
            <React.Fragment>

      <Grid container spacing={3}>
            <Grid item sm={6} >
               <Grid container  spacing={3}>
                  <Grid item xs={12} >
                  <InputField name={salutation.name} label={salutation.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={firstName.name} label={firstName.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={secondName.name} label={secondName.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={lastName.name} label={lastName.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={company.name} label={company.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={title.name} label={title.label} fullWidth />
                  </Grid>
                </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid container  spacing={3}>
                  <Grid item xs={12} >
                  <InputField name={email.name} label={email.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={confirmEmail.name} label={confirmEmail.label} fullWidth />             
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={phone.name} label={phone.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} >
                  <InputField name={fax.name} label={fax.label} fullWidth />
                  </Grid>
                  <Grid item xs={12} > 
                  <InputField name={mobile.name} label={mobile.label} fullWidth />
                  </Grid>
                </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
    )
}
