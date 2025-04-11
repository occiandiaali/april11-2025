import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./App.css";

import { Tabs, Tab } from "@mui/material";
import Home from "./components/Home";
import Account from "./components/Account";
import Schedules from "./components/Schedules";
import Schedule from "./components/Schedule";
import NoPage from "./components/404";

function DropDownComponent({ avatar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Stack
        direction="row"
        onClick={handleClick}
        spacing={1}
        sx={{ marginTop: 2, marginLeft: 10, cursor: "pointer" }}
      >
        <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 24, height: 24 }} />
        <h6>Remy</h6>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Tabs value={currentPath}>
        <Tab label="Blindate" value="/" component={Link} to="/" />
        <Tab label="Account" value="/account" component={Link} to="/account" />
        <Tab
          label="Schedules"
          value="/schedules"
          component={Link}
          to="/schedules"
        />
        <DropDownComponent avatar="https://mui.com/static/images/avatar/2.jpg" />
      </Tabs>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
