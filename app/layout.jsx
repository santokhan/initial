import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/blocks/NavBar";
import Footer from "@/blocks/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Property Fe",
  description: "Property Fe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
