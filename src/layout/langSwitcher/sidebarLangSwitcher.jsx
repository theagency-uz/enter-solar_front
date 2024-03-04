"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

export default function SidebarLangSwitcher({ lng, ...props }) {
  const { i18n } = useTranslation(lng);

  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Box className={classes.sideBarLang} {...props}>
      <Link
        href={redirectedPathName("ru")}
        className={`${classes.sidebarBtn} ${
          lng === "ru" ? classes.sidebarActive : ""
        }`}
      >
        Ru
      </Link>
      <Link
        href={redirectedPathName("uz")}
        className={`${classes.sidebarBtn} ${
          lng === "uz" ? classes.sidebarActive : ""
        }`}
      >
        Uz
      </Link>
      <Link
        href={redirectedPathName("en")}
        className={`${classes.sidebarBtn} ${
          lng === "en" ? classes.sidebarActive : ""
        }`}
      >
        En
      </Link>
    </Box>
  );
}
