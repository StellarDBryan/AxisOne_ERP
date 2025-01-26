import { Html, Head, Main, NextScript } from "next/document";
import { Navbar } from "@/components/common/navbar";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <Navbar />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
