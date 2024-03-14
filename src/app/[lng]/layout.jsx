import { dir } from "i18next";
import "../globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import Providers from "./providers";
import { languages } from "../i18n/settings";
import ThemeRegistry from "../themeRegistry";
import SidebarMenu from "@/layout/sidebarMenu";
import Head from "next/head";

export async function generateMetadata({ params: { lng } }) {
  if (lng === 'ru') {
    return {
      title: {
        default: 'Официальный сайт | Enter Solar',
        template: '%s | Enter Solar',
      },
      description: 'Канадские системы для комфорта и безопасности',
      keywords: ['Ташкент', 'Узбекистан'],
    };
  } else if (lng === 'en') {
    return {
      title: {
        default: 'Официальный сайт | Enter Solar',
        template: '%s | Enter Solar',
      },
      description: 'Канадские системы для комфорта и безопасности',
      keywords: ['Tashkent', 'Uzbekistan'],
    };
  }
  return {
    title: {
      default: 'Официальный сайт | Enter Solar',
      template: '%s | Enter Solar',
    },
    description: 'Канадские системы для комфорта и безопасности',
    keywords: ['Toshkent', 'Uzbekistan'],
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <link rel="shortcut icon" href="/public/icons/favicon.ico" />
      </Head>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Providers>
            <Navbar lng={lng} />
            {children}
            <Footer lng={lng} />
            {<SidebarMenu lng={lng} />}
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
