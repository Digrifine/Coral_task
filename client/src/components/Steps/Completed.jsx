import { Grid, Typography } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react'

import useStyles from './styles';

export default function Completed() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container alignItems='center' className={classes.Grid}>
                <Grid item xs={1}>
                    <CheckCircleIcon/>
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        Thank you for registering!
                    </Typography>
                    <Typography>
                        A registration confirmation email was set to the 
                        email address provided. Your registration will be
                        sent for approval and activation to the Administrator.
                        You will recieve an email when your account is ready to use.
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
