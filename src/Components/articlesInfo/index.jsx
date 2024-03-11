"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function ArticlesInfo({ lng, article, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      {mdUp && <span className={classes.articlesDate}>{article.date}</span>}
      <Box className={classes.articleWrapper}>
        <Box className={classes.articleDesc}>
          <Box className={classes.articleBox}>
            {!mdUp && (
              <span className={classes.articlesDate}>{article.date}</span>
            )}
            <h3 className={classes.articleTitle}>{article.title}</h3>
          </Box>
          <div
            dangerouslySetInnerHTML={{
              __html: article.text,
            }}
            className={classes.articleText}
          ></div>
        </Box>

        <Box className={classes.articleImgBox}>
          <Image
            src={article.image}
            width={553}
            height={230}
            alt={"article-img"}
            priority
            className={classes.articlesImg}
          />
        </Box>
      </Box>
    </>
  );
}

export default ArticlesInfo;
