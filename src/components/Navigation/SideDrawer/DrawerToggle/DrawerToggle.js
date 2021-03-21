import React from "react";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>

  //   <button classes={classes.MenuToggle} onClick={props.toggle}>
  //     MENU
  //   </button>
);

export default drawerToggle;
