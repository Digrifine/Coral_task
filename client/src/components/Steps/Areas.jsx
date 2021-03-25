import React from 'react'
import { CheckboxField, InputField } from '../FormFields';
import {Grid, Typography} from '@material-ui/core'

export default function Areas(props) {

    const {
        formField:{
            Finance,
            Operations,
            IT,
            Sales,
            Administrative,
            Legal,
            Marketing,
            comments
        }
    } = props;
    return (
        <React.Fragment>
            <Grid container  spacing={0}>
                <Grid item  sm={3} >
                    <Typography component="h1" variant="h5">Buisness Areas</Typography>
                    <Grid item xs={12} >
                    <CheckboxField name={Finance.name} label={Finance.label} />
                    </Grid>
                    <Grid item xs={12} >
                    <CheckboxField name={Operations.name} label={Operations.label} />
                    </Grid>
                    <Grid item xs={12} >
                    <CheckboxField name={IT.name} label={IT.label} />
                    </Grid>
                    <Grid item xs={12} >
                    <CheckboxField name={Sales.name} label={Sales.label} />
                    </Grid>
                    <Grid item xs={12} >
                    <CheckboxField name={Administrative.name} label={Administrative.label} />
                    </Grid>
                    <Grid item xs={12} >
                    <CheckboxField name={Legal.name} label={Legal.label} />
                    </Grid>
                    <Grid item xs={12} >
                    <CheckboxField name={Marketing.name} label={Marketing.label} />
                    </Grid>
                </Grid>
                <Grid item sm={9}>
                    <Grid>
                        <InputField name={comments.name} label={comments.label} fullWidth></InputField>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
