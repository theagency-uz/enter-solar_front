"use client";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import panelsData from "@/data/panelsData";
import PanelItem from "./panelItem";
import Container from "@/Container/Container";

function Panels({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.panel}>
      <Container>
        <Title title={t("Оптимальные места для солнечных панелей")} />

        <ul className={classes.panelList}>
          {panelsData.map((panel, index) => {
            return <PanelItem lng={lng} key={panel.id} panel={panel} />;
          })}
        </ul>
      </Container>
    </Box>
  );
}

export default Panels;
