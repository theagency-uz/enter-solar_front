import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "./styles.module.css";

function EnterSolar() {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Image
      src={
        smUp
          ? "/static/site/enter-solar-text.svg"
          : "/static/site/enter-solar-text-mobi.svg"
      }
      width={1120}
      height={106}
      alt={"image"}
      priority
      className={classes.image}
    />
  );
}

export default EnterSolar;
