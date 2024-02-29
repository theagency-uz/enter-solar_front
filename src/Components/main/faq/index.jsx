"use client";
import { Box, useMediaQuery } from "@mui/material";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import FaqAccordion from "./faqAccordion";
import EnterSolar from "@/Components/common/enterSolar";

import classes from "./styles.module.css";


function Faq({ lng, isOpen, setIsOpen, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box className={classes.faq}>
      <Box className={classes.faqInner}>
        <Title title={t("Ответы на частые вопросы")} lng={lng} />
      </Box>

      <FaqAccordion lng={lng} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box className={classes.imageBox}>
        <EnterSolar />
      </Box>
    </Box>
  );
}

export default Faq;
