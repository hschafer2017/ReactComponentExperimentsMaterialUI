import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const inputProps = {
  step: 500,
};

// function AppNav() {
//  return () {
//   <React.Fragment>
//     <CssBaseline />

//     </React.Fragment>
//  }
// }

// ReactDOM.render(<AppNav />, document.getElementById('nav'));

function AppButton() {
    return (
        <React.Fragment>
        <CssBaseline />
      <Button variant="contained" color="secondary">
        This is my button <i class="material-icons">
        accessibility
        </i>
      </Button>
      <Button variant="outlined" color="primary" size="small">
      This is my other button<i class="material-icons">
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
          <i class="material-icons">
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