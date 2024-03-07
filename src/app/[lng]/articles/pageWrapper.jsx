"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./page.module.css";
import ArticlesPage from "@/Components/articlesPage";
import articlesData from "@/data/articlesData";
import Container from "@/Container/Container";

function PageWrapper({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const ARTICLE_PER_PAGE = 2.5;
  const [articles, setArticles] = useState(articlesData);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setPageCount(Math.ceil(articles.length / ARTICLE_PER_PAGE));
  }, [articles, ARTICLE_PER_PAGE]);

  function handlePaginationChange(e, page) {
    setPage(page);
  }

  return (
    <Box className={classes.newsPage}>
      <Container>
        <h3 className={classes.newsTitle}>{t("Новости и статьи")}</h3>

        <ArticlesPage lng={lng} articles={articles} />

        {pageCount > 0 && (
          <Pagination
            className={classes.pagination}
            count={pageCount}
            defaultPage={page}
            page={page}
            onChange={handlePaginationChange}
            onClick={goToTop}
          />
        )}
      </Container>
    </Box>
  );
}

export default PageWrapper;
