import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";

function Header({ shit = false }) {
  return (
    <>
      <div>
        <AppBar
          sx={{
            position: "sticky",
            backgroundColor: "black",
            color: "white",
            heidth: "100px",
            top: "0",
          }}
        >
          <Toolbar>
            <NavLink sx={{textDecoration: "none"}} to="/" exact>
              Home
            </NavLink>
            <NavLink to="/about" exact>
              About
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Header;
