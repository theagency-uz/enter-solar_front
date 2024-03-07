"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import Container from "@/Container/Container";

function Contact({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.contact}>
      <Container>
        <Box className={classes.contactMain}>
          <Box className={classes.contactWrapper}>
            <h3 className={classes.contactTitle}>{t("Остались вопросы?")}</h3>
            <Box className={classes.contactLinkBox}>
              <Link href={"/"} target="_blank" className={classes.contactLink}>
                <Image
                  src={"/icons/telegram-white.svg"}
                  width={11}
                  height={9}
                  alt={"icon"}
                  priority
                  className={classes.contactIcon}
                />
                <span>Telegram</span>
              </Link>
              <p className={classes.contactText}>
                {t("Свяжитесь с нами в Telegram")}
              </p>
            </Box>
          </Box>

          <Box className={classes.contactImgBox}>
            <Image
              src={"/static/site/contact-img.png"}
              width={564}
              height={157}
              alt={"contact-img"}
              priority
              className={classes.contactImg}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
