import ContactsPage from "@/Components/contactsPage";
import { Box } from "@mui/material";
import classes from "./page.module.css";
import { useTranslation } from "@/app/i18n";

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

async function Contacts({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  // const links = [
  //   {
  //     name: category.attributes.name,
  //     link: `/${lng}/catalog/${category.attributes.slug}`,
  //     id: category.id,
  //   },
  // ]

  return (
    <Box className={classes.contacts}>
      <ContactsPage lng={lng} />
    </Box>
  );
}

export default Contacts;
