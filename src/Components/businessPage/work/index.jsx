import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import PageTitle from "../pageTitle";
import classes from "./styles.module.css";
import WorkAccordion from "./workAccordion";

function Work({ lng, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <Box className={classes.work}>
      <Box className={classes.workWrapper}>
        <PageTitle title={t("Работаем с любыми сферами")} />
        <span className={classes.border}></span>
      </Box>

      <WorkAccordion lng={lng} />
    </Box>
  );
}

export default Work;
