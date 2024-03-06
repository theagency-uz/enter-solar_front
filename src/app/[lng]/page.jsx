import Banner from "@/Components/banner";
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

export default function Home({ params: { lng }, ...props }) {
  return (
    <main>
      <Banner lng={lng} />
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
