"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";

function ArticlesItem({ lng, article, ...props }) {
  const { t, i18n } = useTranslation(lng);
  return (
    <Link href={`/articles/${article.id}`} className={classes.articlesItemLink}>
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

export default ArticlesItem;
