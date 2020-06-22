import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import myIcon from '../images/images.png';

//MUI
import Grid from '@material-ui/core/Grid';
import { Typography, TextField } from '@material-ui/core';


const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'  //spacing between navbar and icon image
    }
};



export class login extends Component {
    constructor(){
        super();
        this.state = {
            email: '', 
            password: "",
            loading: false,
            errors: {}
        }
    }

    handleSubmit = (event) => {
        console.log('hey')
    }
    handleChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
            <Grid item sm> </Grid>
            <Grid item sm><img src={myIcon} alt="socialcode" className={classes.image}/>
            <Typography variant='h4' className={classes.pageTitle}> Login </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
            <TextField id='email' name='email' type='email' label="Email" className={classes.textField}
            value={this.state.email} onChange={this.handleChange} fullWidth/> 
            <TextField id='password' name='password' type='password' label="Password" className={classes.textField}
            value={this.state.email} onChange={this.handleChange} fullWidth/>
            </form> 
            </Grid>
            <Grid item sm> </Grid>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);
