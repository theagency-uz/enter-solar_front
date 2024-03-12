import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import partnersData from "@/data/partnersData";
import PageTitle from "../pageTitle";

function Partners({ lng, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <Box className={classes.partners}>
        <Box className={classes.partnersWrapper}>
          <PageTitle title={t("Наши партнеры")} />
          <span className={classes.border}></span>
        </Box>

        <ul className={classes.partnersList}>
          {partnersData.map((partner, index) => {
            return (
              <li key={partner.id} className={classes.partnersItem}>
                <Image
                  src={partner.image}
                  width={60}
                  height={58}
                  alt={"partner-image"}
                  className={classes.partnersImg}
                />
              </li>
            );
          })}
        </ul>
      </Box>

      <Box className={classes.videoBox}>
        <video
          src={"/videos/business-page.mp4"}
          // autoPlay={true}
          controls
          // muted
          // loop
          playsInline
          className={classes.video}
        />
      </Box>
    </>
  );
}

export default Partners;
