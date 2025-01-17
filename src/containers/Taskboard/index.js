/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import TaskList from '../../components/TaskList/index';
import TaskForm from '../../components/TaskForm/index';
import { STATUS } from '../../constants/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import * as taskActions from './../../actions/task';
const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read ui book',
    status: 0,
  },
  {
    id: 1,
    title: 'Play football',
    description: 'With my friendk',
    status: 2,
  },
  {
    id: 2,
    title: 'Play comment',
    description: 'Read ui book',
    status: 1,
  },
];
class TaskBoardd extends Component {
  state = {
    open: false,
  };
  renderBoard() {
    let xhtml = null;
    xhtml = (
      // eslint-disable-next-line react/jsx-max-props-per-line
      <Grid container spacing={2}>
        {STATUS.map((status, index) => {
          const TaskFilter = listTask.filter(
            task => task.status === status.value,
          );
          // eslint-disable-next-line react/jsx-max-props-per-line
          return <TaskList tasks={TaskFilter} status={status} key={index} />;
        })}
      </Grid>
    );
    return xhtml;
  }
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  renderForm() {
    let xhtml = null;
    const { open } = this.state;
    // eslint-disable-next-line react/jsx-max-props-per-line
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  addNewTask = () => {
    this.setState({
      open: true,
    });
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { taskActionCreator } = this.props;
    const  { fetchListTask } = taskActionCreator;
    fetchListTask();

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.TaskBoardd}>
        <Button variant="contained"
        color="primary"
        onClick={this.addNewTask}>
          <AddIcon /> Them moi cong viec
        </Button>

        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
TaskBoardd.propTypes = {
  classes: PropTypes.object,
  taskActionCreator : PropTypes.shape({
    fetchListTask : PropTypes.func
  })
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreator : bindActionCreators(taskActions, dispatch)
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoardd));
