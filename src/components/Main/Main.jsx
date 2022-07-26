import React, { useContext} from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();
const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
        <CardHeader title="Expanse Tracker" subheader="Powered by Speechly" />
        <CardContent>
            <Typography align="center" variant="h5"> Total Balance ${balance} </Typography>
            <Typography variant="subtitle1" style={{lineHeight: '1.5rem', marginTop:'20px'}}>

                {/* Try saying: Add income for $100 in category salary for monday... */}
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid item xs={12}>
                <List />
            </Grid>

        </CardContent>
    </Card>
  )
}

export default Main
