"use client";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import advantagesData from "@/data/advantagesData";
import AdvantagesItem from "./advantagesItem";
import Container from "@/Container/Container";

function Advantages({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.advantages}>
      <Container>
        <h3 className={classes.advantagesTitle}>
          {t("преимущества солнечных панелей")}
        </h3>
        <ul className={classes.advantagesList}>
          {advantagesData.map((advantages, index) => {
            return (
              <AdvantagesItem
                lng={lng}
                key={advantages.id}
                advantages={advantages}
              />
            );
          })}
        </ul>
      </Container>
    </Box>
  );
}

export default Advantages;
