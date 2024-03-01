"use client";
import { useTranslation } from "@/app/i18n/client";
import Form from "@/Components/common/form";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "./styles.module.css";

function FormContent({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);
  return (
    <Box className={classes.formContent}>
      <Box className={classes.formContentWrapper}>
        <Box className={classes.formContentInner}>
          <Box className={classes.formContentBox}>
            <h4 className={classes.formContentTitle}>{t("Оставьте заявку")}</h4>
            <p className={classes.formContentText}>
              {t(
                "Оставьте ваши контактные данные и мы свяжемся с вами по любым интересующим вопросам."
              )}
            </p>
          </Box>
          <Form lng={lng} />
        </Box>
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
    </Box>
  );
}

export default FormContent;
