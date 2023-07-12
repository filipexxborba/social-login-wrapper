import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Socials login tests form from Bora rachar",
   description: "Created by front-end team.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-br">
         <body className={inter.className}>{children}</body>
      </html>
   );
}
