import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
class TaskForm extends Component {
  render() {
    const { open, onClose, classes } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Them moi cong viec</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(TaskForm);
