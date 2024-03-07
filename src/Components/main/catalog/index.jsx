"use client";
import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import catalogData from "@/data/catalogData";
import CatalogItem from "./catalogItem";
import Container from "@/Container/Container";

function Catalog({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  return (
    <Box className={classes.catalog}>
      <Container>
        <h3 className={classes.catalogTitle}>{t("Каталог")}</h3>

        <ul className={classes.catalogList}>
          {catalogData.map((catalog, index) => {
            return <CatalogItem lng={lng} key={catalog.id} catalog={catalog} />;
          })}
        </ul>
      </Container>
    </Box>
  );
}

export default Catalog;
