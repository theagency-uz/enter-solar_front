"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";

function ProductAbout({
  lng,
  power,
  efficiency,
  linearGuaranteed,
  moduleGuarantee,
  temperature,
  configuration,
  dimensions,
  bilaterality,
  tempCoefficient,
  ...props
}) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <ul className={classes.productList}>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Мощность")}:</span>
        <span className={classes.productAbout}>{t(power)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Эффективность")}:</span>
        <span className={classes.productAbout}>{t(efficiency)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Гарантия линейной производительности")}:</span>
        <span className={classes.productAbout}>{t(linearGuaranteed)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Гарантия на модуль")}:</span>
        <span className={classes.productAbout}>{t(moduleGuarantee)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Рабочая температура")}:</span>
        <span className={classes.productAbout}>{t(temperature)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>
          {t("Конфигурация")}:
        </span>
        <span className={classes.productAbout}>{t(configuration)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Габариты, мм")}:</span>
        <span className={classes.productAbout}>{t(dimensions)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Коэффицент двусторонности")}:</span>
        <span className={classes.productAbout}>{t(bilaterality)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Температурный коэффицент")}:</span>
        <span className={classes.productAbout}>{t(tempCoefficient)}</span>
      </li>
    </ul>
  );
}

export default ProductAbout;
