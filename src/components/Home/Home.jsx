import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import ListItemButton from '@mui/material/ListItemButton';

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
  const navigate = useNavigate()

  const [state, setState] = React.useState({
    drawerOpen: false 
  });

  const toggleDrawer = () => {
    setState({drawerOpen: !state.drawerOpen});
  }

  const onClickFeedback = () => {
    console.log("hi")
    navigate('/feedback');
  }

  const onClickHome = () => {
    navigate('/portfolio')
  }

  const list = () => (
    <div>
      <List>

        <ListItem>
          <ListItemButton onClick={onClickHome}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Email Me" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={onClickFeedback}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Leave Feedback" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Source Code" />
          </ListItemButton>
        </ListItem>

      </List>
    </div>
  );


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Robert Scibelli's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={state.drawerOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
}