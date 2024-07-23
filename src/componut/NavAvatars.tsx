import { useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router";
const NavAvatars = () => {
  const [avatarEl, setAvatarEl] = useState(null);
  const [invisible, setInvisible] = useState(false);
  const [notifyEl, setNotifyEl] = useState(null);

  const handleAvatarClick = (e) => {
    setAvatarEl(e.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarEl(null);
  };




  const handleNotifyClose = () => {
    setNotifyEl(null);
  };
  const authstatus  = useSelector (state => state.auth.status)
 const Dispatch = useDispatch()
 
  const open = Boolean(avatarEl);
  const id = open ? "simple-popover" : undefined;

  const notifyOpen = Boolean(notifyEl);
  const notifyId = notifyOpen ? "simple-notify" : undefined;
  const username :string | null = localStorage.getItem('username')
  const userId :string | null = localStorage.getItem('userId')


  const Naviagate = useNavigate()
  const handleLogout  = ()=>{
    Dispatch(logout())
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')

    location.reload();
  }
  
  const handleSetting =()=>{
    Naviagate('/userupdate')
  }

  return (
    <div>
      <Stack
      className="max-md:!w-12  "
      direction="row" spacing={1} >

        {/* <Button aria-describedby={id}
        className=""
        onClick={handleNotifyOpen}>
          <Badge className="text-black "
            color="warning"
            overlap="circular"
            badgeContent="1"
            invisible={invisible}
            showZero={true}
          >
            <NotificationsIcon />
          </Badge>
        </Button> */}
        <Button
        aria-describedby={id} onClick={handleAvatarClick}>
       <div className="text-[1.2rem]   text-black ">
       <div className='flex items-center'><div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-700 text-white rounded-full dark:bg-gray-600">
    <span className="font-medium text-white dark:text-gray-300">{username  && username.charAt(0).toUpperCase()}</span>
    
</div>
</div>
       </div>
          {/* <KeyboardArrowDownIcon /> */}
        </Button>
      </Stack>

      <Popover
        id={id}
        open={open}
        anchorEl={avatarEl}
        onClose={handleAvatarClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
             
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <h1>{localStorage.getItem('username')}</h1>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <button onClick={()=>Naviagate(`/profile?userId=${userId}`)}>Your Profile</button>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemText primary="Log out" /> */}
              <button onClick={handleSetting}
         
              > setting</button>
            </ListItemButton>
          </ListItem>
           <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemText primary="Log out" /> */}
              <button onClick={handleLogout}
         
              > logout</button>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>

      <Popover
        id={notifyId}
        open={notifyOpen}
        anchorEl={notifyEl}
        onClose={handleNotifyClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Avatar" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default NavAvatars;
