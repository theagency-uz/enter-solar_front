"use client";
import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import workData from "@/data/workData";
import WorkItem from "./workItem";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./styles.module.css";

function WorkAccordion({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [expanded, setExpanded] = useState("panel0");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className={classes.accordionWrapper}>
      <Box className={classes.accordionContent}>
        {workData?.map((item, index) => {
          return (
            <WorkItem
              item={item}
              key={item.id}
              expanded={expanded}
              handleChange={handleChange}
              index={index}
              lng={lng}
            />
          );
        })}
      </Box>

      {mdUp && (
        <AnimatePresence mode="wait">
          <motion.div
            key={expanded}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ width: "100%" }}
          >
            <Box className={classes.imgBox}>
              <Image
                src={workData[expanded.split("panel")[1]].image}
                width={763}
                height={462}
                alt={"work-image"}
                className={classes.workImg}
              />
            </Box>
          </motion.div>
        </AnimatePresence>
      )}
    </Box>
  );
}

export default WorkAccordion;
