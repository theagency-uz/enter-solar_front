"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import ContactsPage from "@/Components/contactsPage";

function PageWrapper({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box className={classes.contacts}>
      <ContactsPage lng={lng} />
    </Box>
  );
}

export default PageWrapper;
