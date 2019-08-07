import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from './../Taskboard/index';
import { Provider } from 'react-redux';
import configreStore from './../../redux/configStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from './../../components/GlobalLoading';
import theme from './../../commans/Theme';
const store = configreStore();

class App extends Component {
  render() {
    // const { classes, theme } = this.props;
    return (
      <div className="App">
        <Provider store={store}>
          <ThemeProvider theme={theme}>
          <GlobalLoading />
          <ToastContainer />
          <Taskboard />
          </ThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
