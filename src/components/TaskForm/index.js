import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Modal } from '@material-ui/core';
import  Box  from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Clear';
import styles from './style';
class TaskForm extends React.Component {
  render() {
    const { open, onClose, classes } = this.props;
    return (
      <Modal open = { open } onClose={onClose}>
       <div className={classes.modal}>
        <div className={classes.header}>
          <span className={classes.title}>
             Them moi
          <CloseIcon className={classes.icon} onClick={onClose}  />
          </span>
        </div>
        <div className={classes.content}>
        <form>
          <Grid container>
            <Grid item md={12}>
            <TextField 
            id="standard-name"
            label="Name"
            className={ classes.textField }
            margin="normal"
          />
          </Grid>
          <Grid item md={12}>
            <TextField 
            id="standard-multiline-flexible"
            label="Multiline"
            className={ classes.textField }
            multiline
            rowsMax="4"
            margin="normal"
          />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button  onClick={ onClose } variant="contained">Huy bo</Button>
            </Box>
            <Button color="primary" variant="contained">Luu lai</Button>
            </Box>
          </Grid>
          </Grid>
        </form>
        </div>
       </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func
};


const TaskFormModal = withStyles(styles)(TaskForm);

export default TaskFormModal;