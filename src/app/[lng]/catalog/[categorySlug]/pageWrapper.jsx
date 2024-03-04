"use client";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import productData from "@/data/productData";
import Image from "next/image";
import CatalogPage from "@/Components/catalogPage";
import classes from "./styles.module.css";

function PageWrapper({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [product, setProduct] = useState(productData);

  return (
    <>
      <Box className={classes.productInfo}>
        <Box className={classes.productWrapper}>
          <Title title={"Каталог"} lng={lng} />
          <span className={classes.border}></span>
        </Box>

        <CatalogPage lng={lng} product={product} />
      </Box>
    </>
  );
}

export default PageWrapper;
