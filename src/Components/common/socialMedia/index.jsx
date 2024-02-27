"use client";
import { useContext, useState } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import classes from "./styles.module.css";

function SocialMedia({ ...props }) {
  return (
    <Box className={classes.socialLinkBox}>
      <a href={"/"} className={classes.socialLink} target="_blank">
        <Image
          src={"/icons/instagram.svg"}
          width={17}
          height={17}
          alt={"social-icon"}
          className={classes.socialIcon}
        />
      </a>
      <a href={"/"} className={classes.socialLink} target="_blank">
        <Image
          src={"/icons/telegram.svg"}
          width={17}
          height={17}
          alt={"social-icon"}
          className={classes.socialIcon}
        />
      </a>
      <a href={"/"} className={classes.socialLink} target="_blank">
        <Image
          src={"/icons/facebook.svg"}
          width={17}
          height={17}
          alt={"social-icon"}
          className={classes.socialIcon}
        />
      </a>
    </Box>
  );
}

export default SocialMedia;
