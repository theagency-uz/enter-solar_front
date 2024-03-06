"use client";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import productData from "@/data/productData";
import Image from "next/image";
import CatalogProduct from "@/Components/catalogProduct";

import classes from "./styles.module.css";
import Filter from "@/Components/filter";

function PageWrapper({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [product, setProduct] = useState(productData);

  return (
    <Box className={classes.catalog}>
      <h3 className={classes.catalogTitle}>{t("Фото-электрические модули")}</h3>

      <Box className={classes.catalogFilter}>
        <Filter lng={lng} />
        <CatalogProduct lng={lng} product={product} />
      </Box>
    </Box>
  );
}

export default PageWrapper;
