import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "@/app/i18n/client";

import classes from "./styles.module.css";

export default function FaqItem({ item, expanded, handleChange, index, lng }) {
  const { t, i18n } = useTranslation(lng);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Accordion
      key={item.id}
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      className={classes.accordion}
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "0!important",
        borderBottom: "1px solid #CFCFCF",
        boxShadow: "none",
        padding: "20px 0",
        backgroundColor: "transparent",
        "&::before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: "0",
        },

        "&.MuiAccordion-root:first-child": {
          borderTop: "1px solid #CFCFCF",
        },
      }}
    >
      <AccordionSummary
        sx={{
          borderRadius: "0",
          padding: 0,
          display: "flex",
          margin: "0",
          justifyContent: "space-between",
          fontSize: "20px",
          minHeight: "auto",
          "&.Mui-expanded": {
            minHeight: "auto",
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: "0",
          },
          // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
          //   margin: "0",
          // },
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }}
        expandIcon={
          <ExpandMoreIcon
            style={{
              color: "rgba(255, 129, 20, 1)",
              width: "40px",
              height: "40px",
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordionSummary}
      >
        <h3 className={classes.title}>{t(item.title)}</h3>
      </AccordionSummary>
      <Box className={classes.accordionDetails}>
        <p className={classes.text}>{t(item.text)}</p>
      </Box>
    </Accordion>
  );
}
