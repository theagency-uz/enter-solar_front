"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";
import SidebarContext from "@/context/sidebar.context";
import LangSwitcher from "../langSwitcher";
import SocialMedia from "@/Components/common/socialMedia";
import NavList from "../navList";
import MenuIcon from "../menuIcon";
import NavbarInfo from "../navbarInfo";

function Navbar({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { open, setOpen } = useContext(SidebarContext);
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box className={classes.navbarTop}>
        <LangSwitcher lng={lng} />
        <SocialMedia />
      </Box>

      <Box className={classes.navbar}>
        <Box className={classes.navbarInner}>
          <Box className={classes.navbarWrapper}>
            <Link href={"/"} className={classes.navbarImage}>
              <Image
                src={"/icons/logo.svg"}
                width={81}
                height={69}
                alt={"logo"}
                priority
                className={classes.navbarLogo}
              />
            </Link>

            <NavList lng={lng} setOpen={setOpen} />

            {!mdUp && <MenuIcon />}
          </Box>

          <Box className={classes.navbarBox}>
            <Link
              href={"tel +998 78 122-30-69"}
              className={classes.navbarNumber}
            >
              998 78 122-30-69
            </Link>
            <Button
              className={classes.navbarBtn}
              // onClick={() => setForm({ open: true })}
              disableRipple={true}
            >
              {t("Получить консультацию")}
            </Button>
          </Box>
        </Box>

        <NavbarInfo lng={lng} />
      </Box>
    </>
  );
}

export default Navbar;