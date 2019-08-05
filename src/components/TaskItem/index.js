import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
class TaskItem extends Component {
  render() {
    const { classes, status, tasks } = this.props;
    const { id } = tasks;
    const { title, description } = tasks[0];
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
            <p>{description}</p>
          </Grid>
        </CardContent>
        <CardActions className={classes.CardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">edit_item</Icon>
          </Fab>
          <Fab
            color="primary"
            aria-label="Delete"
            className={classes.fab}
            size="small"
          >
            <Icon fontSize="small">delete_item</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskItem);
