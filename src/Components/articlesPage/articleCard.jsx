import Link from "next/link";
import React from "react";
import { Box, Button } from "@mui/material";
import classes from "./styles.module.css";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";

function ArticleCard({ lng, article, ...props }) {
  const { t } = useTranslation(lng);
  return (
    <Link
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
}

export default ArticleCard;
