import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './style';
import { withStyles } from '@material-ui/styles';
class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div className="App">
        <Button variant="contained" color="secondary">Material Ui Button</Button>
        <div className={classes.box}>
          <div className={classes.shape}> Reactjs </div>
          <div className={classes.shape}> Angular JS </div>
          <div className={classes.shape}> Vue JS </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
//////////////////////////////////////////////////////////////////