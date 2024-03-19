import { useTranslation } from "@/app/i18n";
import React from "react";

import ProductImages from "@/Components/productImages";
import ProductInfo from "@/Components/productInfo";
import ProductTabs from "@/Components/productTabs";
import classes from "./styles.module.css";
import productData from "@/data/productData";
import Container from "@/Container/Container";
import BreadCrumbs from "@/Components/common/breadCrumbs";

// export async function generateMetadata({
//   params: { lng, productSlug },
//   ...props
// }) {
//   const product = await getArticle({ lng, slug: productSlug });

//   return {
//     title: product.attributes.name,
//     description: 'Успех партнеров — наша миссия',
//     openGraph: {
//       images: [strapiImageUrl + product.attributes.image.data.attributes.url],
//     },
//   };
// }

async function Product({
  params: { lng, categorySlug, productSlug },
  ...props
}) {
  const { t } = await useTranslation(lng);
  const product = productData.find((p) => String(p.id) === String(productSlug));

  const links = [
    {
      name: "ФЭМ",
      link: `/category`,
      id: "catalog",
    },
    {
      name: product.id,
      link: `/${lng}/catalog/${product.title}`,
      id: "catalog",
    },
  ];

  return (
    <div className={classes.productInfo}>
      <Container>
        <BreadCrumbs links={links} lng={lng} />
        <div className={classes.productInfoWrapper}>
          <ProductImages productImage={product} />
          <ProductInfo lng={lng} product={product} />
        </div>
        <ProductTabs lng={lng} product={product} />
      </Container>
    </div>
  );
}

export default Product;
