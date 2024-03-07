"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Slider from "./slider";
import PageTitle from "../pageTitle";

function AboutCompany({ lng, ...props }) {
  const { t } = useTranslation(lng);
  return (
    <Box className={classes.company}>
      <Box className={classes.companyWrapper}>
        <PageTitle title={"о компании"} />
        <span className={classes.border}></span>
      </Box>

      <Box className={classes.companyInner}>
        <Slider lng={lng} />

        <Box className={classes.companyInfo}>
          <Box className={classes.companyBox}>
            <h3 className={classes.companyName}>
              {"Enter Solar \n Green Energy"}
            </h3>
            <Box className={classes.companyImgBox}>
              <Image
                src={"/icons/logo.svg"}
                width={81}
                height={69}
                alt={"logo"}
                priority
                className={classes.companyLogo}
              />
            </Box>
          </Box>
          <Box className={classes.companyTextBox}>
            <p className={classes.companyText}>
              {t(
                "Enter Solar является первым и на сегодняшний день единственным производителем современных солнечных панелей в Узбекистане. Это означает, что мы сможем в кратчайшие сроки обеспечить наших клиентов основным компонентом солнечной электростанции – панелями."
              )}
            </p>
            <br />
            <p className={classes.companyText}>
              {t(
                "Наши технические специалисты имеют богатый опыт в проектировании, строительстве, запуску и обслуживании солнечных электростанций как промышленного, так и жилого типа."
              )}
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutCompany;
