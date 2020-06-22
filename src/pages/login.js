import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import myIcon from '../images/images.png';

//MUI
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'  //spacing btween navbar and icon image
    }
};

export class login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
            <Grid item sm> </Grid>
            <Grid item sm><img src={myIcon} alt="socialcode" className={classes.image}/>
            <Typography variant='h4' className={classes.pageTitle}> Login </Typography> </Grid>
            <Grid item sm> </Grid>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);
