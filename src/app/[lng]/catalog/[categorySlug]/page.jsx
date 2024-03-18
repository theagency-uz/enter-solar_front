import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "@/app/i18n";
import productData from "@/data/productData";
import Container from "@/Container/Container";
import Filter from "@/Components/filter";
import CatalogProduct from "@/Components/catalogProduct";
import classes from "./page.module.css";
import BreadCrumbs from "@/Components/common/breadCrumbs";

// export async function generateMetadata({
//   params: { lng, categorySlug },
//   ...props
// }) {
//   const category = await getCategory({ lng, slug: categorySlug });

//   return {
//     metadataBase: new URL(strapiImageUrl),
//     title: category.attributes.name,
//     openGraph: {
//       images: [category.attributes.image.data.attributes.url],
//     },
//   };
// }

async function Catalog({ params: { lng }, ...props }) {
  const product = productData;
  // const category = await getCategory({ lng, slug: categorySlug });

  const { t } = await useTranslation(lng);

  const links = [
    {
      name: "ФЭМ",
      link: `category`,
      id: "catalog",
    },
  ];

  // const links = [
  //   {
  //     name: category.attributes.name,
  //     link: `/${lng}/catalog/${category.attributes.slug}`,
  //     id: category.id,
  //   },
  // ];

  return (
    <Container>
      <Box className={classes.catalog}>
        <Box className={classes.catalogCrumbs}>
          <BreadCrumbs links={links} lng={lng} />
        </Box>
        <h3 className={classes.catalogTitle}>
          {t("Фото-электрические модули")}
        </h3>

        <Box className={classes.catalogFilter}>
          <Filter lng={lng} />
          <CatalogProduct lng={lng} product={product} />
        </Box>
      </Box>
    </Container>
  );
}

export default Catalog;
