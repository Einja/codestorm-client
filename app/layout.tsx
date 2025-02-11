import type { Metadata } from "next";
import LoadingWrapper from "../components/shared/LoadingWrapper";
import "./globals.css";
export const metadata: Metadata = {
  title: "CodeStorm",
  description: "Solve programming problems and learn",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ backgroundColor: "var(--background-color)" }}>
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}
