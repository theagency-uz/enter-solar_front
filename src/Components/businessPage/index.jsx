"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import FormWrapper from "../common/formWrapper";
import Partners from "./partners";
import AboutUs from "./aboutUs";
import AboutCompany from "./aboutCompany";
import Work from "./work";
import ProjectsContent from "../common/projectsContent";

function BusinessPage({ lng, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <AboutCompany lng={lng} />
      <AboutUs lng={lng} />
      <Work lng={lng} />
      <Partners lng={lng} />

      <Box className={classes.projectInner}>
        <ProjectsContent lng={lng} />
      </Box>
      <Box className={classes.formContentWrapper}>
        <FormWrapper lng={lng} />

        <Box className={classes.formContentImgBox}>
          <Image
            src={"/static/site/business-form.png"}
            width={560}
            height={417}
            alt={"image"}
            className={classes.formContentImg}
          />
        </Box>
      </Box>
    </>
  );
}

export default BusinessPage;
