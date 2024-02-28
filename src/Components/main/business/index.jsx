"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";

function Business({lng, ...props}) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.business}>
      <Box className={classes.businessMain}>
        <Box className={classes.businessWrapper}>
          <Box className={classes.businessInner}>
            <h3 className={classes.businessTitle}>{t("бизнесу")}</h3>
            <p className={classes.businessText}>
              {t(
                "Для бизнеса мы предоставляем особые условия сотрудничества при оптовой закупки солнечных панелей."
              )}
            </p>
          </Box>
          <Box className={classes.businessLinkBox}>
            <p className={classes.businessText}>
              {t(
                "Мы работаем с различными сферами: офисы, ретейл, хорека и другие направления."
              )}
            </p>
            <Link className={classes.businessLink} href={"/"}>
              {t("Подробнее")}
            </Link>
          </Box>
        </Box>

        <Box className={classes.businessImgBox}>
          <Image
            src={"/static/site/business-img.png"}
            width={692}
            height={400}
            alt={"business-img"}
            priority
            className={classes.businessImg}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Business;
