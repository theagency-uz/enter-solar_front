"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import ProductAbout from "./productAbout";
import FormContext from "@/context/form.context";

function ProductInfo({ lng, product, ...props }) {
  const { t } = useTranslation(lng);
  const { form, setForm } = useContext(FormContext);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box key={product.id} className={classes.productBox}>
      <Box className={classes.productWrapper}>
        <h3 className={classes.productTitle}>
          {t("Двусторонняя солнечная панель LONGI LR5-72HBD 535M")}
        </h3>

        <ProductAbout
          lng={lng}
          series={product.series}
          packaging={product.packaging}
          weight={product.weight}
          length={product.length}
          sectionPower={product.sectionPower}
          pipelinePower={product.pipelinePower}
          mounting={product.mounting}
          cableType={product.cableType}
          category={product.category}
        />

        <Button
          className={classes.productBtn}
          onClick={() => setForm({ open: true })}
          disableRipple={true}
        >
          {t("Оставить заявку")}
        </Button>
      </Box>
    </Box>
  );
}

export default ProductInfo;
