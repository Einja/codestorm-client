import type { Metadata } from "next";
import LoadingWrapper from "../components/shared/LoadingWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeStorm",
  description: "Solve programming problems and learn",
};

export default function Layout({ children}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicons/logo.png"></link>
        <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ backgroundColor: "var(--background-color)" }}>
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}
