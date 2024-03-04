"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function CatalogPage({ lng, product, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <ul className={classes.catalogList}>
      {product.map((product, index) => {
        return (
          <Link
            href={`/catalog/category/${product.id}`}
            key={product.id}
            className={classes.catalogItem}
          >
            <Box className={classes.catalogItemBox}>
              <Box className={classes.catalogWrapper}>
                <p className={classes.catalogName}>{t(product.title)}</p>
                <Button className={classes.catalogItemLink}>
                  {t("смотреть")}
                </Button>
              </Box>

              <Box className={classes.catalogImgBox}>
                <Image
                  src={product.image}
                  width={194}
                  height={194}
                  alt={"catalog-image"}
                  className={classes.catalogImg}
                />
              </Box>
            </Box>

            <p className={classes.catalogText}>{t(product.text)}</p>
          </Link>
        );
      })}
    </ul>
  );
}

export default CatalogPage;
