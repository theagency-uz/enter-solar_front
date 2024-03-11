"use client";
import { Box, useMediaQuery } from "@mui/material";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import FaqAccordion from "./faqAccordion";
import EnterSolar from "@/Components/common/enterSolar";

import classes from "./styles.module.css";
import Container from "@/Container/Container";

function Faq({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box className={classes.faq}>
      <Container>
        <Box className={classes.faqInner}>
          <Title title={t("Ответы на частые вопросы")} lng={lng} />
        </Box>

        <FaqAccordion lng={lng} />
        <Box className={classes.imageBox}>
          <EnterSolar />
        </Box>
      </Container>
    </Box>
  );
}

export default Faq;
