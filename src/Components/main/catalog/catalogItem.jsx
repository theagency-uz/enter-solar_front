import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";

function CatalogItem({ lng, catalog, ...props }) {
  const { t, i18n } = useTranslation(lng);

  return (
    <Link href={"/"} className={classes.catalogLink}>
      <Box className={classes.catalogWrapper}>
        <Box className={classes.catalogInner}>
          <h4 className={classes.catalogDesc}>{t(catalog.title)}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: catalog.text,
            }}
            className={classes.catalogText}
          ></div>
        </Box>
        {catalog.type && (
          <span className={classes.catalogType}>{t(catalog.type)}</span>
        )}
      </Box>

      <Box className={classes.catalogImgBox}>
        <Image
          src={catalog.image}
          width={471}
          height={266}
          alt={"icon"}
          priority
          className={classes.catalogImg}
        />
      </Box>
    </Link>
  );
}

export default CatalogItem;
