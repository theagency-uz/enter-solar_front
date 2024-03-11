"use client";
import React, { useContext } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import FormContext from "@/context/form.context";
import Image from "next/image";
import Container from "@/Container/Container";

function Banner({ lng, content, textContent, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const { form, setForm } = useContext(FormContext);

  return (
    <Box
      className={classes.bannerInfo}
      sx={{
        background: `url(${content})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: smUp ? "initial" : "center",
      }}
    >
      <Box className={classes.bannerBox}>
        <Image
          src={"/static/site/gradient.png"}
          width={1200}
          height={700}
          alt={"image"}
          priority
          className={classes.image}
        />
        <Box className={classes.wrapper}>
          <Box className={classes.bannerTextBox}>{textContent}</Box>

          <Button
            className={classes.bannerFormBtn}
            onClick={() => setForm({ open: true })}
            disableRipple={true}
          >
            {t("Оставить заявку")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
