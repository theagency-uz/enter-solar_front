import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import React, { useContext, useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import classes from "./styles.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    sx={{
      "& .MuiAccordionSummary-content": {
        flexGrow: "0",
        margin: "0",
      },
    }}
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", color: "#000" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  minHeight: "0",
  marginBottom: "0px",
  backgroundColor: "transparent",
  padding: "0",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0",
  border: "none",
  marginTop: "20px",
}));

function ProductAccordion({ lng, product, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box className={classes.accordion}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className={classes.accordionSummary}
        >
          <h3 className={classes.accordionTitle}>{t("Описание")}</h3>
        </AccordionSummary>

        <AccordionDetails>
          <div
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
            className={classes.editor}
          ></div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className={classes.accordionSummary}
        >
          <h3 className={classes.accordionTitle}>
            {t("Технические характеристики")}
          </h3>
        </AccordionSummary>

        <AccordionDetails>
          <div
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
            className={classes.editor}
          ></div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          className={classes.accordionSummary}
        >
          <h3 className={classes.accordionTitle}>
            {t("Материалы для скачивания")}
          </h3>
        </AccordionSummary>

        <AccordionDetails>
          <div
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
            className={classes.editor}
          ></div>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ProductAccordion;
