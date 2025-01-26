import Image from "next/image";
import localFont from "next/font/local";
import HeroSection, { Solutions } from "@/components/common/landing";
import { Navbar } from "@/components/common/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans", 
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <Solutions />
      </main> 
    </div>
  );
}
