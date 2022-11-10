import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
// import MailIcon from '@material-ui/icons/Mail';
import ChatIcon from '@material-ui/icons/Chat';
import CodeIcon from '@material-ui/icons/Code';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import TelegramIcon from '@mui/icons-material/Telegram';
import ListItemButton from '@mui/material/ListItemButton';

export default function SideMenu({drawerOpen, toggleDrawer}) {
    const navigate = useNavigate()
  
    const onClickFeedback = () => {
      toggleDrawer();
      navigate('/feedback');
    }
  
    const onClickHome = () => {
      toggleDrawer()
      navigate('/portfolio')
    }
  
    const onClickProjects = () => {
      toggleDrawer()
      navigate('/projects')
    }

    const onClickGolf = () => {
      toggleDrawer()
      navigate('/golf')
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
            <ListItemButton onClick={onClickProjects}>
              <ListItemIcon>
                <TelegramIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
  
          <ListItem>
            <ListItemButton onClick={onClickGolf}>
              <ListItemIcon>
                <SportsGolfIcon />
              </ListItemIcon>
              <ListItemText primary="Golf" />
            </ListItemButton>
          </ListItem>
  
          {/* <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Email Me" />
            </ListItemButton>
          </ListItem> */}
  
          <ListItem>
            <ListItemButton onClick={onClickFeedback}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Leave Feedback" />
            </ListItemButton>
          </ListItem>
  
          <ListItem>
            <ListItemButton LinkComponent to="https://github.com/rscibelli/portfolio" target="_blank" rel="noopener noreferrer">
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Source Code" />
            </ListItemButton>
          </ListItem>
  
        </List>
      </div>
    );

    return (
        <Drawer anchor={'left'} open={drawerOpen} onClose={toggleDrawer}>
            {list()}
        </Drawer>
    );
}