import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CURSO DE ACTUALIZACIÓN EN MEDICINA GERIÁTRICA | AMGG",
  description: "Curso de actualización en Medicina Geriátrica - 23 de julio 2025. Aprende las últimas técnicas y enfoques en el cuidado del adulto mayor. Dirigido a médicos, enfermeros y profesionales de la salud. Modalidad ON DEMAND disponible. Regístrate ahora con AMGG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
