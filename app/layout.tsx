import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeCipher",
  description: "Solve programming problems and learn",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style = {{backgroundColor: "var(--background-color)"}}>
        <Navbar />
        <main className="container mx-auto mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
