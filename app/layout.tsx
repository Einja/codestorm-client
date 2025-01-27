import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini-LeetCode",
  description: "Small LeetCode application",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-gray-900">
        <Navbar />
        <main className="container mx-auto mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
