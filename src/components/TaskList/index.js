import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TaskItem from '../TaskItem/index';
class TaskList extends Component {
  render() {
    const { classes, tasks, status, index } = this.props;
    return (
      <Grid item md={4} key={index}>
        <Box mt={1} mb={1}>
          <div className={classes.status}> {status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task, index) => {
            return <TaskItem tasks={tasks} status={status} key={task.id} />;
          })}
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskList);
