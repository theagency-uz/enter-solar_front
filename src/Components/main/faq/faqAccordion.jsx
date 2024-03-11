'use client';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import FaqItem from './faqItem';
import faqData from '@/data/faqData';

function FaqAccordion({ lng, ...props }) {

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {faqData?.map((item, index) => {
        return (
          <FaqItem
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
  );
}

export default FaqAccordion;
