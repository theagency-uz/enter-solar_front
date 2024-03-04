"use client";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import Link from "next/link";
import Sidebar from "./sidebar";
import { useTranslation } from "@/app/i18n/client";
import SidebarContext from "@/context/sidebar.context";

import classes from "./styles.module.css";
import NavList from "./navList";
import SidebarLangSwitcher from "./langSwitcher/sidebarLangSwitcher";
import SocialMediaBlack from "@/Components/common/socialMediaBlack";
import FormContext from "@/context/form.context";

function SidebarMenu({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const { form, setForm } = useContext(FormContext);
  const { open, setOpen } = useContext(SidebarContext);
  return (
    <Sidebar maxWidth={"100%"} open={open} setOpen={setOpen}>
      <Box className={classes.sidebar}>
        <NavList setOpen={setOpen} lng={lng} />

        <Box className={classes.sidebarBtnBox}>
          <Button
            className={classes.sidebarBtn}
            onClick={() => setForm({ open: true })}
            disableRipple={true}
          >
            {t("Получить консультацию")}
          </Button>
        </Box>
        <Box className={classes.sidebarWrapper}>
          <SidebarLangSwitcher lng={lng} />
          <SocialMediaBlack />
        </Box>
      </Box>
    </Sidebar>
  );
}

export default SidebarMenu;
