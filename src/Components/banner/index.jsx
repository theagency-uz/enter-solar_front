"use client";
import React, { useContext } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import FormContext from "@/context/form.context";

function Banner({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const { form, setForm } = useContext(FormContext);

  return (
    <Box className={classes.navbarInfo}>
      <Box className={classes.navbaTextBox}>
        <h2 className={classes.navbarTitle}>
          {t("Чистая энергия \n в вашем доме")}
        </h2>
        <p className={classes.navbarText}>
          {t(
            "Фото-электрические станции и комплектующие для частных или коммерческих участков."
          )}
        </p>
      </Box>

      <Button
        className={classes.navbarFormBtn}
        onClick={() => setForm({ open: true })}
        disableRipple={true}
      >
        {t("Оставить заявку")}
      </Button>
    </Box>
  );
}

export default Banner;
