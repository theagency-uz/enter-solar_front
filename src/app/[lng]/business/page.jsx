import BusinessPage from "@/Components/businessPage";
import Banner from "@/Components/common/banner";
import { Box } from "@mui/material";
import Container from "@/Container/Container";
import { useTranslation } from "@/app/i18n";
import classes from "./page.module.css";

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

async function Business({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  // const links = [
  //   {
  //     name: category.attributes.name,
  //     link: `/${lng}/catalog/${category.attributes.slug}`,
  //     id: category.id,
  //   },
  // ];

  return (
    <>
      <Banner
        content={"/static/site/business-page-banner.png"}
        textContent={
          <>
            <h2>{t("Для бизнеса")}</h2>
            <p>
              {t(
                "Для бизнеса мы предоставляем особые условия сотрудничества при оптовой закупки солнечных панелей."
              )}
            </p>
          </>
        }
        lng={lng}
      />
      <Box className={classes.business}>
        <Container>
          <BusinessPage lng={lng} />
        </Container>
      </Box>
    </>
  );
}

export default Business;
