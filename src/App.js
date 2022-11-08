import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MyDrawer from './components/SideMenu/SideMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: '#175812'
  }
}));

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const classes = useStyles();

  return (
    //className="App-body"
    <main>
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon onClick={toggleDrawer}/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Robert Scibelli's Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <MyDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </main>
  );
}

export default App;
