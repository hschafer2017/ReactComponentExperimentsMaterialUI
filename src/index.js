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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './tileData';


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

const cardstyles = {
    card: {
        minWidth: 300,
        marginBottom: 50,
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 20,
      },
      p: {
          fontSize: 18,
          lineHeight: 1.5,
      }
}

const photoStyles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#fafafa',
    },
    gridList: {
      width: 500,
      height: 450,
    },
  };

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
                    <Tab label="Photos" />
                    <Tab label="More" />
                    <Tab label="Contact" />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
  }
}

ReactDOM.render(<Nav />, document.getElementById('nav'))

class AboutCard extends React.Component {
    render () {
        return (
        <Card className={cardstyles.card}>
            <CardContent>
                <Typography className={cardstyles.title} color="textSecondary" gutterBottom>
                Home
                </Typography>
                <br />
                <Typography variant="h5" component="h2">
                Check out some cool styling components using the Material UI Framework for React.js!
                </Typography>
                <Typography className={cardstyles.pos} color="textSecondary">
                Keep scrolling for more component examples! 
                </Typography>
                <br />
                <Typography className={cardstyles.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Et pharetra pharetra massa massa ultricies mi. Ornare arcu dui vivamus arcu felis bibendum ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisl pretium fusce id velit ut tortor. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Tortor id aliquet lectus proin nibh. At lectus urna duis convallis. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Duis tristique sollicitudin nibh sit amet. Massa massa ultricies mi quis hendrerit dolor magna eget est. Risus feugiat in ante metus dictum at. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Ut eu sem integer vitae justo eget magna fermentum iaculis. Urna cursus eget nunc scelerisque viverra. Viverra suspendisse potenti nullam ac. 
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Take me to the components!</Button>
            </CardActions>
        </Card>
        );
    }
}

ReactDOM.render(<AboutCard />, document.getElementById('card'))

class PhotoGrid extends React.Component {
    render() {
        return (
            <div className={photoStyles.root}>
                <GridList cellHeight={400} className={photoStyles.gridList} cols={3}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols}>
                        <img src={tile.img} style={tile.style} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

ReactDOM.render(<PhotoGrid />, document.getElementById('photos'));


class DemoButton extends React.Component {
    render () {
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
}

ReactDOM.render(<DemoButton />, document.getElementById('root'));

class FeatureButton extends React.Component {
    render () {
        return (
            <React.Fragment>
            <CssBaseline />
                <Button variant="contained" color="primary">
                App Feature Button
                </Button>
            </React.Fragment>
        );
    }
}
ReactDOM.render(<FeatureButton />, document.getElementById('search'));


class DemoLoginForm extends React.Component {
    render () {
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
        );
    }
}
ReactDOM.render(<DemoLoginForm />, document.getElementById('loginForm'));


serviceWorker.unregister();
