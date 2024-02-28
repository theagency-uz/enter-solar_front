"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import articlesData from "@/data/articles";
import ArticlesItem from "./articlesItem";

function Articles({ lng, ...props }) {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.articles}>
      <Box className={classes.articlesWrapper}>
        <Title title={t("Новости и статьи")} />

        {smUp && (
          <Link href={"/"} className={classes.articlesLink}>
            <span>{t("смотреть все")}</span>
            <Image
              src={"/icons/arrow-up.svg"}
              width={6}
              height={6}
              alt={"icon"}
              priority
              className={classes.articlesIcon}
            />
          </Link>
        )}
      </Box>

      {smUp ? (
        <ul className={classes.articlesList}>
          {articlesData.slice(0, 3).map((article, index) => {
            return (
              <ArticlesItem lng={lng} article={article} key={article.id} />
            );
          })}
        </ul>
      ) : (
        <ul className={classes.articlesList}>
          {articlesData.slice(0, 2).map((article, index) => {
            return (
              <ArticlesItem lng={lng} article={article} key={article.id} />
            );
          })}
        </ul>
      )}

      {!smUp && (
        <Link href={"/"} className={classes.articlesLink}>
          <span>{t("смотреть все")}</span>
          <Image
            src={"/icons/arrow-up.svg"}
            width={6}
            height={6}
            alt={"icon"}
            priority
            className={classes.articlesIcon}
          />
        </Link>
      )}
    </Box>
  );
}

export default Articles;
