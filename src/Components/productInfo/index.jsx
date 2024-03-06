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
          {t(product.title)}
        </h3>

        <ProductAbout
          lng={lng}
          power={product.power}
          efficiency={product.efficiency}
          linearGuaranteed={product.linearGuaranteed}
          moduleGuarantee={product.moduleGuarantee}
          temperature={product.temperature}
          configuration={product.configuration}
          dimensions={product.dimensions}
          bilaterality={product.bilaterality}
          tempCoefficient={product.tempCoefficient}
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
