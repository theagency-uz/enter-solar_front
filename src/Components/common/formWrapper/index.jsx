"use client";
import { useTranslation } from "@/app/i18n/client";
import Form from "@/Components/common/form";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "./styles.module.css";

function FormWrapper({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);
  return (
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
  );
}

export default FormWrapper;
