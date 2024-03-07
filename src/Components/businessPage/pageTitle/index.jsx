import React from "react";
import classes from "./styles.module.css";

function PageTitle({ title }) {
  return <h3 className={classes.title}>{title}</h3>;
}

export default PageTitle;
