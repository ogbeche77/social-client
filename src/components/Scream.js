import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Typography, Card, CardContent, CardMedia } from '@material-ui/core';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 25,
    },
    image: {
        minWidth: 100,
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }

};
export class Scream extends Component {
    render() {
        dayjs.extend(relativeTime)
        const { classes, scream : { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount} } =this.props
        return (
           <Card className={classes.card}>
           <CardMedia image={userImage} title="Profile image" className={classes.image}/>
           <CardContent className={classes.content}>
            <Typography variant='h5' component={Link} to={`/users/${userHandle}`} color='primary' >{userHandle} </Typography>
            <Typography variant='body2' color="textSecondary">{dayjs(createdAt).fromNow()} </Typography>
            <Typography variant='body1'>{body} </Typography>
           </CardContent>
           </Card>
        )
    }
}

export default withStyles(styles)(Scream);
