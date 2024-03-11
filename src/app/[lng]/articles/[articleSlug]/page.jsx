"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

import classes from "./styles.module.css";
import articlesData from "@/data/articlesData";
import Container from "@/Container/Container";
import ArticlesInfo from "@/Components/articlesInfo";

function Aritcle({ params: { lng, articleSlug }, ...props }) {
  const { t } = useTranslation(lng);

  const [article, setArticle] = useState(
    articlesData.find((p) => String(p.id) === String(articleSlug))
  );

  return (
    <Box className={classes.articleInfo}>
      <Container>
        <ArticlesInfo lng={lng} article={article} />
      </Container>
    </Box>
  );
}

export default Aritcle;
