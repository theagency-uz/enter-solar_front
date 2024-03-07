"use client";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import Image from "next/image";
import Link from "next/link";
import EnterSolar from "@/Components/common/enterSolar";
import Container from "@/Container/Container";

function Info({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.info}>
      <Container>
        <EnterSolar />
        <ul className={classes.infoList}>
          <li className={classes.infoItem}>
            <Title title={t("Энергия солнца \n в каждый дом")} />
            <Box className={classes.infoTextBox}>
              <p className={classes.infoDesc}>
                {t("Наше отличие - качественный сервис.")}
              </p>
              <p className={classes.infoText}>
                {t("От производства ФЭС до обслуживания станций.")}
              </p>
            </Box>
          </li>

          <li className={classes.infoItem}>
            <Image
              src={"/static/site/info-img.png"}
              width={447}
              height={245}
              alt={"info-img"}
              priority
              className={classes.infoImg}
            />
          </li>

          <li className={classes.infoItem}>
            <p className={`${classes.infoText} ${classes.infoTextSize}`}>
              {t(
                "Мы всегда честны с нашими заказчиками и предоставляем надёжные оптимальные решения, которые бесперебойно работают десятки лет."
              )}
            </p>

            <Link href={"/"} className={classes.infoLink}>
              {t("Подробнее о компании")}
            </Link>
          </li>
        </ul>
      </Container>
    </Box>
  );
}

export default Info;
