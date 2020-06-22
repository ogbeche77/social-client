import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import Grid from '@material-ui/core/Grid';


const styles = {

}

export class login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
            <Grid item sm> </Grid>
            <Grid item sm><p>My business</p> </Grid>
            <Grid item sm> </Grid>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);
