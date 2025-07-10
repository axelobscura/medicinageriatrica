import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
