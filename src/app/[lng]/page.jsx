import Articles from "@/Components/main/articles";
import Business from "@/Components/main/business";
import Contact from "@/Components/main/contact";
import Faq from "@/Components/main/faq";

export default function Home({ params: { lng }, ...props }) {
  return (
    <main>
      <Faq lng={lng} />
      <Contact lng={lng} />
      <Business lng={lng} />
      <Articles lng={lng} />
    </main>
  );
}
