import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button';


function AppButton() {
    return (
        <React.Fragment>
        <CssBaseline />
      <Button variant="contained" color="primary">
        This is my button
      </Button>
      </React.Fragment>
    );
  }

ReactDOM.render(<AppButton />, document.getElementById('root'));



  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(<App />, document.querySelector('#app'));