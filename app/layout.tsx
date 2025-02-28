import type { Metadata } from "next";
import LoadingWrapper from "../components/shared/LoadingWrapper";
import ParticlesBG from "@/components/home/ParticlesBG";
import { UserContextProvider } from "@/components/context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeStorm",
  description: "Solve programming problems and learn",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicons/logo.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ backgroundColor: "var(--background-color)" }}>
        <UserContextProvider>
          <LoadingWrapper>
            <ParticlesBG>{children}</ParticlesBG>
          </LoadingWrapper>
        </UserContextProvider>
      </body>
    </html>
  );
}
