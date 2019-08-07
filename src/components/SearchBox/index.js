/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField 
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            placeholder="Nhap tu khoa"
            autoComplete="off"
            onChange={handleChange}
            />
        </form>
    );
  }
}
SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange : PropTypes.func
};

export default withStyles(styles)(SearchBox);
