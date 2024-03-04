"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function ArticlesPage({ lng, articles, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <ul className={classes.articlesList}>
      {articles.slice(0, 6).map((article, index) => {
        return (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className={classes.articlesItemLink}
          >
            <Box className={classes.articlesBox}>
              <Box>
                <span className={classes.articlesDate}>{article.date}</span>
                <Image
                  src={article.image}
                  width={333}
                  height={250}
                  alt={"article-img"}
                  priority
                  className={classes.articlesImg}
                />
              </Box>
              <h3 className={classes.articlesTitle}>{t(article.title)}</h3>
            </Box>
            <Box className={classes.articleBtnBox}>
              <Button className={classes.articleBtn} disableRipple={true}>
                {t("Подробнее")}
              </Button>
            </Box>
          </Link>
        );
      })}
    </ul>
  );
}

export default ArticlesPage;
