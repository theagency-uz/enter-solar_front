"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  useMediaQuery,
  Tab,
  Typography,
  useTheme,
} from "@mui/material";
import classes from "./styles.module.css";
import Image from "next/image";

function ProductTabsPanel({ lng, product, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.tabMain}>
      <TabContext value={value}>
        <Box className={classes.tabContext}>
          <TabList
            onChange={handleChange}
            aria-label="product"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#333",
              },
            }}
            variant="scrollable"
            className={classes.tabList}
          >
            <Tab
              label={t("Описание")}
              value="1"
              className={classes.tabLabel}
              disableRipple={true}
            />

            <Tab
              label={t("Технические характеристики")}
              value="2"
              className={classes.tabLabel}
              disableRipple={true}
            />
            <Tab
              label={t("Материалы для скачивания")}
              value="3"
              className={classes.tabLabel}
              disableRipple={true}
            />
          </TabList>
        </Box>

        <Box>
          <TabPanel value="1" className={classes.tabPanel}>
            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
              className={classes.editor}
            >
              {/* {t(
                "Мы сформировали команду целеустремлённых людей, отладил систему поставок, создал высокую культуру партнёрских отношений. Мы сконцентрированы на том, чтобы идти у к успеху совместно с нашими партнёрами."
              )} */}
            </div>
          </TabPanel>

          <TabPanel value="2" className={classes.tabPanel}>
            <div
              // dangerouslySetInnerHTML={{
              //   __html: product.description[i18n.language],
              // }}
              className={classes.editorBox}
            ></div>
          </TabPanel>
          <TabPanel value="3" className={classes.tabPanel}>
            <div
              // dangerouslySetInnerHTML={{
              //   __html: product.description[i18n.language],
              // }}
              className={classes.editorBox}
            ></div>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}

export default ProductTabsPanel;
