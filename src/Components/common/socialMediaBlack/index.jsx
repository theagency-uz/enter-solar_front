"use client";
import { useContext, useState } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import classes from "./styles.module.css";

function SocialMediaBlack({ ...props }) {
  return (
    <Box className={classes.socialLinkBox}>
      <a href={"/"} className={classes.socialLink} target="_blank">
        <Image
          src={"/icons/instagram-black.svg"}
          width={25}
          height={25}
          alt={"social-icon"}
          className={classes.socialIcon}
        />
      </a>
      <a href={"/"} className={classes.socialLink} target="_blank">
        <Image
          src={"/icons/telegram-black.svg"}
          width={25}
          height={25}
          alt={"social-icon"}
          className={classes.socialIcon}
        />
      </a>
      <a href={"/"} className={classes.socialLink} target="_blank">
        <Image
          src={"/icons/facebook-black.svg"}
          width={25}
          height={25}
          alt={"social-icon"}
          className={classes.socialIcon}
        />
      </a>
    </Box>
  );
}

export default SocialMediaBlack;
