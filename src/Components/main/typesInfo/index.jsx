"use client";
import React, { useContext } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import Container from "@/Container/Container";
import FormContext from "@/context/form.context";

function TypesInfo({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);
  const { form, setForm } = useContext(FormContext);

  return (
    <Box className={classes.typesInfo}>
      <Container>
        <Box className={classes.typesInfoMain}>
          <h3 className={classes.typesInfoTitle}>
            {t("Виды фото-электрических станций")}
          </h3>
          <Box className={classes.typesInfoWrapper}>
            <Box className={classes.typesInfoInner}>
              <h4 className={classes.typesInfoName}>{t("Сетевые ФЭС")}</h4>
              <span className={classes.typesInfoLine}></span>
              <Box className={classes.typesInfoBox}>
                <p className={classes.typesInfoType}>{t("Экономичность")}</p>
                <span className={classes.typesInfoAbout}>
                  {t(
                    "Сетевые солнечные панели позволяют зарабатывать на излишках электроэнергии, отдавая их в городскую сеть."
                  )}
                </span>
              </Box>
            </Box>
            <Box className={classes.typesInfoInner}>
              <h4 className={classes.typesInfoName}>{t("Гибридные ФЭС")}</h4>
              <span className={classes.typesInfoLine}></span>
              <Box className={classes.typesInfoBox}>
                <p className={classes.typesInfoType}>{t("Автономность")}</p>
                <span className={classes.typesInfoAbout}>
                  {t(
                    "При установке гибридных солнечных панелей вы можете не зависеть от городской подачи электроэнергии."
                  )}
                </span>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={classes.typesInfoBtnBox}>
          <Button
            className={classes.typesInfoBtn}
            onClick={() => setForm({ open: true })}
          >
            {t("Получить консультацию")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default TypesInfo;
