"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

import ProductImages from "@/Components/productImages";
import ProductInfo from "@/Components/productInfo";
import ProductTabs from "@/Components/productTabs";
import classes from "./styles.module.css";
import productData from "@/data/productData";
import Container from "@/Container/Container";

function Product({ params: { lng, categorySlug, productSlug }, ...props }) {
  const { t } = useTranslation(lng);
  const [product, setProduct] = useState(
    productData.find((p) => String(p.id) === String(productSlug))
  );

  return (
    <Box className={classes.productInfo}>
      <Container>
        <Box className={classes.productInfoWrapper}>
          <ProductImages productImage={product} />
          <ProductInfo lng={lng} product={product} />
        </Box>
        <ProductTabs lng={lng} product={product} />
      </Container>
    </Box>
  );
}

export default Product;
