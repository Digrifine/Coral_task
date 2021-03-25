import { Grid } from '@material-ui/core'
import React from 'react'
import {InputField, SelectField} from '../FormFields'

const states = [
    {
      value: undefined,
      label: 'None'
    },
    {
      value: 'Florida',
      label: 'Florida'
    },
    {
      value: 'Minsk',
      label: 'Minsk'
    },
    {
      value: 'Kiev',
      label: 'Kiev'
    }
  ];
  
const countries = [
    {
      value: null,
      label: 'None'
    },
    {
      value: 'US',
      label: 'United States'
    },
    {
      value: 'Belarus',
      label: 'Belarus'
    },
    {
      value: 'Poland',
      label: 'Poland'
    }
  ];

export default function Address(props) {

    const {
        formField:{
            country,
            officeName,
            address,
            postalCode,
            city,
            state,
        }
    } = props;

    return (
        <React.Fragment>
            <Grid container spacing={3} justify="center" alignItems="center" >
                <Grid item xs={7}>
                    <SelectField 
                        name={country.name}
                        label={country.label}
                        data={countries}
                        fullWidth />
                </Grid>
                <Grid item xs={7}>
                    <InputField name={officeName.name} label={officeName.label} fullWidth/>
                </Grid>
                <Grid item xs={7}>
                    <InputField name={address.name} label={address.label} fullWidth/>                    
                </Grid>
                <Grid item xs={7}>
                    <InputField name={postalCode.name} label={postalCode.label} fullWidth/>   
                </Grid>
                <Grid item xs={7}>
                    <InputField name={city.name} label={city.label} fullWidth/>     
                </Grid>
                <Grid item xs={7}>
                    <SelectField 
                        name={state.name}
                        label={state.label}
                        data={states}
                        fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
