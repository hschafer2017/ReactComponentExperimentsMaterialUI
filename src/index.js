import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar, Tabs, Tab, Typography, Toolbar} from '@material-ui/core'
import './libraries/bootstrap.min.css';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const inputProps = {
  step: 500,
};

const nav = {
    background: 'royalblue',
    color: '#fafafa',
    display: 'block',
    width: '100%',
    flexGrow: 1,
    menuButton: {
        marginLeft: -12,
        marginRight: 30,
      },
    root: {
        flexGrow: 1,
      },
    grow: {
        flexGrow: 1,
      },
}


class Nav extends React.Component {
  render() {
    return (
        <AppBar title="Let's Try Cool Styles!" style={nav} className={nav.root}>
        <Toolbar>
            <IconButton className={nav.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={nav.grow}>
                Try Cool Styles!
            </Typography>
            <Tabs>
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="More" />
                <Tab label="Contact" />
            </Tabs>
            </Toolbar>
      </AppBar>
    )
  }
}

ReactDOM.render(<Nav />, document.getElementById('nav'))

function AppButton() {
    return (
        <React.Fragment>
        <CssBaseline />
      <Button variant="contained" color="secondary">
        This is my button <i className="material-icons">
        accessibility
        </i>
      </Button>
      <Button variant="outlined" color="primary" size="small">
      This is my other button<i className="material-icons">
        done
        </i>
      </Button>
      </React.Fragment>
    );
  }

ReactDOM.render(<AppButton />, document.getElementById('root'));

function AppFeature() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Button variant="contained" color="primary">
        App Feature Button
          </Button>
    </React.Fragment>
  )
}
ReactDOM.render(<AppFeature />, document.getElementById('search'));


function AppForm() {
  return (
    <React.Fragment>
      <CssBaseline />
          <TextField id="time" type="text" label='username' inputProps={inputProps} />
          <TextField id="time" type="password" label='password' inputProps={inputProps} />
          <Button variant="fab" color="secondary" size='regular'>
          <i className="material-icons">
        done
        </i>
          </Button>
    </React.Fragment>
  )
}
ReactDOM.render(<AppForm />, document.getElementById('loginForm'));


  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(<App />, document.querySelector('#app'));