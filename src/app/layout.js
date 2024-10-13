import "./globals.css";
import Script from 'next/script';
import Head from "next/head";
import { Roboto_Mono } from "@next/font/google"
import GrainBackground from "@/components/graphics/grain-background";
import Preloader from "@/components/preloader";

const robotomono = Roboto_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Kyle Tandoc | Portfolio",
  description: "Web Developer portfolio built using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={robotomono.className}>
        <Preloader/>
        {children}
      </body>
    </html>
  );
}
