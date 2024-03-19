"use client";
import { useTranslation } from "@/app/i18n/client";
import { useMediaQuery, Pagination } from "@mui/material";
import React, { useState } from "react";
import classes from "./styles.module.css";
import ArticleCard from "./articleCard";

function ArticlesPage({
  lng,
  initialArticles,
  initialPage,
  limit,
  pageCount,
  ...props
}) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(initialPage);

  function handlePaginationChange(e, page) {
    setPage(page);
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ul className={classes.articlesList}>
        {articles.slice(0, 6).map((article, index) => {
          return (
            <li key={article.id}>
              <ArticleCard article={article} lng={lng} />
            </li>
          );
        })}
      </ul>
      {pageCount > 0 && (
        <Pagination
          className={classes.pagination}
          count={pageCount}
          defaultPage={page}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          onChange={handlePaginationChange}
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default ArticlesPage;
