import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import styles from "./style";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import TaskList from '../../components/TaskList/index';
import { STATUS } from '../../constants/index';

const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "Read ui book",
        status: 0
    },
    {
        id: 1,
        title: "Play football",
        description: "With my friendk",
        status: 2
    },
    {
        id: 2,
        title: "Play comment",
        description: "Read ui book",
        status: 1
    }
];

class TaskBoardd extends Component {
    renderBoard() {
        let xhtml = null;
        const { classes } = this.props;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUS.map((status, index) => {
                        const TaskFilter = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList tasks={ TaskFilter } status= { status } key = { index } />
                        );
                    })
                }
            </Grid>
        );
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.TaskBoardd}>
                <Button variant="contained" color="primary">
                    <AddIcon /> Them moi cong viec
                </Button>

                {this.renderBoard()}
            </div>
        );
    }
}
export default withStyles(styles)(TaskBoardd);