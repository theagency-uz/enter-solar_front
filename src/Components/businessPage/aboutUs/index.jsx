"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";

function AboutUs({ lng, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <Box className={classes.about}>
      <h3 className={classes.aboutTitle}>
        {t("Несколько причин для установки солнечных панелей с нами")}
      </h3>

      <ul className={classes.aboutList}>
        <li className={classes.aboutItemImg}>
          <Image
            src={"/static/site/about-img.png"}
            width={265}
            height={290}
            alt={"image"}
            className={classes.aboutImg}
          />
        </li>
        <li className={classes.aboutItem}>
          <Box className={classes.aboutNumberBox}>
            <span className={classes.aboutNumber}>1</span>
            <span className={classes.border}></span>
          </Box>
          <Box className={classes.aboutTextBox}>
            <h4 className={classes.aboutDesc}>
              {t("Первое производство в Узбекистане")}
            </h4>
            <p className={classes.aboutText}>
              {t(
                "Мы -  первое производство солнечных панелей в Узбекистане и одна из крупнейших компаний в этой сфере."
              )}
            </p>
          </Box>
        </li>
        <li className={classes.aboutItem}>
          <Box className={classes.aboutNumberBox}>
            <span className={classes.aboutNumber}>2</span>
            <span className={classes.border}></span>
          </Box>
          <Box className={classes.aboutTextBox}>
            <h4 className={classes.aboutDesc}>{t("Отличие - сервис")}</h4>
            <p className={classes.aboutText}>
              {t(
                "Мы не просто продаем солнечные панели, вместе с этим мы предлагаем оперативный грамотный сервис."
              )}
            </p>
          </Box>
        </li>
        <li className={classes.aboutItem}>
          <Box className={classes.aboutNumberBox}>
            <span className={classes.aboutNumber}>3</span>
            <span className={classes.border}></span>
          </Box>
          <Box className={classes.aboutTextBox}>
            <h4 className={classes.aboutDesc}>{t("Гарантия до 25 лет")}</h4>
            <p className={classes.aboutText}>
              {t(
                "Вся продукция - высокого качестве и сертифицирована. Мы даем гарантию на наши панели до 25 лет."
              )}
            </p>
          </Box>
        </li>
      </ul>
    </Box>
  );
}

export default AboutUs;
