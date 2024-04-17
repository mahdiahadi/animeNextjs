import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" max-w-7xl mx-auto bg-[#0f1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
