import { Grid, Card ,CardContent , Typography,List, ListItem} from '@material-ui/core'
import React from 'react'
import {InputField} from '../FormFields'
import captch from './firstCaptch.gif'



export default function Password(props) {

    const {
        formField: {
            password,
            confirmPassword,
            captcha
        }
      } = props;

    return (
        <React.Fragment>
          
            <Grid container  spacing={0} justify="center" alignItems="center">
                <Grid item xs={9}>
                    <Grid item xs={9}>
                        <InputField name={password.name} label={password.label} fullWidth/>
                    </Grid>
                    <Grid item xs={9}>
                        <InputField name={confirmPassword.name} label={confirmPassword.label} fullWidth/>
                    </Grid>
                    <Grid item xs={9}>
                        <img src={captch} width='440px' height='110px'/>
                    </Grid>
                    <Grid item xs={9}>
                        <InputField name={captcha.name} label={captcha.label} fullWidth/>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Card >
                        <CardContent>
                            <Typography  color="textPrimary" gutterBottom>
                            Instruction
                            </Typography>
                            <Typography  color="textSecondary">
                            Password must include:
                            </Typography>
                            <List>
                                <ListItem>
                                    -at least 8 characters
                                </ListItem>
                                <ListItem>
                                    -an UPPER case letter
                                </ListItem>
                                <ListItem>
                                    -an lower case letter
                                </ListItem>
                                <ListItem>
                                    -a number
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
