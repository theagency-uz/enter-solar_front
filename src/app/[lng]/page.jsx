import Banner from "@/Components/common/banner";
import Advantages from "@/Components/main/advantages";
import Articles from "@/Components/main/articles";
import Business from "@/Components/main/business";
import Catalog from "@/Components/main/catalog";
import Contact from "@/Components/main/contact";
import Faq from "@/Components/main/faq";
import FormContent from "@/Components/main/formContent";
import Info from "@/Components/main/info";
import Panels from "@/Components/main/panels";
import TypesInfo from "@/Components/main/typesInfo";
import { useTranslation } from "../i18n";

async function Home({ params: { lng }, ...props }) {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <Banner
        content={"/static/site/bg.png"}
        textContent={
          <>
            <h2>{t("Чистая энергия \n в вашем доме")}</h2>
            <p>
              {t(
                "Фото-электрические станции и комплектующие для частных или коммерческих участков."
              )}
            </p>
          </>
        }
        lng={lng}
      />
      <Info lng={lng} />
      <Catalog lng={lng} />
      <TypesInfo lng={lng} />
      <Panels lng={lng} />
      <Advantages lng={lng} />
      <Faq lng={lng} />
      <Contact lng={lng} />
      <Business lng={lng} />
      <Articles lng={lng} />
      <FormContent lng={lng} />
    </main>
  );
}
export default Home