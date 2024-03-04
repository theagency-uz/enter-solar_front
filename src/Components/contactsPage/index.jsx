"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import SocialMediaBlack from "../common/socialMediaBlack";
import FormWrapper from "../common/formWrapper";
import Image from "next/image";
import YandexMap from "../common/yandexMap";

function ContactsPage({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Box className={classes.contactsBox}>
        <h3 className={classes.contactsTitle}>{t("Контакты")}</h3>
        <Box className={classes.contactsInner}>
          <span className={classes.contactsDesc}>
            {t("Адрес производства")}:
          </span>
          <a href="/" className={classes.contactsLink} target="_blank">
            {t(
              "Ташкентская область, Янгиюльский район г. Ханкурган, махалля Кош-Тепа, Улица Тимура, дом 14"
            )}
          </a>
        </Box>

        <Box className={classes.contactsWrapper}>
          <Box className={classes.contactsInner}>
            <span className={classes.contactsDesc}>{t("Телефоны")}:</span>
            <a
              href="tel: +998 90 123 45 67"
              className={classes.contactsLink}
              target="_blank"
            >
              +998 90 123 45 67
            </a>
          </Box>
          <Box className={classes.contactsInner}>
            <span className={classes.contactsDesc}>{t("E-mail")}:</span>
            <a
              href="mailto:entersolar@gmail.com"
              className={classes.contactsLink}
              target="_blank"
            >
              EnterSolar@gmail.com
            </a>
          </Box>
          <SocialMediaBlack />
        </Box>
      </Box>

      <YandexMap type="desktop" lng={lng} />

      <Box className={classes.formContentWrapper}>
        <FormWrapper lng={lng} />

        <Box className={classes.formContentImgBox}>
          <Image
            src={"/static/site/form.png"}
            width={560}
            height={417}
            alt={"image"}
            className={classes.formContentImg}
          />
        </Box>
      </Box>
    </>
  );
}

export default ContactsPage;
