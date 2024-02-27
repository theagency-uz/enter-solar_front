"use client";
import Link from "next/link";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function NavList({ lng, setOpen, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <ul className={classes.navList}>
      <li className={classes.navItem}>
        <Link
          href={"#catalog"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Каталог")}
        </Link>
      </li>

      <li className={classes.navItem}>
        <Link
          href={"/business"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Для бизнеса")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/articles"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Статьи")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"#contacts"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Контакты")}
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
