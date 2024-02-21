import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/tailwind.css"; 
import { setHeapSnapshotNearHeapLimit } from "v8";
import Navegation from "./components/Navigation";
import FooterCom from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT JS",
  description: "Primera vez usando NextJS",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navegation></Navegation>
        {children}</body>
        <FooterCom></FooterCom>
    </html>
  );
}
