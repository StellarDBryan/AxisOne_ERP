import "@/styles/globals.css"; 
import { SessionProvider } from "next-auth/react"; 
import { Navbar } from "@/components/common/navbar"; 
import { Footer } from "@/components/common/footer";

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}> \
      <Navbar />
      <Component {...pageProps} /> 
      <Footer />
    </SessionProvider>
  );
}
