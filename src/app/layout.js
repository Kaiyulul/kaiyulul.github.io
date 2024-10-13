import "./globals.css";
import Script from 'next/script';
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
      <body className={robotomono.className}>
        <Preloader/>
        {children}
      </body>
    </html>
  );
}
