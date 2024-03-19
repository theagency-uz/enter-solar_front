import { useTranslation } from "@/app/i18n";
import React from "react";

import classes from "./styles.module.css";
import articlesData from "@/data/articlesData";
import Container from "@/Container/Container";
import ArticlesInfo from "@/Components/articlesInfo";
import BreadCrumbs from "@/Components/common/breadCrumbs";

// export async function generateMetadata({
//   params: { lng, articleSlug },
//   ...props
// }) {
//   const article = await getArticle({ lng, slug: articleSlug });

//   return {
//     title: article.attributes.name,
//     description: 'Успех партнеров — наша миссия',
//     openGraph: {
//       images: [strapiImageUrl + article.attributes.image.data.attributes.url],
//     },
//   };
// }

async function Aritcle({ params: { lng, articleSlug }, ...props }) {
  const { t } = await useTranslation(lng);

  const article = articlesData.find(
    (p) => String(p.id) === String(articleSlug)
  );

  const links = [
    {
      name: t("Статьи"),
      link: `/${lng}/articles`,
      id: "articles",
    },
    {
      name: article.id,
      link: `/${lng}/articles/${article.id}`,
      id: "articles",
    },
  ];

  return (
    <div className={classes.articleInfo}>
      <Container>
        <BreadCrumbs links={links} lng={lng} />

        <ArticlesInfo lng={lng} article={article} />
      </Container>
    </div>
  );
}

export default Aritcle;
