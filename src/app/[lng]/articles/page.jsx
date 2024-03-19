import { useTranslation } from "@/app/i18n";
import React from "react";
import classes from "./page.module.css";
import ArticlesPage from "@/Components/articlesPage";
import articlesData from "@/data/articlesData";
import Container from "@/Container/Container";
import BreadCrumbs from "@/Components/common/breadCrumbs";

const LIMIT = 2.5;

async function Articles({ params: { lng }, searchParams: { page = 1 } }) {
  const { t } = await useTranslation(lng);

  const articles = articlesData;
  const pageCount = Math.ceil(articles.length / LIMIT);

  const links = [
    {
      name: t("Статьи"),
      link: `/${lng}/articles`,
      id: "articles",
    },
  ];

  return (
    <div className={classes.newsPage}>
      <Container>
        <BreadCrumbs links={links} lng={lng} />
        <h3 className={classes.newsTitle}>{t("Новости и статьи")}</h3>
        <ArticlesPage
          lng={lng}
          initialArticles={articles}
          initialPage={page}
          limit={LIMIT}
          pageCount={pageCount}
        />
      </Container>
    </div>
  );
}

export default Articles;
