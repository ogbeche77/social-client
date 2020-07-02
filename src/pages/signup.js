import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import myIcon from '../images/images.png';
import axios from 'axios';
import {Link} from 'react-router-dom';

//MUI
import Grid from '@material-ui/core/Grid';
import { Typography, TextField, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'  //spacing between navbar and icon image
    },
    pageTitle: {
        margin: '12px auto 12px auto'
    },
    textField: {
        margin: '12px auto 12px auto'
    },
    button: {
        marginTop: 18,
        position: 'relative'
    },
    customError:{
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progess: {
        position: 'absolute'
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
        event.preventDefault();
        this.setState({
            loading: true
        });
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('login', userData)
        .then(res => {
            console.log(res.data);
            this.setState({
                loading: false
            });
            this.props.history.push('/'); // this method directs us to homepage
        })
        .catch(err => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
        })
    };
    handleChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { classes } = this.props;
        const {errors, loading } = this.state;
        return (
            <Grid container className={classes.form}>
            <Grid item sm> </Grid>
            <Grid item sm><img src={myIcon} alt="socialcode" className={classes.image}/>
            <Typography variant='h4' className={classes.pageTitle}> Login </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
            <TextField id='email' name='email' type='email' label="Email" className={classes.textField} helperText={errors.email}
            error={errors.email ? true : false  } value={this.state.email} onChange={this.handleChange} fullWidth/> 
            <TextField id='password' name='password' type='password' label="Password" className={classes.textField} helperText={errors.password}
            error={errors.password ? true : false  } value={this.state.password} onChange={this.handleChange} fullWidth/>
            {errors.general && (
                <Typography variant='body2' className={classes.customError}>
                {errors.general} </Typography>
            )}
            <Button type='submit' variant='contained' color='primary' className={classes.button} disabled={loading}>Login 
            {loading && (
                <CircularProgress size={25} className={classes.progress}/>)} </Button> <br/>
            <small>New User? Please sign up <Link to='/signup'>Here</Link></small>
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
