import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import ChatIcon from '@material-ui/icons/Chat';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function Home() {

  const [state, setState] = React.useState({
    drawerOpen: false 
  });

  const toggleDrawer = () => {
    setState({drawerOpen: !state.drawerOpen});
  }

  const list = () => (
    <div>
      <List>

        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
            <ListItemText primary="Home" />
          </ListItemIcon>
        </ListItem>

      </List>
      <Divider />
      <List>

        <ListItem button>
          <ListItemIcon>
            <MailIcon />
            <ListItemText primary="Email Me" />
          </ListItemIcon>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ChatIcon />
            <ListItemText primary="Leave Feedback" />
          </ListItemIcon>
        </ListItem>

        <ListItem button onClick="https://github.com/rscibelli/portfolio/tree/main">
          <ListItemIcon>
            <CodeIcon />
            <ListItemText primary="Source Code" />
          </ListItemIcon>
        </ListItem>

      </List>
    </div>
  );


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={() => toggleDrawer()}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Robert Scibelli's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={state.drawerOpen} onClose={() => toggleDrawer()}>
        {list()}
      </Drawer>

      Robert Scibelli has lived an honorable life.
    </div>
  );
}