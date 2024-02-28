"use client";
import { Box, useMediaQuery } from "@mui/material";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import FaqAccordion from "./faqAccordion";

import classes from "./styles.module.css";
import Image from "next/image";

function Faq({ lng, isOpen, setIsOpen, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box className={classes.faq}>
      <Box className={classes.faqInner}>
        <Title title={t("Ответы на частые вопросы")} lng={lng} />
      </Box>

      <FaqAccordion lng={lng} isOpen={isOpen} setIsOpen={setIsOpen} />

      <Image
        src={"/static/site/enter-solar-text.svg"}
        width={1120}
        height={106}
        alt={"image"}
        priority
        className={classes.image}
      />
    </Box>
  );
}

export default Faq;
