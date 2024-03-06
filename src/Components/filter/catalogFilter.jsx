"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";

function CatalogFilter({ lng, Icon, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <Box className={classes.filterBox}>
        <h4 className={classes.filterName}>{t("Тип")}</h4>
        <ToggleButtonGroup
          exclusive
          // value={brand}
          // onChange={async (e, newValue) => {
          //   await setBrand(newValue);
          //   setPage(1);
          // }}
          aria-label="brand"
          className={classes.filterBtnGroup}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-start",
            borderRadius: "0",
          }}
        >
          <ToggleButton
            // value={b.name}
            // key={b.id}
            aria-label="bold"
            disableRipple={true}
            sx={{
              fontFamily: "Stapel",
              fontWeight: 300,
              fontSize: "var(--font14)",
              lineHeight: "100%",
              color: "#000",
              fontStyle: "normal",
              textTransform: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: 0,
              padding: 0,
              margin: "0",
              "&.Mui-selected": {
                backgroundColor: "transparent",

                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
              "&:hover": { background: "none" },
            }}
          >
            <Icon selected={false} />
            {t("Односторонние")}
          </ToggleButton>
          <ToggleButton
            // value={b.name}
            // key={b.id}
            aria-label="bold"
            disableRipple={true}
            sx={{
              fontFamily: "Stapel",
              fontWeight: 300,
              fontSize: "var(--font14)",
              lineHeight: "100%",
              color: "#000",
              fontStyle: "normal",
              textTransform: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: 0,
              padding: 0,
              margin: "0",
              "&.Mui-selected": {
                backgroundColor: "transparent",

                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
              "&:hover": { background: "none" },
            }}
          >
            <Icon selected={true} />
            {t("Двусторонние")}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box className={classes.filterBox}>
        <h4 className={classes.filterName}>{t("Бренд")}</h4>
        <ToggleButtonGroup
          exclusive
          // value={brand}
          // onChange={async (e, newValue) => {
          //   await setBrand(newValue);
          //   setPage(1);
          // }}
          aria-label="brand"
          className={classes.filterBtnGroup}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-start",
            borderRadius: "0",
          }}
        >
          <ToggleButton
            // value={b.name}
            // key={b.id}
            aria-label="bold"
            disableRipple={true}
            sx={{
              fontFamily: "Stapel",
              fontWeight: 300,
              fontSize: "var(--font14)",
              lineHeight: "100%",
              color: "#000",
              fontStyle: "normal",
              textTransform: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: 0,
              padding: 0,
              margin: "0",
              "&.Mui-selected": {
                backgroundColor: "transparent",

                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
              "&:hover": { background: "none" },
            }}
          >
            <Icon selected={true} />
            Enter Solar
          </ToggleButton>
          <ToggleButton
            // value={b.name}
            // key={b.id}
            aria-label="bold"
            disableRipple={true}
            sx={{
              fontFamily: "Stapel",
              fontWeight: 300,
              fontSize: "var(--font14)",
              lineHeight: "100%",
              color: "#000",
              fontStyle: "normal",
              textTransform: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: 0,
              padding: 0,
              margin: "0",
              "&.Mui-selected": {
                backgroundColor: "transparent",

                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
              "&:hover": { background: "none" },
            }}
          >
            <Icon />
            Jinko
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}

export default CatalogFilter;
