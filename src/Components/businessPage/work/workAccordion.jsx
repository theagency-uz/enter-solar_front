"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import workData from "@/data/workData";
import WorkItem from "./workItem";

function WorkAccordion({ lng, ...props }) {
  const [expanded, setExpanded] = useState('panel0');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
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
    </>
  );
}

export default WorkAccordion;
