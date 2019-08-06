/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './style';
import LoadingIcon from './../../assets/images/loadding.gif';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from './../../actions/ui';
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      return (
        xhtml = (<div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>)
      );
    }
    return xhtml;
  }
}
GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading
  }
};
const mapDispatchToProps = dispatch => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GlobalLoading));
