"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import LangSwitcher from "../langSwitcher";
import SocialMedia from "@/Components/common/socialMedia";

function Footer({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (mdUp) {
    return (
      <Box className={classes.footer}>
        <Box className={classes.footerWrapper}>
          <Box className={classes.footerListBox}>
            <Box className={classes.footerListInner}>
              <p className={classes.footerListTitle}>{t("меню")}</p>
              <ul className={classes.footerList}>
                <li className={classes.footerListItem}>
                  <Link href={"/"} className={classes.footerLink}>
                    {t("Для бизнеса")}
                  </Link>
                </li>
                <li className={classes.footerListItem}>
                  <Link href={"/"} className={classes.footerLink}>
                    {t("О нас")}
                  </Link>
                </li>
                <li className={classes.footerListItem}>
                  <Link href={"/"} className={classes.footerLink}>
                    {t("Статьи")}
                  </Link>
                </li>
                <li className={classes.footerListItem}>
                  <Link href={"/"} className={classes.footerLink}>
                    {t("Контакты")}
                  </Link>
                </li>
              </ul>
            </Box>

            <Box className={classes.footerListInner}>
              <p className={classes.footerListTitle}>{t("Каталог")}</p>
              <ul className={classes.footerList}>
                <li className={classes.footerListItem}>
                  <Link href={"/"} className={classes.footerLink}>
                    {t("ФЭС")}
                  </Link>
                </li>
                <li className={classes.footerListItem}>
                  <Link href={"/"} className={classes.footerLink}>
                    {t("ФЭМ")}
                  </Link>
                </li>
                <li className={classes.footerListItem}>
                  <Link href={"/"} className={classes.footerLink}>
                    {t("Комплектующие")}
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>

          <Box className={classes.footerSocial}>
            <Box className={classes.footerSocialList}>
              <a href="/" target="_blank" className={classes.footerLink}>
                Telegram
              </a>
              <a href="/" target="_blank" className={classes.footerLink}>
                Instagram
              </a>
              <a href="/" target="_blank" className={classes.footerLink}>
                Facebook
              </a>
            </Box>
            <a
              href="mailto:entersolar@gmail.com"
              target="_blank"
              className={classes.footerLink}
            >
              entersolar@gmail.com
            </a>
          </Box>
        </Box>

        <Link href={"/"} className={classes.footerLogo}>
          <Image
            src={"/icons/footer-logo.svg"}
            width={200}
            height={152}
            alt={"logo"}
            priority
            className={classes.footerLogoImg}
          />
        </Link>

        <Box className={classes.footerConnect}>
          <Link href={"/"} className={classes.footerAddress} target="_blank">
            {t("Ташкентская область, г. Ханкурган, Улица Тимура, дом 14")}
          </Link>
          <Link
            href={"tel +998 94 998 94 94"}
            className={classes.footerNumber}
            target="_blank"
          >
            +998 94 998 94 94
          </Link>
        </Box>

        <Box className={classes.footerBottom}>
          <LangSwitcher lng={lng} />
          <a
            href={"https://theagency.uz/"}
            target="_blank"
            className={classes.footerMade}
          >
            {t("Сделано The Agency")}
          </a>
        </Box>
      </Box>
    );
  }
  return (
    <Box className={classes.footer}>
      <Link href={"/"} className={classes.footerLogo}>
        <Image
          src={"/icons/footer-logo.svg"}
          width={120}
          height={100}
          alt={"logo"}
          priority
          className={classes.footerLogoImg}
        />
      </Link>
      <Box className={classes.footerListBox}>
        <Box className={classes.footerListInner}>
          <p className={classes.footerListTitle}>{t("меню")}</p>
          <ul className={classes.footerList}>
            <li className={classes.footerListItem}>
              <Link href={"/"} className={classes.footerLink}>
                {t("Для бизнеса")}
              </Link>
            </li>
            <li className={classes.footerListItem}>
              <Link href={"/"} className={classes.footerLink}>
                {t("О нас")}
              </Link>
            </li>
            <li className={classes.footerListItem}>
              <Link href={"/"} className={classes.footerLink}>
                {t("Статьи")}
              </Link>
            </li>
            <li className={classes.footerListItem}>
              <Link href={"/"} className={classes.footerLink}>
                {t("Контакты")}
              </Link>
            </li>
          </ul>
        </Box>

        <Box className={classes.footerListInner}>
          <p className={classes.footerListTitle}>{t("Каталог")}</p>
          <ul className={classes.footerList}>
            <li className={classes.footerListItem}>
              <Link href={"/"} className={classes.footerLink}>
                {t("ФЭС")}
              </Link>
            </li>
            <li className={classes.footerListItem}>
              <Link href={"/"} className={classes.footerLink}>
                {t("ФЭМ")}
              </Link>
            </li>
            <li className={classes.footerListItem}>
              <Link href={"/"} className={classes.footerLink}>
                {t("Комплектующие")}
              </Link>
            </li>
          </ul>
        </Box>
      </Box>

      <Box className={classes.footerConnect}>
        <Box className={classes.footerConnectBox}>
          <Link
            href={"tel +998 94 998 94 94"}
            className={classes.footerNumber}
            target="_blank"
          >
            +998 94 998 94 94
          </Link>
          <a
            href="mailto:entersolar@gmail.com"
            target="_blank"
            className={classes.footerLink}
          >
            entersolar@gmail.com
          </a>
        </Box>
        <Link href={"/"} className={classes.footerAddress} target="_blank">
          {t("Ташкентская область, г. Ханкурган, Улица Тимура, дом 14")}
        </Link>
      </Box>

      <Box className={classes.footerSocial}>
        <SocialMedia lng={lng} />
      </Box>
      <Box className={classes.footerBottom}>
        <LangSwitcher lng={lng} />
        <a
          href={"https://theagency.uz/"}
          target="_blank"
          className={classes.footerMade}
        >
          {t("Сделано The Agency")}
        </a>
      </Box>
    </Box>
  );
}

export default Footer;
