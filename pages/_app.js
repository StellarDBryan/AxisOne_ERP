import "@/styles/globals.css"; 
import { SessionProvider } from "next-auth/react"; 

import { Navbar } from "@/components/common/navbar"; 
import { Footer } from "@/components/common/footer";
import { Sidebar } from "@/components/ui/sidebar"; 
import { MobileNav } from "@/components/ui/mobileNavbar";

export default function App({ Component, pageProps: { session, ...pageProps }, }) {

  return (
    <SessionProvider session={session}>
      <Navbar />
      <Sidebar />
      <MobileNav />
      <Component {...pageProps} /> 
      <Footer />
    </SessionProvider>
  );
}
