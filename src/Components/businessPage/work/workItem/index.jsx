import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";

import classes from "./styles.module.css";
import Image from "next/image";

function WorkItem({ item, expanded, handleChange, index, lng }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box
      className={classes.accordionBox}
      sx={{
        marginBottom:
          expanded === `panel${index}` ? (mdUp ? "0px" : "30px") : "0px",
      }}
    >
      <Accordion
        key={item.id}
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        className={classes.accordion}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "0!important",
          border: "none",
          boxShadow: "none",
          padding: "0",
          paddingBottom: mdUp ? "20px" : "0",
          width: mdUp ? "30%" : "100%",
          backgroundColor: "transparent",
          "&::before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "0",
          },
        }}
      >
        <AccordionSummary
          sx={{
            borderRadius: "0",
            padding: 0,
            display: "flex",
            margin: "0",
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
          // expandIcon={
          //   <ExpandMoreIcon
          //     style={{
          //       color: "rgba(255, 129, 20, 1)",
          //       width: "40px",
          //       height: "40px",
          //     }}
          //   />
          // }
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.accordionSummary}
        >
          <h3
            className={
              expanded === `panel${index}`
                ? classes.expandedTitle
                : classes.title
            }
          >
            {t(item.title)}
          </h3>
        </AccordionSummary>
        <Box className={classes.accordionDetails}>
          <p className={classes.text}>{t(item.text)}</p>
        </Box>
      </Accordion>

      <AnimatePresence mode="wait">
        <motion.div
          key={expanded}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ width: mdUp ? "80%" : "100%" }}
        >
          {expanded === `panel${index}` && (
            <Box className={classes.imgBox}>
              <Image
                src={item.image}
                width={763}
                height={462}
                alt={"work-image"}
                className={classes.workImg}
              />
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}

export default WorkItem;
