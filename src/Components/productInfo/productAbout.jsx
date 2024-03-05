"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";

function ProductAbout({
  lng,
  series,
  packaging,
  weight,
  length,
  sectionPower,
  pipelinePower,
  mounting,
  cableType,
  category,
  ...props
}) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <ul className={classes.productList}>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Мощность")}:</span>
        <span className={classes.productAbout}>{t("440-455 Вт")}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Эффективность")}:</span>
        <span className={classes.productAbout}>{t("24.6%")}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Гарантия линейной производительности")}:</span>
        <span className={classes.productAbout}>{t(30)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Гарантия на модуль")}:</span>
        <span className={classes.productAbout}>{t(15)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Рабочая температура")}:</span>
        <span className={classes.productAbout}>{t("-40 до +85°C ")}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>
          {t("Конфигурация")}:
        </span>
        <span className={classes.productAbout}>{t("«стекло-стекло»")}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Габариты, мм")}:</span>
        <span className={classes.productAbout}>{t("1051 х 2134 х 35")}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Коэффицент двусторонности")}:</span>
        <span className={classes.productAbout}>{t("90%")}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Температурный коэффицент")}:</span>
        <span className={classes.productAbout}>{t("-0.26%/°C")}</span>
      </li>
    </ul>
  );
}

export default ProductAbout;
