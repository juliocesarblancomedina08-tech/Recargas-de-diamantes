import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEGIONS VENTAS",
  description: "Recargas de videojuegos y servicios digitales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
